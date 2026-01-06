import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Search,
  Users,
  ClipboardCheck,
  Calendar,
  FileCheck,
  UserPlus,
  HeadphonesIcon,
  Building,
  Laptop,
  Stethoscope,
  Factory,
  Truck,
  Wallet,
  Globe,
  Target,
  Award,
  Clock,
} from "lucide-react";

const HRServices = () => {
  const roadmapRef = useScrollAnimation();
  const modelsRef = useScrollAnimation();
  const industriesRef = useScrollAnimation();

  const recruitmentRoadmap = [
    {
      icon: Search,
      step: "01",
      title: "Requirement Analysis",
      description: "Deep understanding of your hiring needs, company culture, and role specifications to ensure perfect fit.",
    },
    {
      icon: Users,
      step: "02",
      title: "Talent Sourcing",
      description: "Leveraging our extensive network and databases to identify qualified candidates globally.",
    },
    {
      icon: ClipboardCheck,
      step: "03",
      title: "Screening & Shortlisting",
      description: "Rigorous evaluation of candidates based on skills, experience, and cultural fit.",
    },
    {
      icon: Calendar,
      step: "04",
      title: "Interview Coordination",
      description: "Seamless scheduling and management of interview processes across time zones.",
    },
    {
      icon: FileCheck,
      step: "05",
      title: "Offer Management",
      description: "Negotiation support and offer letter management to secure top talent.",
    },
    {
      icon: UserPlus,
      step: "06",
      title: "Onboarding",
      description: "Structured onboarding support to ensure smooth integration into your organization.",
    },
    {
      icon: HeadphonesIcon,
      step: "07",
      title: "Post-Hire Support",
      description: "Continuous follow-up and support to ensure long-term placement success.",
    },
  ];

  const recruitmentModels = [
    {
      title: "Contingency Recruitment",
      description: "Pay-on-success model where fees are only due upon successful placement. Ideal for standard hiring needs.",
      features: ["No upfront cost", "Access to talent pool", "Fast turnaround"],
    },
    {
      title: "Retained Search",
      description: "Dedicated search for senior and executive positions with exclusive commitment and comprehensive candidate assessment.",
      features: ["Executive focus", "Thorough vetting", "Market mapping"],
    },
    {
      title: "RPO Solutions",
      description: "Recruitment Process Outsourcing for organizations looking to scale hiring efficiently with dedicated teams.",
      features: ["Scalable teams", "Cost efficiency", "Process ownership"],
    },
  ];

  const industries = [
    { icon: Laptop, name: "Information Technology" },
    { icon: Stethoscope, name: "Healthcare & Pharma" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Building, name: "Banking & Finance" },
    { icon: Truck, name: "Logistics & Supply Chain" },
    { icon: Wallet, name: "Retail & Consumer" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blush/30 rounded-full text-rose text-sm font-medium mb-6">
              Global HR Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
              Connect With{" "}
              <span className="text-rose">Top Talent</span>{" "}
              Globally
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed">
              End-to-end recruitment solutions that connect exceptional talent with leading organizations worldwide. From requirement analysis to post-hire support, we ensure the perfect match.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Our Approach"
              title="End-to-End Recruitment Excellence"
              description="At Vision Spirit, we understand that great organizations are built by great people. Our comprehensive recruitment process ensures you find the right talent for every role."
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border-2 border-blush text-center card-hover">
                <div className="font-display text-4xl font-bold text-rose mb-2">500+</div>
                <p className="text-body text-sm">Successful Placements</p>
              </div>
              <div className="bg-card rounded-xl p-6 border-2 border-blush text-center card-hover">
                <div className="font-display text-4xl font-bold text-rose mb-2">95%</div>
                <p className="text-body text-sm">Retention Rate</p>
              </div>
              <div className="bg-card rounded-xl p-6 border-2 border-blush text-center card-hover">
                <div className="font-display text-4xl font-bold text-rose mb-2">15+</div>
                <p className="text-body text-sm">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Roadmap */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={roadmapRef.ref}
            className={cn(
              "opacity-0",
              roadmapRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Our Process"
              title="Recruitment Roadmap"
              description="A structured, transparent process that ensures quality at every step of the hiring journey."
            />
          </div>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-blush" />

            <div className="space-y-8">
              {recruitmentRoadmap.map((item, index) => (
                <div
                  key={item.step}
                  className={cn(
                    "relative opacity-0",
                    roadmapRef.isVisible && "animate-fade-in-up",
                    `stagger-${(index % 6) + 1}`
                  )}
                >
                  <div
                    className={cn(
                      "lg:w-[45%]",
                      index % 2 === 0 ? "lg:ml-auto lg:pl-12" : "lg:mr-auto lg:pr-12 lg:text-right"
                    )}
                  >
                    <div className="bg-card rounded-xl p-6 border-2 border-blush card-hover">
                      <div className={cn(
                        "flex items-center gap-4 mb-4",
                        index % 2 === 1 && "lg:flex-row-reverse"
                      )}>
                        <div className="w-12 h-12 rounded-lg bg-rose flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="text-rose text-sm font-medium">Step {item.step}</span>
                          <h3 className="font-display text-lg font-semibold text-heading">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className={cn(
                        "text-body text-sm leading-relaxed",
                        index % 2 === 1 && "lg:text-right"
                      )}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-rose border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Models */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={modelsRef.ref}
            className={cn(
              "opacity-0",
              modelsRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Flexible Solutions"
              title="Recruitment Models"
              description="Choose the engagement model that best fits your hiring needs and organizational structure."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {recruitmentModels.map((model, index) => (
              <div
                key={model.title}
                className={cn(
                  "bg-card rounded-xl p-8 border-2 border-blush card-hover opacity-0",
                  modelsRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <h3 className="font-display text-xl font-semibold text-heading mb-3">
                  {model.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-body text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={industriesRef.ref}
            className={cn(
              "opacity-0",
              industriesRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Industries"
              title="Sectors We Serve"
              description="Expertise across diverse industries with deep understanding of sector-specific talent requirements."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={cn(
                  "bg-card rounded-xl p-6 border-2 border-blush card-hover text-center opacity-0",
                  industriesRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-12 h-12 rounded-lg bg-blush/30 flex items-center justify-center mx-auto mb-3">
                  <industry.icon className="w-6 h-6 text-rose" />
                </div>
                <h4 className="font-display font-semibold text-heading text-sm">
                  {industry.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Advantage"
            title="Why Partner With Us"
            description="What makes Vision Spirit your ideal recruitment partner."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={Globe}
              title="Global Network"
              description="Access to talent pools across 15+ countries and diverse industries."
            />
            <FeatureCard
              icon={Target}
              title="Quality Focus"
              description="Rigorous screening processes ensuring only the best candidates."
            />
            <FeatureCard
              icon={Clock}
              title="Fast Turnaround"
              description="Efficient processes that reduce time-to-hire without compromising quality."
            />
            <FeatureCard
              icon={Award}
              title="High Retention"
              description="95% retention rate reflecting our focus on long-term fit."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Hire Top Talent?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Partner with Vision Spirit to build your dream team. Let us connect you with the best talent globally.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Hire Talent Globally
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HRServices;
