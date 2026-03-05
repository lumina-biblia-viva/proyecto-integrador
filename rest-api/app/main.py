from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Chat Demo API", version="0.1.0")


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@app.post("/chat", response_model=ChatResponse)
def chat_endpoint(payload: ChatRequest):
    return {"reply": "LUMINA Answer"}

