"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  hash: string;
  children: ReactNode;
};

export default function SmoothScrollLink({
  hash,
  children,
  onClick,
  ...props
}: SmoothScrollLinkProps) {
  const pathname = usePathname();
  const href = pathname === "/" ? hash : `/${hash}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || pathname !== "/") {
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", `${window.location.pathname}${hash}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
