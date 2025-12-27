import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Mic, MicOff, Video, VideoOff, PhoneOff, Users, MessageSquare, ScreenShare } from "lucide-react";
import { Badge } from "../ui/badge";

export function VideoConferencing() {
  const participants = [
    { id: "1", name: "John Doe", isMuted: false, isVideoOn: true },
    { id: "2", name: "Jane Smith", isMuted: true, isVideoOn: true },
    { id: "3", name: "Bob Johnson", isMuted: false, isVideoOn: false },
    { id: "4", name: "You", isMuted: false, isVideoOn: true, isCurrentUser: true },
  ];

  return (
    <div className="space-y-4">
      {/* Video Grid */}
      <div className="grid grid-cols-2 gap-4">
        {participants.map((participant) => (
          <Card
            key={participant.id}
            className="relative aspect-video bg-slate-900 overflow-hidden"
          >
            {participant.isVideoOn ? (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">
                    {participant.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              <Badge variant={participant.isCurrentUser ? "default" : "secondary"}>
                {participant.name}
              </Badge>
              {participant.isMuted && (
                <div className="bg-red-500 rounded-full p-1">
                  <MicOff className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Controls */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ScreenShare className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="destructive" size="icon" className="rounded-full">
            <PhoneOff className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Users className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
