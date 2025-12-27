import { ComponentShowcase } from "../ui/component-showcase";
import { ImageCropper } from "../advanced/ImageCropper";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";

export function ImageCropperPage() {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/api/placeholder/800/600");
  const [croppedImage, setCroppedImage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (cropped: string) => {
    setCroppedImage(cropped);
  };

  return (
    <ComponentShowcase
      title="Image Cropper"
      description="Crop and resize images with zoom, rotation, and aspect ratio controls"
      category="Advanced Form Inputs"
      preview={
        <div className="w-full max-w-2xl space-y-4">
          <div className="flex gap-4">
            <Button onClick={() => setOpen(true)}>
              <ImageIcon className="mr-2 h-4 w-4" />
              Open Cropper
            </Button>
            <label>
              <Button variant="outline" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </span>
              </Button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {croppedImage && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Cropped Result:</p>
              <img
                src={croppedImage}
                alt="Cropped"
                className="max-w-full rounded-lg border"
              />
            </div>
          )}

          <ImageCropper
            open={open}
            onOpenChange={setOpen}
            imageSrc={imageSrc}
            onCropComplete={handleCropComplete}
          />
        </div>
      }
      code={`import { ImageCropper } from "../advanced/ImageCropper";
import { useState } from "react";

function Example() {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/path/to/image.jpg");

  const handleCropComplete = (croppedImage: string) => {
    console.log("Cropped image:", croppedImage);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Crop Image</button>
      <ImageCropper
        open={open}
        onOpenChange={setOpen}
        imageSrc={imageSrc}
        onCropComplete={handleCropComplete}
      />
    </>
  );
}`}
      usage="Image Cropper allows users to crop, zoom, and rotate images with precise controls. Supports multiple aspect ratios and provides real-time preview. Perfect for profile pictures, product images, and document uploads."
      usageCode={`import { ImageCropper } from "../advanced/ImageCropper";
import { useState } from "react";

function ProfilePictureUpload() {
  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = (croppedImage: string) => {
    // Upload to server or use locally
    uploadToServer(croppedImage);
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <ImageCropper
        open={open}
        onOpenChange={setOpen}
        imageSrc={imageSrc}
        onCropComplete={handleCrop}
      />
    </>
  );
}`}
      props={[
        {
          name: "open",
          type: "boolean",
          default: "false",
          description: "Controls dialog visibility",
          required: true,
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          default: "undefined",
          description: "Callback when dialog opens/closes",
          required: true,
        },
        {
          name: "imageSrc",
          type: "string",
          default: '""',
          description: "Source URL or base64 string of image to crop",
          required: true,
        },
        {
          name: "onCropComplete",
          type: "(croppedImage: string) => void",
          default: "undefined",
          description: "Callback with cropped image (base64 or blob URL)",
          required: true,
        },
      ]}
      examples={[
        {
          title: "Profile Picture Crop",
          description: "Square crop for profile pictures",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Upload a profile picture and crop to 1:1 aspect ratio
                  </p>
                  <Button onClick={() => setOpen(true)}>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Crop Profile Picture
                  </Button>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<ImageCropper
  open={open}
  onOpenChange={setOpen}
  imageSrc={imageSrc}
  onCropComplete={handleCrop}
  defaultAspectRatio="1:1"
/>`,
        },
        {
          title: "Document Scan",
          description: "Free aspect ratio for document scanning",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Scan and crop documents with free aspect ratio
                  </p>
                  <label>
                    <Button variant="outline" asChild>
                      <span>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Document
                      </span>
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<input 
  type="file" 
  accept="image/*" 
  onChange={handleFileChange} 
/>
<ImageCropper
  open={open}
  onOpenChange={setOpen}
  imageSrc={imageSrc}
  onCropComplete={handleCrop}
/>`,
        },
        {
          title: "Product Image (16:9)",
          description: "Wide aspect ratio for product showcases",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Crop product images to 16:9 for banners
                  </p>
                  <Button onClick={() => setOpen(true)} variant="outline">
                    Crop Product Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<ImageCropper
  open={open}
  onOpenChange={setOpen}
  imageSrc={imageSrc}
  onCropComplete={handleCrop}
  defaultAspectRatio="16:9"
/>`,
        },
        {
          title: "Story Format (9:16)",
          description: "Vertical crop for social media stories",
          preview: (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Crop images for Instagram/Facebook stories (9:16)
                  </p>
                  <Button onClick={() => setOpen(true)} variant="secondary">
                    Crop for Stories
                  </Button>
                </div>
              </CardContent>
            </Card>
          ),
          code: `<ImageCropper
  open={open}
  onOpenChange={setOpen}
  imageSrc={imageSrc}
  onCropComplete={handleCrop}
  defaultAspectRatio="9:16"
/>`,
        },
      ]}
    />
  );
}
