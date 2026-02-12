import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeading } from "@/components/SectionHeading";
import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  ArrowRight,
  Star,
  Award,
  Target,
  Heart,
  Calendar
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const recentEvents = [
  { src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=400&h=300&fit=crop", desc: "Annual Science Fair 2024" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop", desc: "Cultural Day Celebrations" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop", desc: "Inter-School Debate Competition" },
  { src: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=300&fit=crop", desc: "Community Service Drive" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop", desc: "Mathematics Olympiad Winners" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop", desc: "Graduation Ceremony Highlights" },
];

const sportsEvents = [
  { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop", desc: "Annual Sports Meet Finals" },
  { src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop", desc: "Basketball Championship" },
  { src: "https://images.unsplash.com/photo-1461896836934-28e4c76c1e06?w=400&h=300&fit=crop", desc: "Football League Match" },
  { src: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&h=300&fit=crop", desc: "Tennis Tournament" },
  { src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop", desc: "Swimming Gala 2024" },
];

const exhibitionEvents = [
  { src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=400&h=300&fit=crop", desc: "Art & Craft Exhibition" },
  { src: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=400&h=300&fit=crop", desc: "Robotics Showcase" },
  { src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop", desc: "Environmental Projects" },
  { src: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=400&h=300&fit=crop", desc: "Literature & Poetry Corner" },
  { src: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop", desc: "History & Heritage Display" },
];
interface IndexProps {
  onApplyClick?: () => void;
}

const Index = ({ onApplyClick }: IndexProps) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Minimal & Bold */}
      {/* Hero Section - Minimal & Bold with Background Image */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              <span className="block animate-fade-in" style={{ animationDelay: "0.1s" }}>Building</span>
              <span className="block text-secondary animate-fade-in" style={{ animationDelay: "0.3s" }}>Tomorrow's</span>
              <span className="block animate-fade-in" style={{ animationDelay: "0.5s" }}>Leaders Today</span>
            </h1>

            <p className="text-lg text-white/90 mb-8 max-w-lg font-medium">
              35+ years of excellence in education, shaping confident minds and compassionate hearts.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={onApplyClick}
              >
                Start Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Legacy of <span className="text-primary">Excellence</span> Since 1989
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Springfield Academy stands as a beacon of educational excellence, where tradition meets innovation. Our holistic approach nurtures not just academic brilliance but also character, creativity, and compassion.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Target, label: "Mission Driven" },
                  { icon: Heart, label: "Student First" },
                  { icon: Award, label: "Excellence" },
                  { icon: Star, label: "Innovation" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2070&auto=format&fit=crop"
                  alt="Little graduate with dreams"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-5 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">35+</div>
                <div className="text-sm">Years Strong</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Learning Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academics",
                desc: "Rigorous CBSE curriculum with focus on conceptual learning",
                color: "bg-blue-500"
              },
              {
                icon: Trophy,
                title: "Sports",
                desc: "Professional coaching in multiple sports disciplines",
                color: "bg-orange-500"
              },
              {
                icon: Star,
                title: "Arts",
                desc: "Music, dance, drama and visual arts programs",
                color: "bg-purple-500"
              },
              {
                icon: BookOpen,
                title: "Technology",
                desc: "Robotics, AI labs and digital literacy",
                color: "bg-green-500"
              },
            ].map((program, i) => (
              <Card
                key={i}
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 35, suffix: "+", label: "Years of Excellence" },
              { value: 5000, suffix: "+", label: "Proud Alumni" },
              { value: 98, suffix: "%", label: "Success Rate" },
              { value: 50, suffix: "+", label: "Expert Teachers" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center text-primary-foreground"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recent Events"
            subtitle="Glimpses from our latest activities and celebrations."
          />
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {recentEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="group relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.src}
                        alt={`Recent event ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground truncate text-center">
                      {event.desc}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 h-10 w-10 md:h-12 md:w-12 bg-primary hover:bg-primary/90 text-white border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110 z-10" />
            <CarouselNext className="-right-4 h-10 w-10 md:h-12 md:w-12 bg-primary hover:bg-primary/90 text-white border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110 z-10" />
          </Carousel>
        </div>
      </section>

      {/* Sports Events */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Sports Events"
            subtitle="Highlights from our sports activities and competitions."
          />
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sportsEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="group relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.src}
                        alt={`Sports event ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground truncate text-center">
                      {event.desc}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 h-10 w-10 md:h-12 md:w-12 bg-primary hover:bg-primary/90 text-white border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110 z-10" />
            <CarouselNext className="-right-4 h-10 w-10 md:h-12 md:w-12 bg-primary hover:bg-primary/90 text-white border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110 z-10" />
          </Carousel>
        </div>
      </section>

      {/* Exhibition Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Exhibition"
            subtitle="Showcasing creativity and innovation from our students."
          />
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {exhibitionEvents.map((event, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="group relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.src}
                        alt={`Exhibition ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground truncate text-center">
                      {event.desc}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 h-10 w-10 md:h-12 md:w-12 bg-primary hover:bg-primary/90 text-white border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110 z-10" />
            <CarouselNext className="-right-4 h-10 w-10 md:h-12 md:w-12 bg-primary hover:bg-primary/90 text-white border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-110 z-10" />
          </Carousel>
        </div>
      </section>

      {/* Never Miss an Event CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in">
            Never Miss an Event
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Subscribe to our newsletter
          </p>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Campus Life
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Where Learning Comes Alive
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop&q=80" },
              { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop&q=80" },
              { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=200&fit=crop&q=80" },
              { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop&q=80" },
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl group"
              >
                <img
                  src={img.src}
                  alt="Campus"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-[hsl(25,95%,55%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Begin Your Journey With Us
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-lg mx-auto">
            Admissions are open for 2024-25. Join our family of achievers and dreamers.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
            onClick={onApplyClick}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
