import os

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from models.message import Message
from models.response import Response

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/message")
async def post_message(message: Message):
    print(message)
    return Response(message="test", actions="test")
