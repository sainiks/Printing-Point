
import ProductCard from "@/components/product-card";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from "next";
import StaticTitle from "@/components/animated-title";
import { allProducts } from "@/lib/all-products";

export const metadata: Metadata = {
  title: "Corporate Gifting - Printing Point",
  description: "Bespoke corporate gifting solutions for your business.",
};

const corporateGiftingProducts = allProducts.filter(p => [
  "Gift Sets",
  "Notebooks",
  "Electronics",
].includes(p.category));


export default function CorporateGiftingPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category;
  const products = category 
    ? corporateGiftingProducts.filter(p => p.category === category)
    : corporateGiftingProducts;

  const pageTitle = category || "Corporate Gifting Solutions";
  const pageDescription = category
    ? `Bespoke ${category.toLowerCase()} for your business.`
    : "Elevate your brand with our bespoke corporate gifts. We specialize in creating memorable experiences that reflect your company's prestige and values.";

  const newBackgroundColor = "#203354";
  return (
    <div style={{backgroundColor: newBackgroundColor}} className="min-h-screen">
      <div className="container py-16 md:py-24 text-center">
          <div className="p-8 rounded-lg bg-black/5 backdrop-blur-sm inline-block">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">
              {pageTitle}
            </StaticTitle>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              {pageDescription}
            </p>
          </div>
      </div>
      <div className="container pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <TiltEffect key={product.id}>
              <ProductCard
                productId={product.productId}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                minimumOrder={product.minimumOrder}
                imageHint={product.imageHint}
              />
            </TiltEffect>
          ))}
        </div>
      </div>
    </div>
  );
}
