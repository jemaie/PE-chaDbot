from pydantic import BaseModel


class Response(BaseModel):
    message: str
    actions: list[str]
    agent: str