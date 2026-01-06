import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Globe,
  Palette,
  Share2,
  Smartphone,
  Monitor,
  Building,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Factory,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const ITServices = () => {
  const servicesRef = useScrollAnimation();
  const industriesRef = useScrollAnimation();

  const services = [
    {
      icon: Lightbulb,
      title: "Digital Strategy & Planning",
      description:
        "Comprehensive digital roadmaps that align technology initiatives with business objectives, ensuring sustainable growth and competitive advantage.",
      features: ["Technology audits", "Digital transformation strategy", "ROI analysis", "Implementation roadmaps"],
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description:
        "Custom, responsive websites that deliver exceptional user experiences and drive conversions. From corporate sites to e-commerce platforms.",
      features: ["Responsive design", "CMS development", "E-commerce solutions", "Performance optimization"],
    },
    {
      icon: Palette,
      title: "Creative Works & Branding",
      description:
        "Comprehensive brand identity solutions including logo design, visual guidelines, and creative collateral that tell your unique story.",
      features: ["Logo design", "Brand guidelines", "Marketing collateral", "Visual identity"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Strategic social media management and marketing campaigns that build brand awareness, engage audiences, and drive measurable results.",
      features: ["Content strategy", "Community management", "Paid advertising", "Analytics & reporting"],
    },
    {
      icon: Monitor,
      title: "UI & UX Design",
      description:
        "User-centered design solutions that create intuitive, engaging digital experiences. We combine aesthetics with functionality.",
      features: ["User research", "Wireframing & prototyping", "Interface design", "Usability testing"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["iOS development", "Android development", "Cross-platform apps", "App store optimization"],
    },
  ];

  const industries = [
    { icon: Building, name: "Corporate & Enterprise" },
    { icon: ShoppingCart, name: "Retail & E-commerce" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: Factory, name: "Manufacturing" },
    { icon: Briefcase, name: "Professional Services" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blush/30 rounded-full text-rose text-sm font-medium mb-6">
              IT Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
              Drive Digital{" "}
              <span className="text-rose">Transformation</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed">
              Comprehensive IT solutions that empower businesses to thrive in the digital age. From strategy to execution, we deliver technology that drives growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={servicesRef.ref}
            className={cn(
              "opacity-0",
              servicesRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Our Expertise"
              title="End-to-End IT Solutions"
              description="We offer comprehensive digital services designed to transform your business and enhance your competitive edge."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "bg-card rounded-xl p-8 border-2 border-blush card-hover opacity-0",
                  servicesRef.isVisible && "animate-fade-in-up",
                  `stagger-${(index % 6) + 1}`
                )}
              >
                <div className="w-14 h-14 rounded-lg bg-rose flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-body text-sm">
                      <CheckCircle className="w-4 h-4 text-rose flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="How We Work"
            title="Our Development Process"
            description="A structured approach that ensures quality delivery and client satisfaction at every stage."
          />

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
                { step: "02", title: "Strategy", description: "Crafting the perfect solution" },
                { step: "03", title: "Design", description: "Creating engaging experiences" },
                { step: "04", title: "Development", description: "Building with precision" },
                { step: "05", title: "Launch", description: "Deploying and optimizing" },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-card rounded-xl p-6 border-2 border-blush text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-rose text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-display font-semibold text-heading mb-2">
                      {item.title}
                    </h4>
                    <p className="text-body text-sm">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-blush" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
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
              description="Our IT solutions are tailored for diverse industries, each with unique challenges and opportunities."
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Our Edge"
            title="Why Choose Our IT Services"
            description="What sets us apart in delivering exceptional digital solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={Lightbulb}
              title="Innovation First"
              description="We leverage cutting-edge technologies and modern methodologies."
            />
            <FeatureCard
              icon={Monitor}
              title="Quality Focus"
              description="Rigorous quality assurance at every stage of development."
            />
            <FeatureCard
              icon={Share2}
              title="Scalable Solutions"
              description="Built to grow with your business and evolving needs."
            />
            <FeatureCard
              icon={Smartphone}
              title="Ongoing Support"
              description="Continuous maintenance and support post-launch."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Digitally?"
        description="Partner with us to build technology solutions that drive real business results."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default ITServices;
