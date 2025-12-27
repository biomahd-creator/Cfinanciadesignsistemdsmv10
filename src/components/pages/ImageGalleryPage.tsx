import { ComponentShowcase } from "../ui/component-showcase";
import { ImageGallery } from "../advanced/ImageGallery";
import { Card } from "../ui/card";

export function ImageGalleryPage() {
  const natureImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Mountain landscape" },
    { id: 2, url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", alt: "Forest path" },
    { id: 3, url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", alt: "Lake reflection" },
    { id: 4, url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", alt: "Sunset beach" },
    { id: 5, url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f", alt: "Snowy mountains" },
    { id: 6, url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6", alt: "Desert dunes" },
  ];

  const portfolioImages = [
    { id: 7, url: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead", alt: "Abstract art 1" },
    { id: 8, url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe", alt: "Abstract art 2" },
    { id: 9, url: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d", alt: "Abstract art 3" },
    { id: 10, url: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191", alt: "Abstract art 4" },
  ];

  return (
    <ComponentShowcase
      title="Image Gallery"
      description="A feature-rich component for displaying collections of images with support for lightbox viewing, thumbnails, navigation, and zoom. Perfect for portfolios, product galleries, and photo albums."
      category="Media Components"
      preview={
        <div className="space-y-8 w-full">
          <Card className="p-6">
            <h3 className="text-lg mb-4">Grid Gallery with Lightbox</h3>
            <ImageGallery images={natureImages} layout="grid" />
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg mb-4">Masonry Layout</h3>
            <ImageGallery images={portfolioImages} layout="masonry" />
          </Card>
        </div>
      }
      code={`import { ImageGallery } from "@/components/advanced/ImageGallery";

const images = [
  { id: 1, url: "/image1.jpg", alt: "Description" },
  { id: 2, url: "/image2.jpg", alt: "Description" },
  // ... more images
];

<ImageGallery images={images} layout="grid" />`}
      usage="Image Gallery is essential for any application that needs to showcase visual content. It provides a professional viewing experience with features like fullscreen mode, keyboard navigation, and touch gestures."
      usageCode={`import { ImageGallery } from "@/components/advanced/ImageGallery";
import { Card } from "@/components/ui/card";

export function ProductGallery() {
  const productImages = [
    { id: 1, url: "/product-front.jpg", alt: "Front view" },
    { id: 2, url: "/product-side.jpg", alt: "Side view" },
    { id: 3, url: "/product-back.jpg", alt: "Back view" },
    { id: 4, url: "/product-detail.jpg", alt: "Detail view" },
  ];
  
  return (
    <Card className="p-6">
      <h3>Product Images</h3>
      <ImageGallery 
        images={productImages} 
        layout="grid"
        columns={2}
      />
    </Card>
  );
}`}
      props={[
        {
          name: "images",
          type: "Array<{id: number, url: string, alt: string}>",
          default: "[]",
          description: "Array of image objects to display",
          required: true,
        },
        {
          name: "layout",
          type: '"grid" | "masonry" | "carousel"',
          default: '"grid"',
          description: "Layout style for the gallery",
          required: false,
        },
        {
          name: "columns",
          type: "number",
          default: "3",
          description: "Number of columns in grid layout",
          required: false,
        },
        {
          name: "showThumbnails",
          type: "boolean",
          default: "true",
          description: "Show thumbnail navigation in lightbox",
          required: false,
        },
        {
          name: "enableZoom",
          type: "boolean",
          default: "true",
          description: "Enable zoom functionality in lightbox",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Product Photography",
          description: "Grid gallery perfect for e-commerce product images",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="mb-4">Product Showcase</h3>
              <ImageGallery 
                images={[
                  { id: 1, url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", alt: "Watch product" },
                  { id: 2, url: "https://images.unsplash.com/photo-1546868871-7041f2a55e12", alt: "Watch detail" },
                  { id: 3, url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d", alt: "Watch angle" },
                  { id: 4, url: "https://images.unsplash.com/photo-1495856458515-0637185db551", alt: "Watch closeup" },
                ]} 
                layout="grid"
                columns={2}
              />
            </Card>
          ),
          code: `<ImageGallery 
  images={productImages} 
  layout="grid"
  columns={2}
  showThumbnails={true}
  enableZoom={true}
/>`,
        },
        {
          title: "Portfolio Grid",
          description: "Clean grid layout for creative portfolio",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="mb-4">Design Portfolio</h3>
              <ImageGallery 
                images={[
                  { id: 1, url: "https://images.unsplash.com/photo-1561070791-2526d30994b5", alt: "Design 1" },
                  { id: 2, url: "https://images.unsplash.com/photo-1558655146-d09347e92766", alt: "Design 2" },
                  { id: 3, url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb", alt: "Design 3" },
                  { id: 4, url: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9", alt: "Design 4" },
                  { id: 5, url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb", alt: "Design 5" },
                  { id: 6, url: "https://images.unsplash.com/photo-1561070791-2526d30994b5", alt: "Design 6" },
                ]} 
                layout="grid"
                columns={3}
              />
            </Card>
          ),
          code: `<ImageGallery 
  images={portfolioImages} 
  layout="grid"
  columns={3}
/>`,
        },
        {
          title: "Travel Photo Album",
          description: "Masonry layout for varied image sizes",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="mb-4">Travel Memories</h3>
              <ImageGallery 
                images={[
                  { id: 1, url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828", alt: "Travel 1" },
                  { id: 2, url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", alt: "Travel 2" },
                  { id: 3, url: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d", alt: "Travel 3" },
                  { id: 4, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Travel 4" },
                ]} 
                layout="masonry"
              />
            </Card>
          ),
          code: `<ImageGallery 
  images={travelPhotos} 
  layout="masonry"
  enableZoom={true}
/>`,
        },
        {
          title: "Event Gallery",
          description: "Showcase event photos in a professional layout",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="mb-4">Conference 2024</h3>
              <ImageGallery 
                images={[
                  { id: 1, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87", alt: "Event 1" },
                  { id: 2, url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b", alt: "Event 2" },
                  { id: 3, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678", alt: "Event 3" },
                  { id: 4, url: "https://images.unsplash.com/photo-1511578314322-379afb476865", alt: "Event 4" },
                  { id: 5, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", alt: "Event 5" },
                  { id: 6, url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2", alt: "Event 6" },
                ]} 
                layout="grid"
                columns={3}
              />
            </Card>
          ),
          code: `<ImageGallery 
  images={eventPhotos} 
  layout="grid"
  columns={3}
  showThumbnails={true}
/>`,
        },
        {
          title: "Real Estate Listing",
          description: "Property photos with carousel preview",
          preview: (
            <Card className="p-6 w-full">
              <h3 className="mb-4">Property Photos</h3>
              <ImageGallery 
                images={[
                  { id: 1, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Living room" },
                  { id: 2, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Kitchen" },
                  { id: 3, url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Bedroom" },
                  { id: 4, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", alt: "Bathroom" },
                ]} 
                layout="carousel"
              />
            </Card>
          ),
          code: `<ImageGallery 
  images={propertyImages} 
  layout="carousel"
  showThumbnails={true}
  enableZoom={true}
/>`,
        },
      ]}
    />
  );
}
