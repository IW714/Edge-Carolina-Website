RUN git config --global user.email "westonvogle@gmail.com" && \
    git config --global user.name "Weston Voglesonger"

 # Install bash-completion
RUN apt-get update && apt-get install -y bash-completion

# Pull the official Python image
FROM python:3.11-slim-buster

# Set working directory
WORKDIR /app

# Install dependencies
RUN pip install --upgrade pip && \
    pip install -r /workspaces/The-Innovation-Club/backend/requirements.txt

# Copy project
COPY ./backend/ .

# Run app
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "1380"] 

# Expose port
EXPOSE 1380