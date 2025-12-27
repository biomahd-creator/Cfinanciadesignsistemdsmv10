import { ReactNode, useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface InfiniteScrollProps {
  children: ReactNode;
  onLoadMore: () => Promise<void>;
  hasMore: boolean;
  loader?: ReactNode;
  threshold?: number;
}

export function InfiniteScroll({
  children,
  onLoadMore,
  hasMore,
  loader,
  threshold = 300,
}: InfiniteScrollProps) {
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          await onLoadMore();
          setIsLoading(false);
        }
      },
      { threshold: 0.1, rootMargin: `${threshold}px` }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, onLoadMore, threshold]);

  return (
    <div>
      {children}
      {hasMore && (
        <div ref={observerTarget} className="flex justify-center py-8">
          {loader || (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading more...</span>
            </div>
          )}
        </div>
      )}
      {!hasMore && (
        <div className="text-center py-8 text-muted-foreground text-sm">
          No more items to load
        </div>
      )}
    </div>
  );
}
