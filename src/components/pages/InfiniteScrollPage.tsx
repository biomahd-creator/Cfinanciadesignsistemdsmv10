import { ComponentShowcase } from "../ui/component-showcase";
import { InfiniteScroll } from "../advanced/InfiniteScroll";
import { Card } from "../ui/card";
import { useState } from "react";

export function InfiniteScrollPage() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => ({ id: i + 1, title: `Item ${i + 1}` })));

  const loadMore = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: 10 }, (_, i) => ({ 
      id: items.length + i + 1, 
      title: `Item ${items.length + i + 1}` 
    }));
    setItems([...items, ...newItems]);
  };

  return (
    <ComponentShowcase
      title="Infinite Scroll"
      description="Automatically load more content as user scrolls down. Provides seamless browsing experience for long lists and feeds."
      category="Advanced Layouts"
      preview={
        <Card className="p-6 w-full max-w-2xl">
          <div className="mb-4 text-sm text-muted-foreground">Scroll down to load more items</div>
          <InfiniteScroll
            items={items}
            loadMore={loadMore}
            hasMore={items.length < 100}
            height="500px"
            renderItem={(item) => (
              <div key={item.id} className="p-4 border-b last:border-0 hover:bg-muted/50 transition-colors">
                <div className="text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">Added {new Date().toLocaleString()}</div>
              </div>
            )}
          />
        </Card>
      }
      code={`import { InfiniteScroll } from "../advanced/InfiniteScroll";
import { useState } from "react";

const [items, setItems] = useState([...]);

const loadMore = async () => {
  const newItems = await api.fetchMore();
  setItems([...items, ...newItems]);
};

<InfiniteScroll
  items={items}
  loadMore={loadMore}
  hasMore={items.length < totalCount}
  renderItem={(item) => <ItemCard item={item} />}
/>`}
      usage="Infinite scroll eliminates pagination by loading content automatically as users scroll. Perfect for social feeds, search results, and continuous browsing experiences."
      usageCode={`import { InfiniteScroll } from "../advanced/InfiniteScroll";
import { useState, useEffect } from "react";

export function NewsFeed() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const loadMore = async () => {
    const newPosts = await api.getPosts(page + 1);
    setPosts([...posts, ...newPosts]);
    setPage(page + 1);
    setHasMore(newPosts.length > 0);
  };
  
  return (
    <InfiniteScroll
      items={posts}
      loadMore={loadMore}
      hasMore={hasMore}
      renderItem={(post) => <PostCard post={post} />}
    />
  );
}`}
      props={[
        { name: "items", type: "T[]", default: "[]", description: "Array of items to display", required: true },
        { name: "loadMore", type: "() => Promise<void>", default: "undefined", description: "Async function to load more items", required: true },
        { name: "hasMore", type: "boolean", default: "true", description: "Whether more items can be loaded" },
        { name: "renderItem", type: "(item: T) => ReactNode", default: "undefined", description: "Function to render each item", required: true },
        { name: "height", type: "string", default: '"600px"', description: "Container height" },
        { name: "threshold", type: "number", default: "200", description: "Distance from bottom to trigger load (px)" },
      ]}
      examples={[
        {
          title: "Social Feed",
          description: "Infinite scrolling social media posts",
          preview: (
            <Card className="p-4 w-full max-w-xl h-96 overflow-auto">
              {items.slice(0, 12).map((item) => (
                <div key={item.id} className="flex gap-3 p-3 border-b">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div className="flex-1">
                    <div className="text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">Posted 5 minutes ago</div>
                  </div>
                </div>
              ))}
              <div className="p-4 text-center text-xs text-muted-foreground">Loading more...</div>
            </Card>
          ),
          code: `<InfiniteScroll\n  items={posts}\n  loadMore={loadMorePosts}\n  hasMore={hasMore}\n  renderItem={(post) => (\n    <PostCard key={post.id} post={post} />\n  )}\n/>`,
        },
        {
          title: "Product Grid",
          description: "Infinite scroll with grid layout",
          preview: (
            <div className="w-full max-w-4xl h-96 overflow-auto">
              <div className="grid grid-cols-3 gap-4 p-4">
                {items.slice(0, 15).map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="aspect-square bg-muted rounded-lg mb-2" />
                    <div className="text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">$29.99</div>
                  </Card>
                ))}
              </div>
            </div>
          ),
          code: `<InfiniteScroll\n  items={products}\n  loadMore={loadMoreProducts}\n  hasMore={hasMore}\n  renderItem={(product) => <ProductCard product={product} />}\n/>`,
        },
      ]}
    />
  );
}
