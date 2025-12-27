import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Bell,
  Check,
  CheckCheck,
  Trash2,
  MessageSquare,
  UserPlus,
  AlertCircle,
  Settings,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";

export interface Notification {
  id: string;
  type: "mention" | "update" | "system" | "message";
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  icon?: React.ReactNode;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  onDelete?: (id: string) => void;
  onClearAll?: () => void;
}

export function NotificationCenter({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onDelete,
  onClearAll,
}: NotificationCenterProps) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "mention" | "update" | "system">("all");

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "mention":
        return <MessageSquare className="h-4 w-4" />;
      case "update":
        return <UserPlus className="h-4 w-4" />;
      case "system":
        return <AlertCircle className="h-4 w-4" />;
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString();
  };

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
          <div className="flex gap-2">
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMarkAllAsRead}
                className="h-8 text-xs"
              >
                <CheckCheck className="mr-1 h-3 w-3" />
                Mark all read
              </Button>
            )}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="w-full">
          <TabsList className="w-full grid grid-cols-4 rounded-none border-b">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="mention" className="text-xs">
              Mentions
            </TabsTrigger>
            <TabsTrigger value="update" className="text-xs">
              Updates
            </TabsTrigger>
            <TabsTrigger value="system" className="text-xs">
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value={filter} className="m-0">
            <ScrollArea className="h-96">
              {filteredNotifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <Bell className="h-12 w-12 text-muted-foreground mb-3" />
                  <p className="text-sm text-muted-foreground">No notifications</p>
                </div>
              ) : (
                <div>
                  {filteredNotifications.map((notification, index) => (
                    <div key={notification.id}>
                      <div
                        className={cn(
                          "p-4 hover:bg-muted/50 transition-colors group",
                          !notification.isRead && "bg-primary/5"
                        )}
                      >
                        <div className="flex gap-3">
                          <div
                            className={cn(
                              "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                              notification.type === "mention" && "bg-blue-100 text-blue-600",
                              notification.type === "update" && "bg-green-100 text-green-600",
                              notification.type === "system" && "bg-orange-100 text-orange-600",
                              notification.type === "message" && "bg-purple-100 text-purple-600"
                            )}
                          >
                            {notification.icon || getIcon(notification.type)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                  {notification.title}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {formatTimestamp(notification.timestamp)}
                                </p>
                              </div>

                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {!notification.isRead && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-7 w-7"
                                    onClick={() => onMarkAsRead?.(notification.id)}
                                  >
                                    <Check className="h-3 w-3" />
                                  </Button>
                                )}
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => onDelete?.(notification.id)}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>

                            {!notification.isRead && (
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                            )}
                          </div>
                        </div>
                      </div>
                      {index < filteredNotifications.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {notifications.length > 0 && (
          <>
            <Separator />
            <div className="p-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-destructive hover:text-destructive"
                onClick={onClearAll}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear all notifications
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
