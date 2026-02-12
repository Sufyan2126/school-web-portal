import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const faqData = [
    {
        question: "How do I enroll my child?",
        answer: "To enroll your child for the upcoming school year, please visit our admissions office. You will need: Original and copies of the birth certificate, home address proof, and previous school records."
    },
    {
        question: "What are the school hours?",
        answer: "Our standard school day runs from 7:00 AM to 5:30 PM. Primary: 7:00 AM to 12:00 PM. Pre-primary: 12:30 PM to 5:30 PM."
    },
    {
        question: "How do I report an absence?",
        answer: "Please call the school office or email attendance@school.edu before 8:30 AM on the day of absence."
    },
    {
        question: "How can I find my child's bus route?",
        answer: "Bus routes and estimated pickup/drop-off times are updated annually in August. You can view them on the parent portal or contact the transport coordinator."
    },
    {
        question: "What is the medication policy?",
        answer: "For safety, all medications (including over-the-counter) must be stored in the school clinic. Parents must complete a medication authorization form."
    }
];

export const FAQChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([
        { type: "bot", text: "Hello! I'm the School Assistant. How can I help you today?" }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleQuestionClick = (question: string, answer: string) => {
        setMessages(prev => [
            ...prev,
            { type: "user", text: question },
            { type: "bot", text: answer }
        ]);
    };

    return (
        <>
            {/* Floating Action Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-20 right-4 md:bottom-24 md:right-6 z-[1000] rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg transition-all duration-300 hover:scale-110",
                    "bg-yellow-400 hover:bg-yellow-500 text-yellow-950",
                    isOpen && "scale-0 opacity-0"
                )}
            >
                <Zap className="w-6 h-6 md:w-7 md:h-7" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white font-bold items-center justify-center">1</span>
                </span>
            </Button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed z-[1000] transition-all duration-300 ease-in-out",
                    isOpen
                        ? "bottom-20 right-4 md:bottom-24 md:right-6 opacity-100 scale-100"
                        : "bottom-10 right-4 md:right-6 opacity-0 scale-95 pointer-events-none"
                )}
            >
                <Card className="w-[330px] md:w-[380px] shadow-2xl border-2 border-yellow-400/20">
                    <CardHeader className="bg-yellow-400 text-yellow-950 p-3 md:p-4 rounded-t-lg flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            <CardTitle className="text-sm md:text-base font-bold">School Assistant</CardTitle>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-yellow-500/20 text-yellow-950"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="p-0">
                        <ScrollArea className="h-[200px] md:h-[250px] p-4 bg-stone-50" ref={scrollRef}>
                            <div className="flex flex-col gap-4">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "max-w-[85%] p-3 rounded-lg text-xs md:text-sm animate-in fade-in slide-in-from-bottom-2",
                                            msg.type === "bot"
                                                ? "bg-white border shadow-sm self-start rounded-tl-none"
                                                : "bg-yellow-100 text-yellow-900 self-end rounded-tr-none"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="p-3 bg-white border-t space-y-2">
                            <p className="text-xs text-muted-foreground font-medium mb-2">Suggested Questions:</p>
                            <div className="flex flex-wrap gap-2">
                                {faqData.map((faq, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleQuestionClick(faq.question, faq.answer)}
                                        className="text-[10px] md:text-xs bg-secondary hover:bg-secondary/90 text-secondary-foreground px-2 py-1 md:px-3 md:py-1.5 rounded-full transition-colors text-left font-medium"
                                    >
                                        {faq.question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};
