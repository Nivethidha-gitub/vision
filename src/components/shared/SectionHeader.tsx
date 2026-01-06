import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 bg-blush/30 rounded-full text-rose text-sm font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
