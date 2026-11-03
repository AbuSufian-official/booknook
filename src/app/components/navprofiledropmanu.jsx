"use client"

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { redirect } from "next/navigation"


export function DropdownMenuAvatar() {


  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  async function handelSingOut() {
    await authClient.signOut()
    redirect("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
        <AvatarImage src={`${session?.user?.image}`} alt="shadcn" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar></Button>} />
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <Link href="/account">
            <DropdownMenuItem>
              <BadgeCheckIcon />
              Account
            </DropdownMenuItem>
          </Link>

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handelSingOut} className="text-red-600">
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
