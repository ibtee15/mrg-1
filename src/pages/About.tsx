import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import { motion } from "framer-motion";
import { Target, Eye, Handshake, Shield, Users, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Purpose-Driven", desc: "We solve complex business problems with passion and precision." },
  { icon: Eye, title: "Transparency", desc: "We maintain the highest ethical standards in everything we do." },
  { icon: Handshake, title: "Partnership", desc: "We build long-term relationships with clients, not transactions." },
  { icon: Shield, title: "Integrity", desc: "Our success is tied to the responsibility and quality of our work." },
  { icon: Users, title: "People First", desc: "We invest in our people to deliver exceptional client outcomes." },
  { icon: Globe, title: "Global Reach", desc: "Onshore and offshore capabilities across 4 global offices." },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel dark>About Us</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              We Bring Deep Commitment with Industry Expertise
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Meta Resources Group provides businesses with expert delivery teams, solutions architecture, IT staffing and training, including onshore and offshore solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <SectionTitle>Your Partner in Navigating Complex Technology Initiatives</SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Meta Resources Group helps businesses execute complex business and technology initiatives by providing expert delivery teams, solutions architecture, and IT staffing. We specialize in supporting M&A pre-deal planning and post-deal integration with both onshore and offshore capabilities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our passionate and purposeful team solves complex business problems by combining cutting-edge digital solutions with customized client delivery processes. We will work with you to expand your market share, grow revenue, or minimize costs.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl gradient-hero overflow-hidden flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <div className="text-5xl font-display font-bold mb-2">MRG</div>
                <div className="text-xs tracking-[0.25em] uppercase text-primary-foreground/60">Since Inception</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted">
        <SectionLabel>Our Values</SectionLabel>
        <SectionTitle>What Drives Us</SectionTitle>
        <SectionDescription>
          Our core values guide every decision we make and every solution we deliver.
        </SectionDescription>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border"
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground mb-5">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Supplier Commitment */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Our Supplier Commitment</SectionLabel>
          <SectionTitle className="mx-auto">Ethical Standards in Everything We Do</SectionTitle>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Meta Resources Group, we are committed to maintaining the highest ethical standards in everything we do, including how we select and manage our suppliers. As an IT professional services firm, we recognize that our success is closely tied to the integrity, responsibility, and quality of the suppliers with whom we partner.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This commitment reflects our ongoing dedication to delivering excellent services to our clients while fostering sustainability, diversity, and corporate responsibility throughout our supply chain.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
