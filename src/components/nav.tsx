"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const links = [
  {
    year: "2025-spring",
    link: "https://emory-hacks-2025-spring.onrender.com",
  },
];

const Nav = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="fixed flex h-14 items-center justify-between top-0 w-screen z-50 backdrop-blur-xl m-0 *:m-0 px-5">
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-mono px-2 py-1 rounded focus:outline-0 w-24 bg-background/20">
              2025 Fall
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {links.map(({ year, link }, i) => (
                <Link key={i} href={link} target="_blank">
                  <DropdownMenuItem className="cursor-pointer">
                    {year}
                    <DropdownMenuShortcut>
                      <ExternalLinkIcon />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        <div className="flex gap-4">
          <NavigationMenuItem>
            <Link href="/">HOME</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://forms.gle/zcG97BnzQRy6yLqW6" target="_blank">
              REGISTER
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
