
const questionInput = document.getElementById("question");
const summarizeButton = document.getElementById("summarize");
const askButton = document.getElementById("ask");
const statusElement = document.getElementById("status");
const answerElement = document.getElementById("answer");

async function askAI(question) {
  if (!question.trim()) {
    statusElement.textContent = "Please enter a question.";
    return;
  }

  summarizeButton.disabled = true;
  askButton.disabled = true;
  statusElement.textContent = "Reading webpage...";
  answerElement.textContent = "";

  try {
    // 1. Find the currently active Chrome tab
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!tab || !tab.id) {
      throw new Error("Could not find the active tab.");
    }

    // 2. Extract visible text from the webpage
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body?.innerText || ""
    });

    const content = (results[0]?.result || "").slice(0, 15000);

    if (!content.trim()) {
      throw new Error("No readable webpage text found.");
    }

    // 3. Send webpage content and question to FastAPI
    statusElement.textContent = "Asking local AI...";

    const response = await fetch("http://127.0.0.1:8001/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: content,
        question: question
      })
    });

    if (!response.ok) {
      throw new Error(`Backend error: HTTP ${response.status}`);
    }

    // 4. Display the AI response
    const data = await response.json();

    answerElement.textContent = data.answer || "No answer received.";
    statusElement.textContent = "Done!";
  } catch (error) {
    statusElement.textContent = "Something went wrong.";
    answerElement.textContent =
      error.message +
      "\n\nCheck that FastAPI is running on port 8001.";
  } finally {
    summarizeButton.disabled = false;
    askButton.disabled = false;
  }
}

// Summarize the current webpage
summarizeButton.addEventListener("click", () => {
  const question = "Summarize this webpage in 5 concise bullet points.";
  questionInput.value = question;
  askAI(question);
});

// Ask a custom question
askButton.addEventListener("click", () => {
  askAI(questionInput.value);
});
