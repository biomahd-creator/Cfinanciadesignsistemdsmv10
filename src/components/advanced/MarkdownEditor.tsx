import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Bold, Italic, Link, List, Code, Eye, Edit } from "lucide-react";
import { Card } from "../ui/card";

interface MarkdownEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  height?: number;
}

export function MarkdownEditor({
  value = "",
  onChange,
  height = 400,
}: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState(value);

  const handleChange = (newValue: string) => {
    setMarkdown(newValue);
    onChange?.(newValue);
  };

  const insertMarkdown = (before: string, after: string = "") => {
    const textarea = document.querySelector("textarea");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText =
      markdown.substring(0, start) +
      before +
      selectedText +
      after +
      markdown.substring(end);

    handleChange(newText);
  };

  // Simple markdown to HTML converter (basic)
  const renderMarkdown = (text: string) => {
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h2 class="text-2xl font-bold mt-4 mb-2">$1</h2>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/`(.*?)`/gim, '<code class="bg-muted px-1 rounded">$1</code>')
      .replace(/\n/gim, '<br />');
  };

  return (
    <Card className="p-4">
      <Tabs defaultValue="edit" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="edit">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => insertMarkdown("**", "**")}
              title="Bold"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => insertMarkdown("*", "*")}
              title="Italic"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => insertMarkdown("[", "](url)")}
              title="Link"
            >
              <Link className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => insertMarkdown("- ", "")}
              title="List"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => insertMarkdown("`", "`")}
              title="Code"
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="edit" className="mt-0">
          <Textarea
            value={markdown}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Write your markdown here..."
            className="font-mono"
            style={{ height: `${height}px` }}
          />
        </TabsContent>

        <TabsContent value="preview" className="mt-0">
          <div
            className="prose max-w-none p-4 border rounded-md bg-muted/20"
            style={{ minHeight: `${height}px` }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
