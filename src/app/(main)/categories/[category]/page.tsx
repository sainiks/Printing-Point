
import { allProducts, mainCategories } from "@/lib/all-products";
import type { Metadata } from 'next';
import StaticTitle from "@/components/animated-title";
import TiltEffect from "@/components/tilt-effect";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
    const product = allProducts.find(p => p.subCategory === subCategory);
    return {
      title: subCategory,
      imageUrl: product?.imageUrl || "https://placehold.co/600x400.png",
      imageHint: product?.imageHint || "product image",
      link: `/products?category=${encodeURIComponent(categoryInfo.title)}&subCategory=${encodeURIComponent(subCategory as string)}`
    }
  });

  const newBackgroundColor = "#203354";

  return (
    <div style={{backgroundColor: newBackgroundColor}}>
      <div className="container py-16 md:py-24 text-center">
          <div className="p-8 rounded-lg bg-black/5 backdrop-blur-sm inline-block">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">
              {categoryInfo.title}
            </StaticTitle>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our collection of {categoryInfo.title}.
            </p>
          </div>
      </div>
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subCategories.map((subCategory) => (
            <TiltEffect key={subCategory.title}>
              <Link href={subCategory.link}>
                <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-transparent border-white/20 shadow-none hover:shadow-white/20 h-full">
                   <div className="relative aspect-video">
                      <Image
                        src={subCategory.imageUrl}
                        alt={subCategory.title as string}
                        data-ai-hint={subCategory.imageHint}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  <div className="bg-card/70 backdrop-blur-sm p-6 flex flex-col flex-1 rounded-b-lg">
                    <CardContent className="p-0 flex-1 flex items-center justify-center">
                      <CardTitle className="font-headline text-xl text-center">{subCategory.title}</CardTitle>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </TiltEffect>
          ))}
        </div>
      </div>
    </div>
  );
}
