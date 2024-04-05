"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNavigation = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[265px] hidden sm:block">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            className="cursor-pointer "
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt="Yo"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              className="max-sm:size-10"
              src={"/icons/logo.svg"}
              width={32}
              height={32}
              alt="Logo"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
              KoolCall
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {SidebarLinks.map((item, index) => {
                  const isActive = pathName === item.route;
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg justify-start max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imageUrl}
                          alt="Link Label"
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavigation;
