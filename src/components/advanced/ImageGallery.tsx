import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "../ui/utils";

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
  thumbnail?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
  className?: string;
}

export function ImageGallery({
  images,
  columns = 3,
  gap = 4,
  className,
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setZoom(1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") setLightboxOpen(false);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={cn("grid gap-4", className)}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap * 4}px`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-screen-xl h-screen p-0 bg-black/95"
          onKeyDown={handleKeyDown}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Image Gallery Viewer</DialogTitle>
            <DialogDescription>
              Viewing image {currentIndex + 1} of {images.length}. Use arrow keys to navigate.
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20"
              onClick={goToPrevious}
              disabled={images.length <= 1}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20"
              onClick={goToNext}
              disabled={images.length <= 1}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-lg p-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <span className="text-white px-3 flex items-center text-sm">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
            </div>

            {/* Image */}
            <img
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.alt || `Image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain transition-transform"
              style={{ transform: `scale(${zoom})` }}
            />

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-screen-lg overflow-x-auto px-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    setZoom(1);
                  }}
                  className={cn(
                    "flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all",
                    index === currentIndex
                      ? "border-primary"
                      : "border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}