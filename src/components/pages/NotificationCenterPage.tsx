import { ComponentShowcase } from "../ui/component-showcase";
import { NotificationCenter, Notification } from "../advanced/NotificationCenter";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "mention",
    title: "New mention",
    message: "John mentioned you in a comment on Invoice #1234",
    timestamp: new Date(Date.now() - 300000),
    isRead: false,
  },
  {
    id: "2",
    type: "update",
    title: "Invoice approved",
    message: "Invoice #1234 has been approved by the finance team",
    timestamp: new Date(Date.now() - 600000),
    isRead: false,
  },
  {
    id: "3",
    type: "system",
    title: "System maintenance",
    message: "Scheduled maintenance will occur on Dec 25 at 2:00 AM",
    timestamp: new Date(Date.now() - 900000),
    isRead: true,
  },
  {
    id: "4",
    type: "message",
    title: "New message",
    message: "Sarah sent you a message about the Q4 report",
    timestamp: new Date(Date.now() - 1200000),
    isRead: true,
  },
];

export function NotificationCenterPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <ComponentShowcase
      title="Notification Center"
      description="Dropdown notification feed with filtering, read status, and management"
      category="Communication"
      preview={
        <div className="w-full max-w-md flex justify-center">
          <NotificationCenter
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
            onMarkAllAsRead={handleMarkAllAsRead}
            onDelete={handleDelete}
            onClearAll={handleClearAll}
          />
        </div>
      }
      code={`import { NotificationCenter, Notification } from "../advanced/NotificationCenter";

const notifications: Notification[] = [
  {
    id: "1",
    type: "mention",
    title: "New mention",
    message: "John mentioned you in a comment",
    timestamp: new Date(),
    isRead: false,
  },
];

<NotificationCenter
  notifications={notifications}
  onMarkAsRead={handleMarkAsRead}
  onMarkAllAsRead={handleMarkAllAsRead}
  onDelete={handleDelete}
  onClearAll={handleClearAll}
/>`}
      usage="Notification Center provides a centralized hub for system notifications with filtering by type, read/unread status management, and bulk actions. Perfect for keeping users informed about mentions, updates, and system alerts."
      usageCode={`import { NotificationCenter, Notification } from "../advanced/NotificationCenter";
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    );
  };

  return (
    <NotificationCenter
      notifications={notifications}
      onMarkAsRead={handleMarkAsRead}
      onMarkAllAsRead={handleMarkAllAsRead}
      onDelete={handleDelete}
      onClearAll={handleClearAll}
    />
  );
}`}
      props={[
        {
          name: "notifications",
          type: "Notification[]",
          default: "[]",
          description: "Array of notification objects",
          required: true,
        },
        {
          name: "onMarkAsRead",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when marking single notification as read",
          required: false,
        },
        {
          name: "onMarkAllAsRead",
          type: "() => void",
          default: "undefined",
          description: "Callback when marking all as read",
          required: false,
        },
        {
          name: "onDelete",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when deleting a notification",
          required: false,
        },
        {
          name: "onClearAll",
          type: "() => void",
          default: "undefined",
          description: "Callback when clearing all notifications",
          required: false,
        },
      ]}
      examples={[
        {
          title: "With Filters",
          description: "Filter by mention, update, or system notifications",
          preview: (
            <Card>
              <CardContent className="pt-6 flex justify-center">
                <NotificationCenter
                  notifications={notifications}
                  onMarkAsRead={handleMarkAsRead}
                  onMarkAllAsRead={handleMarkAllAsRead}
                  onDelete={handleDelete}
                  onClearAll={handleClearAll}
                />
              </CardContent>
            </Card>
          ),
          code: `<NotificationCenter
  notifications={notifications}
  onMarkAsRead={handleMarkAsRead}
  onMarkAllAsRead={handleMarkAllAsRead}
/>`,
        },
      ]}
    />
  );
}
