import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Printing Point Logo" width={24} height={24} className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left font-headline">
              Printing Point
            </p>
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Printing Point. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
