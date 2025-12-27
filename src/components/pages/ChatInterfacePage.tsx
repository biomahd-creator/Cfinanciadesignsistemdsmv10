import { ComponentShowcase } from "../ui/component-showcase";
import { ChatInterface, ChatMessage } from "../advanced/ChatInterface";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    userId: "user2",
    userName: "John Doe",
    message: "Hey! How are you doing?",
    timestamp: new Date(Date.now() - 300000),
    isSent: false,
    isRead: true,
  },
  {
    id: "2",
    userId: "user1",
    userName: "Me",
    message: "I'm great! Just working on the new project.",
    timestamp: new Date(Date.now() - 240000),
    isSent: true,
    isRead: true,
  },
  {
    id: "3",
    userId: "user2",
    userName: "John Doe",
    message: "That sounds exciting! Need any help?",
    timestamp: new Date(Date.now() - 180000),
    isSent: false,
    isRead: true,
  },
  {
    id: "4",
    userId: "user1",
    userName: "Me",
    message: "Actually yes! Could you review the design mockups when you get a chance?",
    timestamp: new Date(Date.now() - 120000),
    isSent: true,
    isRead: true,
  },
];

export function ChatInterfacePage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      userId: "user1",
      userName: "Me",
      message,
      timestamp: new Date(),
      isSent: true,
      isRead: false,
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate other user typing and responding
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: ChatMessage = {
        id: (Date.now() + 1).toString(),
        userId: "user2",
        userName: "John Doe",
        message: "Thanks for the message! I'll check it out.",
        timestamp: new Date(),
        isSent: false,
        isRead: false,
      };
      setMessages((prev) => [...prev, response]);
    }, 2000);
  };

  return (
    <ComponentShowcase
      title="Chat Interface"
      description="Real-time messaging UI with typing indicators and read receipts"
      category="Communication"
      preview={
        <div className="w-full max-w-2xl">
          <ChatInterface
            messages={messages}
            currentUserId="user1"
            onSendMessage={handleSendMessage}
            isTyping={isTyping}
          />
        </div>
      }
      code={`import { ChatInterface, ChatMessage } from "../advanced/ChatInterface";
import { useState } from "react";

const messages: ChatMessage[] = [
  {
    id: "1",
    userId: "user2",
    userName: "John Doe",
    message: "Hey! How are you?",
    timestamp: new Date(),
    isSent: false,
  },
];

function Example() {
  const [msgs, setMsgs] = useState(messages);

  const handleSend = (message: string) => {
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      userId: "user1",
      userName: "Me",
      message,
      timestamp: new Date(),
      isSent: true,
    };
    setMsgs([...msgs, newMsg]);
  };

  return (
    <ChatInterface
      messages={msgs}
      currentUserId="user1"
      onSendMessage={handleSend}
    />
  );
}`}
      usage="Chat Interface provides a complete messaging experience with message bubbles, avatars, timestamps, typing indicators, and read receipts. Supports both sent and received messages with automatic scrolling to the latest message."
      usageCode={`import { ChatInterface, ChatMessage } from "../advanced/ChatInterface";
import { useState, useEffect } from "react";

function ChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Load messages from API
  useEffect(() => {
    fetchMessages().then(setMessages);
  }, []);

  const handleSendMessage = async (message: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      userId: currentUser.id,
      userName: currentUser.name,
      message,
      timestamp: new Date(),
      isSent: true,
    };
    
    setMessages(prev => [...prev, newMessage]);
    await sendMessageToServer(newMessage);
  };

  return (
    <ChatInterface
      messages={messages}
      currentUserId={currentUser.id}
      onSendMessage={handleSendMessage}
      isTyping={isTyping}
    />
  );
}`}
      props={[
        {
          name: "messages",
          type: "ChatMessage[]",
          default: "[]",
          description: "Array of chat messages to display",
          required: true,
        },
        {
          name: "currentUserId",
          type: "string",
          default: '""',
          description: "ID of the current user (to align messages)",
          required: true,
        },
        {
          name: "onSendMessage",
          type: "(message: string) => void",
          default: "undefined",
          description: "Callback when user sends a message",
          required: false,
        },
        {
          name: "isTyping",
          type: "boolean",
          default: "false",
          description: "Show typing indicator for other user",
          required: false,
        },
        {
          name: "className",
          type: "string",
          default: "undefined",
          description: "Additional CSS classes",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Basic Chat",
          description: "Simple one-on-one conversation",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <ChatInterface
                  messages={messages.slice(0, 2)}
                  currentUserId="user1"
                  onSendMessage={handleSendMessage}
                />
              </CardContent>
            </Card>
          ),
          code: `<ChatInterface
  messages={messages}
  currentUserId="user1"
  onSendMessage={handleSend}
/>`,
        },
        {
          title: "With Typing Indicator",
          description: "Shows when other user is typing",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <ChatInterface
                  messages={messages}
                  currentUserId="user1"
                  onSendMessage={handleSendMessage}
                  isTyping={true}
                />
              </CardContent>
            </Card>
          ),
          code: `<ChatInterface
  messages={messages}
  currentUserId="user1"
  isTyping={otherUserIsTyping}
/>`,
        },
        {
          title: "Customer Support",
          description: "Chat interface for support tickets",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <ChatInterface
                  messages={[
                    {
                      id: "1",
                      userId: "support",
                      userName: "Support Team",
                      message: "Hi! How can I help you today?",
                      timestamp: new Date(Date.now() - 120000),
                      isSent: false,
                    },
                    {
                      id: "2",
                      userId: "customer",
                      userName: "Customer",
                      message: "I have a question about my invoice.",
                      timestamp: new Date(Date.now() - 60000),
                      isSent: true,
                    },
                  ]}
                  currentUserId="customer"
                  onSendMessage={handleSendMessage}
                />
              </CardContent>
            </Card>
          ),
          code: `<ChatInterface
  messages={supportMessages}
  currentUserId="customer"
  onSendMessage={handleSupportMessage}
/>`,
        },
      ]}
    />
  );
}
