"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "./Logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description: "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
  {
    title: "Test",
    href: "/test2",
    description:
      "test test test test test test test test test test test test",
  },
]

export function Header() {
  return (
    <div>
      <div className="fixed z-40 top-0 left-0 max-w-[1580px] w-[calc(100vw)] h-[70px]">
        <div className="flex items-center pt-3.5 ml-6">
          <Logo />

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/test3" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ABOUT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/test3" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    PROFILE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>SERVICE</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/test1"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            測試
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            test test test test test test test test test test test test
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/test1" title="Introduction">
                      test test test test test test test test test test test test
                    </ListItem>
                    <ListItem href="/test1" title="Installation">
                      test test test test test test test test test test test test
                    </ListItem>
                    <ListItem href="/test1" title="Typography">
                      test test test test test test test test test test test test
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    CONTACT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
