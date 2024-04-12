# Actify AI

Actify AI is a text-based search application. It utilizes the Google Generative AI API to generate responses based on the provided input.

## Features

- Accepts user input and sends it to the AI model for a response.
- Displays the conversation history between the user and the AI model.
- Provides a loading indicator while the AI model is processing the user's input.
- Includes a reset button to clear the conversation history.

## Technologies Used

- Next.js
- Google Generative AI API
- React Icons

## Getting Started

1. Clone the repository:

```
https://github.com/shaunniekins/actify-ai.git
```

2. Install the dependencies:

```
cd chatgpt-like-dashboard
npm install
```

3. Create a `.env.local` file in the root directory and add your Google Generative AI API key:

```
NEXT_PUBLIC_GOOGLE_API_KEY=your-api-key-here
```

4. Start the development server:

```
npm run dev
```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

1. Enter a prompt in the input field at the bottom of the dashboard.
2. Press the "Enter" key to send the prompt to the AI model.
3. The AI's response will be displayed in the conversation history.
4. Click the reset button to clear the conversation history.
