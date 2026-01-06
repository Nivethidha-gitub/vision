import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTASection from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { GraduationCap, Monitor, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const introRef = useScrollAnimation();
  const ecosystemRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blush/30 rounded-full text-rose text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
              Integrated Solutions for{" "}
              <span className="text-rose">Complete Growth</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed">
              Vision Spirit offers a synergistic blend of Academic, IT, and HR services designed to empower individuals and organizations at every stage of their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={introRef.ref}
            className={cn(
              "max-w-4xl mx-auto text-center opacity-0",
              introRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="What We Offer"
              title="Three Pillars of Excellence"
              description="Our services are built on the foundation of expertise, innovation, and a deep understanding of market dynamics. Each service vertical is designed to complement the others, creating a comprehensive ecosystem for success."
            />
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={GraduationCap}
              title="Academic Services"
              description="From career guidance to international admissions, we provide end-to-end support for academic and professional success. Our services include skill development, placement assistance, and admission support for top institutions worldwide."
              link="/services/academic"
            />
            <ServiceCard
              icon={Monitor}
              title="IT Services"
              description="Transform your digital presence with our comprehensive IT solutions. We offer web development, mobile apps, UI/UX design, branding, and strategic digital marketing to help your business thrive in the digital age."
              link="/services/it"
            />
            <ServiceCard
              icon={Users}
              title="Global HR Services"
              description="Connect with top talent through our end-to-end recruitment solutions. From requirement analysis to onboarding and post-hire support, we ensure the right fit for your organization's success."
              link="/services/hr"
            />
          </div>
        </div>
      </section>

      {/* Integrated Ecosystem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={ecosystemRef.ref}
            className={cn(
              "opacity-0",
              ecosystemRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Integrated Ecosystem"
              title="The Power of Synergy"
              description="Our unique approach combines Education, Technology, and Human Resources into a unified ecosystem that delivers comprehensive value."
            />
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-card rounded-xl p-8 border-2 border-blush card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-rose flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-heading">
                  Education
                </h3>
              </div>
              <p className="text-body text-sm leading-relaxed mb-4">
                We nurture talent through career guidance, skill development, and academic placements, creating a foundation for professional success.
              </p>
              <div className="text-center text-muted-foreground">
                <ArrowRight className="w-6 h-6 mx-auto rotate-90 lg:rotate-0" />
              </div>
            </div>

            {/* Technology */}
            <div className="bg-card rounded-xl p-8 border-2 border-blush card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-heading flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-heading">
                  Technology
                </h3>
              </div>
              <p className="text-body text-sm leading-relaxed mb-4">
                We empower organizations with digital solutions that enhance visibility, streamline operations, and drive growth in the digital economy.
              </p>
              <div className="text-center text-muted-foreground">
                <ArrowRight className="w-6 h-6 mx-auto rotate-90 lg:rotate-0" />
              </div>
            </div>

            {/* Human Resources */}
            <div className="bg-card rounded-xl p-8 border-2 border-blush card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-rose flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-heading">
                  Human Resources
                </h3>
              </div>
              <p className="text-body text-sm leading-relaxed mb-4">
                We connect educated talent with organizations seeking digital transformation, completing the cycle of value creation.
              </p>
            </div>
          </div>

          {/* Connection Lines Visual */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-secondary px-6 py-3 rounded-full">
              <span className="text-heading font-medium">Education</span>
              <ArrowRight className="w-4 h-4 text-rose" />
              <span className="text-heading font-medium">Technology</span>
              <ArrowRight className="w-4 h-4 text-rose" />
              <span className="text-heading font-medium">Talent</span>
              <ArrowRight className="w-4 h-4 text-rose" />
              <span className="text-rose font-medium">Success</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Explore More"
            title="Dive Deeper Into Our Services"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Services",
                items: ["Career Guidance", "Skill Training", "Placement Assistance", "International Admissions"],
                link: "/services/academic",
              },
              {
                title: "IT Services",
                items: ["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"],
                link: "/services/it",
              },
              {
                title: "Global HR Services",
                items: ["End-to-End Recruitment", "Talent Sourcing", "Interview Coordination", "Onboarding Support"],
                link: "/services/hr",
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-card rounded-xl p-6 border-2 border-blush card-hover"
              >
                <h3 className="font-display text-xl font-semibold text-heading mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="text-body text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-rose font-medium text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Let us help you find the perfect solution for your needs. Contact us today for a consultation."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Services;
