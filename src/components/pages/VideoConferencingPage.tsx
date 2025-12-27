import { ComponentShowcase } from "../ui/component-showcase";
import { VideoConferencing } from "../advanced/VideoConferencing";
import { Card } from "../ui/card";

export function VideoConferencingPage() {
  return (
    <ComponentShowcase
      title="Video Conferencing"
      description="Complete video conferencing interface with participant grid, screen sharing, chat sidebar, and controls. Enterprise-ready for meetings and webinars."
      category="Hero UI Pro"
      preview={
        <Card className="p-6 w-full max-w-6xl">
          <VideoConferencing 
            participants={[
              { id: "1", name: "John Doe", video: true, audio: true },
              { id: "2", name: "Jane Smith", video: true, audio: false },
              { id: "3", name: "Mike Johnson", video: false, audio: true },
            ]}
          />
        </Card>
      }
      code={`import { VideoConferencing } from "../advanced/VideoConferencing";

<VideoConferencing 
  participants={participants}
  onToggleVideo={handleVideo}
  onToggleAudio={handleAudio}
/>`}
      usage="Video conferencing component provides Zoom-like interface with participant management, screen sharing, recording, and real-time chat capabilities."
      usageCode={`import { VideoConferencing } from "../advanced/VideoConferencing";
import { useState } from "react";

export function MeetingRoom() {
  const [participants, setParticipants] = useState([]);
  
  return (
    <VideoConferencing 
      participants={participants}
      onToggleVideo={toggleVideo}
      onToggleAudio={toggleAudio}
      onScreenShare={handleScreenShare}
    />
  );
}`}
      props={[
        { name: "participants", type: "Participant[]", default: "[]", description: "List of meeting participants", required: true },
        { name: "onToggleVideo", type: "() => void", default: "undefined", description: "Callback to toggle video" },
        { name: "onToggleAudio", type: "() => void", default: "undefined", description: "Callback to toggle audio" },
        { name: "onScreenShare", type: "() => void", default: "undefined", description: "Callback to start screen sharing" },
        { name: "showChat", type: "boolean", default: "true", description: "Show chat sidebar" },
        { name: "layout", type: '"grid" | "speaker"', default: '"grid"', description: "Participant layout mode" },
      ]}
      examples={[
        {
          title: "Team Meeting",
          description: "Standard video conference with grid layout",
          preview: (
            <Card className="p-4 w-full max-w-5xl aspect-video bg-slate-900 flex items-center justify-center">
              <div className="text-white text-sm">Video Conference Interface</div>
            </Card>
          ),
          code: `<VideoConferencing\n  participants={teamMembers}\n  layout="grid"\n  showChat={true}\n/>`,
        },
      ]}
    />
  );
}
