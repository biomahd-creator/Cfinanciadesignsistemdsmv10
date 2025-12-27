import { ComponentShowcase } from "../ui/component-showcase";
import { VideoPlayer } from "../advanced/VideoPlayer";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export function VideoPlayerPage() {
  return (
    <ComponentShowcase
      title="Video Player"
      description="A customizable video player with controls, playback speed, fullscreen support, and picture-in-picture mode. Built for modern web applications with accessibility in mind."
      category="Media Components"
      preview={
        <div className="space-y-6 w-full">
          <Card className="p-6">
            <div className="space-y-3 mb-4">
              <h3 className="text-lg">Standard Video Player</h3>
              <p className="text-sm text-muted-foreground">Full-featured player with custom controls</p>
            </div>
            <VideoPlayer 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://images.unsplash.com/photo-1536240478700-b869070f9279"
              title="Big Buck Bunny"
            />
          </Card>
        </div>
      }
      code={`import { VideoPlayer } from "@/components/advanced/VideoPlayer";

<VideoPlayer 
  src="https://example.com/video.mp4"
  poster="https://example.com/thumbnail.jpg"
  title="Video Title"
/>`}
      usage="The Video Player component provides a consistent, branded experience across all browsers. It includes accessibility features, keyboard shortcuts, and responsive design for mobile and desktop viewing."
      usageCode={`import { VideoPlayer } from "@/components/advanced/VideoPlayer";
import { Card } from "@/components/ui/card";

export function CourseVideo() {
  const handleVideoEnd = () => {
    console.log("Video completed");
    markLessonComplete();
  };
  
  return (
    <Card className="p-6">
      <h3>Lesson 1: Introduction</h3>
      <VideoPlayer 
        src="/lessons/lesson-1.mp4"
        poster="/lessons/lesson-1-thumbnail.jpg"
        title="Introduction to React"
        onEnded={handleVideoEnd}
        autoplay={false}
      />
    </Card>
  );
}`}
      props={[
        {
          name: "src",
          type: "string",
          default: '""',
          description: "URL of the video file",
          required: true,
        },
        {
          name: "poster",
          type: "string",
          default: '""',
          description: "URL of the poster/thumbnail image",
          required: false,
        },
        {
          name: "title",
          type: "string",
          default: '""',
          description: "Video title displayed in player",
          required: false,
        },
        {
          name: "autoplay",
          type: "boolean",
          default: "false",
          description: "Automatically start playing (muted)",
          required: false,
        },
        {
          name: "controls",
          type: "boolean",
          default: "true",
          description: "Show playback controls",
          required: false,
        },
        {
          name: "loop",
          type: "boolean",
          default: "false",
          description: "Loop video playback",
          required: false,
        },
        {
          name: "muted",
          type: "boolean",
          default: "false",
          description: "Start with audio muted",
          required: false,
        },
        {
          name: "onEnded",
          type: "() => void",
          default: "undefined",
          description: "Callback when video finishes playing",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Course Tutorial Video",
          description: "Educational content with custom branding",
          preview: (
            <Card className="p-6 w-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg">React Fundamentals</h3>
                  <p className="text-sm text-muted-foreground">Lesson 3: State Management</p>
                </div>
                <Badge>12:45</Badge>
              </div>
              <VideoPlayer 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
                title="State Management Tutorial"
              />
              <div className="mt-4 flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Hooks</Badge>
                <Badge variant="outline">Beginner</Badge>
              </div>
            </Card>
          ),
          code: `<VideoPlayer 
  src="/lessons/state-management.mp4"
  poster="/thumbnails/state-mgmt.jpg"
  title="State Management Tutorial"
  onEnded={() => markComplete()}
/>`,
        },
        {
          title: "Product Demo",
          description: "Showcasing product features with video",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <h3 className="text-lg mb-2">Product Walkthrough</h3>
                <p className="text-sm text-muted-foreground">
                  See how our platform helps teams collaborate better
                </p>
              </div>
              <VideoPlayer 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
                title="Platform Demo"
                autoplay={false}
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-2xl mb-1">500+</p>
                  <p className="text-xs text-muted-foreground">Companies</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-2xl mb-1">50K+</p>
                  <p className="text-xs text-muted-foreground">Users</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-2xl mb-1">99.9%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
              </div>
            </Card>
          ),
          code: `<VideoPlayer 
  src="/demos/product-walkthrough.mp4"
  poster="/demos/product-thumbnail.jpg"
  title="Platform Demo"
  autoplay={false}
/>`,
        },
        {
          title: "Background Video",
          description: "Looping ambient video for hero sections",
          preview: (
            <Card className="p-6 w-full">
              <div className="relative rounded-lg overflow-hidden">
                <VideoPlayer 
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  autoplay={true}
                  loop={true}
                  muted={true}
                  controls={false}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl mb-4">Welcome to Our Platform</h2>
                    <p className="text-lg mb-6">Building the future of collaboration</p>
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ),
          code: `<VideoPlayer 
  src="/hero-background.mp4"
  autoplay={true}
  loop={true}
  muted={true}
  controls={false}
/>`,
        },
        {
          title: "Testimonial Video",
          description: "Customer testimonial with subtitles",
          preview: (
            <Card className="p-6 w-full">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p>Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "This platform transformed how our team works together"
                </p>
              </div>
              <VideoPlayer 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                poster="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                title="Customer Testimonial"
              />
            </Card>
          ),
          code: `<VideoPlayer 
  src="/testimonials/sarah-johnson.mp4"
  poster="/testimonials/sarah-thumbnail.jpg"
  title="Customer Testimonial"
/>`,
        },
        {
          title: "Live Stream Player",
          description: "Embedded live streaming with chat",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <Card className="p-4 md:col-span-2">
                <div className="flex items-center justify-between mb-3">
                  <h3>Live: Product Launch Event</h3>
                  <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
                </div>
                <VideoPlayer 
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                  title="Live Event"
                  autoplay={false}
                />
                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>👁️ 1,234 watching</span>
                  <span>💬 56 comments</span>
                </div>
              </Card>
              
              <Card className="p-4">
                <h4 className="mb-3">Live Chat</h4>
                <div className="space-y-2 h-48 overflow-y-auto mb-3">
                  <div className="text-sm">
                    <strong>User1:</strong> Excited for the launch! 🎉
                  </div>
                  <div className="text-sm">
                    <strong>User2:</strong> This looks amazing!
                  </div>
                  <div className="text-sm">
                    <strong>User3:</strong> Can't wait to try it
                  </div>
                </div>
                <input 
                  type="text" 
                  placeholder="Send a message..." 
                  className="w-full p-2 border rounded-md text-sm"
                />
              </Card>
            </div>
          ),
          code: `<VideoPlayer 
  src="https://live-stream-url.m3u8"
  title="Live Event"
  autoplay={true}
/>`,
        },
      ]}
    />
  );
}
