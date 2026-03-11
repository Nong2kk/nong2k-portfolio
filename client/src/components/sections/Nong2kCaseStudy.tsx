import {
  FileImage,
  TrendingUp,
  Target,
  Link,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";
import gscPerformance from "@assets/Screenshot_2026-03-11_040807_1773178047749.png";
import performanceOverview from "@assets/Screenshot_2026-03-11_040441_1773176713667.png";
import aiOverviewImg from "@assets/image_1773179527780.png";

/* ──────────────────────────────────────────────────
   To add a real screenshot: import the file and assign it below.
   All other slots remain null until you're ready.
   Recommended size: 1200×675px (16:9)
────────────────────────────────────────────────── */
const images = {
  performanceOverview: performanceOverview as string | null,
  semrushData:         null as string | null,  // Optional SEMrush screenshot
  gscPerformance:      gscPerformance as string | null,
  aiOverview:          aiOverviewImg as string | null,
};

/* ── Data ── */
const semrushMetrics = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Organic Traffic",
    value: "15.000+",
    desc: "Lượt truy cập tự nhiên/tháng, tăng +18% trong thời gian dự án",
    color: "from-primary to-[#60A5FA]",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Authority Score",
    value: "14",
    desc: "Cải thiện thông qua tối ưu nội dung và xây dựng liên kết",
    color: "from-[#60A5FA] to-secondary",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Ranking Keywords",
    value: "6.700+",
    desc: "Từ khóa tự nhiên đang xếp hạng trên Google",
    color: "from-secondary to-purple-400",
  },
  {
    icon: <Link className="w-5 h-5" />,
    title: "Backlinks",
    value: "9.200",
    desc: "Backlinks từ 248 domain, hỗ trợ tăng độ uy tín website",
    color: "from-purple-400 to-primary",
  },
];

const aiObservations = [
  'Brand "Hoàng Long Vũ" được trích dẫn trực tiếp trong AI Overview',
  "Bài viết xuất hiện trong phần nguồn tham khảo của Google AI",
  "Nội dung được Google AI sử dụng làm nguồn tổng hợp thông tin",
  "Tăng brand visibility và trust trên SERP",
];

/* ── Shared sub-components ── */
function SectionBadge({ children, color = "from-primary to-[#60A5FA]" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${color} text-white shadow-sm`}>
      {children}
    </span>
  );
}

function ImagePlaceholder({ label, hint, tall }: { label: string; hint?: string; tall?: boolean }) {
  return (
    <div className={`w-full ${tall ? "aspect-[16/7]" : "aspect-video"} rounded-2xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-3 bg-card/30 text-muted-foreground/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group`}>
      <FileImage className="w-10 h-10 group-hover:text-primary/40 transition-colors" />
      <div className="text-center">
        <p className="text-sm font-semibold">{label}</p>
        {hint && <p className="text-xs mt-0.5 opacity-70">{hint}</p>}
      </div>
    </div>
  );
}

/* ── Main component ── */
export function Nong2kCaseStudy() {
  return (
    <section id="nong2k" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/8 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── Header ── */}
        <Reveal>
          <div className="text-center space-y-4">
            <SectionBadge>Case Study</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-3" data-testid="casestudy-title">
              SEO Project – <span className="text-primary">Nong2k</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              SEO Case Study: Organic Growth Strategy
            </p>
          </div>
        </Reveal>

        {/* ── Block 2: SEO Performance Overview ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div>
              <SectionBadge color="from-primary to-[#60A5FA]">SEO Performance Overview</SectionBadge>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-5 max-w-2xl">
                Sau khi tiếp nhận dự án từ 03/2025, website được tối ưu on-page, cấu trúc nội dung và chiến lược từ khóa.
                Organic traffic đạt khoảng 15K/tháng (+18%), với 6.7K từ khóa tự nhiên và 9.2K backlinks từ 248 domain, cho thấy sự cải thiện rõ rệt về độ phủ từ khóa và mức độ hiển thị.
              </p>
            </div>

            {/* Main screenshot */}
            <div data-testid="performance-screenshot">
              {images.performanceOverview
                ? <img src={images.performanceOverview} alt="SEO Performance Overview" className="w-full rounded-2xl shadow-lg" />
                : <ImagePlaceholder label="SEO Performance Dashboard" hint="Ảnh chụp tổng quan hiệu suất (GA4, GSC, hoặc SEMrush)" tall />}
            </div>

            {/* SEO Insight card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/15 border-l-[3px] border-l-primary">
              <div className="mt-0.5 p-2 rounded-xl bg-primary/15 shrink-0">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-2">SEO Insight</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sau khi tối ưu{" "}
                  <span className="font-semibold text-foreground">on-page</span>,{" "}
                  <span className="font-semibold text-foreground">topic cluster</span> và{" "}
                  <span className="font-semibold text-foreground">internal linking</span>{" "}
                  <span className="font-semibold text-primary">từ 03/2025</span>, số lượng từ khóa{" "}
                  <span className="font-semibold text-green-400">Top 10</span> tăng mạnh{" "}
                  <span className="font-semibold text-primary">từ cuối 2025</span>, cho thấy sự cải thiện rõ rệt về mức độ hiển thị và khả năng cạnh tranh trên{" "}
                  <span className="font-semibold text-foreground">SERP</span>.
                </p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ── Block 3: SEMrush Data ── */}
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <SectionBadge color="from-secondary to-purple-400">SEMrush Performance Data</SectionBadge>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {semrushMetrics.map((m, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 border border-border/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                  data-testid={`metric-${m.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${m.color} text-white mb-4 shadow-md`}>
                    {m.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{m.title}</p>
                  <p className="text-2xl font-black text-foreground mb-1">{m.value}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Block 4: AI Overview Visibility ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-secondary/20 space-y-6 relative overflow-hidden" data-testid="ai-overview-section">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <SectionBadge color="from-secondary to-purple-400">
                  <Sparkles className="w-3 h-3" />
                  AI Overview Visibility
                </SectionBadge>
              </div>
              <h3 className="text-lg font-bold text-foreground pt-2">Google AI Overview – Real Case</h3>
            </div>

            {/* Screenshot */}
            <div data-testid="ai-overview-screenshot">
              {images.aiOverview
                ? <img src={images.aiOverview} alt="Google AI Overview – Hoàng Long Vũ" className="w-full rounded-2xl shadow-lg border border-border/30" />
                : <ImagePlaceholder label="Google AI Overview Screenshot" hint="Ảnh chụp AI Overview trên Google Search" />}
            </div>

            {/* Insight paragraph */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/5 border border-secondary/15 border-l-[3px] border-l-secondary">
              <div className="mt-0.5 p-2 rounded-xl bg-secondary/15 shrink-0">
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-secondary mb-2">AI Insight</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Khi tìm kiếm từ khóa{" "}
                  <span className="font-semibold text-foreground">'máy rửa xe gia đình chính hãng'</span>,{" "}
                  Google AI Overview đã trích dẫn nội dung từ website{" "}
                  <span className="font-semibold text-secondary">Hoàng Long Vũ</span>, đồng thời hiển thị bài viết trong phần nguồn tham khảo. Điều này cho thấy nội dung được tối ưu theo hướng{" "}
                  <span className="font-semibold text-foreground">informational content</span>,{" "}
                  <span className="font-semibold text-foreground">entity SEO</span> và cấu trúc rõ ràng, giúp Google AI dễ dàng tổng hợp và sử dụng làm nguồn thông tin.
                </p>
              </div>
            </div>

            {/* Key observations */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-4">Key Observations</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {aiObservations.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ── Block 5: Google Search Console ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 space-y-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60A5FA]/40 to-transparent" />

            {/* Header */}
            <div className="space-y-3">
              <SectionBadge color="from-[#60A5FA] to-primary">Google Search Console</SectionBadge>
              <h3 className="text-lg font-bold text-foreground">Google Search Console Performance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                Dữ liệu so sánh trên Google Search Console cho thấy hiệu quả SEO cải thiện rõ rệt trong giai đoạn{" "}
                <span className="font-semibold text-foreground">05/2025 – 10/2025</span> so với{" "}
                <span className="font-semibold text-foreground">11/2024 – 04/2025</span>. Tổng lượt nhấp tăng từ{" "}
                <span className="font-semibold text-primary">103K lên 128K</span>, lượt hiển thị tăng từ{" "}
                <span className="font-semibold text-primary">2.65M lên 3.54M</span>, đồng thời vị trí trung bình cải thiện từ{" "}
                <span className="font-semibold text-green-400">9.2 xuống 7.9</span>, cho thấy mức độ hiển thị và khả năng thu hút truy cập tự nhiên được cải thiện tích cực.
              </p>
            </div>

            {/* Single full-width screenshot */}
            <div data-testid="gsc-screenshot">
              {images.gscPerformance
                ? <img src={images.gscPerformance} alt="Google Search Console – Performance Comparison" className="w-full rounded-2xl shadow-lg border border-border/20" />
                : <ImagePlaceholder label="GSC Performance Graph" hint="Biểu đồ tổng quan (clicks, impressions, CTR, position)" tall />}
            </div>

            {/* Metrics highlight strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Clicks",            before: "103K",  after: "128K",  up: true  },
                { label: "Impressions",       before: "2.65M", after: "3.54M", up: true  },
                { label: "Avg. Position",     before: "9.2",   after: "7.9",   up: true  },
                { label: "CTR",               before: "3.9%",  after: "3.6%",  up: false },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-2xl bg-card/50 border border-border/40 space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{m.label}</p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm text-muted-foreground">{m.before}</span>
                    <span className="text-xs text-muted-foreground/50">→</span>
                    <span className={`text-sm font-bold ${m.up ? "text-green-400" : "text-muted-foreground"}`}>{m.after}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTR note */}
            <p className="text-xs text-muted-foreground/60 leading-relaxed -mt-2">
              * CTR giảm nhẹ do lượt hiển thị tăng nhanh hơn lượt click, nhưng tổng lượt click và mức độ hiển thị vẫn tăng trưởng tích cực.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
