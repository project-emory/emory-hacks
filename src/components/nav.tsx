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
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
      <NavigationMenuList className="fixed flex items-center top-0 w-screen z-50 border-b m-0 p-2 *:m-0">
        <NavigationMenuItem className="absolute left-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-mono bg-muted px-2 py-1 rounded focus:outline-0 w-24">
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
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
{/*         <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/register">Register</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
