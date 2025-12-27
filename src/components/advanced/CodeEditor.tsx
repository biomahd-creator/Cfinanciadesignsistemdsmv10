import { useState } from "react";
import { Card } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Copy, Download } from "lucide-react";

interface CodeEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  language?: string;
  height?: number;
}

export function CodeEditor({
  value = "",
  onChange,
  language = "javascript",
  height = 400,
}: CodeEditorProps) {
  const [code, setCode] = useState(value);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleChange = (newValue: string) => {
    setCode(newValue);
    onChange?.(newValue);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `code.${selectedLanguage}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="json">JSON</SelectItem>
            <SelectItem value="markdown">Markdown</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div className="relative">
        <Textarea
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          className="font-mono text-sm bg-slate-950 text-slate-50 border-slate-800"
          placeholder={`Write your ${selectedLanguage} code here...`}
          style={{ height: `${height}px` }}
          spellCheck={false}
        />
        
        {/* Line numbers (simplified) */}
        <div
          className="absolute left-0 top-0 pt-3 px-2 text-xs text-slate-500 font-mono select-none pointer-events-none"
          style={{ lineHeight: "1.5rem" }}
        >
          {code.split("\n").map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
      </div>
    </Card>
  );
}
