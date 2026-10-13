# WebWise AI 🧠🌐

**An AI-powered Chrome extension that summarizes webpages and answers questions using FastAPI, LangChain, and Ollama.**

WebWise AI helps users understand web content by generating concise summaries and answering questions about the webpage they are viewing. It combines a Chrome extension frontend with a Python backend and a locally running language model.

## ✨ Features

- **Webpage Summarization:** Generate a concise summary of the current webpage.
- **AI-Powered Q&A:** Ask questions about webpage content and receive AI-generated answers.
- **Local AI Inference:** Run the language model locally using Ollama.
- **Chrome Extension Interface:** Access AI assistance directly from Chrome.
- **FastAPI Backend:** Handle requests between the extension and the AI model.
- **LangChain Integration:** Use prompt templates, LCEL chains, and output parsers.
- **Lightweight Setup:** Run the backend locally without requiring a separately hosted AI service.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML | Extension interface |
| CSS | Popup styling |
| JavaScript | Browser interaction and API communication |
| Python | Backend development |
| FastAPI | REST API |
| Pydantic | Request validation |
| LangChain Core | Prompt templates, chains, and output parsing |
| LangChain Ollama | Integration with Ollama models |
| Ollama | Local language model runtime |
| Llama 3.2 (3B) | AI language model |

## 🏗️ Project Structure

```text
WebWiseAI/
├── backend/
│   ├── app.py
│   ├── ai_model.py
│   └── requirements.txt
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── .gitignore
└── README.md
```

## 🔄 How It Works

1. The user opens a webpage in Google Chrome.
2. The WebWise AI extension extracts readable text from the active tab.
3. The user clicks **Summarize Page** or enters a custom question.
4. The extension sends the webpage text and question to the FastAPI backend.
5. FastAPI forwards the request to the LangChain pipeline.
6. LangChain sends the prompt to the local Ollama model.
7. The generated answer is returned and displayed in the extension popup.

## ⚙️ Installation and Setup

### Prerequisites

Install the following:

- Python 3
- Google Chrome
- Git
- Ollama

### 1. Clone the Repository

```bash
git clone https://github.com/codecreater-01/WebWiseAI.git
cd WebWiseAI
```

### 2. Install and Configure Ollama

Download Ollama from [ollama.com](https://ollama.com/).

Download the required model:

```bash
ollama pull llama3.2:3b
```

Make sure Ollama is running before using WebWise AI.

### 3. Create a Python Virtual Environment

From the project root, run:

```bash
python3 -m venv venv
```

Activate the environment on macOS or Linux:

```bash
source venv/bin/activate
```

Install the backend dependencies:

```bash
pip install -r backend/requirements.txt
```

### 4. Start the FastAPI Backend

Run the following command from the `WebWiseAI` root directory:

```bash
uvicorn backend.app:app --reload --port 8001
```

The backend will run at:

- **API root:** http://127.0.0.1:8001/
- **Interactive API documentation:** http://127.0.0.1:8001/docs

Keep the backend terminal running while using the extension.

### 5. Load the Chrome Extension

1. Open `chrome://extensions` in Google Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `extension` folder inside the cloned repository.
5. Open a normal webpage and click the WebWise AI extension icon.

### 6. Use the Extension

**Summarize a webpage**

1. Open a webpage containing readable text.
2. Open WebWise AI.
3. Click **Summarize Page**.
4. Read the generated summary.

**Ask a question**

1. Open WebWise AI on the desired webpage.
2. Enter a question related to its content.
3. Click **Ask AI**.
4. Read the generated response.

## 🔒 Privacy and Security

- AI inference uses the configured local Ollama model.
- Webpage text is sent to the configured FastAPI backend for processing.
- In the default setup, the backend and model run on the user's own computer.
- Avoid processing sensitive information on untrusted webpages or through untrusted services.
- Review API access, CORS configuration, and extension permissions before distributing the application.

## ⚠️ Limitations

- Ollama and the `llama3.2:3b` model must be installed locally.
- The FastAPI backend must be running on port `8001`.
- Some browser-internal pages and restricted documents cannot be accessed by the extension.
- The current implementation limits extracted webpage text to 15,000 characters.
- Response quality and generation speed depend on the model and the available system resources.
- The project is designed for local use and is not currently a publicly hosted AI service.

## 🚀 Future Improvements

- Conversation history and follow-up questions
- Multiple summary styles and lengths
- Improved handling of long webpages
- Better loading indicators and error handling
- More accessible and responsive UI
- Support for additional language models
- Automated backend tests
- Chrome Web Store publication

## 👨‍💻 Author

**GitHub:** [@codecreater-01](https://github.com/codecreater-01)

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you intend to define permissions for using, modifying, and distributing this project.
