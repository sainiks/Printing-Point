"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2, Menu, Gift, Building2 } from "lucide-react";
import * as React from "react";

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

const productsComponents: { title: string; href: string; description: string }[] =
  [
    {
      title: "Luxury Pens",
      href: "/products",
      description: "Elegant writing instruments for a lasting impression.",
    },
    {
      title: "Leather Goods",
      href: "/products",
      description: "Premium journals, wallets, and accessories.",
    },
    {
      title: "Desk Items",
      href: "/products",
      description: "Sophisticated clocks, organizers, and decor.",
    },
  ];

const corporateGiftingComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Employee Onboarding Kits",
    href: "/corporate-gifting",
    description: "Welcome new team members with curated gift sets.",
  },
  {
    title: "Client Appreciation",
    href: "/corporate-gifting",
    description: "Strengthen relationships with high-end presents.",
  },
  {
    title: "Event & Conference Swag",
    href: "/corporate-gifting",
    description: "Memorable takeaways for your next corporate event.",
  },
];

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/corporate-gifting", label: "Corporate Gifting" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">
            PrintingPoint Luxe
          </span>
        </Link>

        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/products"
                        >
                          <Gift className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium font-headline">
                            All Products
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse our entire collection of exquisite gifts.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {productsComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Corporate Gifting</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/corporate-gifting"
                        >
                          <Building2 className="h-6 w-6 text-primary" />
                          <div className="mb-2 mt-4 text-lg font-medium font-headline">
                            Bespoke Solutions
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Elevate your brand with custom gifts that reflect
                            your values.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {corporateGiftingComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" passHref legacyBehavior>
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
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-6">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold mb-4"
                  >
                    <Package2 className="h-6 w-6 text-primary" />
                    <span className="font-headline">PrintingPoint Luxe</span>
                  </Link>
                </SheetClose>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-muted-foreground transition-colors hover:text-foreground",
                        pathname === link.href && "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
