import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 border-2 border-blush card-hover",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-blush/30 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-rose" />
      </div>
      <h3 className="font-display text-lg font-semibold text-heading mb-2">
        {title}
      </h3>
      <p className="text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
