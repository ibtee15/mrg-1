import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Cpu, Users, Globe, BarChart3, Shield, Cloud, Bot, Settings
} from "lucide-react";

const serviceData: Record<string, {
  icon: any;
  title: string;
  tagline: string;
  description: string[];
  capabilities: string[];
}> = {
  "solution-delivery": {
    icon: Cpu,
    title: "Solution Delivery",
    tagline: "Transform your business with comprehensive digital solutions",
    description: [
      "At Meta Resources Group, we are more than just a service provider — we are your partner in navigating the complexities of the digital world. Our comprehensive solutions empower you to transform your business, enhance efficiency, and accelerate growth.",
      "With our expertise in consulting, IT modernization, cloud integration, and AI-driven automation, we help you streamline processes and make data-driven decisions. Our advanced cybersecurity services protect your digital assets, ensuring business continuity and peace of mind.",
      "We also offer tailored, industry-specific strategies for sectors like finance, healthcare, retail, and manufacturing."
    ],
    capabilities: [
      "Digital Strategy & Consulting",
      "IT Modernization & Migration",
      "Cloud Integration & Management",
      "AI-Driven Automation",
      "Cybersecurity & Compliance",
      "Application Development & Support",
      "Industry-Specific Solutions",
      "Project Management & Delivery",
    ],
  },
  "talent-solutions": {
    icon: Users,
    title: "Talent Solutions",
    tagline: "Find the right talent with unmatched speed and precision",
    description: [
      "Shifting skills requirements have become a challenge for employers with the demand of accelerating technologies. Technological advancement means searching out the proactive and top talented people in all departments of an organization.",
      "As a specialist, our team understands the human capital solutions marketplace. Whether you are considering contract-based supplemental resources, contract-to-hire, permanent placement, or strategic management professionals, we have worked across all industries to help you find the best-suited candidate for your business.",
      "We find people with high-demand skill sets and hire them on an immediate basis with up to a 48-hour turnaround. Our recruiting services will find a proactive candidate, fill skill gaps, minimize turnover, and provide a cost structure best suited for your business."
    ],
    capabilities: [
      "Contract Staffing",
      "Contract-to-Hire",
      "Permanent Placement",
      "Executive Search",
      "48-Hour Turnaround",
      "Budget-Optimized Talent Acquisition",
      "Skill Gap Analysis",
      "Long-Term Workforce Planning",
    ],
  },
  "offshore-solutions": {
    icon: Globe,
    title: "Offshore Solutions",
    tagline: "Leverage global expertise to drive innovation and growth",
    description: [
      "In the digital era, achieving excellence requires true ambition and flawless execution. Our multidisciplinary team works side-by-side with you to design and execute transformative digital businesses through offshore services.",
      "Whether you aim to embrace new digital capabilities, reimagine your business structure, or launch an entirely new digital venture, we are committed to setting a new standard of excellence.",
      "Our offshore services provide access to qualified learning and IT professionals who integrate traditional and emerging technologies with leadership and behavioral learning programs."
    ],
    capabilities: [
      "Dedicated Offshore Teams",
      "Hybrid Delivery Models",
      "24/7 Global Support",
      "Technology Integration",
      "Cost Optimization",
      "Knowledge Transfer Programs",
      "Quality Assurance",
      "Scalable Team Augmentation",
    ],
  },
  "consulting": {
    icon: BarChart3,
    title: "Consulting Services",
    tagline: "Strategic guidance for transformative business outcomes",
    description: [
      "Meta Resources Group provides your business with high-end consultation services, including strategic planning, operations, technology, advanced analytics, corporate finance, mergers and acquisitions.",
      "We combine imagination with technology to help enterprises grow in an age of digital transformation. We design, implement, and manage all organization's functions, standing at the forefront of all emerging trends in the digital world.",
      "By immersing ourselves in your business insights and conducting thorough research, we deliver result-driven solutions across all aspects of technology — from project management and process optimization to application development, digital strategy, and data analytics."
    ],
    capabilities: [
      "Strategic Planning",
      "Operations Optimization",
      "Technology Advisory",
      "M&A Planning & Integration",
      "Corporate Finance",
      "Digital Transformation Strategy",
      "Process Optimization",
      "Performance Management",
    ],
  },
  "data-analytics": {
    icon: Shield,
    title: "Data Analytics",
    tagline: "Transform data into actionable intelligence",
    description: [
      "Our Data Analytics service empowers your business to harness the full potential of data, transforming it into actionable insights and strategic value. We employ cutting-edge analytics tools and techniques to collect, process, and analyze vast amounts of data from various sources.",
      "Our team of expert data scientists and analysts work closely with you to understand your specific business needs, ensuring that our solutions are tailored to provide maximum impact.",
      "We translate complex data into clear, concise reports and dashboards, providing you with a comprehensive understanding of your business landscape. With our data-driven approach, you can confidently steer your organization towards sustained growth and innovation."
    ],
    capabilities: [
      "Business Intelligence & Reporting",
      "Predictive Analytics",
      "Data Visualization & Dashboards",
      "Machine Learning Models",
      "Data Warehousing",
      "ETL Pipeline Development",
      "Customer Analytics",
      "Operational Analytics",
    ],
  },
  "sap": {
    icon: Settings,
    title: "SAP Services",
    tagline: "Modernize your enterprise with world-class SAP solutions",
    description: [
      "Meta Resources Group delivers comprehensive SAP services to help enterprises modernize their core business processes. From planning and implementation to optimization and support, our certified SAP consultants bring deep expertise across the full SAP ecosystem.",
      "We help organizations migrate to SAP S/4HANA, implement SAP SuccessFactors for HR transformation, deploy SAP Ariba for procurement excellence, and leverage SAP Analytics Cloud for real-time business intelligence.",
      "Our approach combines industry best practices with tailored methodologies to ensure successful SAP transformations that deliver measurable ROI and long-term value."
    ],
    capabilities: [
      "SAP S/4HANA Implementation & Migration",
      "SAP SuccessFactors (HCM)",
      "SAP Ariba (Procurement)",
      "SAP Analytics Cloud",
      "SAP Integration & API Management",
      "SAP Basis Administration",
      "SAP Custom Development (ABAP/Fiori)",
      "SAP Managed Services & Support",
    ],
  },
  "cloud-infrastructure": {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    tagline: "Build resilient, scalable cloud foundations",
    description: [
      "Our Cloud & Infrastructure services help organizations design, migrate, and manage modern cloud environments across AWS, Azure, and Google Cloud Platform.",
      "We specialize in hybrid and multi-cloud architectures that provide flexibility, resilience, and cost optimization. Our certified cloud architects develop tailored strategies that align with your business objectives.",
      "From infrastructure assessment and migration planning to managed services and DevOps enablement, we ensure your cloud journey delivers maximum business value."
    ],
    capabilities: [
      "Cloud Strategy & Assessment",
      "Cloud Migration & Modernization",
      "Multi-Cloud & Hybrid Architecture",
      "Infrastructure as Code (IaC)",
      "DevOps & CI/CD Pipelines",
      "Cloud Security & Compliance",
      "Managed Cloud Services",
      "Cost Optimization & FinOps",
    ],
  },
  "ai-automation": {
    icon: Bot,
    title: "AI & Automation",
    tagline: "Unlock the power of intelligent automation",
    description: [
      "Meta Resources Group helps organizations harness the transformative power of artificial intelligence and intelligent automation to streamline operations, enhance customer experiences, and unlock new revenue opportunities.",
      "Our AI & Automation practice combines deep technical expertise with industry knowledge to deliver solutions that drive measurable business outcomes — from intelligent process automation and conversational AI to computer vision and predictive modeling.",
      "We guide you through every stage of your AI journey, from strategy and use case identification to implementation, integration, and continuous optimization."
    ],
    capabilities: [
      "AI Strategy & Roadmap",
      "Robotic Process Automation (RPA)",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Predictive Modeling",
      "Conversational AI & Chatbots",
      "Intelligent Document Processing",
      "MLOps & Model Management",
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <Section>
          <div className="text-center">
            <SectionTitle>Service Not Found</SectionTitle>
            <Link to="/services" className="text-accent mt-4 inline-block">Back to Services</Link>
          </div>
        </Section>
      </Layout>
    );
  }

  const Icon = service.icon;

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
            <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary-foreground/60 hover:text-primary-foreground/80 mb-6 transition-colors">
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center text-accent-foreground">
                <Icon className="w-7 h-7" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/70">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {service.description.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <div>
            <div className="bg-muted rounded-xl p-8 sticky top-24">
              <h3 className="text-lg font-display font-semibold mb-4">Key Capabilities</h3>
              <ul className="space-y-3">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{cap}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md gradient-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
