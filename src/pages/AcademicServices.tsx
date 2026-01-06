import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Compass,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Target,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const AcademicServices = () => {
  const servicesRef = useScrollAnimation();
  const admissionsRef = useScrollAnimation();
  const outcomesRef = useScrollAnimation();

  const services = [
    {
      icon: Compass,
      title: "Career Guidance & Counselling",
      description:
        "Expert counsellors help students and professionals identify their strengths, explore career options, and create a personalized roadmap to achieve their goals.",
      outcomes: [
        "Clear career direction",
        "Informed decision making",
        "Personalized action plans",
      ],
    },
    {
      icon: BookOpen,
      title: "Skill-Based Training & Development",
      description:
        "Comprehensive training programs designed to bridge the gap between academic knowledge and industry requirements, ensuring job-readiness.",
      outcomes: [
        "Industry-relevant skills",
        "Practical knowledge",
        "Enhanced employability",
      ],
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description:
        "End-to-end placement support including resume building, interview preparation, and direct connections with hiring organizations.",
      outcomes: [
        "Job placement support",
        "Interview preparation",
        "Industry connections",
      ],
    },
    {
      icon: GraduationCap,
      title: "India Admissions Support",
      description:
        "Guidance for securing admissions in top Indian universities and colleges across various disciplines and programs.",
      outcomes: [
        "Application guidance",
        "Document preparation",
        "Entrance exam support",
      ],
    },
  ];

  const internationalCountries = [
    { name: "USA", flag: "🇺🇸", description: "Ivy League & Top Universities" },
    { name: "UK", flag: "🇬🇧", description: "Russell Group Universities" },
    { name: "Canada", flag: "🇨🇦", description: "Top Research Institutions" },
    { name: "Europe", flag: "🇪🇺", description: "Leading European Universities" },
    { name: "Australia", flag: "🇦🇺", description: "Group of Eight Universities" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blush/30 rounded-full text-rose text-sm font-medium mb-6">
              Academic Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6">
              Shape Your Academic{" "}
              <span className="text-rose">Future</span>
            </h1>
            <p className="text-body text-lg md:text-xl leading-relaxed">
              From career guidance to international admissions, we provide comprehensive support to help students and professionals achieve their academic and career aspirations.
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
              label="Our Offerings"
              title="Comprehensive Academic Support"
              description="We offer a range of services designed to guide, train, and place individuals in their dream careers."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "bg-card rounded-xl p-8 border-2 border-blush card-hover opacity-0",
                  servicesRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-rose flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display text-xl font-semibold text-heading mb-3">
                      {service.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-heading font-medium text-sm">Key Outcomes:</p>
                      <ul className="space-y-1">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-center gap-2 text-body text-sm">
                            <CheckCircle className="w-4 h-4 text-rose flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Admissions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            ref={admissionsRef.ref}
            className={cn(
              "opacity-0",
              admissionsRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Global Reach"
              title="International Admissions Support"
              description="We help students secure admissions in prestigious universities across the globe with comprehensive end-to-end support."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {internationalCountries.map((country, index) => (
              <div
                key={country.name}
                className={cn(
                  "bg-card rounded-xl p-6 border-2 border-blush card-hover text-center opacity-0",
                  admissionsRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-display text-lg font-semibold text-heading mb-1">
                  {country.name}
                </h3>
                <p className="text-body text-xs">{country.description}</p>
              </div>
            ))}
          </div>

          {/* International Services */}
          <div className="mt-12 bg-card rounded-xl p-8 border-2 border-blush">
            <h3 className="font-display text-xl font-semibold text-heading mb-6 text-center">
              Our International Admissions Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Profile Evaluation", description: "Assess academic background and career goals" },
                { step: "02", title: "University Selection", description: "Shortlist best-fit universities and programs" },
                { step: "03", title: "Application Support", description: "Complete application and documentation" },
                { step: "04", title: "Visa & Departure", description: "Visa assistance and pre-departure guidance" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-rose text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-display font-semibold text-heading mb-2">
                    {item.title}
                  </h4>
                  <p className="text-body text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div
            ref={outcomesRef.ref}
            className={cn(
              "opacity-0",
              outcomesRef.isVisible && "animate-fade-in-up"
            )}
          >
            <SectionHeader
              label="Results"
              title="What You Can Expect"
              description="Our academic services are designed to deliver tangible outcomes that transform careers."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={Target}
              title="Clear Direction"
              description="Gain clarity on your career path with expert guidance and personalized counselling."
            />
            <FeatureCard
              icon={BookOpen}
              title="Enhanced Skills"
              description="Acquire industry-relevant skills that make you job-ready and competitive."
            />
            <FeatureCard
              icon={Users}
              title="Networking"
              description="Connect with industry professionals and alumni networks globally."
            />
            <FeatureCard
              icon={Award}
              title="Career Success"
              description="Achieve your career goals with our comprehensive support system."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Shape Your Future?"
        description="Take the first step towards academic and career success. Contact us for a free consultation."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default AcademicServices;
