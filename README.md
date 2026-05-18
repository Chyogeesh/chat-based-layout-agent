# chat-based-layout-agent
AI-powered chat based layout transformation agent with JSON reasoning, wireframe preview, and responsive canvas transformations.
# Chat Based Layout Agent

AI-powered layout transformation system.

## Features

- Chat based editing
- Layout JSON transformations
- Aspect ratio conversion
- Headline movement
- Offer badge updates
- Wireframe preview

## Setup

### Client

cd client
npm install
npm run dev

### Server

cd server
npm install
npm run dev

## Example Prompts

# Approach

## Architecture

Frontend built using React.
Backend built using Express.

## Layout Reasoning

Used normalized coordinates nx ny nw nh for transformations.

## Transformations

Implemented:
- Resize artboard
- Move headline
- Resize headline
- Move offer badge

## Context Handling

Chat history is stored in React state.
## Improvements

Could add:
- OpenAI integration
- Better semantic role detection
- Drag and drop editing
- Real canvas rendering

- Convert this design to 9:16
- Move headline to top
- Make headline smaller
- Move offer badge higher
