import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, GraduationCap } from "lucide-react";

const toppersData = [
  {
    year: "2024",
    toppers: [
      { name: "Ananya Gupta", percentage: 99.2 },
      { name: "Rohit Verma", percentage: 98.8 },
      { name: "Priya Nair", percentage: 98.4 },
      { name: "Arjun Patel", percentage: 98.0 },
      { name: "Sneha Reddy", percentage: 97.6 },
      { name: "Karan Singh", percentage: 97.2 },
    ],
  },
  {
    year: "2023",
    toppers: [
      { name: "Siddharth Menon", percentage: 99.0 },
      { name: "Kavya Iyer", percentage: 98.6 },
      { name: "Rahul Krishnan", percentage: 98.2 },
      { name: "Aditi Saxena", percentage: 97.8 },
      { name: "Nikhil Joshi", percentage: 97.4 },
    ],
  },
  {
    year: "2022",
    toppers: [
      { name: "Meera Sharma", percentage: 98.5 },
      { name: "Amit Gupta", percentage: 97.9 },
      { name: "Riya Patel", percentage: 97.3 },
      { name: "Vikash Kumar", percentage: 96.8 },
    ],
  },
];

const Toppers = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">
            Academic Excellence
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our <span className="text-primary">Star Performers</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Celebrating the outstanding achievements of our students who have excelled in their academic pursuits.
          </p>
        </div>
      </section>

      {/* Toppers by Year */}
      {toppersData.map((yearData, yearIndex) => (
        <section
          key={yearData.year}
          className="py-16 md:py-20 bg-background"
        >
          <div className="container mx-auto px-4">
            <SectionHeading
              title={`Toppers ${yearData.year}`}
              subtitle={`Our brilliant achievers from the year ${yearData.year}`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {yearData.toppers.map((topper, index) => (
                <Card
                  key={`${yearData.year}-${topper.name}`}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {index === 0 ? (
                          <Trophy className="w-7 h-7 text-secondary" />
                        ) : (
                          <GraduationCap className="w-7 h-7 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{topper.name}</h3>
                        <p className="text-sm text-muted-foreground">{yearData.year}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {topper.percentage}%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Motivation Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-[hsl(25,95%,55%)] text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in">
            Your Name Could Be Here!
          </h2>
          <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            At Springfield Academy, we provide the environment, guidance, and support you need to achieve your dreams. Join us and be a part of our success story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Toppers;
