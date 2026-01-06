import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-heading">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 text-center opacity-0",
          isVisible && "animate-fade-in-up"
        )}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          {title}
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button variant="hero" size="xl">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
