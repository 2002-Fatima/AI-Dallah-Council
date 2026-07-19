import Link from "next/link";
import { trackCtaClick, trackEarlyAccessClick, trackLoginClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface TrackableLinkProps {
  href: string;
  event: "cta" | "early_access" | "login";
  label: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function TrackableLink({
  href,
  event,
  label,
  className,
  children,
  onClick,
}: TrackableLinkProps) {
  function handleClick() {
    if (event === "cta") trackCtaClick(label, href);
    if (event === "early_access") trackEarlyAccessClick(label);
    if (event === "login") trackLoginClick(label);
    onClick?.();
  }

  return (
    <Link href={href} className={cn(className)} onClick={handleClick}>
      {children}
    </Link>
  );
}
