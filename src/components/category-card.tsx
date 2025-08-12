
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

type CategoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
};

export default function CategoryCard({
  title,
  description,
  imageUrl,
  imageHint,
  link,
}: CategoryCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border-border shadow-lg h-full">
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
          <CardTitle className="font-headline text-xl text-card-foreground">{title}</CardTitle>
          <CardDescription className="mt-2 text-card-foreground/80">{description}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button asChild className="w-full">
            <Link href={link}>
              View Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
