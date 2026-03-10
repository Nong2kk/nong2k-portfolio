import { Reveal } from "../ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="pt-24 pb-6 relative bg-card/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Dự án <span className="text-gradient">Thực chiến</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              Các dự án mình đã trực tiếp triển khai — thể hiện cách mình tiếp cận bài toán, hành động và kết quả đạt được.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
