import { Monitor, Smartphone, CheckCircle2 } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const highlights = [
  "Responsive trên desktop và mobile",
  "Tối ưu cấu trúc website chuẩn SEO",
  "Bố cục rõ ràng, dễ mở rộng nội dung",
  "Hỗ trợ UX/UI và hiệu suất hiển thị",
];

function DesktopMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/40 bg-[#18191f]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#222330] border-b border-white/[0.06]">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3 bg-[#2c2d3a] rounded-md px-3 py-1 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full border border-white/20 shrink-0" />
          <span className="text-[10px] text-white/30 truncate">https://nong2k.com</span>
        </div>
      </div>

      {/* Website content simulation */}
      <div className="bg-white">
        {/* Nav */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-emerald-500" />
            <div className="w-16 h-2.5 rounded bg-gray-800" />
          </div>
          <div className="hidden sm:flex gap-5">
            {[60, 48, 56, 52, 44].map((w, i) => (
              <div key={i} className="h-2 rounded" style={{ width: w, backgroundColor: i === 0 ? "#10b981" : "#d1d5db" }} />
            ))}
          </div>
          <div className="w-20 h-7 rounded-full bg-emerald-500" />
        </div>

        {/* Hero */}
        <div className="px-6 py-8 bg-gradient-to-br from-emerald-50 to-white">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="w-28 h-2 rounded bg-emerald-300" />
          </div>
          <div className="w-3/4 h-5 rounded bg-gray-800 mb-2" />
          <div className="w-1/2 h-5 rounded bg-gray-800 mb-4" />
          <div className="w-full h-2.5 rounded bg-gray-300 mb-2" />
          <div className="w-5/6 h-2.5 rounded bg-gray-300 mb-2" />
          <div className="w-4/6 h-2.5 rounded bg-gray-300 mb-5" />
          <div className="flex gap-3">
            <div className="w-24 h-8 rounded-full bg-emerald-500" />
            <div className="w-24 h-8 rounded-full border border-gray-300" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="px-6 py-5 bg-gray-50">
          <div className="w-32 h-3 rounded bg-gray-700 mx-auto mb-4" />
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 mb-2.5" />
                <div className="w-20 h-2.5 rounded bg-gray-700 mb-1.5" />
                <div className="w-full h-2 rounded bg-gray-200 mb-1" />
                <div className="w-4/5 h-2 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Content row */}
        <div className="px-6 py-5 bg-white">
          <div className="flex gap-4">
            <div className="w-2/5 bg-emerald-50 rounded-xl h-24 flex items-center justify-center border border-emerald-100">
              <div className="w-10 h-10 rounded-full bg-emerald-200" />
            </div>
            <div className="flex-1 pt-1 space-y-2">
              <div className="w-2/3 h-3 rounded bg-gray-700" />
              <div className="w-full h-2 rounded bg-gray-200" />
              <div className="w-5/6 h-2 rounded bg-gray-200" />
              <div className="w-4/6 h-2 rounded bg-gray-200" />
              <div className="w-20 h-6 rounded-full bg-emerald-500 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="mx-auto w-[190px] sm:w-[210px]">
      {/* Phone shell */}
      <div className="relative rounded-[2.2rem] border-[6px] border-[#2a2b38] bg-[#2a2b38] shadow-2xl shadow-black/50">
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#2a2b38] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[1.6rem] overflow-hidden bg-white">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 pt-6 pb-1 bg-white">
            <span className="text-[8px] font-bold text-gray-800">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-1.5 rounded-sm bg-gray-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded bg-emerald-500" />
              <div className="w-12 h-2 rounded bg-gray-700" />
            </div>
            <div className="space-y-1">
              <div className="w-4 h-0.5 rounded bg-gray-400" />
              <div className="w-4 h-0.5 rounded bg-gray-400" />
              <div className="w-4 h-0.5 rounded bg-gray-400" />
            </div>
          </div>

          {/* Hero mobile */}
          <div className="px-3 py-4 bg-gradient-to-b from-emerald-50 to-white">
            <div className="w-2/3 h-3 rounded bg-gray-800 mb-1.5" />
            <div className="w-1/2 h-3 rounded bg-gray-800 mb-3" />
            <div className="w-full h-1.5 rounded bg-gray-300 mb-1" />
            <div className="w-5/6 h-1.5 rounded bg-gray-300 mb-3" />
            <div className="w-full h-7 rounded-full bg-emerald-500 mb-2" />
            <div className="w-full h-7 rounded-full border border-gray-300" />
          </div>

          {/* Mobile cards */}
          <div className="px-3 py-3 bg-gray-50 space-y-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="w-3/4 h-1.5 rounded bg-gray-700" />
                  <div className="w-full h-1.5 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="px-3 py-2 bg-white flex justify-around border-t border-gray-100">
            {[36, 28, 32, 24].map((w, i) => (
              <div key={i} className="h-1.5 rounded" style={{ width: w, backgroundColor: i === 0 ? "#10b981" : "#e5e7eb" }} />
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-2">
          <div className="w-16 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export function WebsiteBuild() {
  return (
    <section id="website-build" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <Reveal>
          <div className="mb-14 flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Website Build</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Thiết kế &amp; <span className="text-gradient">tối ưu website</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-base md:text-lg">
              Website được thiết kế theo định hướng chuẩn SEO, đảm bảo hiển thị tốt trên cả desktop và mobile,
              đồng thời tối ưu cấu trúc nội dung để hỗ trợ trải nghiệm người dùng.
            </p>
          </div>
        </Reveal>

        {/* ── Preview Showcase ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-6 md:p-10 border border-border/40 mb-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

              {/* Desktop preview */}
              <div className="w-full lg:flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Giao diện Desktop</span>
                </div>
                <DesktopMockup />
              </div>

              {/* Divider on lg */}
              <div className="hidden lg:block w-px h-80 bg-border/40 shrink-0" />
              <div className="block lg:hidden w-full h-px bg-border/40" />

              {/* Mobile preview */}
              <div className="w-full lg:w-auto lg:shrink-0 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Giao diện Mobile</span>
                </div>
                <MobileMockup />
              </div>

            </div>
          </div>
        </Reveal>

        {/* ── Highlight strip ── */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass-card flex items-start gap-3 p-4 rounded-2xl border border-border/40
                  hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-200"
              >
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
