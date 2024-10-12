"use client"

import { UserButton } from "@clerk/nextjs"
import { ChartNoAxesGantt } from "lucide-react"

const UserMenu = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          href="/events"
          label="My Events"
          labelIcon={<ChartNoAxesGantt  size={15} />}
        >
          Dashboard
        </UserButton.Link>
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  )
}

export default UserMenu
