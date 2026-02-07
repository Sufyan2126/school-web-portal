import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
      )}
      <div className={cn("w-20 h-1 bg-secondary mt-4 rounded-full", centered && "mx-auto")} />
    </div>
  );
};
