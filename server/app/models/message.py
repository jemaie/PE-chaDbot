from pydantic import BaseModel
from typing import Optional

class History(BaseModel):
    role: str
    content: str

class Message(BaseModel):
    history: Optional[list[History]] = []
    content: str
    detailed: bool