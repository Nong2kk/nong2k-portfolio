import {
  FileImage,
  TrendingUp,
  Target,
  Link,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";
import companyLogo from "@assets/Thiết_kế_chưa_có_tên_(7)_1773172173267.png";
import gscPerformance from "@assets/Screenshot_2026-03-11_040807_1773178047749.png";
import performanceOverview from "@assets/Screenshot_2026-03-11_040441_1773176713667.png";

/* ──────────────────────────────────────────────────
   To add a real screenshot: import the file and assign it below.
   All other slots remain null until you're ready.
   Recommended size: 1200×675px (16:9)
────────────────────────────────────────────────── */
const images = {
  logo:                companyLogo as string | null,
  performanceOverview: performanceOverview as string | null,
  semrushData:         null as string | null,  // Optional SEMrush screenshot
  gscPerformance:      gscPerformance as string | null,
  gscKeywords:         null as string | null,
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

const keywordRankings = [
  { keyword: "[Industrial product keyword]", position: "Top 3",  intent: "Commercial",   improvement: "↑ 47 vị trí" },
  { keyword: "[Product category keyword]",   position: "Top 5",  intent: "Informational", improvement: "↑ 32 vị trí" },
  { keyword: "[Long tail keyword]",          position: "Top 1",  intent: "Transactional", improvement: "↑ 90+ vị trí" },
  { keyword: "[Commercial solution keyword]",position: "Top 10", intent: "Commercial",   improvement: "↑ 21 vị trí" },
  { keyword: "[Brand + service keyword]",    position: "Top 3",  intent: "Navigational", improvement: "↑ 55 vị trí" },
];

const intentColors: Record<string, string> = {
  Commercial:    "text-primary bg-primary/10 border-primary/20",
  Informational: "text-[#60A5FA] bg-[#60A5FA]/10 border-[#60A5FA]/20",
  Transactional: "text-green-400 bg-green-400/10 border-green-400/20",
  Navigational:  "text-secondary bg-secondary/10 border-secondary/20",
};

const performanceHighlights = [
  "Tăng trưởng organic traffic đáng kể sau tối ưu",
  "Cải thiện thứ hạng từ khóa mục tiêu trên Google",
  "Tăng lượt hiển thị và lượt click từ Search Console",
  "Mở rộng phủ sóng từ khóa tự nhiên theo cụm chủ đề",
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

        {/* ── Block 1: Company Overview ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40">
            <SectionBadge color="from-[#60A5FA] to-primary">Company Overview</SectionBadge>

            <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start mt-7">
              {/* Logo */}
              <div data-testid="company-logo">
                {images.logo ? (
                  <div className="w-full rounded-2xl bg-white p-5 flex items-center justify-center shadow-sm">
                    <img
                      src={images.logo}
                      alt="Hoàng Long Vũ – Company Logo"
                      className="w-full h-auto object-contain max-h-20"
                    />
                  </div>
                ) : (
                  <div className="w-full h-24 rounded-2xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-2 bg-card/30 text-muted-foreground/50">
                    <FileImage className="w-7 h-7" />
                    <p className="text-xs font-medium">Company Logo</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Khách hàng</p>
                  <h3 className="text-xl font-bold text-foreground">Vi Na Hoàng Long Vũ</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Vi Na Hoàng Long Vũ là doanh nghiệp hoạt động trong lĩnh vực thương mại và công nghiệp, tập trung cung cấp các sản phẩm và giải pháp chuyên biệt, đồng thời mở rộng hiện diện kỹ thuật số thông qua các kênh trực tuyến.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Dự án tập trung vào cải thiện khả năng hiển thị tự nhiên, nâng cao thứ hạng từ khóa và xây dựng cấu trúc nội dung SEO có khả năng mở rộng để hỗ trợ tăng trưởng kỹ thuật số dài hạn.
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

            {/* Key highlights */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Key Highlights</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {performanceHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
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

        {/* ── Block 4: Keyword Rankings ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 space-y-6">
            <SectionBadge color="from-primary to-[#60A5FA]">Keyword Rankings</SectionBadge>
            <h3 className="text-lg font-bold text-foreground">Top Keyword Ranking Achievements</h3>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm min-w-[520px]" data-testid="keyword-rankings-table">
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
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="py-3.5 pr-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground font-medium">{row.keyword}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-bold text-primary">{row.position}</span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${intentColors[row.intent] ?? ""}`}>
                          {row.intent}
                        </span>
                      </td>
                      <td className="py-3.5 pl-4 text-right">
                        <span className="text-green-400 font-bold text-xs">{row.improvement}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* ── Block 5: Google Search Console ── */}
        <Reveal delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-border/40 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60A5FA]/40 to-transparent" />

            <div>
              <SectionBadge color="from-[#60A5FA] to-primary">Google Search Console</SectionBadge>
              <h3 className="text-lg font-bold text-foreground mt-4 mb-1">Google Search Console Performance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                Dữ liệu từ Google Search Console cho thấy sự cải thiện về lượt hiển thị, lượt click và mức độ hiển thị từ khóa sau khi tối ưu SEO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5" data-testid="gsc-screenshots">
              {images.gscPerformance
                ? <img src={images.gscPerformance} alt="GSC Performance Graph" className="w-full rounded-xl shadow" />
                : <ImagePlaceholder label="GSC Performance Graph" hint="Biểu đồ tổng quan (clicks, impressions, CTR, position)" />}
              {images.gscKeywords
                ? <img src={images.gscKeywords} alt="GSC Keyword Rankings" className="w-full rounded-xl shadow" />
                : <ImagePlaceholder label="GSC Keyword Rankings" hint="Bảng từ khóa xếp hạng trên Search Console" />}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
