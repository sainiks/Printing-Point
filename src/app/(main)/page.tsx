import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Luxury gifting products background"
          data-ai-hint="luxury gifts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
            Exquisite Gifts, Expertly Crafted
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Discover bespoke gifting solutions for every occasion. At
            PrintingPoint Luxe, we turn moments into memories.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
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
    </>
  );
}
