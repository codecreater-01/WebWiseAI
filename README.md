# WebWise AI 🧠🌐

**WebWise AI** is an AI-powered Chrome extension that helps users understand webpages by generating concise summaries and answering questions about their content.

Built with a Chrome Extension frontend, Python FastAPI backend, LangChain, and a locally running Ollama language model, WebWise AI provides a simple way to interact with webpage content using AI.

## ✨ Features

- **Webpage Summarization:** Generate concise summaries of the current webpage.
- **AI-Powered Q&A:** Ask questions about the webpage and receive context-based answers.
- **Local AI Inference:** Uses Ollama to run a language model locally.
- **Chrome Extension:** Access the assistant directly from the browser.
- **FastAPI Backend:** Processes requests and connects the extension to the AI model.
- **LangChain Integration:** Uses prompt templates, chains, and output parsers to generate responses.

## 🛠️ Tech Stack

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| HTML           | Extension interface structure           |
| CSS            | Extension styling                       |
| JavaScript     | Browser interaction and API requests    |
| Python         | Backend development                     |
| FastAPI        | REST API                                |
| Pydantic       | Request validation                      |
| LangChain      | Prompt management and model integration |
| Ollama         | Local language model runtime            |
| Llama 3.2 (3B) | Language model                          |

## 🏗️ Project Architecture

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

### How It Works

1. The user opens a webpage in Chrome and launches WebWise AI.
2. The extension extracts readable text from the active webpage.
3. The user clicks **Summarize Page** or enters a question.
4. The extension sends the webpage content and question to the FastAPI backend.
5. FastAPI passes the request to the LangChain pipeline.
6. LangChain uses the locally running Ollama model to generate a response.
7. The response is returned to the Chrome extension and displayed to the user.

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Python 3
- Google Chrome
- Git
- Ollama

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/WebWiseAI.git
cd WebWiseAI
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Install Ollama and Download the Model

Install Ollama from [ollama.com](https://ollama.com/).

Download the model:

```bash
ollama pull llama3.2:3b
```

Make sure Ollama is running before using the extension.

### 3. Set Up the Python Environment

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate it on macOS or Linux:

```bash
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r backend/requirements.txt
```

### 4. Start the FastAPI Backend

From the project root, run:

```bash
uvicorn backend.app:app --reload --port 8001
```

The backend will be available at:

- API: `http://127.0.0.1:8001/`
- Interactive API documentation: `http://127.0.0.1:8001/docs`

Keep the backend running while using the extension.

### 5. Load the Chrome Extension

1. Open `chrome://extensions` in Google Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the project's `extension` folder.
5. Open a normal webpage and click the WebWise AI extension icon.

### 6. Use WebWise AI

**To summarize a webpage:**

- Open a webpage with readable text.
- Open the WebWise AI popup.
- Click **Summarize Page**.
- Read the generated summary.

**To ask a question:**

- Open the WebWise AI popup.
- Enter a question about the current webpage.
- Click **Ask AI**.
- View the response in the popup.

## 🔒 Privacy and Security

- The application uses a locally running Ollama model for AI inference.
- Webpage text is sent to the configured FastAPI backend for processing.
- In the default local setup, the backend runs on the user's own computer.
- Avoid sending sensitive webpage content to untrusted services.
- Review extension permissions and restrict backend access appropriately before public distribution.

## ⚠️ Limitations

- Ollama and the required model must be installed locally.
- The FastAPI backend must be running on port `8001`.
- The extension may not be able to read restricted Chrome pages, browser settings pages, or some special document viewers.
- The amount of webpage text processed is limited by the extension's current implementation.
- Response quality and speed depend on the model, available memory, and webpage content.
- The project is currently designed for local use and is not a publicly hosted AI service.

## 🚀 Future Improvements

- Conversation history and follow-up questions
- Multiple summary formats and lengths
- Improved handling of long webpages
- Better error handling and loading indicators
- More accessible and responsive popup UI
- Configurable language models
- Automated tests and improved request validation
- Chrome Web Store publication

## 👨‍💻 Author

**Your Name**

GitHub: [YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 📄 License

This project is currently shared for learning and portfolio purposes. Add a license file if you want to explicitly define the permissions and conditions for reuse.
