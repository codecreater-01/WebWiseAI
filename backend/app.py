from fastapi import FastAPI
from pydantic import BaseModel,Field
from backend.ai_model import ask_ai
from fastapi.middleware.cors import CORSMiddleware
#creating FastAPI application
#Fast API is used to create python web Application
app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
#Defining request structure
class UserRequest(BaseModel):
  content:str=Field(description="This is the content of the webpage")
  question:str=Field(description="Question asked by the user related to the content of the webpage")

#Home endpoint
@app.get("/")
def home():
  return {"message":"WebWise AI Backend Running"}

#AI endpoint
@app.post("/ask")
def ask_question(request:UserRequest):
  response=ask_ai(
    request.content,
    request.question
  )
  return {"answer":response}
