
import ProductCard from "@/components/product-card";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
import StaticTitle from "@/components/animated-title";
import { allProducts, mainCategories } from "@/lib/all-products";
 
export const metadata: Metadata = {
  title: 'Our Products - Printing Point',
  description: 'Browse our collection of exquisite gifting products.',
}

export default function ProductsPage({ searchParams }: { searchParams?: { category?: string, subCategory?: string } }) {
  const category = searchParams?.category;
  const subCategory = searchParams?.subCategory;

  let products = allProducts;

  if (subCategory) {
    products = allProducts.filter(p => p.subCategory === subCategory);
  } else if (category) {
    products = allProducts.filter(p => p.category === category);
  }
  
  const pageTitle = subCategory || category || "Our Products";
  const pageDescription = subCategory 
    ? `Explore our collection of ${subCategory}.`
    : category
    ? `Explore our collection of ${category}.`
    : "Explore our curated collection of fine gifts, perfect for any occasion. Each item is selected for its quality and craftsmanship.";

  const newBackgroundColor = "#203354";
  return (
    <div style={{backgroundColor: newBackgroundColor}} className="min-h-screen">
      <div className="container py-16 md:py-24 text-center">
          <div className="p-8 rounded-lg bg-black/5 backdrop-blur-sm inline-block">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">
              {pageTitle}
            </StaticTitle>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {pageDescription}
            </p>
          </div>
      </div>
      <div className="container pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const categoryInfo = mainCategories.find(c => c.title === product.category);
            return (
              <TiltEffect key={product.id}>
                <ProductCard
                  productId={product.productId}
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  minimumOrder={product.minimumOrder}
                  imageHint={product.imageHint}
                  categorySlug={categoryInfo?.slug || ''}
                />
              </TiltEffect>
            )
          })}
        </div>
      </div>
    </div>
  );
}
