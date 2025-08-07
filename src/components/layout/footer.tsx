import Link from "next/link";
import { Package2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Package2 className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left font-headline">
              PrintingPoint Luxe
            </p>
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PrintingPoint Luxe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
