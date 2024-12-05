from pydantic import BaseModel

class History(BaseModel):
    role: str
    content: str

class Message(BaseModel):
    history: list[History]
    detailed: bool