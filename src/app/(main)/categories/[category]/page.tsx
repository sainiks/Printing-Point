
import { allProducts, mainCategories } from "@/lib/all-products";
import type { Metadata } from 'next';
import StaticTitle from "@/components/animated-title";
import Link from "next/link";

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
      title: subCategory,
      link: `/products?category=${encodeURIComponent(categoryInfo.title)}&subCategory=${encodeURIComponent(subCategory as string)}`
    }
  });

  const newBackgroundColor = "#203354";

  return (
    <div style={{backgroundColor: newBackgroundColor}} className="min-h-[calc(100vh-12rem)]">
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
      <div className="container pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          {subCategories.map((subCategory) => (
            <Link 
              key={subCategory.title}
              href={subCategory.link} 
              className="block p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-white/20 shadow-none hover:shadow-lg hover:border-white/30 hover:bg-card/80 transition-all duration-300 text-center"
            >
              <h2 className="font-headline text-2xl text-primary-foreground">{subCategory.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
