"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Box, LogOut, Menu, Package, Settings, ShoppingCart, User, X } from "lucide-react"

export default function DashboardNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/dashboard", label: "Panel", icon: BarChart3 },
    { href: "/dashboard/inventory", label: "Inventario", icon: Box },
    { href: "/dashboard/sales", label: "Ventas", icon: ShoppingCart },
    { href: "/dashboard/purchases", label: "Compras", icon: ShoppingCart },
  ]

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Alternar menú</span>
        </Button>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>InventarioPro</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Cuenta</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/">
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Cerrar Sesión</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Navegación Móvil */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center gap-4 border-b bg-background px-4">
            <Button variant="outline" size="icon" onClick={() => setIsMobileNavOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
            <div className="flex items-center gap-2 font-semibold">
              <Package className="h-6 w-6" />
              <span>InventarioPro</span>
            </div>
          </div>
          <nav className="grid gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive(item.href) ? "bg-muted" : "hover:bg-muted"
                }`}
                onClick={() => setIsMobileNavOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Navegación de Escritorio */}
      <div className="hidden border-r bg-muted/40 md:block">
        <nav className="grid gap-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                isActive(item.href) ? "bg-muted" : "hover:bg-muted"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

