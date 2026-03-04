import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Cpu, Users, Globe, BarChart3, Shield, Cloud, Bot, Settings
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Solution Delivery",
    desc: "End-to-end digital transformation — from consulting and cloud integration to AI, automation, and cybersecurity. We design, implement, and manage solutions optimized for your industry.",
    href: "/services/solution-delivery",
  },
  {
    icon: Users,
    title: "Talent Solutions",
    desc: "Contract, contract-to-hire, and permanent placement with up to 48-hour turnaround. We find high-demand skill sets across all industries and minimize turnover costs.",
    href: "/services/talent-solutions",
  },
  {
    icon: Globe,
    title: "Offshore Solutions",
    desc: "Access qualified global professionals integrating traditional and emerging technologies with leadership learning programs. Leverage global expertise to drive innovation.",
    href: "/services/offshore-solutions",
  },
  {
    icon: BarChart3,
    title: "Consulting Services",
    desc: "Strategic planning, operations, technology, advanced analytics, corporate finance, mergers and acquisitions. High-end consultation with professionals and infrastructure.",
    href: "/services/consulting",
  },
  {
    icon: Shield,
    title: "Data Analytics",
    desc: "Transform data into actionable insights with cutting-edge analytics tools. Expert data scientists uncover patterns, trends, and correlations for informed decision-making.",
    href: "/services/data-analytics",
  },
  {
    icon: Settings,
    title: "SAP Services",
    desc: "Comprehensive SAP implementation, migration, and optimization. Modernize your ERP systems with S/4HANA, SuccessFactors, Ariba, and other SAP solutions.",
    href: "/services/sap",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Cloud strategy, migration, and managed services across AWS, Azure, and GCP. Modernize your infrastructure with hybrid and multi-cloud architectures.",
    href: "/services/cloud-infrastructure",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "Harness the power of artificial intelligence and intelligent automation to optimize processes, enhance customer experiences, and unlock new revenue streams.",
    href: "/services/ai-automation",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel dark>Our Services</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Comprehensive Solutions for the Digital Era
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              From strategy to execution, we deliver cutting-edge solutions that transform businesses and drive measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                to={service.href}
                className="group flex gap-6 bg-card rounded-xl p-8 shadow-soft hover:shadow-medium border border-border hover:border-accent/30 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground shrink-0">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
