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

import r1 from "../recent_images/r1.jpeg";
import r2 from "../recent_images/r2.jpeg";
import r3 from "../recent_images/r3.jpeg";
import r4 from "../recent_images/r4.jpeg";
import r5 from "../recent_images/r5.jpeg";

import s1 from "../sports_images/s1.jpeg";
import s2 from "../sports_images/s2.jpeg";
import s3 from "../sports_images/s3.jpeg";
import s4 from "../sports_images/s4.jpeg";
import s5 from "../sports_images/s5.jpeg";

import e1 from "../exhibition_images/e1.jpeg";
import e2 from "../exhibition_images/e2.jpeg";
import e3 from "../exhibition_images/e3.jpeg";
import e4 from "../exhibition_images/e4.jpeg";
import e5 from "../exhibition_images/e5.jpeg";

import hero_image from "../hero_image.jpeg";
import about_image from "../about_image.jpeg";
import schoolLogo from "../logo.png";

// Image Constants - Replace these URLs with your own images
// Image Constants - Replace these URLs with your own images
const HERO_IMAGE = hero_image;
const ABOUT_IMAGE = about_image;



const recentEvents = [
  { src: r1, desc: "Annual Science Fair 2024" },
  { src: r2, desc: "Cultural Day Celebrations" },
  { src: r3, desc: "Inter-School Debate Competition" },
  { src: r4, desc: "Community Service Drive" },
  { src: r5, desc: "Mathematics Olympiad Winners" },
];

const sportsEvents = [
  { src: s1, desc: "Annual Sports Meet Finals" },
  { src: s2, desc: "Basketball Championship" },
  { src: s3, desc: "Football League Match" },
  { src: s4, desc: "Tennis Tournament" },
  { src: s5, desc: "Swimming Gala 2024" },
];

const exhibitionEvents = [
  { src: e1, desc: "Art & Craft Exhibition" },
  { src: e2, desc: "Robotics Showcase" },
  { src: e3, desc: "Environmental Projects" },
  { src: e4, desc: "Literature & Poetry Corner" },
  { src: e5, desc: "History & Heritage Display" },
];
interface IndexProps {
  onApplyClick?: () => void;
}

const Index = ({ onApplyClick }: IndexProps) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Responsive Split Layout */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden bg-background">
        {/* Background Image Container - Visible on all screens now */}
        <div className="absolute top-0 bottom-0 right-0 w-full sm:w-1/2 md:w-1/2 z-0 animate-fade-in overflow-hidden" style={{ animationDelay: "0.2s" }}>
          <img
            src={HERO_IMAGE}
            alt="Central Public High School Campus"
            className="w-full h-full object-cover object-[75%]"
            loading="eager"
          />
          {/* Gradient Overlay moving from left (background color) to transparent (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 md:via-background/40 to-transparent w-full pointer-events-none" />
          {/* Solid fade on the exact left edge to ensure smooth transition from solid color */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-32 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        </div>

        <div className="container mx-auto px-0 relative z-10 w-full pt-1 sm:py-20 lg:py-24 max-w-7xl -mt-24 sm:mt-0">
          <div className="flex flex-row items-center justify-between h-full">

            {/* Left Column - Content */}
            <div className="w-full sm:w-1/2 md:w-1/2 flex flex-col items-start text-left sm:items-center sm:text-center pl-6 sm:pl-10 md:pl-16 lg:pl-20 pr-6 sm:pr-8 md:pr-10 lg:pr-16 relative z-20">
              {/* School Logo */}
              <div className="mr-auto md:mx-auto w-14 h-14 sm:w-[72px] sm:h-[72px] md:w-24 md:h-24 bg-primary/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 border border-primary/20 shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-primary drop-shadow-none" />
              </div>
              {/* School Name */}
              <h1
                className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-5 text-foreground drop-shadow-none animate-fade-in leading-[1.1]"
                style={{ fontFamily: "'Caveat Brush', cursive" }}
              >
                <span className="block whitespace-nowrap">Central Public High School</span>
                <span className="block text-primary drop-shadow-none mt-0.5 sm:mt-1">Junior College</span>
              </h1>



              <p className="text-[0.65rem] sm:text-xs md:text-sm text-foreground/80 md:text-muted-foreground font-semibold mb-6 sm:mb-8 md:mb-10 animate-fade-in uppercase tracking-[0.1em] sm:tracking-[0.2em]" style={{ animationDelay: "0.2s" }}>
                Managed by Mariyam Educational & <b /> Welfare Trust
              </p>

              {/* Action Button */}
              <div className="animate-fade-in w-max" style={{ animationDelay: "0.3s" }}>
                <Link to="/about">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 sm:px-6 py-4 sm:py-5 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-xs sm:text-sm group"
                  >
                    Read more
                    <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Empty Right Column just for spacing purposes */}
            <div className="hidden sm:block sm:w-1/2 md:w-1/2" />

          </div>
        </div>
      </section >

      {/* About Section */}
      < section className="py-20" >
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
                  <div key={i} className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg shadow-sm">
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
                  src={ABOUT_IMAGE}
                  alt="Little graduate with dreams"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-5 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">35+</div>
                <div className="text-sm">Years Strong</div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Programs Section */}
      < section className="py-20" >
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
      </section >

      {/* Stats Section */}
      < section className="py-16 bg-primary" >
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
      </section >

      {/* Recent Events */}
      < section className="py-16 md:py-24" >
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
                        loading="lazy"
                        decoding="async"
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
      </section >

      {/* Sports Events */}
      < section className="py-16 md:py-24" >
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
                        loading="lazy"
                        decoding="async"
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
      </section >

      {/* Exhibition Section */}
      < section className="py-16 md:py-24" >
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
                        loading="lazy"
                        decoding="async"
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
      </section >





      {/* CTA Section */}
      < section className="py-20 bg-gradient-to-br from-secondary via-secondary to-[hsl(25,95%,55%)]" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Begin Your Journey With Us
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-lg mx-auto">
            Admissions are open for 2024-25. Join our family of achievers and dreamers.
          </p>

        </div>
      </section >
    </div >
  );
};

