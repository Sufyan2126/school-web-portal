import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Loader2,
  MessageCircle 
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  description: z.string().trim().min(10, "Please enter at least 10 characters").max(1000, "Message is too long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Education Street, Springfield, State 12345",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (234) 567-890",
    link: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@springfield.edu",
    link: "mailto:info@springfield.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon-Fri: 8AM-4PM, Sat: 8AM-12PM",
    link: null,
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: `Thank you, ${data.name}! We'll get back to you soon.`,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider animate-fade-in">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Have questions about admissions, programs, or campus visits? We'd love to hear from you. Reach out and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl animate-fade-in-left">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you? Tell us about your inquiry..."
                              className="min-h-[150px] resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-right">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.startsWith("http") ? "_blank" : undefined}
                              rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="border-0 bg-[hsl(142,70%,45%)] text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-10 h-10" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Chat with Us on WhatsApp
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        Get instant responses to your queries
                      </p>
                      <a
                        href={`https://wa.me/1234567890?text=${encodeURIComponent("Hello! I'm interested in learning more about Springfield Academy.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[hsl(142,70%,45%)] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/90 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Start Chat
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our campus and experience Springfield Academy firsthand."
          />
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-primary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Springfield Academy Campus
                </h3>
                <p className="text-muted-foreground mb-4">
                  123 Education Street, Springfield, State 12345
                </p>
                <Button asChild>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in">
            Have Questions?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Schedule a campus visit to meet our faculty, explore our facilities, and learn more about what makes Springfield Academy special.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Schedule a Visit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
