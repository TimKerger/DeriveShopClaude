"use client";

import Link from "next/link";
import { useState } from "react";
import { XIcon, ChevronDownIcon } from "../ui/Icons";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-logo italic text-xl">Mutimer</span>
          <button onClick={onClose} aria-label="Close menu">
            <XIcon />
          </button>
        </div>

        <nav className="p-6">
          {links.map((link) => (
            <div key={link.label} className="border-b border-border">
              {link.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpanded(expanded === link.label ? null : link.label)
                    }
                    className="flex items-center justify-between w-full py-4 text-xs uppercase tracking-nav font-medium"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`w-3 h-3 transition-transform ${
                        expanded === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded === link.label && (
                    <div className="pb-4 pl-4 space-y-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="block text-xs uppercase tracking-nav text-muted hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-4 text-xs uppercase tracking-nav font-medium"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
