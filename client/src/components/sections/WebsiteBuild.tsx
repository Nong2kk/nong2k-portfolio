import { Monitor, Smartphone, CheckCircle2 } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ClickableImage } from "../ui/Lightbox";
import desktopScreenshot from "@assets/Screenshot_2026-03-12_031447_1773260098847.png";
import mobileScreenshot from "@assets/Screenshot_2026-03-12_031824_1773260311252.png";

const websiteGroup = [
  { src: desktopScreenshot as string, alt: "Giao diện Desktop – kienxanharc.vn" },
  { src: mobileScreenshot as string,  alt: "Giao diện Mobile – kienxanharc.vn" },
];

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
          <span className="text-[10px] text-white/30 truncate">https://kienxanharc.vn/du-an/</span>
        </div>
      </div>
      {/* Real screenshot */}
      <ClickableImage
        src={desktopScreenshot}
        alt="Giao diện Desktop – kienxanharc.vn"
        className="w-full block object-cover object-top"
        group={websiteGroup}
        groupIndex={0}
      />
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
        <div className="rounded-[1.6rem] overflow-hidden">
          <ClickableImage
            src={mobileScreenshot}
            alt="Giao diện Mobile – kienxanharc.vn"
            className="w-full block object-cover object-top"
            group={websiteGroup}
            groupIndex={1}
          />
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
