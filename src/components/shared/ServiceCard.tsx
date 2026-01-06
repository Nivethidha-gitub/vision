import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className={cn(
        "group block bg-card rounded-xl p-8 border-2 border-blush card-hover",
        className
      )}
    >
      <div className="w-14 h-14 rounded-lg bg-blush/30 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-rose">
        <Icon className="w-7 h-7 text-rose transition-colors duration-300 group-hover:text-primary-foreground" />
      </div>
      <h3 className="font-display text-xl font-semibold text-heading mb-3">
        {title}
      </h3>
      <p className="text-body text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-2 text-rose font-medium text-sm">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ServiceCard;
