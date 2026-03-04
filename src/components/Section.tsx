import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`py-16 lg:py-24 ${className}`}
    >
      <div className="container mx-auto px-6">{children}</div>
    </motion.section>
  );
}

// dark=true → renders white text (for use inside gradient-hero sections)
interface LabelProps { children: ReactNode; dark?: boolean; }
interface TitleProps { children: ReactNode; className?: string; dark?: boolean; }
interface DescProps  { children: ReactNode; dark?: boolean; }

export function SectionLabel({ children, dark }: LabelProps) {
  return (
    <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
      dark ? "text-teal-300" : "text-accent"
    }`}>
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = "", dark }: TitleProps) {
  return (
    <h2 className={`text-3xl lg:text-5xl font-display font-bold leading-tight ${
      dark ? "text-white" : "text-foreground"
    } ${className}`}>
      {children}
    </h2>
  );
}

export function SectionDescription({ children, dark }: DescProps) {
  return (
    <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${
      dark ? "text-white/70" : "text-muted-foreground"
    }`}>
      {children}
    </p>
  );
}
