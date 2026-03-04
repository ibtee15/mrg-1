import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowUpRight, Phone } from "lucide-react";
import { useState } from "react";

const locations = [
  { city: "New York", country: "USA", type: "Headquarters" },
  { city: "Los Angeles", country: "USA", type: "Regional Office" },
  { city: "Karachi", country: "Pakistan", type: "Delivery Center" },
  { city: "Manila", country: "Philippines", type: "Delivery Center" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:Info@MetaResourcesGroup.com?subject=Inquiry from ${formData.name} - ${formData.company}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`;
  };

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
            <SectionLabel dark>Contact Us</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              Ready to transform your business? Get in touch and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionTitle>Send Us a Message</SectionTitle>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service of Interest</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option>Solution Delivery</option>
                  <option>Talent Solutions</option>
                  <option>Offshore Solutions</option>
                  <option>Consulting Services</option>
                  <option>Data Analytics</option>
                  <option>SAP Services</option>
                  <option>Cloud & Infrastructure</option>
                  <option>AI & Automation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-md gradient-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-xl p-8 sticky top-24">
              <h3 className="text-lg font-display font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a href="mailto:Info@MetaResourcesGroup.com" className="flex items-start gap-3 text-sm text-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  Info@MetaResourcesGroup.com
                </a>
                <a
                  href="https://www.linkedin.com/company/meta-resources-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  Follow us on LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Our Locations</h4>
                <div className="space-y-4">
                  {locations.map((loc) => (
                    <div key={loc.city} className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground">{loc.city}, {loc.country}</div>
                        <div className="text-xs text-muted-foreground">{loc.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
