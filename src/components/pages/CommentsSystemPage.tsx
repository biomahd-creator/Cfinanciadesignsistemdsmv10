import { ComponentShowcase } from "../ui/component-showcase";
import { CommentsSystem, Comment } from "../advanced/CommentsSystem";
import { useState } from "react";

const initialComments: Comment[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Alice Johnson",
    userAvatar: "/api/placeholder/32/32",
    content: "This is a great feature! Really looking forward to using it in production.",
    timestamp: new Date(Date.now() - 3600000),
    likes: 12,
    isLiked: false,
    replies: [
      {
        id: "2",
        userId: "user2",
        userName: "Bob Smith",
        content: "I agree! The interface is very intuitive.",
        timestamp: new Date(Date.now() - 1800000),
        likes: 5,
        isLiked: true,
      },
    ],
  },
  {
    id: "3",
    userId: "current",
    userName: "You",
    content: "Thanks for the feedback everyone! Let me know if you have any suggestions.",
    timestamp: new Date(Date.now() - 900000),
    likes: 8,
    isLiked: false,
  },
];

export function CommentsSystemPage() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleAddComment = (content: string, parentId?: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      userId: "current",
      userName: "You",
      content,
      timestamp: new Date(),
      likes: 0,
      isLiked: false,
    };

    if (parentId) {
      // Add as reply
      setComments((prev) =>
        prev.map((c) => {
          if (c.id === parentId) {
            return {
              ...c,
              replies: [...(c.replies || []), newComment],
            };
          }
          return c;
        })
      );
    } else {
      // Add as top-level comment
      setComments((prev) => [newComment, ...prev]);
    }
  };

  const handleEditComment = (id: string, content: string) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return { ...c, content };
        }
        if (c.replies) {
          return {
            ...c,
            replies: c.replies.map((r) => (r.id === id ? { ...r, content } : r)),
          };
        }
        return c;
      })
    );
  };

  const handleDeleteComment = (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handleLikeComment = (id: string) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            likes: c.isLiked ? c.likes - 1 : c.likes + 1,
            isLiked: !c.isLiked,
          };
        }
        if (c.replies) {
          return {
            ...c,
            replies: c.replies.map((r) =>
              r.id === id
                ? {
                    ...r,
                    likes: r.isLiked ? r.likes - 1 : r.likes + 1,
                    isLiked: !r.isLiked,
                  }
                : r
            ),
          };
        }
        return c;
      })
    );
  };

  return (
    <ComponentShowcase
      title="Comments System"
      description="Nested comments with replies, likes, edit, and delete functionality"
      category="Communication"
      preview={
        <div className="w-full max-w-3xl">
          <CommentsSystem
            comments={comments}
            currentUserId="current"
            onAddComment={handleAddComment}
            onEditComment={handleEditComment}
            onDeleteComment={handleDeleteComment}
            onLikeComment={handleLikeComment}
          />
        </div>
      }
      code={`import { CommentsSystem, Comment } from "../advanced/CommentsSystem";

const comments: Comment[] = [...];

<CommentsSystem
  comments={comments}
  currentUserId="current"
  onAddComment={handleAdd}
  onEditComment={handleEdit}
  onDeleteComment={handleDelete}
  onLikeComment={handleLike}
/>`}
      usage="Comments System enables threaded discussions with nested replies, likes, and comment management. Perfect for blog posts, articles, invoices, and collaborative documents."
      usageCode={`import { CommentsSystem, Comment } from "../advanced/CommentsSystem";
import { useState } from "react";

function ArticleComments() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (content: string, parentId?: string) => {
    // Add comment to state or API
  };

  return (
    <CommentsSystem
      comments={comments}
      currentUserId={user.id}
      onAddComment={handleAddComment}
      onLikeComment={handleLike}
    />
  );
}`}
      props={[
        {
          name: "comments",
          type: "Comment[]",
          default: "[]",
          description: "Array of comments with optional nested replies",
          required: true,
        },
        {
          name: "currentUserId",
          type: "string",
          default: '""',
          description: "ID of current user (for edit/delete permissions)",
          required: true,
        },
        {
          name: "onAddComment",
          type: "(content: string, parentId?: string) => void",
          default: "undefined",
          description: "Callback when adding comment or reply",
          required: false,
        },
        {
          name: "onEditComment",
          type: "(id: string, content: string) => void",
          default: "undefined",
          description: "Callback when editing a comment",
          required: false,
        },
        {
          name: "onDeleteComment",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when deleting a comment",
          required: false,
        },
        {
          name: "onLikeComment",
          type: "(id: string) => void",
          default: "undefined",
          description: "Callback when liking/unliking a comment",
          required: false,
        },
      ]}
      examples={[]}
    />
  );
}
