"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-shop mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="flex border-b border-foreground pb-2 max-w-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-nav font-medium hover:opacity-60 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-nav font-medium mb-5 text-muted">
              Shop
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Shop All", href: "/collections/all" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
                { label: "FAQs", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-nav font-medium mb-5 text-muted">
              Information
            </h4>
            <ul className="space-y-3">
              {[
                "Shipping",
                "Returns / Exchanges",
                "Returns Portal",
                "Terms and Conditions",
                "Privacy Policy",
              ].map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-sm hover:opacity-60 transition-opacity"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <button className="text-[11px] uppercase tracking-nav hover:opacity-60 transition-opacity">
            Luxembourg (EUR) &euro; &darr;
          </button>
          <p className="text-xs text-muted">
            Copyright &copy; {new Date().getFullYear()}, Mutimer. All rights
            reserved. See our{" "}
            <Link href="#" className="underline">
              terms of use
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              privacy notice
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
