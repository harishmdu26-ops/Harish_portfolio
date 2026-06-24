import { motion } from "motion/react";

const snippets = [
  "const useApp = () => {}",
  "SELECT * FROM Orders",
  "public class ErpService {}",
  "<Component />",
  "await axios.post('/api')",
  "INSERT INTO Inventory",
  "useEffect(() => {}, [])",
  "[HttpGet] IActionResult",
];

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient + grid */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* color blobs */}
      <div className="absolute -top-40 -left-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.18_235/0.35),transparent_60%)] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.66_0.22_305/0.3),transparent_60%)] blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.16_180/0.22),transparent_60%)] blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />

      {/* particles */}
      {Array.from({ length: 28 }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = 2 + ((i * 7) % 4);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/60"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        );
      })}

      {/* connection lines svg */}
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 235)" />
            <stop offset="100%" stopColor="oklch(0.66 0.22 305)" />
          </linearGradient>
        </defs>
        <path d="M0,200 Q400,100 800,300 T1600,200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-dash" />
        <path d="M0,600 Q500,400 1000,700 T2000,500" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-dash" style={{ animationDelay: "-3s" }} />
        <path d="M0,900 Q300,1100 700,950 T1500,1050" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-dash" style={{ animationDelay: "-1s" }} />
      </svg>

      {/* floating code snippets */}
      {snippets.map((code, i) => {
        const left = (i * 13 + 7) % 90;
        const top = (i * 23 + 5) % 90;
        return (
          <motion.div
            key={code}
            className="absolute hidden md:block font-mono text-[11px] text-primary/40 whitespace-nowrap"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 10 + (i % 4), repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
          >
            {`{ ${code} }`}
          </motion.div>
        );
      })}

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,oklch(0.1_0.02_265/0.8)_100%)]" />
    </div>
  );
}