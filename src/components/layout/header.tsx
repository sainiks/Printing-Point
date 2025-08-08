
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
import { mainCategories } from "@/lib/all-products";

const navLinks = mainCategories.map(category => ({
  href: `/categories/${category.slug}`,
  label: category.title,
}));


function NavMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-1 p-2">
              {mainCategories.map((component, index) => (
                 <li key={component.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`}}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/categories/${component.slug}`}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg [transform:rotateX(0deg)] hover:[transform:rotateX(-10deg)]"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">{component.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
              ))}
              <Separator className="my-1 bg-white/10 opacity-0 animate-fade-in-up" style={{ animationDelay: `${mainCategories.length * 0.1}s`}} />
              <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${(mainCategories.length + 1) * 0.1}s`}}>
                <NavigationMenuLink asChild>
                  <Link
                    href="/products"
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg [transform:rotateX(0deg)] hover:[transform:rotateX(-10deg)]"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">View All Products</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Other Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-1 p-2">
               <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: `0.1s`}}>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg [transform:rotateX(0deg)] hover:[transform:rotateX(-10deg)]"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">Service 1</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Description for service 1.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="opacity-0 animate-fade-in-up" style={{ animationDelay: `0.2s`}}>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg [transform:rotateX(0deg)] hover:[transform:rotateX(-10deg)]"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">Service 2</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Description for service 2.
                      </p>
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Printing Point Logo" width={32} height={32} className="h-8 w-8" />
          <span className="font-bold font-headline text-lg">
            Printing Point
          </span>
        </Link>

        <nav className="hidden md:flex">
          <NavMenu />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
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
    </header>
  );
}
