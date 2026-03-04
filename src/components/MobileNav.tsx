import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  links: string[];
}

const sidebar = {
  open: {
    x: 0,
    transition: { type: "tween" as const, duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  closed: {
    x: "-100%",
    transition: { type: "tween" as const, duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const overlay = {
  open: { opacity: 1, transition: { duration: 0.25 } },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.3, ease: "easeOut" as const },
  }),
  closed: {
    opacity: 0,
    x: -16,
    transition: { duration: 0.15 },
  },
};

const MobileNav = ({ links }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  // Auto-close sidebar on scroll
  useEffect(() => {
    if (!open) return;

    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              variants={overlay}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border/60 bg-background/95 backdrop-blur-xl px-6 pt-5 pb-8"
              variants={sidebar}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header: Menu label + close button */}
              <div className="grid grid-cols-3 items-center mb-8">
                <div />
                <span className="text-sm font-semibold text-foreground text-center whitespace-nowrap">
                  Menu
                </span>
                <div className="flex justify-end">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {links.map((s, i) => (
                  <motion.a
                    key={s}
                    href={`#${s}`}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium capitalize text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {s}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
