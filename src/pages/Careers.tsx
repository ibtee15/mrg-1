import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, MapPin, Users, Heart } from "lucide-react";

const perks = [
  { icon: Briefcase, title: "Growth Opportunities", desc: "Work on complex, cutting-edge projects across industries and technologies." },
  { icon: Users, title: "Collaborative Culture", desc: "Join a passionate team that values innovation, transparency, and partnership." },
  { icon: MapPin, title: "Global Presence", desc: "Work from our offices in New York, Los Angeles, Karachi, or Manila." },
  { icon: Heart, title: "People First", desc: "We invest in our people with training, certifications, and career development." },
];

export default function CareersPage() {
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
            <SectionLabel dark>Careers</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Build Your Career with Us
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              Join a team that solves complex business challenges and delivers transformative solutions for clients worldwide.
            </p>
            <a
              href="https://metaresourcesgroup.zohorecruit.com/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Open Positions <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Section>
        <SectionLabel>Why MRG</SectionLabel>
        <SectionTitle>Why Work With Us</SectionTitle>
        <SectionDescription>
          We offer a dynamic, inclusive environment where you can make a real impact.
        </SectionDescription>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border"
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground mb-5">
                <perk.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{perk.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Explore our current openings and find the role that's right for you.
          </p>
          <a
            href="https://metaresourcesgroup.zohorecruit.com/jobs/Careers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Job Openings <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
