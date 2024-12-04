# PE-chaDbot

#### Frontend
### Prerequisites
- Python v3.12
- Ensure Docker and docker-compose are installed.
- Ensure Node.js (including npm) v20.15.1 (LTS) is installed.

### Initialization
To start the server and client, run `docker compose up` in a terminal.
Make sure the path points to the project root containing the `docker-compose.yml`.
Any info about initialization from the `README.md` within the client folder can be ignored.

If a docker file has been modified, run `docker compose build` before initializing.
In some cases where changes are not cloned to the docker image, the flag `--no-cache` might be necessary.

To stop the server and client, press `ctrl` + `c` in the same terminal.

### Access
- Main Application: http://localhost:8080/


## Notepad for Tinkering
Open https://colab.research.google.com/github/jemaie/PE-chaDbot/blob/main/PE_Assistant_ChaDbot_Interactive.ipynb to experience the chaDbot notebook on your own.

#### Backend
### General Info
In total 5 agents have been defined and 2 orchistrator.

- agent_orchistrator_detailed, agent_orchistrator_simplfied: Forwards the task to the suitable agent
- agent_prof_expert_detailed, agent_prof_expert_simplified: Handles request which requires a professor-level expertise
- agent_phd_expert_detailed, agent_phd_expert_simplified: Provides more practical advice and support
- agent_web_designer: Receives an essay, highlights 3 areas for improvement and returns the results. 

### Prerequisites
- Ensure FastAPI is installed (pip install fastapi)
- Ensure OpenAI's Python library Swarm is installed (pip install git+ssh://git@github.com/openai/swarm.git) 

### Start the backend
1. In the file backend_chaDbot.py set the OPENAI_API_KEY (approx. line 94)
2. Open the terminal and change to the folder where the file is located: backend_chaDbot.py 
3. Hit the command: fastapi dev backend_chaDbot.py

Access via http://127.0.0.1:8000
Hint: /docs gives you some very handy tools to test the enpoints.

### Defined endpoints
1. / --> Will list all the defined endpoints
2. /orchistrator --> [POST user_message, toggle_option='detailted' or 'simplified'] Send a user message to the orchistator
3. /clear_chat_history --> [DELETE] Clear the chat history
4. /get_chat_history --> [GET] Return the chat history
5. /highlight_essay --> [POST essay_text] Return essay with 3 highlighted areas
