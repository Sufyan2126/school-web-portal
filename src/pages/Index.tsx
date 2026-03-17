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

const HERO_IMAGE = hero_image;
const ABOUT_IMAGE = about_image;

const Index = ({ onApplyClick }) => {
  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden bg-background">

        {/* Background Image */}
        <div className="absolute top-0 bottom-0 right-0 w-full sm:w-1/2 md:w-1/2 z-0 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="School"
            className="w-full h-full object-cover object-[75%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 w-full max-w-7xl">
          <div className="flex flex-row items-center justify-between">

            {/* Left Content */}
            <div className="w-full sm:w-1/2 flex flex-col items-start text-left sm:items-center sm:text-center pl-6 sm:pl-10 md:pl-16">

              {/* ✅ Updated Logo */}
              <div className="mr-auto md:mx-auto w-14 h-14 sm:w-[72px] sm:h-[72px] md:w-24 md:h-24 bg-primary/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-primary/20 shadow-xl overflow-hidden">
                <img
                  src={schoolLogo}
                  alt="School Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* School Name */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl mb-4 text-foreground leading-tight">
                <span className="block">Central Public High School</span>

                {/* ✅ Purple Text */}
                <span className="block text-purple-600 mt-1">
                  Junior College
                </span>
              </h1>

              <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
                Managed by Mariyam Educational & Welfare Trust
              </p>

              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90 px-6 py-4 rounded-full">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

            </div>

            {/* Right Empty */}
            <div className="hidden sm:block sm:w-1/2" />

          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;