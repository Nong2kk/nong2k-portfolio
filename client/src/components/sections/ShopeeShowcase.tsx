import { CheckCircle2, ShoppingBag } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import shopeeScreenshot from "@assets/Screenshot_2026-03-12_032226_1773260948999.png";

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
            <div className="flex flex-col lg:flex-row">

              {/* Screenshot side */}
              <div className="lg:w-[58%] relative">
                {/* Browser chrome strip */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1f2a] border-b border-white/[0.06]">
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
                <img
                  src={shopeeScreenshot}
                  alt="Shopee store – Hoàng Long Vũ"
                  className="w-full block object-cover object-top max-h-[420px]"
                />
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
              </div>

              {/* Info side */}
              <div className="lg:w-[42%] p-7 md:p-9 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-border/40">
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

                <ul className="space-y-3">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#EE4D2D] mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-foreground/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-2">
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

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
