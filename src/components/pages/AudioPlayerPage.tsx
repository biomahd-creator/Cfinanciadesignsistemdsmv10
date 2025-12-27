import { ComponentShowcase } from "../ui/component-showcase";
import { AudioPlayer } from "../advanced/AudioPlayer";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Music, Headphones, Mic } from "lucide-react";

export function AudioPlayerPage() {
  return (
    <ComponentShowcase
      title="Audio Player"
      description="A fully-featured audio player with waveform visualization, playlist support, playback controls, and volume management. Perfect for podcasts, music streaming, and audio content delivery."
      category="Media Components"
      preview={
        <div className="space-y-6 w-full max-w-2xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg">Summer Vibes Mix</h3>
                <p className="text-sm text-muted-foreground">Various Artists • 2024</p>
              </div>
              <Badge>45:32</Badge>
            </div>
            <AudioPlayer 
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              title="Summer Vibes Mix"
            />
          </Card>
        </div>
      }
      code={`import { AudioPlayer } from "@/components/advanced/AudioPlayer";

<AudioPlayer 
  src="https://example.com/audio.mp3"
  title="Audio Title"
/>`}
      usage="The Audio Player provides an elegant interface for audio content with features like seeking, volume control, playback speed, and visual feedback. Ideal for music apps, podcasts, audiobooks, and educational content."
      usageCode={`import { AudioPlayer } from "@/components/advanced/AudioPlayer";
import { Card } from "@/components/ui/card";

export function PodcastEpisode() {
  const handleComplete = () => {
    markEpisodeAsListened();
    loadNextEpisode();
  };
  
  return (
    <Card className="p-6">
      <h3>Episode 42: Building at Scale</h3>
      <AudioPlayer 
        src="/podcasts/episode-42.mp3"
        title="Building at Scale"
        onEnded={handleComplete}
      />
    </Card>
  );
}`}
      props={[
        {
          name: "src",
          type: "string",
          default: '""',
          description: "URL of the audio file",
          required: true,
        },
        {
          name: "title",
          type: "string",
          default: '""',
          description: "Audio track title",
          required: false,
        },
        {
          name: "artist",
          type: "string",
          default: '""',
          description: "Artist or creator name",
          required: false,
        },
        {
          name: "artwork",
          type: "string",
          default: '""',
          description: "URL of album artwork or thumbnail",
          required: false,
        },
        {
          name: "autoplay",
          type: "boolean",
          default: "false",
          description: "Start playing automatically",
          required: false,
        },
        {
          name: "showWaveform",
          type: "boolean",
          default: "true",
          description: "Display audio waveform visualization",
          required: false,
        },
        {
          name: "onEnded",
          type: "() => void",
          default: "undefined",
          description: "Callback when audio finishes",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Podcast Player",
          description: "Full-featured podcast episode player",
          preview: (
            <Card className="p-6 w-full max-w-2xl mx-auto">
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2">Technology</Badge>
                  <h3 className="text-lg mb-1">The Future of AI</h3>
                  <p className="text-sm text-muted-foreground">Tech Talk Podcast • Episode 127</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Exploring the latest developments in artificial intelligence and machine learning
                  </p>
                </div>
              </div>
              <AudioPlayer 
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
                title="The Future of AI"
                artist="Tech Talk Podcast"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">AI</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Technology</Badge>
              </div>
            </Card>
          ),
          code: `<AudioPlayer 
  src="/podcasts/episode-127.mp3"
  title="The Future of AI"
  artist="Tech Talk Podcast"
  showWaveform={true}
/>`,
        },
        {
          title: "Music Playlist",
          description: "Streaming music with album artwork",
          preview: (
            <div className="space-y-4 w-full max-w-2xl mx-auto">
              <Card className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Music className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg">Midnight Dreams</h3>
                    <p className="text-sm text-muted-foreground">Electronic Artist</p>
                    <p className="text-xs text-muted-foreground mt-1">Album: Night Waves • 2024</p>
                  </div>
                </div>
                <AudioPlayer 
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                  title="Midnight Dreams"
                  artist="Electronic Artist"
                />
              </Card>
              
              <Card className="p-4">
                <h4 className="text-sm mb-3">Up Next</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
                    <div className="flex-1">
                      <p className="text-sm">Ocean Waves</p>
                      <p className="text-xs text-muted-foreground">Electronic Artist</p>
                    </div>
                    <span className="text-xs text-muted-foreground">3:45</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
                    <div className="flex-1">
                      <p className="text-sm">Stellar Journey</p>
                      <p className="text-xs text-muted-foreground">Electronic Artist</p>
                    </div>
                    <span className="text-xs text-muted-foreground">4:12</span>
                  </div>
                </div>
              </Card>
            </div>
          ),
          code: `<AudioPlayer 
  src="/music/midnight-dreams.mp3"
  title="Midnight Dreams"
  artist="Electronic Artist"
  artwork="/album-covers/night-waves.jpg"
/>`,
        },
        {
          title: "Audiobook Player",
          description: "Chapter-based audiobook with progress tracking",
          preview: (
            <Card className="p-6 w-full max-w-2xl mx-auto">
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2">Audiobook</Badge>
                  <h3 className="text-lg">The Art of Programming</h3>
                  <p className="text-sm text-muted-foreground">Narrated by John Smith</p>
                  <p className="text-xs text-muted-foreground mt-1">Chapter 3 of 12</p>
                </div>
              </div>
              <AudioPlayer 
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
                title="Chapter 3: Data Structures"
                artist="John Smith"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1">Progress</p>
                  <p className="text-xl">25%</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1">Time Left</p>
                  <p className="text-xl">8.5h</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm mb-1">Speed</p>
                  <p className="text-xl">1.5x</p>
                </div>
              </div>
            </Card>
          ),
          code: `<AudioPlayer 
  src="/audiobooks/chapter-3.mp3"
  title="Chapter 3: Data Structures"
  artist="John Smith"
  onEnded={loadNextChapter}
/>`,
        },
        {
          title: "Voice Message Player",
          description: "Compact player for voice messages",
          preview: (
            <div className="space-y-3 w-full max-w-md mx-auto">
              <Card className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm">SM</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">Sarah Miller</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <AudioPlayer 
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
                  title="Voice Message"
                  showWaveform={true}
                />
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm">JD</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">John Doe</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <AudioPlayer 
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
                  title="Voice Message"
                  showWaveform={true}
                />
              </Card>
            </div>
          ),
          code: `<AudioPlayer 
  src="/voice-messages/msg-123.mp3"
  title="Voice Message"
  showWaveform={true}
/>`,
        },
        {
          title: "Learning Module Audio",
          description: "Educational audio content with transcript",
          preview: (
            <Card className="p-6 w-full max-w-2xl mx-auto">
              <div className="mb-4">
                <Badge className="mb-2">Course Material</Badge>
                <h3 className="text-lg mb-1">Introduction to React Hooks</h3>
                <p className="text-sm text-muted-foreground">Module 2.3 • Web Development Course</p>
              </div>
              <AudioPlayer 
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
                title="React Hooks Tutorial"
              />
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="text-sm mb-2">Transcript</h4>
                <p className="text-sm text-muted-foreground">
                  In this lesson, we'll explore React Hooks, a powerful feature that lets you use 
                  state and other React features without writing a class component. We'll start 
                  with useState and useEffect, the two most commonly used hooks...
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="text-sm px-4 py-2 border rounded-md hover:bg-muted">
                  Download Audio
                </button>
                <button className="text-sm px-4 py-2 border rounded-md hover:bg-muted">
                  View Full Transcript
                </button>
              </div>
            </Card>
          ),
          code: `<AudioPlayer 
  src="/courses/react-hooks-intro.mp3"
  title="React Hooks Tutorial"
  onEnded={markModuleComplete}
/>`,
        },
      ]}
    />
  );
}
