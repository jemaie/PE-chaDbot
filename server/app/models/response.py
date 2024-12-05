from pydantic import BaseModel


class Response(BaseModel):
    message: str
    actions: str
    agent: str