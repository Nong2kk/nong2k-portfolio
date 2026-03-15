import { CheckCircle2, BarChart2, CalendarDays } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ClickableImage } from "../ui/Lightbox";
import rankingSheet from "@assets/Screenshot_2026-03-12_034354_1773262131125.png";
import planSheet from "@assets/Screenshot_2026-03-12_034722_1773262135084.png";

const seoPlanningGroup = [
  { src: planSheet as string,    alt: "Kế hoạch SEO Quý 4 – Hoàng Long Vũ" },
  { src: rankingSheet as string, alt: "Keyword ranking tracking sheet – Hoàng Long Vũ" },
];

const bullets = [
  "Lập kế hoạch SEO theo quý và theo nhóm sản phẩm",
  "Theo dõi thứ hạng từ khóa và hiệu suất bài viết",
  "Phân tích dữ liệu ranking để điều chỉnh nội dung",
  "Theo dõi KPI SEO: traffic, impressions và vị trí từ khóa",
];

function SheetCard({
  src,
  alt,
  label,
  icon: Icon,
  groupIndex,
}: {
  src: string;
  alt: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  groupIndex: number;
}) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <Icon className="w-3.5 h-3.5 text-primary/70" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
          {label}
        </span>
      </div>
      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-black/30">
        <ClickableImage
          src={src}
          alt={alt}
          className="w-full block object-cover object-top"
          group={seoPlanningGroup}
          groupIndex={groupIndex}
        />
      </div>
    </div>
  );
}

export function SeoPlanningShowcase() {
  return (
    <section id="seo-planning" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-12 flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">SEO Strategy</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              SEO Planning &amp; <span className="text-gradient">Performance Tracking</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-5 max-w-2xl text-base md:text-lg">
              Xây dựng kế hoạch SEO theo tháng/quý, theo dõi thứ hạng từ khóa và đánh giá hiệu suất
              nội dung để điều chỉnh chiến lược tối ưu.
            </p>
          </div>
        </Reveal>

        {/* ── Main card ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl border border-border/40 overflow-hidden">

            {/* Screenshot row */}
            <div className="flex flex-col md:flex-row gap-5 p-6 md:p-8 border-b border-border/40">
              <SheetCard
                src={planSheet}
                alt="Kế hoạch SEO Quý 4 – Hoàng Long Vũ"
                label="Quarter SEO Plan"
                icon={CalendarDays}
                groupIndex={0}
              />
              <SheetCard
                src={rankingSheet}
                alt="Keyword ranking tracking sheet – Hoàng Long Vũ"
                label="Keyword Ranking Tracker"
                icon={BarChart2}
                groupIndex={1}
              />
            </div>

            {/* Info strip */}
            <div className="flex flex-col md:flex-row gap-6 p-7 md:p-9">

              {/* Title + description */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <BarChart2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Thực chiến</p>
                    <h3 className="text-lg font-bold text-foreground font-display leading-tight">
                      SEO Planning & Performance Tracking
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Xây dựng kế hoạch SEO theo tháng/quý, theo dõi thứ hạng từ khóa và đánh giá hiệu suất
                  nội dung để điều chỉnh chiến lược tối ưu.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SEO Planning", "Keyword Tracking", "KPI Monitoring", "Content Strategy"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <div className="md:w-1/2 md:border-l md:border-border/40 md:pl-8 flex flex-col justify-center">
                <ul className="space-y-3">
                  {bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
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
