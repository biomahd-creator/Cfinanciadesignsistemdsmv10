import { ComponentShowcase } from "../ui/component-showcase";
import { AIChatInterface } from "../advanced/AIChatInterface";
import { Card } from "../ui/card";

export function AIChatInterfacePage() {
  return (
    <ComponentShowcase
      title="AI Chat Interface"
      description="Advanced AI chat interface with typing indicators, message streaming, code highlighting, and file attachments. Perfect for ChatGPT-style applications."
      category="Hero UI Pro"
      preview={
        <Card className="p-6 w-full max-w-4xl">
          <AIChatInterface 
            initialMessages={[
              { id: "1", role: "user", content: "How do I create a React component?", timestamp: new Date() },
              { id: "2", role: "assistant", content: "Here's how to create a React component:\n\n```jsx\nfunction MyComponent() {\n  return <div>Hello World</div>;\n}\n```\n\nYou can also use arrow functions or class components.", timestamp: new Date() },
            ]}
          />
        </Card>
      }
      code={`import { AIChatInterface } from "../advanced/AIChatInterface";

<AIChatInterface 
  initialMessages={messages}
  onSendMessage={handleSend}
/>`}
      usage="AI Chat Interface provides a complete chat experience with markdown rendering, code syntax highlighting, streaming responses, and file upload capabilities."
      usageCode={`import { AIChatInterface } from "../advanced/AIChatInterface";
import { useState } from "react";

export function AIAssistant() {
  const [messages, setMessages] = useState([]);
  
  const handleSend = async (content) => {
    const response = await api.chat(content);
    setMessages([...messages, { role: "assistant", content: response }]);
  };
  
  return <AIChatInterface messages={messages} onSendMessage={handleSend} />;
}`}
      props={[
        { name: "initialMessages", type: "Message[]", default: "[]", description: "Initial chat messages" },
        { name: "onSendMessage", type: "(content: string) => Promise<void>", default: "undefined", description: "Callback when user sends message" },
        { name: "showTypingIndicator", type: "boolean", default: "true", description: "Show typing animation" },
        { name: "allowFileUpload", type: "boolean", default: "true", description: "Enable file attachments" },
        { name: "placeholder", type: "string", default: '"Type a message..."', description: "Input placeholder text" },
      ]}
      examples={[
        {
          title: "Code Assistant",
          description: "AI assistant for coding help",
          preview: (
            <Card className="p-4 w-full max-w-3xl h-96">
              <div className="text-sm mb-3">Code Assistant</div>
              <div className="text-xs text-muted-foreground">Specialized in programming questions</div>
            </Card>
          ),
          code: `<AIChatInterface\n  initialMessages={codeMessages}\n  onSendMessage={handleCodeQuery}\n  placeholder="Ask a coding question..."\n/>`,
        },
      ]}
    />
  );
}
