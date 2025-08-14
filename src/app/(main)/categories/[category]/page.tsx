
'use client';

import { allProducts, mainCategories } from '@/lib/all-products';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import StaticTitle from '@/components/animated-title';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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
  
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        <div className="flex flex-col items-center gap-4">
          {subCategories.map((subCategory) => (
            <Link 
              href={subCategory.link} 
              key={subCategory.title}
              onMouseEnter={() => setHoveredItem(subCategory.title)}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-full max-w-2xl"
            >
              <motion.div
                layout
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={cn(
                  "relative w-full text-lg py-6 rounded-lg transition-colors duration-300 shadow-md overflow-hidden",
                  "flex items-center justify-center text-foreground hover:text-white",
                  "bg-primary/10 hover:bg-primary/20",
                )}
                style={{
                  minHeight: hoveredItem === subCategory.title ? '12rem' : 'auto',
                }}
              >
                <AnimatePresence>
                  {hoveredItem === subCategory.title && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute inset-0 z-0"
                    >
                      <Image
                        src={subCategory.imageUrl}
                        alt={subCategory.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.span layout="position" className="relative z-10 flex items-center">
                  {subCategory.title}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
