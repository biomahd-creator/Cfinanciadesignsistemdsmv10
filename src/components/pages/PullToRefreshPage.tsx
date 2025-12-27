import { ComponentShowcase } from "../ui/component-showcase";
import { PullToRefresh } from "../advanced/PullToRefresh";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";
import { RefreshCw } from "lucide-react";

export function PullToRefreshPage() {
  const handleRefresh = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Refreshed!");
  };

  const sampleItems = [
    { id: 1, title: "New Feature Released", time: "2 hours ago", status: "new" },
    { id: 2, title: "System Maintenance", time: "5 hours ago", status: "important" },
    { id: 3, title: "Weekly Report Available", time: "1 day ago", status: "default" },
    { id: 4, title: "User Feedback Received", time: "2 days ago", status: "default" },
    { id: 5, title: "Database Backup Complete", time: "3 days ago", status: "default" },
  ];

  return (
    <ComponentShowcase
      title="Pull to Refresh"
      description="A mobile-native gesture that allows users to refresh content by pulling down on the screen. Provides visual feedback during the refresh action and is essential for dynamic content apps."
      category="Mobile Components"
      preview={
        <div className="w-full max-w-md mx-auto">
          <div className="bg-muted/20 p-4 rounded-lg mb-4 text-center">
            <RefreshCw className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Pull down on the content below to refresh
            </p>
          </div>
          
          <PullToRefresh onRefresh={handleRefresh}>
            <div className="space-y-3">
              {sampleItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="truncate">{item.title}</p>
                        {item.status === "new" && (
                          <Badge variant="default" className="text-xs">New</Badge>
                        )}
                        {item.status === "important" && (
                          <Badge variant="destructive" className="text-xs">Important</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </PullToRefresh>
        </div>
      }
      code={`import { PullToRefresh } from "@/components/advanced/PullToRefresh";

export function Feed() {
  const handleRefresh = async () => {
    // Fetch new data
    await fetchNewData();
  };
  
  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="space-y-3">
        {items.map(item => (
          <Card key={item.id}>
            <p>{item.title}</p>
          </Card>
        ))}
      </div>
    </PullToRefresh>
  );
}`}
      usage="Pull to Refresh is a standard mobile interaction pattern that gives users control over when content updates. It's particularly useful for feeds, lists, and dashboards where content changes frequently."
      usageCode={`import { PullToRefresh } from "@/components/advanced/PullToRefresh";
import { useState } from "react";

export function NewsFeed() {
  const [articles, setArticles] = useState([]);
  
  const handleRefresh = async () => {
    const newArticles = await fetchLatestArticles();
    setArticles(newArticles);
  };
  
  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="space-y-4">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </PullToRefresh>
  );
}`}
      props={[
        {
          name: "onRefresh",
          type: "() => Promise<void>",
          default: "undefined",
          description: "Async function called when refresh is triggered",
          required: true,
        },
        {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Content that can be pulled to refresh",
          required: true,
        },
        {
          name: "threshold",
          type: "number",
          default: "80",
          description: "Pull distance in pixels to trigger refresh",
          required: false,
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disable pull to refresh functionality",
          required: false,
        },
        {
          name: "refreshingText",
          type: "string",
          default: '"Refreshing..."',
          description: "Text shown during refresh",
          required: false,
        },
      ]}
      examples={[
        {
          title: "News Feed",
          description: "Pull to refresh latest news articles",
          preview: (
            <div className="w-full max-w-md mx-auto">
              <PullToRefresh onRefresh={handleRefresh}>
                <div className="space-y-3">
                  <Card className="p-4">
                    <Badge className="mb-2">Technology</Badge>
                    <h3 className="mb-2">AI Breakthrough in Healthcare</h3>
                    <p className="text-sm text-muted-foreground">
                      New research shows promising results in early disease detection...
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">10 minutes ago</p>
                  </Card>
                  
                  <Card className="p-4">
                    <Badge className="mb-2">Business</Badge>
                    <h3 className="mb-2">Market Update: Tech Stocks Rise</h3>
                    <p className="text-sm text-muted-foreground">
                      Technology sector shows strong growth in Q4...
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">1 hour ago</p>
                  </Card>
                  
                  <Card className="p-4">
                    <Badge className="mb-2">Science</Badge>
                    <h3 className="mb-2">Climate Study Reveals New Findings</h3>
                    <p className="text-sm text-muted-foreground">
                      Researchers publish comprehensive data on ocean temperatures...
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">3 hours ago</p>
                  </Card>
                </div>
              </PullToRefresh>
            </div>
          ),
          code: `<PullToRefresh onRefresh={fetchLatestNews}>
  <div className="space-y-3">
    {articles.map(article => (
      <Card key={article.id} className="p-4">
        <Badge>{article.category}</Badge>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
      </Card>
    ))}
  </div>
</PullToRefresh>`,
        },
        {
          title: "Social Media Timeline",
          description: "Refresh social feed with user posts",
          preview: (
            <div className="w-full max-w-md mx-auto">
              <PullToRefresh onRefresh={handleRefresh}>
                <div className="space-y-3">
                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>John Doe</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <p>Just launched our new product! 🚀 Excited to share this with everyone.</p>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>Alice Smith</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <p>Great team meeting today! Looking forward to our next sprint.</p>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>Mike Brown</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <p>Check out our latest blog post on mobile development best practices!</p>
                  </Card>
                </div>
              </PullToRefresh>
            </div>
          ),
          code: `<PullToRefresh onRefresh={refreshTimeline}>
  <div className="space-y-3">
    {posts.map(post => (
      <Card key={post.id} className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar>
            <AvatarFallback>{post.author.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p>{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.time}</p>
          </div>
        </div>
        <p>{post.content}</p>
      </Card>
    ))}
  </div>
</PullToRefresh>`,
        },
        {
          title: "Email Inbox",
          description: "Refresh to check for new emails",
          preview: (
            <div className="w-full max-w-md mx-auto">
              <PullToRefresh onRefresh={handleRefresh}>
                <div className="space-y-2">
                  <Card className="p-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">SU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm">Support Team</p>
                          <Badge variant="default" className="text-xs">Unread</Badge>
                        </div>
                        <p className="text-xs mb-1">Your ticket has been resolved</p>
                        <p className="text-xs text-muted-foreground truncate">
                          Thank you for contacting us. Your issue has been...
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">MK</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm">Marketing Team</p>
                          <p className="text-xs text-muted-foreground">10:30 AM</p>
                        </div>
                        <p className="text-xs mb-1">New campaign launched!</p>
                        <p className="text-xs text-muted-foreground truncate">
                          Check out our latest marketing campaign for Q4...
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </PullToRefresh>
            </div>
          ),
          code: `<PullToRefresh onRefresh={checkNewEmails}>
  <div className="space-y-2">
    {emails.map(email => (
      <Card key={email.id} className="p-3">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarFallback>{email.from.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between">
              <p className="text-sm">{email.from.name}</p>
              {email.unread && <Badge>Unread</Badge>}
            </div>
            <p className="text-xs">{email.subject}</p>
          </div>
        </div>
      </Card>
    ))}
  </div>
</PullToRefresh>`,
        },
        {
          title: "Task List",
          description: "Refresh task list to sync changes",
          preview: (
            <div className="w-full max-w-md mx-auto">
              <PullToRefresh onRefresh={handleRefresh}>
                <div className="space-y-2">
                  <Card className="p-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" />
                      <div className="flex-1">
                        <p className="text-sm">Complete project proposal</p>
                        <p className="text-xs text-muted-foreground">Due: Today</p>
                      </div>
                      <Badge variant="destructive" className="text-xs">High</Badge>
                    </div>
                  </Card>
                  
                  <Card className="p-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" />
                      <div className="flex-1">
                        <p className="text-sm">Review pull requests</p>
                        <p className="text-xs text-muted-foreground">Due: Tomorrow</p>
                      </div>
                      <Badge className="text-xs">Medium</Badge>
                    </div>
                  </Card>
                  
                  <Card className="p-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked />
                      <div className="flex-1">
                        <p className="text-sm line-through text-muted-foreground">Update documentation</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                      <Badge variant="outline" className="text-xs">Low</Badge>
                    </div>
                  </Card>
                </div>
              </PullToRefresh>
            </div>
          ),
          code: `<PullToRefresh onRefresh={syncTasks}>
  <div className="space-y-2">
    {tasks.map(task => (
      <Card key={task.id} className="p-3">
        <div className="flex items-center gap-3">
          <input type="checkbox" checked={task.completed} />
          <div className="flex-1">
            <p className="text-sm">{task.title}</p>
            <p className="text-xs text-muted-foreground">{task.dueDate}</p>
          </div>
          <Badge>{task.priority}</Badge>
        </div>
      </Card>
    ))}
  </div>
</PullToRefresh>`,
        },
      ]}
    />
  );
}
