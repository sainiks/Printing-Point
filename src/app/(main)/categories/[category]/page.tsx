
import { allProducts, mainCategories } from "@/lib/all-products";
import type { Metadata } from 'next';
import StaticTitle from "@/components/animated-title";
import CategoryCard from "@/components/category-card";
import TiltEffect from "@/components/tilt-effect";

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
    // Find the first product in this sub-category to get an image.
    const product = allProducts.find(p => p.subCategory === subCategory);
    return {
      title: subCategory as string,
      link: `/products?category=${encodeURIComponent(categoryInfo.title)}&subCategory=${encodeURIComponent(subCategory as string)}`,
      imageUrl: product?.imageUrl || "https://placehold.co/600x400.png",
      imageHint: product?.imageHint || categoryInfo.title.toLowerCase(),
      description: `Browse our collection of ${subCategory}.`
    }
  });

  const newBackgroundColor = "#203354";

  return (
    <div style={{backgroundColor: newBackgroundColor}} className="min-h-screen">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subCategories.map((subCategory) => (
             <TiltEffect key={subCategory.title}>
                <CategoryCard
                    title={subCategory.title}
                    description={subCategory.description}
                    imageUrl={subCategory.imageUrl}
                    imageHint={subCategory.imageHint}
                    link={subCategory.link}
                />
            </TiltEffect>
          ))}
        </div>
      </div>
    </div>
  );
}
