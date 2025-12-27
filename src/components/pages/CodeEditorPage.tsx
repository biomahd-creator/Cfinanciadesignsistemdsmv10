import { ComponentShowcase } from "../ui/component-showcase";
import { CodeEditor } from "../advanced/CodeEditor";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Play, Download } from "lucide-react";

export function CodeEditorPage() {
  const jsExample = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // Output: 55`;

  const pythonExample = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3,6,8,10,1,2,1]))`;

  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Welcome to Code Editor</h1>
    <p>Start coding now!</p>
</body>
</html>`;

  return (
    <ComponentShowcase
      title="Code Editor"
      description="A professional code editor with syntax highlighting, auto-completion, line numbers, and multiple language support. Built for coding tutorials, documentation, and online IDEs."
      category="Rich Editors"
      preview={
        <Card className="p-6 w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <h3 className="text-lg">JavaScript Editor</h3>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">JavaScript</Badge>
              <button className="text-sm px-3 py-1.5 bg-primary text-primary-foreground rounded-md flex items-center gap-2">
                <Play className="w-3 h-3" />
                Run
              </button>
            </div>
          </div>
          <CodeEditor 
            language="javascript"
            value={jsExample}
            onChange={(value) => console.log(value)}
          />
        </Card>
      }
      code={`import { CodeEditor } from "@/components/advanced/CodeEditor";

<CodeEditor 
  language="javascript"
  value={code}
  onChange={(value) => setCode(value)}
/>`}
      usage="Code Editor provides a powerful environment for writing and editing code with features like syntax highlighting, auto-indentation, and multi-language support. Perfect for coding platforms, tutorials, and developer tools."
      usageCode={`import { CodeEditor } from "@/components/advanced/CodeEditor";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function CodePlayground() {
  const [code, setCode] = useState('console.log("Hello");');
  
  const runCode = () => {
    try {
      eval(code);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Card className="p-6">
      <h3>JavaScript Playground</h3>
      <CodeEditor 
        language="javascript"
        value={code}
        onChange={setCode}
        height="400px"
      />
      <button onClick={runCode}>Run Code</button>
    </Card>
  );
}`}
      props={[
        {
          name: "language",
          type: '"javascript" | "typescript" | "python" | "html" | "css" | "json" | "markdown"',
          default: '"javascript"',
          description: "Programming language for syntax highlighting",
          required: false,
        },
        {
          name: "value",
          type: "string",
          default: '""',
          description: "Current code content",
          required: false,
        },
        {
          name: "onChange",
          type: "(value: string) => void",
          default: "undefined",
          description: "Callback when code changes",
          required: false,
        },
        {
          name: "height",
          type: "string",
          default: '"400px"',
          description: "Editor height (CSS value)",
          required: false,
        },
        {
          name: "readOnly",
          type: "boolean",
          default: "false",
          description: "Make editor read-only",
          required: false,
        },
        {
          name: "showLineNumbers",
          type: "boolean",
          default: "true",
          description: "Display line numbers",
          required: false,
        },
        {
          name: "theme",
          type: '"light" | "dark"',
          default: '"dark"',
          description: "Editor color theme",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Multi-Language IDE",
          description: "Code editor with language selection",
          preview: (
            <Card className="p-6 w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg">Online Code Editor</h3>
                <div className="flex gap-2">
                  <select className="px-3 py-1.5 border rounded-md text-sm">
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>HTML</option>
                    <option>CSS</option>
                  </select>
                  <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm flex items-center gap-2">
                    <Play className="w-3 h-3" />
                    Run
                  </button>
                  <button className="px-3 py-1.5 border rounded-md text-sm">
                    Share
                  </button>
                </div>
              </div>
              <CodeEditor 
                language="javascript"
                value={jsExample}
                height="300px"
              />
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm mb-2">Output:</p>
                <code className="text-sm text-muted-foreground">55</code>
              </div>
            </Card>
          ),
          code: `<CodeEditor 
  language="javascript"
  value={code}
  onChange={setCode}
  height="400px"
/>`,
        },
        {
          title: "Code Snippet Manager",
          description: "Save and organize code snippets",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
              <Card className="p-4 md:col-span-1">
                <h4 className="text-sm mb-3">My Snippets</h4>
                <div className="space-y-2 text-sm">
                  <button className="w-full text-left p-2 bg-primary/10 rounded">
                    Array Sort
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">
                    Fetch API
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">
                    Async/Await
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded">
                    Regex Utils
                  </button>
                </div>
              </Card>
              
              <Card className="p-4 md:col-span-3">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg">Array Sort Function</h3>
                    <p className="text-xs text-muted-foreground">JavaScript • Updated 2 days ago</p>
                  </div>
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    <Download className="w-3 h-3 inline mr-1" />
                    Export
                  </button>
                </div>
                <CodeEditor 
                  language="javascript"
                  value={`const sortArray = (arr, order = 'asc') => {
  return arr.sort((a, b) => {
    return order === 'asc' ? a - b : b - a;
  });
};`}
                  height="200px"
                />
              </Card>
            </div>
          ),
          code: `<CodeEditor 
  language="javascript"
  value={snippet.code}
  onChange={updateSnippet}
/>`,
        },
        {
          title: "Tutorial Code Example",
          description: "Interactive code examples for learning",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <Badge className="mb-2">Tutorial</Badge>
                <h3 className="text-lg mb-1">Python Quicksort Algorithm</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to implement the quicksort algorithm in Python
                </p>
              </div>
              <CodeEditor 
                language="python"
                value={pythonExample}
                height="300px"
              />
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm mb-2">Explanation:</p>
                <p className="text-sm text-muted-foreground">
                  This implementation uses the divide-and-conquer strategy. It picks a pivot element 
                  and partitions the array around it, then recursively sorts the sub-arrays.
                </p>
              </div>
            </Card>
          ),
          code: `<CodeEditor 
  language="python"
  value={tutorialCode}
  readOnly={false}
  height="400px"
/>`,
        },
        {
          title: "HTML Preview Editor",
          description: "Live HTML editor with preview",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <h3 className="text-lg mb-2">HTML Live Editor</h3>
                <p className="text-sm text-muted-foreground">Edit HTML and see changes instantly</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">Code</p>
                  <CodeEditor 
                    language="html"
                    value={htmlExample}
                    height="300px"
                  />
                </div>
                <div>
                  <p className="text-sm mb-2">Preview</p>
                  <div className="border rounded-lg p-4 h-[300px] overflow-auto bg-white dark:bg-muted">
                    <h1>Welcome to Code Editor</h1>
                    <p>Start coding now!</p>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<CodeEditor 
  language="html"
  value={html}
  onChange={setHtml}
  height="400px"
/>`,
        },
        {
          title: "Code Review Interface",
          description: "Side-by-side code comparison",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg">Pull Request #142</h3>
                  <div className="flex gap-2">
                    <Badge variant="outline">+12</Badge>
                    <Badge variant="outline">-8</Badge>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Optimize fibonacci function
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2 text-red-500">Before</p>
                  <CodeEditor 
                    language="javascript"
                    value={jsExample}
                    readOnly={true}
                    height="250px"
                  />
                </div>
                <div>
                  <p className="text-sm mb-2 text-green-500">After</p>
                  <CodeEditor 
                    language="javascript"
                    value={`const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  return memo[n];
};

console.log(fibonacci(10)); // Output: 55`}
                    readOnly={true}
                    height="250px"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Approve
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-muted">
                  Comment
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-muted">
                  Request Changes
                </button>
              </div>
            </Card>
          ),
          code: `<CodeEditor 
  language="javascript"
  value={oldCode}
  readOnly={true}
/>
<CodeEditor 
  language="javascript"
  value={newCode}
  readOnly={true}
/>`,
        },
      ]}
    />
  );
}
