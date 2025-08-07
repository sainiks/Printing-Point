
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ProductCard from "@/components/product-card";

const bestBuys = [
  {
    id: 1,
    title: "Executive Gift Set",
    description: "A high-end set for valued partners, featuring a crystal decanter and a set of premium glasses.",
    minimumOrder: 10,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "executive crystal gift",
  },
  {
    id: 2,
    title: "The Monarch Pen",
    description: "A symbol of elegance and precision, crafted from solid brass with gold accents.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "luxury pen",
  },
  {
    id: 3,
    title: "Gourmet Gift Basket",
    description: "A curated selection of fine foods and wines for the discerning palate.",
    minimumOrder: 25,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "gourmet food wine",
  },
];

const newArrivals = [
  {
    id: 4,
    title: "Personalized Cufflinks",
    description: "Custom-engraved sterling silver cufflinks for a personal touch.",
    minimumOrder: 20,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "silver cufflinks",
  },
  {
    id: 5,
    title: "Conference Swag Bag",
    description: "Equip attendees with memorable swag, including a branded tote bag and notebook.",
    minimumOrder: 100,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "conference swag",
  },
    {
    id: 6,
    title: "Crystal Desk Clock",
    description: "An exquisite timepiece that adds a touch of class to any workspace.",
    minimumOrder: 15,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "desk clock",
  },
];

const onSale = [
  {
    id: 7,
    title: "Executive Leather Journal",
    description: "Premium full-grain leather journal for your thoughts and ideas. 20% off!",
    minimumOrder: 30,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "leather journal",
  },
    {
    id: 8,
    title: "Wellness & Self-Care Kit",
    description: "Promote well-being with a kit containing an essential oil diffuser and herbal teas. Limited time offer!",
    minimumOrder: 40,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "wellness kit",
  },
  {
    id: 9,
    title: "Holiday Gift Box",
    description: "A festive box filled with seasonal treats, a cozy blanket, and a scented candle. On sale now!",
    minimumOrder: 30,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "holiday gift box",
  },
];


export default function Home() {
  return (
    <div className="printing-press-container">
      <div className="printing-press-frame">
        <div className="press-top"></div>
        <div className="press-opening"></div>
      </div>
      <div className="scrollable-content">
        <section
          className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
              Exquisite Gifts, Expertly Crafted
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Discover bespoke gifting solutions for every occasion. At
              PrintingPoint Luxe, we turn moments into memories.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                Our Philosophy of Gifting
              </h2>
              <p className="text-lg text-muted-foreground">
                At PrintingPoint Luxe, we believe a gift is more than an item—it's a gesture, a story, and a connection. Our mission is to provide impeccably crafted gifts that convey prestige and thoughtfulness. We source the finest materials and partner with skilled artisans to ensure every product we offer is a masterpiece of quality and elegance.
              </p>
              <p className="text-lg text-muted-foreground">
                From corporate milestones to personal celebrations, we are dedicated to making your moments memorable.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/corporate-gifting">Discover Corporate Solutions</Link>
              </Button>
            </div>
            <div className="relative aspect-square">
               <Image
                  src="https://placehold.co/600x600.png"
                  alt="Craftspeople at work"
                  data-ai-hint="artisans workshop"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                Explore Our Collections
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Curated selections for every need, from special deals to our newest arrivals.
              </p>
            </div>
            <Tabs defaultValue="deals" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="deals">Best Buy Deals</TabsTrigger>
                <TabsTrigger value="new">New Products</TabsTrigger>
                <TabsTrigger value="sale">On Sale</TabsTrigger>
              </TabsList>
              <TabsContent value="deals" className="mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bestBuys.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      minimumOrder={product.minimumOrder}
                      imageHint={product.imageHint}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="new" className="mt-12">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newArrivals.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      minimumOrder={product.minimumOrder}
                      imageHint={product.imageHint}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="sale" className="mt-12">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {onSale.map((product) => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      minimumOrder={product.minimumOrder}
                      imageHint={product.imageHint}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Team of designers collaborating"
                data-ai-hint="designers team meeting"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                About PrintingPoint Luxe
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded on a passion for quality and an eye for detail, PrintingPoint Luxe has become a premier destination for bespoke gifting. We believe that a great gift tells a story, and we are here to help you tell yours. Our team is dedicated to sourcing unique, high-quality products and providing exceptional service to create unforgettable moments.
              </p>
              <p className="text-lg text-muted-foreground">
                We are more than just a store; we are your partners in celebration, appreciation, and connection.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
