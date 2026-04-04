"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "../ui/Icons";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-[11px] uppercase tracking-nav font-medium">
          {title}
        </span>
        {open ? (
          <MinusIcon className="w-4 h-4 text-muted" />
        ) : (
          <PlusIcon className="w-4 h-4 text-muted" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
