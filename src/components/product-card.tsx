
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
import { ArrowRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  minimumOrder?: number;
  productId: string;
  categorySlug: string;
};

export default function ProductCard({
  title,
  description,
  imageUrl,
  imageHint,
  minimumOrder,
  productId,
  categorySlug,
}: ProductCardProps) {
  const message = [
    `Title: ${title}`,
    `Product ID: ${productId}`,
    `Description: ${description}`,
    `Minimum Order: ${minimumOrder || 'N/A'}`,
  ].join('\n');

  const inquiryUrl = `/contact?message=${encodeURIComponent(message)}`;

  return (
    <Card className="flex flex-col overflow-visible transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border shadow-lg bg-transparent">
      <CardHeader className="p-6 pt-12">
        <div className="relative aspect-square w-full -mt-20 mx-auto">
          <Image
            src={imageUrl}
            alt={title}
            data-ai-hint={imageHint}
            fill
            className="object-cover rounded-full shadow-2xl border-4 border-background"
          />
        </div>
      </CardHeader>
      <div className="bg-card/70 backdrop-blur-sm p-6 pt-0 flex flex-col flex-1 rounded-lg text-center">
        <CardContent className="p-0 flex-1">
          <CardTitle className="font-headline text-xl text-card-foreground">{title}</CardTitle>
          <p className="mt-2 text-sm font-semibold text-card-foreground/90">Product ID: {productId}</p>
          <CardDescription className="mt-2 text-card-foreground/80">{description}</CardDescription>
          {minimumOrder && (
            <p className="mt-2 text-sm text-muted-foreground">Minimum Order: {minimumOrder}</p>
          )}
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button asChild className="w-full bg-[#FDF5EF] text-[#221A36] hover:bg-[#FDF5EF]/90">
            <Link href={inquiryUrl}>
              Add to Inquiry <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
