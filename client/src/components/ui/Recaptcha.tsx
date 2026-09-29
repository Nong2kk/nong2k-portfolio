import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

interface RecaptchaRenderOptions {
  sitekey: string;
  theme?: "light" | "dark";
  size?: "normal" | "compact";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, options: RecaptchaRenderOptions) => number;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad?: () => void;
  }
}

const SCRIPT_SRC = "https://www.google.com/recaptcha/api.js?render=explicit&hl=vi&onload=onRecaptchaLoad";

let scriptPromise: Promise<void> | null = null;

function loadRecaptchaScript(): Promise<void> {
  if (window.grecaptcha?.render) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    window.onRecaptchaLoad = () => resolve();
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Không tải được reCAPTCHA"));
    };
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export interface RecaptchaHandle {
  reset: () => void;
}

interface RecaptchaProps {
  siteKey: string | undefined;
  /** Called with the token when the user solves the challenge, or null when it expires / is reset. */
  onChange: (token: string | null) => void;
}

export const Recaptcha = forwardRef<RecaptchaHandle, RecaptchaProps>(function Recaptcha(
  { siteKey, onChange },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const [loadFailed, setLoadFailed] = useState(false);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current !== null) window.grecaptcha?.reset(widgetIdRef.current);
      onChangeRef.current(null);
    },
  }), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!siteKey || !container) return;

    let cancelled = false;

    const mount = () => {
      loadRecaptchaScript()
        .then(() => {
          if (cancelled || widgetIdRef.current !== null || !window.grecaptcha) return;
          widgetIdRef.current = window.grecaptcha.render(container, {
            sitekey: siteKey,
            theme: "dark",
            size: "normal",
            callback: (token) => onChangeRef.current(token),
            "expired-callback": () => onChangeRef.current(null),
            "error-callback": () => onChangeRef.current(null),
          });
        })
        .catch(() => {
          if (!cancelled) setLoadFailed(true);
        });
    };

    // Load Google's script only when the form is about to scroll into view.
    if (typeof IntersectionObserver === "undefined") {
      mount();
      return () => {
        cancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          mount();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [siteKey]);

  if (!siteKey) {
    return (
      <p className="text-xs text-destructive">Thiếu cấu hình reCAPTCHA (VITE_RECAPTCHA_SITE_KEY).</p>
    );
  }

  return (
    <div>
      <div className="flex justify-start items-center py-0.5 min-h-[82px]">
        <div ref={containerRef} />
      </div>
      {loadFailed && (
        <p className="text-xs text-destructive mt-1">Không tải được reCAPTCHA. Vui lòng tải lại trang.</p>
      )}
    </div>
  );
});
