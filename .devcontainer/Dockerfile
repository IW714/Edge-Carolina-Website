
# Git config
RUN git config --global user.email "westonvogle@gmail.com" && \
    git config --global user.name "Weston Voglesonger"

# Install bash
RUN apt-get update && apt-get install -y bash-completion

# Back-end Build Steps
FROM python:3.11-slim-buster
WORKDIR /app
RUN pip install --upgrade pip && \
    pip install -r /workspaces/The-Innovation-Club/backend/requirements.txt
COPY ./backend/ .
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "1380"] 

EXPOSE 1380