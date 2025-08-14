
'use client';

import { allProducts, mainCategories } from '@/lib/all-products';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import StaticTitle from '@/components/animated-title';
import { cn } from '@/lib/utils';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryInfo = mainCategories.find((c) => c.slug === params.category);

  const subCategories = useMemo(() => {
    if (!categoryInfo) return [];
    
    const subCategoryMap = new Map<string, { link: string; imageUrl: string }>();

    allProducts
      .filter((p) => p.category === categoryInfo.title && p.subCategory)
      .forEach((p) => {
        if (!subCategoryMap.has(p.subCategory!)) {
          subCategoryMap.set(p.subCategory!, {
            link: `/products?category=${encodeURIComponent(
              categoryInfo.title
            )}&subCategory=${encodeURIComponent(p.subCategory!)}`,
            imageUrl: p.imageUrl,
          });
        }
      });

    return Array.from(subCategoryMap.entries()).map(([title, data]) => ({
        title,
        ...data
    }));
  }, [categoryInfo]);
  
  const [hoveredImage, setHoveredImage] = useState<string | null>(subCategories[0]?.imageUrl || null);


  if (!categoryInfo) {
    return <div>Category not found</div>;
  }

  const newBackgroundColor = 'hsl(var(--background))';

  return (
    <div style={{ backgroundColor: newBackgroundColor }} className="min-h-screen">
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center gap-4">
            {subCategories.map((subCategory, index) => (
                <Link 
                    href={subCategory.link} 
                    key={subCategory.title}
                    onMouseEnter={() => setHoveredImage(subCategory.imageUrl)}
                    className={cn(
                        "w-full max-w-sm text-lg py-6 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md",
                        "flex items-center justify-center text-foreground hover:text-foreground",
                    )}
                    >
                    {subCategory.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            ))}
            </div>
            <div className="relative h-96 w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg hidden md:block">
               <AnimatePresence>
                 {hoveredImage && (
                    <motion.div
                        key={hoveredImage}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                        src={hoveredImage}
                        alt="Sub-category preview"
                        fill
                        className="object-cover rounded-xl shadow-2xl"
                        />
                    </motion.div>
                 )}
                </AnimatePresence>
                 {!hoveredImage && (
                    <div className="w-full h-full bg-card/10 rounded-xl flex items-center justify-center">
                        <p className="text-muted-foreground">Hover over a category to see a preview</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
