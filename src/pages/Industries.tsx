import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2, Heart, ShoppingCart, Factory, Landmark, Truck, GraduationCap, ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Financial Services",
    desc: "Digital banking, regulatory compliance, risk management, and fintech integration. We help financial institutions modernize operations and enhance customer experiences.",
    areas: ["Core Banking Modernization", "RegTech & Compliance", "Fraud Detection & Prevention", "Payment Systems Integration"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    desc: "EHR implementation, telehealth solutions, healthcare analytics, and HIPAA-compliant infrastructure. Transforming patient care with technology.",
    areas: ["EHR/EMR Implementation", "Telehealth Platforms", "Healthcare Analytics", "HIPAA Compliance"],
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-Commerce",
    desc: "Omnichannel strategy, supply chain optimization, personalization engines, and customer analytics to drive engagement and revenue.",
    areas: ["Omnichannel Commerce", "Supply Chain Optimization", "Customer Analytics", "POS Modernization"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Industry 4.0, IoT integration, predictive maintenance, and smart factory solutions to optimize production and reduce downtime.",
    areas: ["Industry 4.0 & IoT", "Predictive Maintenance", "Quality Management", "Supply Chain Visibility"],
  },
  {
    icon: Landmark,
    name: "Government",
    desc: "Digital citizen services, data governance, cybersecurity, and IT modernization for federal, state, and local agencies.",
    areas: ["Digital Citizen Services", "Data Governance", "Cybersecurity", "Legacy Modernization"],
  },
  {
    icon: Truck,
    name: "Logistics & Transportation",
    desc: "Fleet management, route optimization, real-time tracking, and warehouse automation to improve operational efficiency.",
    areas: ["Fleet Management", "Route Optimization", "Warehouse Automation", "Real-Time Tracking"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    desc: "Learning management systems, student analytics, virtual classrooms, and administrative automation for educational institutions.",
    areas: ["LMS Implementation", "Student Analytics", "Virtual Classrooms", "Administrative Automation"],
  },
];

export default function IndustriesPage() {
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
            <SectionLabel dark>Industries</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Deep Domain Expertise Across Sectors
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              We deliver tailored solutions that address the unique challenges and opportunities in your industry.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="space-y-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-card rounded-xl p-8 lg:p-10 shadow-soft border border-border hover:border-accent/20 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="flex items-start gap-4 lg:w-1/2">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <ind.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-2">
                    {ind.areas.map((area) => (
                      <div key={area} className="bg-muted rounded-md px-3 py-2 text-xs font-medium text-foreground/80">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="gradient-hero py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            We have experience across many more sectors. Let's discuss how we can help your specific industry challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
