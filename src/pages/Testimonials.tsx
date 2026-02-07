import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of Class 10 Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Springfield Academy has been instrumental in shaping my daughter's personality. The teachers are incredibly dedicated, and the holistic approach to education is exactly what we were looking for. The school has helped her excel not just academically but also in extracurricular activities.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Alumni (Batch 2018)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "My years at Springfield Academy were the most formative years of my life. The values instilled in me here continue to guide my professional journey. The teachers didn't just teach subjects; they taught us how to think, question, and grow as individuals.",
  },
  {
    id: 3,
    name: "Dr. Anjali Mehta",
    role: "Parent of Class 8 Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As a doctor, I understand the importance of a stress-free learning environment. Springfield provides exactly that. My son looks forward to school every day, which speaks volumes about the positive atmosphere. The school's focus on mental health and well-being is commendable.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Alumni (Batch 2015)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The foundation Springfield gave me helped me secure admission to IIT. But more than academics, the school taught me discipline, time management, and the importance of giving back to society. I'm forever grateful for the opportunities and guidance I received here.",
  },
  {
    id: 5,
    name: "Sunita Agarwal",
    role: "Parent of Class 5 & 8 Students",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Both my children study here, and I've seen tremendous growth in their confidence and communication skills. The school's emphasis on both traditional values and modern education creates well-rounded individuals. The teachers know each child personally.",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "Alumni (Batch 2020)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Springfield Academy prepared me not just for college but for life. The sports facilities and encouragement for athletics helped me become a state-level swimmer. The balance between studies and sports here is perfect for any aspiring athlete.",
  },
];

const Testimonials = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">
            What People Say
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">Testimonials</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hear from our parents, alumni, and community members about their experiences with Springfield Academy.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Voices of Our Community"
            subtitle="Real stories from real people who have been part of the Springfield family."
          />
          <div className="max-w-5xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6 md:p-8 flex flex-col h-full">
                        <Quote className="w-10 h-10 text-primary/20 mb-4" />
                        <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
                            }}
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-secondary text-secondary"
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-primary-foreground/80">Parent Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5000+</div>
              <div className="text-primary-foreground/80">Happy Alumni</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">4.9★</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">35+</div>
              <div className="text-primary-foreground/80">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
