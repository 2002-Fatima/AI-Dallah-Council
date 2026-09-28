import { cn } from "@/lib/utils";

export function BrandAtmosphere({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,170,92,0.09),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(35,183,128,0.08),transparent_30%)]" />
      <div className="absolute -left-12 top-10 h-56 w-56 rounded-full border border-gold/10 bg-gold/5 blur-3xl" />
      <div className="absolute -right-10 bottom-8 h-64 w-64 rounded-full border border-emerald/10 bg-emerald/5 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute left-1/2 top-[18%] h-36 w-[55%] -translate-x-1/2 rounded-[50%] border border-gold/10" />
      <div className="absolute left-1/2 top-[46%] h-52 w-[68%] -translate-x-1/2 rounded-[50%] border border-emerald/10" />
    </div>
  );
}
