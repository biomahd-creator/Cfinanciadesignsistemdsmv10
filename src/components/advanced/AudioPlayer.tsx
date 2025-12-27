import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Card } from "../ui/card";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  cover?: string;
}

export function AudioPlayer({ src, title, artist, cover }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = (value[0] / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
      setVolume(value[0]);
    }
  };

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  return (
    <Card className="p-6">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="space-y-4">
        {/* Cover & Info */}
        <div className="flex items-center gap-4">
          {cover && (
            <img
              src={cover}
              alt={title}
              className="w-16 h-16 rounded-lg object-cover"
            />
          )}
          <div>
            {title && <h3 className="font-semibold">{title}</h3>}
            {artist && <p className="text-sm text-muted-foreground">{artist}</p>}
          </div>
        </div>

        {/* Progress */}
        <Slider
          value={[progress]}
          onValueChange={handleProgressChange}
          max={100}
          step={0.1}
        />

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => skip(-10)}>
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button onClick={togglePlay}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => skip(10)}>
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <Slider
              value={[volume]}
              onValueChange={handleVolumeChange}
              max={100}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
