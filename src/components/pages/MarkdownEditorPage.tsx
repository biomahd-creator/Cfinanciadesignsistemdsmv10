import { ComponentShowcase } from "../ui/component-showcase";
import { MarkdownEditor } from "../advanced/MarkdownEditor";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { FileText, Eye, Code } from "lucide-react";

export function MarkdownEditorPage() {
  const sampleMarkdown = `# Welcome to Markdown Editor

## Features

- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks
- Lists and more

\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`

> Blockquotes are supported too!`;

  return (
    <ComponentShowcase
      title="Markdown Editor"
      description="A powerful WYSIWYG markdown editor with live preview, syntax highlighting, and toolbar shortcuts. Perfect for documentation, blog posts, comments, and any content creation workflow."
      category="Rich Editors"
      preview={
        <Card className="p-6 w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <h3 className="text-lg">Document Editor</h3>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">
                <Code className="w-3 h-3 mr-1" />
                Markdown
              </Badge>
              <Badge variant="outline">
                <Eye className="w-3 h-3 mr-1" />
                Preview
              </Badge>
            </div>
          </div>
          <MarkdownEditor 
            initialValue={sampleMarkdown}
            placeholder="Start writing..."
          />
        </Card>
      }
      code={`import { MarkdownEditor } from "@/components/advanced/MarkdownEditor";

<MarkdownEditor 
  initialValue=""
  placeholder="Start writing..."
  onChange={(value) => console.log(value)}
/>`}
      usage="Markdown Editor provides a user-friendly interface for creating formatted content using markdown syntax. It's ideal for blogs, documentation sites, note-taking apps, and any platform that needs rich text editing."
      usageCode={`import { MarkdownEditor } from "@/components/advanced/MarkdownEditor";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function BlogPostEditor() {
  const [content, setContent] = useState("");
  
  const handleSave = () => {
    // Save markdown content
    savePost({ content });
  };
  
  return (
    <Card className="p-6">
      <h3>Create New Post</h3>
      <MarkdownEditor 
        initialValue={content}
        onChange={setContent}
        placeholder="Write your post..."
      />
      <button onClick={handleSave}>
        Publish Post
      </button>
    </Card>
  );
}`}
      props={[
        {
          name: "initialValue",
          type: "string",
          default: '""',
          description: "Initial markdown content",
          required: false,
        },
        {
          name: "placeholder",
          type: "string",
          default: '"Start typing..."',
          description: "Placeholder text when empty",
          required: false,
        },
        {
          name: "onChange",
          type: "(value: string) => void",
          default: "undefined",
          description: "Callback when content changes",
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
          name: "showPreview",
          type: "boolean",
          default: "true",
          description: "Show side-by-side preview",
          required: false,
        },
        {
          name: "readOnly",
          type: "boolean",
          default: "false",
          description: "Make editor read-only",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Blog Post Editor",
          description: "Full-featured editor for blog content",
          preview: (
            <Card className="p-6 w-full">
              <div className="space-y-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Post title..." 
                  className="w-full text-2xl border-0 border-b pb-2 focus:outline-none focus:border-primary"
                />
                <div className="flex gap-2">
                  <Badge variant="outline">Technology</Badge>
                  <Badge variant="outline">Tutorial</Badge>
                  <Badge variant="outline">Draft</Badge>
                </div>
              </div>
              <MarkdownEditor 
                initialValue="# Getting Started with React\n\nReact is a JavaScript library..."
                placeholder="Write your blog post..."
                height="300px"
              />
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 border rounded-md hover:bg-muted">
                  Save Draft
                </button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  Publish
                </button>
              </div>
            </Card>
          ),
          code: `<MarkdownEditor 
  initialValue={postContent}
  onChange={setPostContent}
  placeholder="Write your blog post..."
  height="500px"
/>`,
        },
        {
          title: "Documentation Writer",
          description: "Technical documentation with code blocks",
          preview: (
            <Card className="p-6 w-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg">API Documentation</h3>
                  <p className="text-sm text-muted-foreground">Version 2.0</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    Preview
                  </button>
                  <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                    Export
                  </button>
                </div>
              </div>
              <MarkdownEditor 
                initialValue={`## Authentication

All API requests require authentication.

\`\`\`bash
curl -H "Authorization: Bearer TOKEN"
\`\`\`

### Response

\`\`\`json
{
  "status": "success",
  "data": {}
}
\`\`\``}
                height="300px"
              />
            </Card>
          ),
          code: `<MarkdownEditor 
  initialValue={documentation}
  onChange={updateDocs}
  height="600px"
  showPreview={true}
/>`,
        },
        {
          title: "README Generator",
          description: "Create GitHub README files",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-lg">README.md</h3>
                </div>
                <p className="text-sm text-muted-foreground">Project documentation for GitHub</p>
              </div>
              <MarkdownEditor 
                initialValue={`# Project Name

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue)]()

## Installation

\`\`\`bash
npm install project-name
\`\`\`

## Usage

\`\`\`javascript
import { Component } from 'project-name';
\`\`\``}
                height="300px"
              />
              <div className="mt-4 flex gap-2">
                <button className="text-sm px-3 py-1.5 bg-primary text-primary-foreground rounded-md">
                  Save to Repository
                </button>
                <button className="text-sm px-3 py-1.5 border rounded-md hover:bg-muted">
                  Copy Markdown
                </button>
              </div>
            </Card>
          ),
          code: `<MarkdownEditor 
  initialValue={readmeTemplate}
  onChange={setReadme}
  placeholder="# Your Project Name..."
/>`,
        },
        {
          title: "Comment Editor",
          description: "Markdown-powered comment system",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm">JD</span>
                  </div>
                  <div>
                    <p>John Doe</p>
                    <p className="text-xs text-muted-foreground">Write a comment</p>
                  </div>
                </div>
              </div>
              <MarkdownEditor 
                initialValue=""
                placeholder="Add a comment... (Markdown supported)"
                height="200px"
                showPreview={false}
              />
              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <p className="text-xs text-muted-foreground">
                  You can use **bold**, *italic*, and `code`
                </p>
                <button className="px-4 py-1.5 bg-primary text-primary-foreground rounded-md text-sm">
                  Post Comment
                </button>
              </div>
            </Card>
          ),
          code: `<MarkdownEditor 
  initialValue=""
  placeholder="Add a comment..."
  height="200px"
  showPreview={false}
  onChange={setComment}
/>`,
        },
        {
          title: "Note Taking App",
          description: "Quick notes with markdown formatting",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
              <Card className="p-4 md:col-span-1">
                <h4 className="text-sm mb-3">Recent Notes</h4>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-primary/10 rounded text-sm">
                    Meeting Notes
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded text-sm">
                    Project Ideas
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded text-sm">
                    TODO List
                  </button>
                  <button className="w-full text-left p-2 hover:bg-muted rounded text-sm">
                    Code Snippets
                  </button>
                </div>
              </Card>
              
              <Card className="p-4 md:col-span-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg">Meeting Notes</h3>
                  <p className="text-xs text-muted-foreground">Last edited: 2 min ago</p>
                </div>
                <MarkdownEditor 
                  initialValue={`# Team Sync - Dec 23, 2024

## Attendees
- John, Sarah, Mike

## Discussion
- Project timeline
- Budget review
- Next steps`}
                  height="250px"
                />
              </Card>
            </div>
          ),
          code: `<MarkdownEditor 
  initialValue={note.content}
  onChange={updateNote}
  placeholder="Take a note..."
  height="400px"
/>`,
        },
      ]}
    />
  );
}
