import React, { useState } from "react";
import { Widget, addResponseMessage, addUserMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (newMessage) => {
    // Handle user's message here
    // addUserMessage(newMe/ssage);
    const response = getBotResponse(newMessage); // Replace with your bot logic
    addResponseMessage(response);
  };

  const getBotResponse = (userMessage) => {
    // Replace this with your actual bot logic
    const responses = {
      hello: "Hi there! How can I assist you?",
      "how are you": "I am just a bot, but I am here to help!",
      default: "Im sorry, I dont understand that."
    };

    const lowercaseMessage = userMessage.toLowerCase();
    return responses[lowercaseMessage] || responses["default"];
  };

  return (
    <div className="chatbot-container">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chatbot"
        subtitle="Ask me anything!"
      />
    </div>
  );
}

export default Chatbot;
