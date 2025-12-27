import { ComponentShowcase } from "../ui/component-showcase";
import { ScreenRecording } from "../advanced/ScreenRecording";
import { Card } from "../ui/card";

export function ScreenRecordingPage() {
  return (
    <ComponentShowcase
      title="Screen Recording"
      description="Browser-based screen recording with webcam overlay, microphone audio, and drawing tools. Perfect for tutorials, bug reports, and demos."
      category="Hero UI Pro"
      preview={
        <Card className="p-6 w-full max-w-4xl">
          <div className="mb-4">
            <div className="text-lg mb-1">Screen Recorder</div>
            <div className="text-xs text-muted-foreground">
              Record your screen, add webcam, and annotate
            </div>
          </div>
          <ScreenRecording 
            onRecordingComplete={(blob) => console.log("Recording saved", blob)}
            showWebcam={true}
            showDrawingTools={true}
          />
        </Card>
      }
      code={`import { ScreenRecording } from "../advanced/ScreenRecording";

<ScreenRecording 
  onRecordingComplete={handleSave}
  showWebcam={true}
  showDrawingTools={true}
/>`}
      usage="Screen Recording enables users to capture their screen, add webcam overlay, record audio, and annotate in real-time. Essential for support tools, tutorials, and collaborative feedback."
      usageCode={`import { ScreenRecording } from "../advanced/ScreenRecording";
import { useState } from "react";

export function BugReporter() {
  const [recording, setRecording] = useState(null);
  
  const handleComplete = async (blob) => {
    const url = await uploadRecording(blob);
    await api.submitBugReport({ video: url });
  };
  
  return (
    <div>
      <h2>Report a Bug</h2>
      <p>Record your screen to show us the issue</p>
      <ScreenRecording 
        onRecordingComplete={handleComplete}
        showWebcam={true}
      />
    </div>
  );
}`}
      props={[
        { name: "onRecordingComplete", type: "(blob: Blob) => void", default: "undefined", description: "Callback when recording is finished", required: true },
        { name: "showWebcam", type: "boolean", default: "false", description: "Show webcam overlay" },
        { name: "showDrawingTools", type: "boolean", default: "false", description: "Enable drawing annotations" },
        { name: "maxDuration", type: "number", default: "300", description: "Maximum recording duration in seconds" },
        { name: "audioSource", type: '"microphone" | "system" | "both"', default: '"microphone"', description: "Audio source to record" },
        { name: "quality", type: '"low" | "medium" | "high"', default: '"medium"', description: "Recording quality" },
      ]}
      examples={[
        {
          title: "Tutorial Recorder",
          description: "Record tutorials with webcam and annotations",
          preview: (
            <Card className="p-6 w-full max-w-3xl">
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center relative">
                <div className="text-white text-sm">Screen Recording Area</div>
                <div className="absolute bottom-4 right-4 w-32 h-24 bg-slate-800 rounded-lg border-2 border-white flex items-center justify-center">
                  <div className="text-white text-xs">Webcam</div>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                    ⏹️
                  </button>
                  <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    ✏️
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span>Recording: 00:45</span>
                </div>
                <div className="text-muted-foreground">Max duration: 5:00</div>
              </div>
            </Card>
          ),
          code: `<ScreenRecording\n  onRecordingComplete={saveTutorial}\n  showWebcam={true}\n  showDrawingTools={true}\n  maxDuration={300}\n/>`,
        },
        {
          title: "Bug Report Tool",
          description: "Quick screen recording for bug reports",
          preview: (
            <Card className="p-6 w-full max-w-2xl">
              <div className="mb-4">
                <div className="text-base mb-2">Report an Issue</div>
                <div className="text-xs text-muted-foreground mb-4">
                  Record your screen to help us understand the problem
                </div>
              </div>
              <div className="space-y-3">
                <input 
                  placeholder="Issue title"
                  className="w-full px-3 py-2 bg-muted rounded-lg text-sm"
                />
                <textarea 
                  placeholder="Describe the issue..."
                  className="w-full px-3 py-2 bg-muted rounded-lg text-sm h-20"
                />
                <div className="p-4 bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/30">
                  <div className="text-center text-sm text-muted-foreground mb-2">
                    📹 Screen Recording
                  </div>
                  <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm transition-colors">
                    Start Recording
                  </button>
                </div>
                <button className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors">
                  Submit Bug Report
                </button>
              </div>
            </Card>
          ),
          code: `<form onSubmit={handleSubmit}>\n  <Input placeholder="Issue title" />\n  <Textarea placeholder="Describe issue..." />\n  \n  <ScreenRecording\n    onRecordingComplete={attachToReport}\n    maxDuration={120}\n  />\n  \n  <Button type="submit">Submit Bug Report</Button>\n</form>`,
        },
        {
          title: "Demo Creator",
          description: "Create product demos with screen recording",
          preview: (
            <Card className="p-6 w-full max-w-3xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-base mb-1">New Product Demo</div>
                  <div className="text-xs text-muted-foreground">Record and share your demo</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-muted hover:bg-muted/80 rounded text-xs transition-colors">
                    Settings
                  </button>
                  <button className="px-3 py-1 bg-primary hover:bg-primary/90 rounded text-xs transition-colors">
                    Share
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <button className="flex-1 p-3 bg-muted hover:bg-muted/80 rounded-lg text-xs transition-colors">
                    🖥️ Full Screen
                  </button>
                  <button className="flex-1 p-3 bg-muted hover:bg-muted/80 rounded-lg text-xs transition-colors">
                    🪟 Window
                  </button>
                  <button className="flex-1 p-3 bg-muted hover:bg-muted/80 rounded-lg text-xs transition-colors">
                    📑 Tab
                  </button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <div className="text-sm mb-1">Ready to Record</div>
                    <div className="text-xs text-muted-foreground">Select a source to start</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>Microphone</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>System Audio</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>Webcam</span>
                  </label>
                </div>
              </div>
            </Card>
          ),
          code: `<ScreenRecording\n  onRecordingComplete={publishDemo}\n  showWebcam={true}\n  audioSource="both"\n  quality="high"\n  showDrawingTools={true}\n/>`,
        },
      ]}
    />
  );
}
