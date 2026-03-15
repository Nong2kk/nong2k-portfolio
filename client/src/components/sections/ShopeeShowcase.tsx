import { CheckCircle2, Monitor, Smartphone, ShoppingBag } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ClickableImage } from "../ui/Lightbox";
import shopeeDesktop from "@assets/Screenshot_2026-03-12_032226_1773260948999.png";
import shopeeMobile from "@assets/z7611331042505_54b7b8d9721c672669a5848a66bd5ce4_1773261392221.jpg";

const shopeeGroup = [
  { src: shopeeDesktop as string, alt: "Shopee store desktop – Hoàng Long Vũ" },
  { src: shopeeMobile as string,  alt: "Shopee store mobile – Hoàng Long Vũ" },
];

const bullets = [
  "Đồng bộ và chuẩn hóa danh mục sản phẩm",
  "Tối ưu product listing và bố cục gian hàng",
  "Trang trí shop để tăng độ tin cậy",
  "Hỗ trợ cải thiện chuyển đổi trên sàn",
];

export function ShopeeShowcase() {
  return (
    <section id="shopee-showcase" className="py-20 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-12 flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">E-Commerce</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Shopee Store <span className="text-gradient">Optimization</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-5 max-w-2xl text-base md:text-lg">
              Tối ưu gian hàng Shopee thông qua đồng bộ danh mục sản phẩm, cải thiện product listing,
              trang trí shop và hỗ trợ tăng trải nghiệm mua sắm nhằm nâng cao khả năng chuyển đổi.
            </p>
          </div>
        </Reveal>

        {/* ── Main card ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl border border-border/40 overflow-hidden">

            {/* ── Device showcase (top) ── */}
            <div className="flex flex-col lg:flex-row gap-0 border-b border-border/40">

              {/* Desktop preview — 65% */}
              <div className="lg:w-[65%] relative border-b lg:border-b-0 lg:border-r border-border/40">
                {/* Label */}
                <div className="flex items-center gap-1.5 px-4 pt-4 pb-2">
                  <Monitor className="w-3.5 h-3.5 text-muted-foreground/60" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    Desktop Preview
                  </span>
                </div>
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1f2a] border-t border-b border-white/[0.06] mx-4 rounded-t-lg">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-2 bg-[#2c2d3a] rounded px-2.5 py-0.5 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full border border-white/20 shrink-0" />
                    <span className="text-[10px] text-white/30 truncate">
                      https://shopee.vn/thiẹtbicôngnghiephoanglong
                    </span>
                  </div>
                </div>
                <div className="relative mx-4 mb-4">
                  <ClickableImage
                    src={shopeeDesktop}
                    alt="Shopee store desktop – Hoàng Long Vũ"
                    className="w-full block object-cover object-top rounded-b-lg max-h-[380px]"
                    group={shopeeGroup}
                    groupIndex={0}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-card/70 to-transparent rounded-b-lg pointer-events-none" />
                </div>
              </div>

              {/* Mobile preview — 35% */}
              <div className="lg:w-[35%] flex flex-col items-center justify-center py-6 px-4 bg-card/30">
                {/* Label */}
                <div className="flex items-center gap-1.5 mb-5">
                  <Smartphone className="w-3.5 h-3.5 text-muted-foreground/60" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    Mobile Preview
                  </span>
                </div>
                {/* Phone frame */}
                <div className="w-[168px] sm:w-[185px]">
                  <div className="relative rounded-[2rem] border-[5px] border-[#2a2b38] bg-[#2a2b38] shadow-2xl shadow-black/50">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#2a2b38] rounded-b-2xl z-10" />
                    {/* Screen */}
                    <div className="rounded-[1.5rem] overflow-hidden">
                      <ClickableImage
                        src={shopeeMobile}
                        alt="Shopee store mobile – Hoàng Long Vũ"
                        className="w-full block object-cover object-top"
                        group={shopeeGroup}
                        groupIndex={1}
                      />
                    </div>
                    {/* Home indicator */}
                    <div className="flex justify-center py-2">
                      <div className="w-12 h-1 rounded-full bg-white/25" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Info strip (bottom) ── */}
            <div className="flex flex-col md:flex-row gap-6 p-7 md:p-9">

              {/* Icon + title + description */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EE4D2D]/10 border border-[#EE4D2D]/20 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5 text-[#EE4D2D]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Thực chiến</p>
                    <h3 className="text-lg font-bold text-foreground font-display leading-tight">
                      Shopee Store Optimization
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tối ưu gian hàng Shopee thông qua đồng bộ danh mục sản phẩm, cải thiện product listing,
                  trang trí shop và hỗ trợ tăng trải nghiệm mua sắm nhằm nâng cao khả năng chuyển đổi.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Shopee", "E-Commerce", "Product Listing", "UX Mua sắm"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#EE4D2D]/10 text-[#EE4D2D] border border-[#EE4D2D]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet points */}
              <div className="md:w-1/2 md:border-l md:border-border/40 md:pl-8 flex flex-col justify-center">
                <ul className="space-y-3">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EE4D2D] mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-foreground/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
