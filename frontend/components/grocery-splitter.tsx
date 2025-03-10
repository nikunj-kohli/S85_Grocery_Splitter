"use client"

import { useState } from "react"
import {
  Bell,
  ChevronRight,
  HelpCircle,
  Home,
  LogOut,
  MapPin,
  Package,
  Search,
  Settings,
  ShoppingBag,
  User,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export default function GrocerySplitter() {
  const [expanded, setExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: Package, label: "Orders", href: "#" },
    { icon: MapPin, label: "Change Address", href: "#" },
    { icon: ShoppingBag, label: "Explore", href: "#" },
    { icon: Users, label: "Contact Us", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: Bell, label: "Notifications", href: "#" },
    { icon: HelpCircle, label: "Help & Support", href: "#" },
    { icon: LogOut, label: "Logout", href: "#" },
  ]

  return (
    <div className="min-h-screen bg-lime-50">
      <SidebarProvider>
        {/* Left Navigation */}
        <Sidebar className="border-r border-lime-200 bg-white">
          <div className="flex h-14 items-center border-b border-lime-200 px-4">
            <h1 className="text-xl font-bold text-lime-700">Grocery Splitter</h1>
          </div>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild tooltip={item.label}>
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-lime-600" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Top Bar */}
          <header className="flex h-14 items-center justify-between border-b border-lime-200 bg-white px-4 md:px-6">
            <div className="flex-1" />
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-lime-500" />
              <Input
                type="search"
                placeholder="Search groceries or friends..."
                className="w-full bg-lime-50 pl-8 focus-visible:ring-lime-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-1 flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-lime-200 text-lime-700">US</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Welcome to Grocery Splitter</CardTitle>
                  <CardDescription>Split grocery expenses with friends and family easily</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-lime-200 bg-lime-50 p-4">
                      <h3 className="mb-2 font-medium">Create a new split</h3>
                      <p className="text-sm text-muted-foreground">Start a new grocery split with friends</p>
                      <Button className="mt-4 bg-lime-600 hover:bg-lime-700">
                        New Split
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="rounded-lg border border-lime-200 bg-lime-50 p-4">
                      <h3 className="mb-2 font-medium">Join an existing split</h3>
                      <p className="text-sm text-muted-foreground">Enter a code to join a friend's grocery split</p>
                      <div className="mt-4 flex gap-2">
                        <Input placeholder="Enter code" className="bg-white" />
                        <Button
                          variant="outline"
                          className="border-lime-600 text-lime-600 hover:bg-lime-100 hover:text-lime-700"
                        >
                          Join
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Splits</CardTitle>
                  <CardDescription>Your recent grocery splits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-md border border-lime-100 p-2">
                        <div>
                          <p className="font-medium">Weekend Groceries</p>
                          <p className="text-xs text-muted-foreground">With Alex and Sarah</p>
                        </div>
                        <p className="text-sm font-medium text-lime-700">${(Math.random() * 100).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Friends</CardTitle>
                  <CardDescription>People you split with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Alex Johnson", "Sarah Williams", "Mike Brown"].map((name, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-md border border-lime-100 p-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-lime-200 text-lime-700">
                            {name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{name}</p>
                          <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 5) + 1} splits</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Your Balance</CardTitle>
                  <CardDescription>Current split balances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="rounded-md border border-green-100 bg-green-50 p-3">
                      <p className="text-sm font-medium text-green-700">Alex owes you</p>
                      <p className="text-xl font-bold text-green-700">$24.50</p>
                    </div>
                    <div className="rounded-md border border-red-100 bg-red-50 p-3">
                      <p className="text-sm font-medium text-red-700">You owe Sarah</p>
                      <p className="text-xl font-bold text-red-700">$12.75</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}

