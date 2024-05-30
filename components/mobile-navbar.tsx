"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar({ user }: MobileNavbarProps) {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="Menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-white border-none">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1"
          >
            <Image
              src={"/icons/logo.svg"}
              width={34}
              height={34}
              alt="EasyBank - Logo"
            />

            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              EasyBank
            </h1>
          </Link>

          <div className="mobile-nav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);

                  return (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.route}
                        className={cn("mobile-nav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={link.imgURL}
                          width={20}
                          height={20}
                          alt={link.label}
                          className={cn({
                            "brightness-[4] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
