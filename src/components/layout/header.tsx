
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
      title: "Premium Writing Instruments",
      href: "/products?category=Premium+Writing+Instruments",
      description: "Elegant writing instruments for a lasting impression.",
    },
    {
      title: "Fine Leather Accessories",
      href: "/products?category=Fine+Leather+Accessories",
      description: "Premium journals, wallets, and accessories.",
    },
    {
      title: "Executive Desk Decor",
      href: "/products?category=Executive+Desk+Decor",
      description: "Sophisticated clocks, organizers, and decor.",
    },
    {
      title: "View All Products",
      href: "/products",
      description: "Browse our entire collection of exquisite gifts.",
    }
  ];

const corporateGiftingComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Onboarding & Welcome Kits",
    href: "/corporate-gifting?category=Onboarding+%26+Welcome+Kits",
    description: "Welcome new team members with curated gift sets.",
  },
  {
    title: "Client & Partner Gifting",
    href: "/corporate-gifting?category=Client+%26+Partner+Gifting",
    description: "Strengthen relationships with high-end presents.",
  },
  {
    title: "Event & Conference Solutions",
    href: "/corporate-gifting?category=Event+%26+Conference+Solutions",
    description: "Memorable takeaways for your next corporate event.",
  },
  {
    title: "View All Corporate Gifts",
    href: "/corporate-gifting",
    description: "Explore all corporate gifting solutions.",
  }
];

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/corporate-gifting", label: "Corporate Gifting" },
  { href: "/contact", label: "Contact Us" },
];

function NavMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[250px] gap-3 p-4">
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
            <ul className="flex flex-col w-[250px] gap-3 p-4">
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
          <Package2 className="h-6 w-6" />
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
                    <Package2 className="h-6 w-6" />
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-foreground hover:text-primary focus:bg-primary-foreground focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-primary-foreground/80 group-hover:text-primary/80">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
