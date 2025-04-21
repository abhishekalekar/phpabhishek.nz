"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open mobile menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Logo size="small" />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close mobile menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <Link href="#services" className="flex items-center text-lg font-medium" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="flex items-center text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link href="#contact" className="flex items-center text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Button asChild className="mt-4">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
