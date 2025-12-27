import { useState } from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { Heart, MessageCircle, MoreVertical, Reply, Trash2, Edit2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "../../lib/utils";

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
  likes: number;
  isLiked?: boolean;
  replies?: Comment[];
}

interface CommentsSystemProps {
  comments: Comment[];
  currentUserId: string;
  onAddComment?: (content: string, parentId?: string) => void;
  onEditComment?: (id: string, content: string) => void;
  onDeleteComment?: (id: string) => void;
  onLikeComment?: (id: string) => void;
  className?: string;
}

export function CommentsSystem({
  comments,
  currentUserId,
  onAddComment,
  onEditComment,
  onDeleteComment,
  onLikeComment,
  className,
}: CommentsSystemProps) {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const handleSubmitComment = () => {
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment.trim(), replyingTo || undefined);
      setNewComment("");
      setReplyingTo(null);
    }
  };

  const handleStartEdit = (comment: Comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
  };

  const handleSaveEdit = () => {
    if (editContent.trim() && editingId && onEditComment) {
      onEditComment(editingId, editContent.trim());
      setEditingId(null);
      setEditContent("");
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return date.toLocaleDateString();
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => {
    const isOwner = comment.userId === currentUserId;
    const isEditing = editingId === comment.id;

    return (
      <div className={cn("space-y-3", isReply && "ml-12")}>
        <div className="flex gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.userAvatar} />
            <AvatarFallback>{comment.userName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{comment.userName}</span>
                <span className="text-xs text-muted-foreground">
                  {formatTimestamp(comment.timestamp)}
                </span>
              </div>

              {isOwner && !isEditing && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleStartEdit(comment)}>
                      <Edit2 className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onDeleteComment?.(comment.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-2">
                <Textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="min-h-[80px]"
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSaveEdit}>
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null);
                      setEditContent("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-foreground">{comment.content}</p>

                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-2"
                    onClick={() => onLikeComment?.(comment.id)}
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4",
                        comment.isLiked && "fill-red-500 text-red-500"
                      )}
                    />
                    <span className="text-xs">{comment.likes > 0 && comment.likes}</span>
                  </Button>

                  {!isReply && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-2"
                      onClick={() => setReplyingTo(comment.id)}
                    >
                      <Reply className="h-4 w-4" />
                      <span className="text-xs">Reply</span>
                    </Button>
                  )}

                  {comment.replies && comment.replies.length > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {comment.replies.length} {comment.replies.length === 1 ? "reply" : "replies"}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="space-y-3">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply />
            ))}
          </div>
        )}

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <div className="ml-12 space-y-2">
            <Textarea
              placeholder={`Reply to ${comment.userName}...`}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px]"
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={handleSubmitComment}>
                Reply
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setReplyingTo(null);
                  setNewComment("");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Add Comment */}
      <Card className="p-4">
        <div className="space-y-3">
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              {newComment.length}/500 characters
            </p>
            <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Comment
            </Button>
          </div>
        </div>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Comments ({comments.length})
          </h3>
          <Badge variant="secondary">Sort by: Newest</Badge>
        </div>

        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}

        {comments.length === 0 && (
          <Card className="p-8 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
          </Card>
        )}
      </div>
    </div>
  );
}
