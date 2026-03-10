import {
  FileImage,
  TrendingUp,
  Target,
  Link,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";
import companyLogo from "@assets/Thiết_kế_chưa_có_tên_(7)_1773172173267.png";
import semrushBefore from "@assets/image_1773173760503.png";
import semrushAfter from "@assets/image_1773173888107.png";

/* ──────────────────────────────────────────────────
   Replace these URLs with real screenshot paths when available.
   Recommended size: 1200×675px (16:9)
────────────────────────────────────────────────── */
const images = {
  logo: companyLogo as string | null,
  beforeAnalytics: null as string | null,
  beforeSemrush: semrushBefore as string | null,
  afterAnalytics: null as string | null,
  afterSemrush: semrushAfter as string | null,
  gscPerformance: null as string | null,
  gscKeywords: null as string | null,
};

const semrushMetrics = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Organic Traffic",
    value: "+XX%",
    desc: "Tăng trưởng traffic tự nhiên trong thời gian dự án",
    color: "from-primary to-[#60A5FA]",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Authority Score",
    value: "XX → XX",
    desc: "Cải thiện chỉ số authority của tên miền",
    color: "from-[#60A5FA] to-secondary",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Ranking Keywords",
    value: "+XXX",
    desc: "Từ khóa mới vào top 100 kết quả tìm kiếm",
    color: "from-secondary to-purple-400",
  },
  {
    icon: <Link className="w-5 h-5" />,
    title: "Backlinks",
    value: "+XX",
    desc: "Backlink chất lượng được xây dựng",
    color: "from-purple-400 to-primary",
  },
];

const keywordRankings = [
  { keyword: "[Industrial product keyword]", position: "Top 3", intent: "Commercial", improvement: "↑ 47 vị trí" },
  { keyword: "[Product category keyword]", position: "Top 5", intent: "Informational", improvement: "↑ 32 vị trí" },
  { keyword: "[Long tail keyword]", position: "Top 1", intent: "Transactional", improvement: "↑ 90+ vị trí" },
  { keyword: "[Commercial solution keyword]", position: "Top 10", intent: "Commercial", improvement: "↑ 21 vị trí" },
  { keyword: "[Brand + service keyword]", position: "Top 3", intent: "Navigational", improvement: "↑ 55 vị trí" },
];

const intentColors: Record<string, string> = {
  Commercial: "text-primary bg-primary/10 border-primary/20",
  Informational: "text-[#60A5FA] bg-[#60A5FA]/10 border-[#60A5FA]/20",
  Transactional: "text-green-400 bg-green-400/10 border-green-400/20",
  Navigational: "text-secondary bg-secondary/10 border-secondary/20",
};

/* ── Sub-components ── */
function ImagePlaceholder({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="w-full aspect-video rounded-2xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-3 bg-card/30 text-muted-foreground/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group">
      <FileImage className="w-10 h-10 group-hover:text-primary/40 transition-colors" />
      <div className="text-center">
        <p className="text-sm font-semibold">{label}</p>
        {hint && <p className="text-xs mt-0.5 opacity-70">{hint}</p>}
      </div>
    </div>
  );
}

function LogoPlaceholder() {
  return (
    <div className="w-full h-28 rounded-2xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-2 bg-card/30 text-muted-foreground/50 hover:border-primary/30 transition-colors group">
      <FileImage className="w-8 h-8 group-hover:text-primary/40 transition-colors" />
      <p className="text-xs font-medium">Company Logo</p>
    </div>
  );
}

function SectionBadge({ children, color = "from-primary to-[#60A5FA]" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${color} text-white shadow-sm`}>
      {children}
    </span>
  );
}

function PhaseLabel({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${color}`}>
      {label}
    </span>
  );
}

export function Nong2kCaseStudy() {
  return (
    <section id="nong2k" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/8 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto space-y-20">

        {/* ── Section Header ── */}
        <Reveal>
          <div className="text-center space-y-4">
            <SectionBadge color="from-primary to-[#60A5FA]">Case Study</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-3" data-testid="casestudy-title">
              SEO Project – <span className="text-primary">Nong2k</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              SEO Case Study: Organic Growth Strategy
            </p>
          </div>
        </Reveal>

        {/* ── Block 1: Company Overview ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40">
            <div className="flex items-center gap-2 mb-7">
              <SectionBadge color="from-[#60A5FA] to-primary">Company Overview</SectionBadge>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <div data-testid="company-logo">
                {images.logo
                  ? (
                    <div className="w-full rounded-2xl bg-white p-5 flex items-center justify-center shadow-sm">
                      <img
                        src={images.logo}
                        alt="Hoàng Long Vũ – Company Logo"
                        className="w-full h-auto object-contain max-h-24"
                      />
                    </div>
                  )
                  : <LogoPlaceholder />}
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Khách hàng</p>
                  <h3 className="text-xl font-bold text-foreground">Vi Na Hoàng Long Vũ</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Vi Na Hoàng Long Vũ là doanh nghiệp hoạt động trong lĩnh vực thương mại và công nghiệp, tập trung cung cấp các sản phẩm và giải pháp chuyên biệt, đồng thời mở rộng hiện diện kỹ thuật số thông qua các kênh trực tuyến.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dự án tập trung vào việc cải thiện khả năng hiển thị tự nhiên, nâng cao thứ hạng từ khóa và xây dựng cấu trúc nội dung SEO có khả năng mở rộng để hỗ trợ tăng trưởng kỹ thuật số dài hạn.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["On-page SEO", "Content Strategy", "Topic Cluster", "Technical SEO", "Keyword Research"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Block 2: Challenge ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="flex items-center gap-2 mb-6">
              <SectionBadge color="from-orange-500 to-red-500">Challenge</SectionBadge>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl">
              Thách thức chính là tăng lưu lượng tự nhiên và cải thiện khả năng hiển thị trong một lĩnh vực cạnh tranh cao. Website cần định hướng từ khóa tốt hơn, hệ thống liên kết nội bộ chặt chẽ hơn và nội dung được tối ưu để thu hút lưu lượng tìm kiếm có mục đích cao.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Keyword Targeting", desc: "Thiếu định hướng từ khóa có chiến lược" },
                { label: "Internal Linking", desc: "Hệ thống liên kết nội bộ chưa có cấu trúc" },
                { label: "Content Quality", desc: "Nội dung chưa tối ưu theo search intent" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-orange-500/5 border border-orange-500/15">
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Block 3: Before / After ── */}
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-foreground">Before / After Performance</h3>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* BEFORE */}
              <div className="glass-card rounded-3xl p-7 border border-border/40 space-y-4">
                <PhaseLabel label="BEFORE" color="text-red-400 bg-red-400/10 border border-red-400/20" />
                <div className="space-y-4" data-testid="before-analytics">
                  {images.beforeAnalytics
                    ? <img src={images.beforeAnalytics} alt="Before – Google Analytics" className="w-full rounded-xl" />
                    : <ImagePlaceholder label="Google Analytics – Before" hint="Ảnh chụp màn hình GA4 (trước)" />}
                  {images.beforeSemrush
                    ? <img src={images.beforeSemrush} alt="Before – SEMrush" className="w-full rounded-xl" />
                    : <ImagePlaceholder label="SEMrush – Before" hint="Ảnh chụp màn hình SEMrush (trước)" />}
                </div>
              </div>

              {/* AFTER */}
              <div className="glass-card rounded-3xl p-7 border border-primary/20 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <PhaseLabel label="AFTER" color="text-green-400 bg-green-400/10 border border-green-400/20" />
                <div className="space-y-4" data-testid="after-analytics">
                  {images.afterAnalytics
                    ? <img src={images.afterAnalytics} alt="After – Google Analytics" className="w-full rounded-xl" />
                    : <ImagePlaceholder label="Google Analytics – After" hint="Ảnh chụp màn hình GA4 (sau)" />}
                  {images.afterSemrush
                    ? <img src={images.afterSemrush} alt="After – SEMrush" className="w-full rounded-xl" />
                    : <ImagePlaceholder label="SEMrush – After" hint="Ảnh chụp màn hình SEMrush (sau)" />}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Block 4: SEMrush Metrics ── */}
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <SectionBadge color="from-secondary to-purple-400">SEMrush Performance Data</SectionBadge>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {semrushMetrics.map((m, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 border border-border/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
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

        {/* ── Block 5: Keyword Rankings ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 space-y-6">
            <div className="flex items-center gap-2">
              <SectionBadge color="from-primary to-[#60A5FA]">Keyword Rankings</SectionBadge>
            </div>
            <h3 className="text-lg font-bold text-foreground">Top Keyword Ranking Achievements</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="keyword-rankings-table">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left py-3 pr-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Keyword</th>
                    <th className="text-center py-3 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Position</th>
                    <th className="text-center py-3 px-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Search Intent</th>
                    <th className="text-right py-3 pl-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Improvement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {keywordRankings.map((row, i) => (
                    <tr key={i} className="group hover:bg-primary/5 transition-colors">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground font-medium">{row.keyword}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="font-bold text-primary">{row.position}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${intentColors[row.intent] ?? ""}`}>
                          {row.intent}
                        </span>
                      </td>
                      <td className="py-4 pl-4 text-right">
                        <span className="text-green-400 font-bold text-xs">{row.improvement}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* ── Block 6: Google Search Console ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60A5FA]/40 to-transparent" />
            <div className="flex items-center gap-2">
              <SectionBadge color="from-[#60A5FA] to-primary">Google Search Console</SectionBadge>
            </div>
            <div className="grid md:grid-cols-[1fr_auto] gap-4 items-start">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Google Search Console Performance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  Dữ liệu từ Google Search Console cho thấy sự cải thiện về lượt hiển thị, lượt click và mức độ hiển thị từ khóa sau khi tối ưu SEO.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5" data-testid="gsc-screenshots">
              {images.gscPerformance
                ? <img src={images.gscPerformance} alt="GSC Performance Graph" className="w-full rounded-xl" />
                : <ImagePlaceholder label="GSC Performance Graph" hint="Biểu đồ tổng quan GSC (clicks, impressions, CTR, position)" />}
              {images.gscKeywords
                ? <img src={images.gscKeywords} alt="GSC Keyword Rankings" className="w-full rounded-xl" />
                : <ImagePlaceholder label="GSC Keyword Rankings" hint="Bảng từ khóa xếp hạng trên Search Console" />}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
