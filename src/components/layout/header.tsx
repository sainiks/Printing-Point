
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { allProducts, mainCategories } from "@/lib/all-products";

const navLinks = [
  { href: "/", label: "Home" },
  ...mainCategories.map(category => ({
    href: `/categories/${category.slug}`,
    label: category.title,
  })),
];


function NavMenu() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = React.useState(mainCategories[0].title);

  const subCategoriesForActive = [...new Set(
    allProducts
      .filter(p => p.category === activeCategory)
      .map(p => p.subCategory)
  )].filter(Boolean) as string[];

  const activeCategorySlug = mainCategories.find(c => c.title === activeCategory)?.slug;


  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                active={pathname === "/"}
                className={navigationMenuTriggerStyle()}
                >
                Home
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
             <div className="grid grid-cols-[1fr_2fr] w-[600px] p-2">
               <ul className="flex flex-col gap-1 border-r border-border pr-2">
                  {mainCategories.map((component, index) => (
                    <li key={component.title} onMouseEnter={() => setActiveCategory(component.title)} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s`}}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/categories/${component.slug}`}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                              activeCategory === component.title ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                            )}
                          >
                            <div className="text-sm font-medium leading-none text-popover-foreground">{component.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                  ))}
                  <Separator className="my-1 bg-border/50 opacity-0 animate-fade-in-up" style={{ animationDelay: `${mainCategories.length * 0.05}s`}} />
                   <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${(mainCategories.length + 1) * 0.05}s`}}>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50"
                      >
                        <div className="text-sm font-medium leading-none text-popover-foreground">View All Products</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
               </ul>
                <div className="p-2 pl-4">
                  <h3 className="text-lg font-semibold font-headline mb-4 text-foreground">{activeCategory}</h3>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {subCategoriesForActive.map((subCategory, index) => {
                       const subCategoryLink = `/products?category=${encodeURIComponent(activeCategory)}&subCategory=${encodeURIComponent(subCategory)}`;
                       return (
                         <li key={subCategory} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s`}}>
                           <NavigationMenuLink asChild>
                             <Link
                               href={subCategoryLink}
                               className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent/50 text-sm text-popover-foreground/80 hover:text-popover-foreground"
                              >
                               {subCategory}
                             </Link>
                           </NavigationMenuLink>
                         </li>
                       )
                    })}
                  </ul>
                  {subCategoriesForActive.length === 0 && activeCategorySlug && (
                     <div className="flex flex-col items-center justify-center h-full text-center p-4">
                       <p className="text-sm text-muted-foreground mb-4">No sub-categories found. View all products in this category.</p>
                       <Button asChild size="sm">
                          <Link href={`/categories/${activeCategorySlug}`}>View {activeCategory}</Link>
                       </Button>
                     </div>
                  )}
                </div>
             </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Other Services</NavigationMenuTrigger>
          <NavigationMenuContent>
             <ul className="grid w-[250px] gap-1 p-2">
                <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: `0.1s`}}>
                    <NavigationMenuLink asChild>
                        <Link
                        href="/corporate-gifting"
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg [transform:rotateX(0deg)] hover:[transform:rotateX(-10deg)]"
                        )}
                        >
                        <div className="text-sm font-medium leading-none text-popover-foreground">Corporate Gifting</div>
                        </Link>
                    </NavigationMenuLink>
                </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === "/contact"}
              className={navigationMenuTriggerStyle()}
            >
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const isHomePage = pathname === '/';
  const showSolidNav = !isHomePage || isScrolled;


  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      showSolidNav ? "bg-primary shadow-md" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Printing Point Logo" width={32} height={32} className="h-8 w-8" />
          <span className={cn(
            "font-bold font-headline text-lg",
             showSolidNav ? "text-primary-foreground" : "text-white"
          )}>
            Printing Point
          </span>
        </Link>

        <div className="flex items-center gap-4">
            <nav className={cn(
              "hidden md:flex",
              showSolidNav ? "text-primary-foreground" : "text-white"
            )}>
                <NavMenu />
            </nav>

            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn(
                      showSolidNav ? "text-primary-foreground hover:bg-white/20" : "text-white hover:bg-white/20"
                    )}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-primary text-primary-foreground">
                    <nav className="grid gap-6 text-lg font-medium mt-6">
                        <SheetClose asChild>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold mb-4"
                        >
                            <Image src="/logo.png" alt="Printing Point Logo" width={32} height={32} className="h-8 w-8" />
                            <span className="font-headline">Printing Point</span>
                        </Link>
                        </SheetClose>
                        {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                            <Link
                            href={link.href}
                            className={cn(
                                "text-primary-foreground/80 transition-colors hover:text-primary-foreground",
                                pathname === link.href && "text-primary-foreground"
                            )}
                            >
                            {link.label}
                            </Link>
                        </SheetClose>
                        ))}
                         <SheetClose asChild>
                            <Link
                            href="/corporate-gifting"
                            className={cn(
                                "text-primary-foreground/80 transition-colors hover:text-primary-foreground",
                                pathname === "/corporate-gifting" && "text-primary-foreground"
                            )}
                            >
                            Corporate Gifting
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link
                            href="/contact"
                            className={cn(
                                "text-primary-foreground/80 transition-colors hover:text-primary-foreground",
                                pathname === "/contact" && "text-primary-foreground"
                            )}
                            >
                            Contact Us
                            </Link>
                        </SheetClose>
                    </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
