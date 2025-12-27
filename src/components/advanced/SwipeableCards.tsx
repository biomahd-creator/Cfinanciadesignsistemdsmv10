import { useState, useRef, ReactNode } from "react";
import { Heart, X } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "../../lib/utils";

export interface SwipeableCard {
  id: string;
  content: ReactNode;
}

interface SwipeableCardsProps {
  cards: SwipeableCard[];
  onSwipeLeft?: (card: SwipeableCard) => void;
  onSwipeRight?: (card: SwipeableCard) => void;
  className?: string;
}

export function SwipeableCards({
  cards,
  onSwipeLeft,
  onSwipeRight,
  className,
}: SwipeableCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const currentCard = cards[currentIndex];

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    startPos.current = { x: clientX, y: clientY };
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    setOffset({
      x: clientX - startPos.current.x,
      y: clientY - startPos.current.y,
    });
  };

  const handleEnd = () => {
    setIsDragging(false);

    // Swipe threshold
    if (Math.abs(offset.x) > 100) {
      if (offset.x > 0) {
        // Swipe right (like)
        onSwipeRight?.(currentCard);
      } else {
        // Swipe left (dislike)
        onSwipeLeft?.(currentCard);
      }
      
      // Move to next card
      setTimeout(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1));
        setOffset({ x: 0, y: 0 });
      }, 200);
    } else {
      // Snap back
      setOffset({ x: 0, y: 0 });
    }
  };

  const rotation = offset.x / 20;
  const opacity = 1 - Math.abs(offset.x) / 300;

  if (currentIndex >= cards.length) {
    return (
      <div className={cn("flex items-center justify-center h-96", className)}>
        <div className="text-center">
          <p className="text-lg font-medium mb-2">No more cards</p>
          <p className="text-sm text-muted-foreground">You've reviewed all cards!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-96 w-full max-w-sm", className)}>
      {/* Indicators */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {offset.x > 50 && (
          <div className="absolute top-8 right-8 bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg rotate-12">
            <Heart className="h-6 w-6" />
          </div>
        )}
        {offset.x < -50 && (
          <div className="absolute top-8 left-8 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg -rotate-12">
            <X className="h-6 w-6" />
          </div>
        )}
      </div>

      {/* Cards Stack */}
      <div className="absolute inset-0">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => {
          const isTop = index === 0;
          const scale = 1 - index * 0.05;
          const yOffset = index * 10;

          return (
            <Card
              key={card.id}
              className={cn(
                "absolute inset-0 cursor-grab active:cursor-grabbing shadow-elevation-3",
                isTop && "z-20"
              )}
              style={{
                transform: isTop
                  ? `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`
                  : `translateY(${yOffset}px) scale(${scale})`,
                opacity: isTop ? opacity : 1,
                transition: isDragging && isTop ? "none" : "transform 0.3s ease, opacity 0.3s ease",
              }}
              onMouseDown={(e) => isTop && handleStart(e.clientX, e.clientY)}
              onMouseMove={(e) => isTop && handleMove(e.clientX, e.clientY)}
              onMouseUp={() => isTop && handleEnd()}
              onMouseLeave={() => isTop && setIsDragging(false)}
              onTouchStart={(e) => isTop && handleStart(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchMove={(e) => isTop && handleMove(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchEnd={() => isTop && handleEnd()}
            >
              <div className="p-6 h-full overflow-y-auto">
                {card.content}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Card Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
        {currentIndex + 1} / {cards.length}
      </div>
    </div>
  );
}
