import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { PenBox } from "lucide-react"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import UserMenu from "@/components/user-menu"
import { checkUser } from "@/lib/checkUser"

export async function SiteHeader() {
  await checkUser();
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={[]} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href={siteConfig.links.createEvent}
              rel="noreferrer"
            >
              <Button variant="outline" className="flex items-center gap-2">
                  <PenBox size={18} />Create Event
              </Button>
            </Link>
            <SignedOut >
              <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">
              Login
            </Button>
            </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserMenu />
            </SignedIn>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
