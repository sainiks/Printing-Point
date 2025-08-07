import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  minimumOrder?: number;
};

export default function ProductCard({
  title,
  description,
  imageUrl,
  imageHint,
  minimumOrder,
}: ProductCardProps) {
  const inquiryMessage = `Product: ${title}\nDescription: ${description}\nMinimum Order: ${minimumOrder || 'N/A'}`;
  const inquiryUrl = `/contact?message=${encodeURIComponent(inquiryMessage)}`;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-transparent border-white/20 shadow-none hover:shadow-white/20">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            data-ai-hint={imageHint}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      </CardHeader>
      <div className="bg-card/70 backdrop-blur-sm p-6 flex flex-col flex-1 rounded-b-lg">
        <CardContent className="p-0 flex-1">
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
          {minimumOrder && (
            <p className="mt-2 text-sm text-muted-foreground">Minimum Order: {minimumOrder}</p>
          )}
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button asChild className="w-full" style={{backgroundColor: '#F6F3EE', color: '#203354'}}>
            <Link href={inquiryUrl}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Inquiry
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
