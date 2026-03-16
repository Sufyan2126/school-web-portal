import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building character through honesty and ethical behavior.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Welcoming and respecting every individual's unique qualities.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Embracing new ideas and methods in education.",
  },
];

const milestones = [
  { year: "1985", title: "Foundation", description: "Springfield Academy was established with 50 students." },
  { year: "1995", title: "CBSE Affiliation", description: "Received official CBSE affiliation and recognition." },
  { year: "2005", title: "Campus Expansion", description: "Expanded to a 25-acre modern campus with new facilities." },
  { year: "2015", title: "Smart Classrooms", description: "Introduced digital learning with smart classrooms." },
  { year: "2023", title: "AI Lab Launch", description: "Launched state-of-the-art Robotics and AI laboratory." },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Nurturing Minds,
                <span className="text-primary"> Building Futures</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                For over 35 years, Springfield Academy has been at the forefront of education,
                combining traditional values with modern teaching methodologies. Our commitment
                to excellence has helped shape thousands of successful individuals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that every child has unique potential, and our role is to provide
                the environment and guidance to help them discover and develop their talents.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <Clock className="w-10 h-10 mb-4 text-secondary" />
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={35} suffix="+" duration={2000} />
                </div>
                <div className="text-primary-foreground/80">Years of Excellence</div>
              </div>
              <div className="bg-secondary rounded-2xl p-6 text-secondary-foreground mt-8">
                <Users className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={5000} suffix="+" duration={2000} />
                </div>
                <div className="text-secondary-foreground/80">Proud Alumni</div>
              </div>
              <div className="bg-accent rounded-2xl p-6 text-accent-foreground">
                <Award className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={98} suffix="%" duration={2000} />
                </div>
                <div className="text-accent-foreground/80">Pass Rate</div>
              </div>
              <div className="bg-background rounded-2xl p-6 text-foreground mt-8">
                <Target className="w-10 h-10 mb-4 text-primary" />
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </div>
                <div className="text-muted-foreground">Expert Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden animate-fade-in-left">
              <div className="h-2 bg-primary" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading institution that nurtures globally competent individuals
                  with strong moral values, critical thinking abilities, and a passion for
                  lifelong learning. We envision our students becoming leaders who contribute
                  positively to society.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg overflow-hidden animate-fade-in-right">
              <div className="h-2 bg-secondary" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide holistic education that develops intellectual curiosity,
                  creativity, and character. We are committed to creating a supportive
                  learning environment that encourages students to explore, question,
                  and grow into responsible citizens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Springfield Academy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our 35+ years of educational excellence."
          />
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 mb-8 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center animate-fade-in">
              <span className="text-3xl font-bold text-secondary-foreground">DR</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Message from the Principal
            </h2>
            <blockquote className="text-lg md:text-xl text-primary-foreground/90 italic mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              "At Springfield Academy, we don't just educate minds; we nurture souls and build
              character. Our commitment is to prepare students not just for exams, but for life.
              Every child who walks through our doors is a future leader, and we treat them as such."
            </blockquote>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="font-semibold text-secondary">Dr. Ramesh Kumar</p>
              <p className="text-primary-foreground/70 text-sm">Principal, Springfield Academy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
