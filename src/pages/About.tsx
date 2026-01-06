import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const missionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blush/30 rounded-full text-rose text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
              Empowering Growth Through{" "}
              <span className="text-rose">Excellence</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed">
              Vision Spirit is a forward-thinking organization dedicated to bridging the gap between education, technology, and talent. We are committed to creating meaningful impact through our integrated services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Our Story"
                title="Building Bridges to Success"
                description=""
                centered={false}
              />
              <div className="mt-6 space-y-4 text-body">
                <p>
                  Founded with a vision to transform how individuals and organizations approach growth, Vision Spirit has evolved into a comprehensive solutions provider spanning three critical domains: Academic Services, IT Services, and Global HR Services.
                </p>
                <p>
                  We understand that success in today&apos;s world requires more than singular expertise. It demands an integrated approach that addresses career development, digital presence, and talent acquisition holistically. That&apos;s precisely what Vision Spirit delivers.
                </p>
                <p>
                  Our team of dedicated professionals brings together decades of combined experience across education, technology, and human resources, ensuring that every client receives world-class guidance and support.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose/20 to-heading/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-rose mx-auto mb-4 animate-float" />
                  <p className="text-heading font-display text-2xl font-semibold">
                    Global Reach,<br />Local Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={missionRef.ref}
            className={cn(
              "opacity-0",
              missionRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Our Purpose"
              title="Mission & Vision"
              description="Guided by purpose, driven by impact."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-xl p-8 border-2 border-blush card-hover">
              <div className="w-14 h-14 rounded-lg bg-rose flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-heading mb-4">
                Our Mission
              </h3>
              <p className="text-body leading-relaxed">
                To empower individuals and organizations through comprehensive solutions in education, technology, and talent management. We strive to create pathways for success by combining expertise, innovation, and personalized guidance to help our clients achieve their fullest potential.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border-2 border-blush card-hover">
              <div className="w-14 h-14 rounded-lg bg-heading flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-heading mb-4">
                Our Vision
              </h3>
              <p className="text-body leading-relaxed">
                To be the most trusted partner for career development, digital transformation, and global talent solutions. We envision a world where every individual has access to opportunities that align with their aspirations, and every organization has the talent and technology to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={valuesRef.ref}
            className={cn(
              "opacity-0",
              valuesRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Our Values"
              title="What We Stand For"
              description="Our core values guide every decision we make and every relationship we build."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty in all our dealings.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We pursue the highest standards in everything we do.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We believe in the power of partnerships and teamwork.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We continuously evolve to meet changing needs and challenges.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className={cn(
                  "bg-card rounded-xl p-6 border-2 border-blush card-hover opacity-0",
                  valuesRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-12 h-12 rounded-lg bg-blush/30 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-rose" />
                </div>
                <h3 className="font-display text-lg font-semibold text-heading mb-2">
                  {value.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vision Spirit */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={experienceRef.ref}
            className={cn(
              "opacity-0",
              experienceRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Why Choose Us"
              title="The Vision Spirit Advantage"
              description="What sets us apart in delivering exceptional value to our clients."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: TrendingUp,
                title: "Industry Experience",
                description:
                  "With over a decade of combined experience across our service verticals, we bring deep domain expertise to every engagement. Our team has successfully served clients across multiple industries and geographies.",
              },
              {
                icon: Globe,
                title: "Global Network",
                description:
                  "Our extensive network spans universities, corporations, and professionals across 15+ countries. This global reach enables us to connect talent with opportunities regardless of geographical boundaries.",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description:
                  "With 500+ successful placements, 100+ corporate partnerships, and countless career transformations, our results speak for themselves. We are committed to delivering measurable outcomes.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "bg-card rounded-xl p-8 border-2 border-blush card-hover opacity-0",
                  experienceRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <div className="w-14 h-14 rounded-lg bg-rose flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-heading mb-4">
                  {item.title}
                </h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Build Something Great Together"
        description="Partner with Vision Spirit and discover how our integrated solutions can transform your journey."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default About;
