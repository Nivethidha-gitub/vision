import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import CTASection from "@/components/shared/CTASection";
import VideoBackground from "@/components/shared/Videobackground";
//import { Scene } from "@/components/shared/Scene";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  Monitor,
  Users,
  Target,
  Award,
  Shield,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const whyRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
      
        
        <div className="container mx-auto px-4 relative z-20">
          <div
            ref={heroRef.ref}
            className={cn(
              "max-w-4xl mx-auto text-center opacity-0",
              heroRef.isVisible && "animate-fade-in-up"
            )}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              Empowering Careers & Businesses
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              Transforming Dreams Into{" "}
              <span className="text-rose">Reality</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
              Vision Spirit is your trusted partner in Academic Excellence, IT Innovation, and Global Talent Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services">
                <Button variant="hero" size="xl" className="bg-rose hover:bg-rose/90 text-white border-0 min-h-[3.5rem] px-8 text-lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="heroOutline" size="xl" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/40 min-h-[3.5rem] px-8 text-lg">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              label="Who We Are"
              title="Building Tomorrow's Success Stories"
              description="At Vision Spirit, we believe in the power of integrated solutions. Our comprehensive ecosystem combines education, technology, and human resources to create pathways for individuals and organizations to thrive in an ever-evolving global landscape."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={servicesRef.ref}
            className={cn(
              "opacity-0",
              servicesRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Our Services"
              title="Comprehensive Solutions for Growth"
              description="We offer a synergistic blend of services designed to nurture talent, drive innovation, and connect the right people with the right opportunities."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={GraduationCap}
              title="Academic Services"
              description="Career guidance, skill development, and seamless admissions support for India and international destinations."
              link="/services/academic"
            />
            <ServiceCard
              icon={Monitor}
              title="IT Services"
              description="Digital transformation solutions including web development, mobile apps, branding, and strategic marketing."
              link="/services/it"
            />
            <ServiceCard
              icon={Users}
              title="Global HR Services"
              description="End-to-end recruitment solutions connecting top talent with leading organizations worldwide."
              link="/services/hr"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={whyRef.ref}
            className={cn(
              "opacity-0",
              whyRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Why Vision Spirit"
              title="Your Partner in Success"
              description="We combine expertise, innovation, and dedication to deliver exceptional results across all our service verticals."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Target,
                title: "Goal-Oriented",
                description:
                  "We focus on achieving measurable outcomes aligned with your objectives.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                description:
                  "Years of experience across education, technology, and recruitment sectors.",
              },
              {
                icon: Shield,
                title: "Trusted Partner",
                description:
                  "Building long-term relationships based on trust, transparency, and integrity.",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description:
                  "A track record of success stories and satisfied clients worldwide.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={cn(
                  "bg-card rounded-xl p-6 border-2 border-blush card-hover opacity-0",
                  whyRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-12 h-12 rounded-lg bg-blush/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-rose" />
                </div>
                <h3 className="font-display text-lg font-semibold text-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Successful Placements" },
              { value: "100+", label: "Corporate Partners" },
              { value: "50+", label: "Universities Worldwide" },
              { value: "15+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-rose mb-2">
                  {stat.value}
                </div>
                <div className="text-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Future?"
        description="Partner with Vision Spirit and unlock a world of opportunities. Let us help you achieve your goals."
        buttonText="Get In Touch"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default Index;
