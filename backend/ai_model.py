from langchain_ollama import ChatOllama
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

#creating a model
model=ChatOllama(model="llama3.2:3b")

#creating a prompt
prompt = PromptTemplate(
    template="""
    You are WebWise AI, a helpful AI assistant.

    Answer the user's question using the webpage
    content provided below.

    Webpage Content:
    {content}

    User Question:
    {question}

    If the answer is not available in the webpage,
    say "Information not available on this webpage."

    Answer:
    """,
    input_variables=["content", "question"]
)

#creating a parser
parser=StrOutputParser()

#creating a chain
chain=prompt | model | parser

def ask_ai(content, question):
    response = chain.invoke({
        "content": content,
        "question": question
    })

    return response