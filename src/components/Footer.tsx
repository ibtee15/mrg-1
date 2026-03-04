import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const footerServices = [
  { name: "Solution Delivery", href: "/services/solution-delivery" },
  { name: "Talent Solutions", href: "/services/talent-solutions" },
  { name: "Consulting Services", href: "/services/consulting" },
  { name: "Data Analytics", href: "/services/data-analytics" },
  { name: "SAP Services", href: "/services/sap" },
  { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  { name: "AI & Automation", href: "/services/ai-automation" },
];

const footerCompany = [
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const locations = [
  "New York", "Los Angeles", "Karachi", "Manila"
];

export function Footer() {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Meta Resources Group" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Insightful solutions, infinite impact. Helping businesses navigate complex technology initiatives with expert delivery teams.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/meta-resources-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:Info@MetaResourcesGroup.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerCompany.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://metaresourcesgroup.zohorecruit.com/jobs/Careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Job Openings <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Locations</h4>
            <ul className="space-y-2.5">
              {locations.map((loc) => (
                <li key={loc} className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {loc}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:Info@MetaResourcesGroup.com"
                className="text-sm text-accent hover:underline"
              >
                Info@MetaResourcesGroup.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Meta Resources Group, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/80">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
