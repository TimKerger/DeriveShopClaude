"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchIcon, UserIcon, ShoppingBagIcon, ChevronDownIcon, MenuIcon, XIcon } from "../ui/Icons";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Latest", href: "/collections/all" },
  {
    label: "Clothing",
    href: "/collections/all",
    children: [
      { label: "Shop All", href: "/collections/all" },
      { label: "Shirts", href: "/collections/all?category=shirts" },
      { label: "Jackets", href: "/collections/all?category=jackets" },
      { label: "Pants", href: "/collections/all?category=pants" },
    ],
  },
  {
    label: "Accessories",
    href: "/collections/all?category=accessories",
    children: [
      { label: "Shop All", href: "/collections/all?category=accessories" },
      { label: "Hats", href: "/collections/all?category=accessories" },
      { label: "Belts", href: "/collections/all?category=accessories" },
    ],
  },
  {
    label: "Collections",
    href: "/collections/all",
    children: [
      { label: "Summer 2026", href: "/collections/summer-2026" },
      { label: "Essentials", href: "/collections/essentials" },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-shop mx-auto px-6 flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>

          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-nav hover:opacity-60 transition-opacity"
                >
                  {link.label}
                  {link.children && <ChevronDownIcon className="w-3 h-3" />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white border border-border shadow-sm py-3 px-5 min-w-[180px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1.5 text-[11px] uppercase tracking-nav hover:opacity-60 transition-opacity"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-logo italic text-2xl md:text-3xl">Mutimer</h1>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] uppercase tracking-nav cursor-pointer hover:opacity-60 transition-opacity">
              Luxembourg (EUR) &euro;
              <ChevronDownIcon className="w-3 h-3" />
            </span>
            <button aria-label="Search" className="hover:opacity-60 transition-opacity">
              <SearchIcon className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Account" className="hidden md:block hover:opacity-60 transition-opacity">
              <UserIcon className="w-[18px] h-[18px]" />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:opacity-60 transition-opacity"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBagIcon className="w-[18px] h-[18px]" />
              <span className="absolute -top-1.5 -right-2 bg-black text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
