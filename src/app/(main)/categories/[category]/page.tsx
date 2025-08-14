
import { allProducts, mainCategories } from "@/lib/all-products";
import type { Metadata } from 'next';
import StaticTitle from "@/components/animated-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return mainCategories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categoryInfo = mainCategories.find(c => c.slug === params.category);
  const title = categoryInfo ? `${categoryInfo.title} - Printing Point` : 'Category - Printing Point';
  const description = categoryInfo ? `Browse sub-categories within ${categoryInfo.title}.` : 'Browse our product categories.';

  return {
    title,
    description,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryInfo = mainCategories.find(c => c.slug === params.category);
  
  if (!categoryInfo) {
    return <div>Category not found</div>;
  }

  const subCategories = [...new Set(allProducts
    .filter(p => p.category === categoryInfo.title)
    .map(p => p.subCategory))
  ].map(subCategory => {
    return {
      title: subCategory as string,
      link: `/products?category=${encodeURIComponent(categoryInfo.title)}&subCategory=${encodeURIComponent(subCategory as string)}`,
    }
  });

  const newBackgroundColor = "hsl(var(--background))";

  return (
    <div style={{backgroundColor: newBackgroundColor}} className="min-h-screen">
      <div className="container py-16 md:py-24 text-center">
          <div className="p-8 rounded-lg bg-card/5 backdrop-blur-sm inline-block">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              {categoryInfo.title}
            </StaticTitle>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Explore our collection of {categoryInfo.title}.
            </p>
          </div>
      </div>
      <div className="container pb-16 md:pb-24">
        <div className="flex flex-col items-center gap-4">
          {subCategories.map((subCategory) => (
             <Button asChild key={subCategory.title} variant="outline" className="w-full max-w-sm text-lg py-6 bg-primary/10 hover:bg-primary/20">
                <Link href={subCategory.link}>
                  {subCategory.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
