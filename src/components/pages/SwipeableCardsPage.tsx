import { ComponentShowcase } from "../ui/component-showcase";
import { SwipeableCards } from "../advanced/SwipeableCards";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Heart, X, Star, MapPin } from "lucide-react";

export function SwipeableCardsPage() {
  const datingCards = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      location: "New York, NY",
      bio: "Adventure seeker, coffee enthusiast, and aspiring chef",
      image: "SJ",
    },
    {
      id: 2,
      name: "Mike Chen",
      age: 32,
      location: "San Francisco, CA",
      bio: "Tech entrepreneur, yoga instructor, world traveler",
      image: "MC",
    },
    {
      id: 3,
      name: "Emma Williams",
      age: 26,
      location: "Austin, TX",
      bio: "Graphic designer, music lover, weekend hiker",
      image: "EW",
    },
  ];

  const jobCards = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $160k",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignHub",
      location: "New York, NY",
      salary: "$100k - $140k",
      tags: ["Figma", "UI/UX", "Design Systems"],
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$130k - $170k",
      tags: ["Python", "React", "AWS"],
    },
  ];

  const handleSwipeLeft = (id: number) => console.log("Swiped left:", id);
  const handleSwipeRight = (id: number) => console.log("Swiped right:", id);

  return (
    <ComponentShowcase
      title="Swipeable Cards"
      description="Interactive card stack with swipe gestures for quick decision-making. Popular in dating apps, job matching, content discovery, and any scenario requiring rapid binary choices."
      category="Mobile Components"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Dating App Style</p>
            <SwipeableCards onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
              {datingCards.map((profile) => (
                <Card key={profile.id} className="p-6 h-96 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="text-xl">{profile.image}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl">{profile.name}, {profile.age}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {profile.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{profile.bio}</p>
                  </div>
                  <div className="flex justify-center gap-4 pt-4 border-t">
                    <button className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-6 h-6 text-destructive" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-500" />
                    </button>
                  </div>
                </Card>
              ))}
            </SwipeableCards>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Job Matching Style</p>
            <SwipeableCards onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
              {jobCards.map((job) => (
                <Card key={job.id} className="p-6 h-96 flex flex-col">
                  <div className="flex-1">
                    <Badge className="mb-3">{job.location}</Badge>
                    <h3 className="text-xl mb-2">{job.title}</h3>
                    <p className="text-lg mb-3">{job.company}</p>
                    <p className="text-sm mb-4">{job.salary}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <button className="flex-1 py-2 border rounded-md hover:bg-muted">
                      Pass
                    </button>
                    <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-md">
                      Interested
                    </button>
                  </div>
                </Card>
              ))}
            </SwipeableCards>
          </div>
        </div>
      }
      code={`import { SwipeableCards } from "@/components/advanced/SwipeableCards";
import { Card } from "@/components/ui/card";

export function DatingApp() {
  const profiles = [
    { id: 1, name: "Sarah", age: 28, bio: "Adventure seeker..." },
    // ... more profiles
  ];
  
  return (
    <SwipeableCards 
      onSwipeLeft={(id) => console.log("Pass:", id)}
      onSwipeRight={(id) => console.log("Like:", id)}
    >
      {profiles.map(profile => (
        <Card key={profile.id}>
          <h3>{profile.name}, {profile.age}</h3>
          <p>{profile.bio}</p>
        </Card>
      ))}
    </SwipeableCards>
  );
}`}
      usage="Swipeable Cards are perfect for applications that need quick, binary decisions on a stack of items. They provide an intuitive mobile-first interaction that feels natural and engaging."
      usageCode={`import { SwipeableCards } from "@/components/advanced/SwipeableCards";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function ContentDiscovery() {
  const [items, setItems] = useState([...]);
  
  const handleSwipeLeft = (id) => {
    // User passed on this item
    trackAction('skip', id);
  };
  
  const handleSwipeRight = (id) => {
    // User liked this item
    trackAction('like', id);
    saveToFavorites(id);
  };
  
  return (
    <SwipeableCards 
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
    >
      {items.map(item => (
        <Card key={item.id} className="p-6">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      ))}
    </SwipeableCards>
  );
}`}
      props={[
        {
          name: "children",
          type: "ReactNode[]",
          default: "[]",
          description: "Array of card elements to display in the stack",
          required: true,
        },
        {
          name: "onSwipeLeft",
          type: "(id: number) => void",
          default: "undefined",
          description: "Callback when card is swiped left (reject/pass)",
          required: false,
        },
        {
          name: "onSwipeRight",
          type: "(id: number) => void",
          default: "undefined",
          description: "Callback when card is swiped right (accept/like)",
          required: false,
        },
        {
          name: "threshold",
          type: "number",
          default: "150",
          description: "Swipe distance in pixels to trigger action",
          required: false,
        },
        {
          name: "stackSize",
          type: "number",
          default: "3",
          description: "Number of cards visible in the stack",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Product Discovery",
          description: "Swipe through products to build a personalized shopping feed",
          preview: (
            <div className="w-full max-w-sm mx-auto">
              <SwipeableCards onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
                <Card className="p-6 h-96 flex flex-col">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-4xl">👟</p>
                  </div>
                  <h3 className="text-xl mb-2">Running Shoes Pro</h3>
                  <p className="text-muted-foreground mb-3">Lightweight and comfortable running shoes</p>
                  <p className="text-2xl mb-4">$129.99</p>
                  <Badge className="w-fit">Free Shipping</Badge>
                </Card>
                
                <Card className="p-6 h-96 flex flex-col">
                  <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-4xl">🎧</p>
                  </div>
                  <h3 className="text-xl mb-2">Wireless Headphones</h3>
                  <p className="text-muted-foreground mb-3">Premium sound quality with noise cancellation</p>
                  <p className="text-2xl mb-4">$199.99</p>
                  <Badge className="w-fit">Trending</Badge>
                </Card>
              </SwipeableCards>
            </div>
          ),
          code: `<SwipeableCards 
  onSwipeLeft={skipProduct}
  onSwipeRight={saveProduct}
>
  {products.map(product => (
    <Card key={product.id} className="p-6">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-2xl">${product.price}</p>
    </Card>
  ))}
</SwipeableCards>`,
        },
        {
          title: "Recipe Recommendations",
          description: "Discover new recipes by swiping",
          preview: (
            <div className="w-full max-w-sm mx-auto">
              <SwipeableCards onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
                <Card className="p-6 h-96 flex flex-col">
                  <div className="w-full h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-6xl">🍝</p>
                  </div>
                  <h3 className="text-xl mb-2">Spaghetti Carbonara</h3>
                  <p className="text-muted-foreground mb-3">Classic Italian pasta with creamy sauce</p>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline">30 min</Badge>
                    <Badge variant="outline">4 servings</Badge>
                    <Badge variant="outline">Easy</Badge>
                  </div>
                  <p className="text-sm">Eggs, bacon, parmesan, pasta, black pepper</p>
                </Card>
                
                <Card className="p-6 h-96 flex flex-col">
                  <div className="w-full h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-6xl">🥗</p>
                  </div>
                  <h3 className="text-xl mb-2">Caesar Salad</h3>
                  <p className="text-muted-foreground mb-3">Fresh and healthy salad option</p>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline">15 min</Badge>
                    <Badge variant="outline">2 servings</Badge>
                    <Badge variant="outline">Easy</Badge>
                  </div>
                  <p className="text-sm">Romaine, croutons, parmesan, Caesar dressing</p>
                </Card>
              </SwipeableCards>
            </div>
          ),
          code: `<SwipeableCards 
  onSwipeLeft={skipRecipe}
  onSwipeRight={saveRecipe}
>
  {recipes.map(recipe => (
    <Card key={recipe.id}>
      <img src={recipe.image} />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <Badge>{recipe.cookTime}</Badge>
    </Card>
  ))}
</SwipeableCards>`,
        },
        {
          title: "Event Discovery",
          description: "Find events happening near you",
          preview: (
            <div className="w-full max-w-sm mx-auto">
              <SwipeableCards onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
                <Card className="p-6 h-96 flex flex-col">
                  <Badge className="w-fit mb-3">This Weekend</Badge>
                  <h3 className="text-xl mb-2">Summer Music Festival</h3>
                  <p className="text-muted-foreground mb-3">3-day outdoor festival with top artists</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Central Park, New York
                    </p>
                    <p className="text-sm">📅 June 15-17, 2024</p>
                    <p className="text-sm">🎫 $150 - $300</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Music</Badge>
                    <Badge variant="outline">Outdoor</Badge>
                    <Badge variant="outline">Festival</Badge>
                  </div>
                </Card>
              </SwipeableCards>
            </div>
          ),
          code: `<SwipeableCards 
  onSwipeLeft={skipEvent}
  onSwipeRight={interestedInEvent}
>
  {events.map(event => (
    <Card key={event.id}>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.date}</p>
    </Card>
  ))}
</SwipeableCards>`,
        },
        {
          title: "Property Search",
          description: "Swipe through real estate listings",
          preview: (
            <div className="w-full max-w-sm mx-auto">
              <SwipeableCards onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
                <Card className="p-6 h-96 flex flex-col">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-6xl">🏠</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Modern Downtown Loft</h3>
                    <p className="text-2xl mb-2">$2,500/mo</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      Manhattan, New York
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span>🛏️ 2 bed</span>
                      <span>🛁 2 bath</span>
                      <span>📐 1,200 sqft</span>
                    </div>
                  </div>
                </Card>
              </SwipeableCards>
            </div>
          ),
          code: `<SwipeableCards 
  onSwipeLeft={skipProperty}
  onSwipeRight={saveProperty}
>
  {properties.map(property => (
    <Card key={property.id}>
      <img src={property.image} />
      <h3>{property.title}</h3>
      <p className="text-2xl">${property.price}/mo</p>
      <p>{property.location}</p>
      <p>{property.beds} bed • {property.baths} bath</p>
    </Card>
  ))}
</SwipeableCards>`,
        },
      ]}
    />
  );
}
