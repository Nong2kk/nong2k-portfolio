import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxState {
  open: boolean;
  images: LightboxImage[];
  index: number;
}

interface LightboxContextValue {
  openLightbox: (images: LightboxImage[], index?: number) => void;
}

const LightboxContext = createContext<LightboxContextValue>({
  openLightbox: () => {},
});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LightboxState>({
    open: false,
    images: [],
    index: 0,
  });

  const openLightbox = useCallback((images: LightboxImage[], index = 0) => {
    setState({ open: true, images, index });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const prev = useCallback(() => {
    setState((s) => ({
      ...s,
      index: (s.index - 1 + s.images.length) % s.images.length,
    }));
  }, []);

  const next = useCallback(() => {
    setState((s) => ({
      ...s,
      index: (s.index + 1) % s.images.length,
    }));
  }, []);

  useEffect(() => {
    if (!state.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [state.open, close, prev, next]);

  useEffect(() => {
    if (state.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [state.open]);

  const current = state.images[state.index];
  const hasMultiple = state.images.length > 1;

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}

      <AnimatePresence>
        {state.open && current && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={close}
          >
            {/* Image container */}
            <motion.div
              key={state.index}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl shadow-black/80 border border-white/10"
              />
            </motion.div>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev arrow */}
            {hasMultiple && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next arrow */}
            {hasMultiple && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Counter */}
            {hasMultiple && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white text-xs font-medium">
                {state.index + 1} / {state.images.length}
              </div>
            )}

            {/* Alt text caption */}
            {current.alt && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 mt-2 text-white/60 text-xs text-center max-w-md truncate"
                style={{ bottom: hasMultiple ? "2.5rem" : "1rem" }}
              >
                {current.alt}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  group?: LightboxImage[];
  groupIndex?: number;
  style?: React.CSSProperties;
}

export function ClickableImage({
  src,
  alt,
  className = "",
  group,
  groupIndex = 0,
  style,
}: ClickableImageProps) {
  const { openLightbox } = useLightbox();
  const images = group ?? [{ src, alt }];
  const idx = group ? groupIndex : 0;

  return (
    <div
      className="relative group/img cursor-zoom-in overflow-hidden"
      onClick={() => openLightbox(images, idx)}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-300 group-hover/img:scale-[1.03]`}
        style={style}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/60 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-white text-xs font-semibold border border-white/20 backdrop-blur-sm">
          <ZoomIn className="w-3.5 h-3.5" />
          Xem chi tiết
        </div>
      </div>
    </div>
  );
}
