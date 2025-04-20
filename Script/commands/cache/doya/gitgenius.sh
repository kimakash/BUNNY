#!/bin/bash

# ----------------------------
# GitGenius: Your GitHub AI Assistant
# ----------------------------

# SET YOUR OPENAI API KEY HERE
API_KEY="your_openai_api_key"

# CHECK: If no question is provided
if [ "$#" -eq 0 ]; then
  echo "Usage: ./gitgenius.sh \"Your GitHub-related question\""
  exit 1
fi

# USER QUESTION
QUESTION="$*"

# GENERATE PROMPT
PROMPT="You are a professional GitHub assistant. Answer the following GitHub-related question in a clear and helpful way:\n\n$QUESTION"

# API CALL TO OpenAI
RESPONSE=$(curl -s https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "'"$PROMPT"'"}],
    "temperature": 0.7
  }')

# PARSE RESPONSE
ANSWER=$(echo "$RESPONSE" | jq -r '.choices[0].message.content')

# OUTPUT
echo -e "\nAnswer:\n$ANSWER"
