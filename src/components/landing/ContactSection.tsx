import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simula envio
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Mensagem enviada com sucesso!", {
            description: "Nossa equipe entrará em contato em breve.",
        });

        setLoading(false);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contato" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Contact Info */}
                    <div>
                        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                            Fale Conosco
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-6">
                            Estamos prontos para atender você
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            Tem dúvidas sobre como a CAMPAX pode ajudar sua funerária?
                            Preencha o formulário ou utilize nossos canais diretos.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                                    <a href="mailto:contato@campax.com.br" className="text-muted-foreground hover:text-secondary transition-colors">
                                        contato@campax.com.br
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">Telefone / WhatsApp</h3>
                                    <a href="tel:+551199999999" className="text-muted-foreground hover:text-secondary transition-colors">
                                        (11) 99999-9999
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">Localização</h3>
                                    <p className="text-muted-foreground">
                                        São Paulo, SP - Brasil
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card-elegant p-6 md:p-8 lg:p-10 bg-card/50 backdrop-blur-sm border-border/50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Nome</label>
                                    <Input id="name" required placeholder="Seu nome completo" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Telefone</label>
                                    <Input id="phone" required placeholder="(00) 00000-0000" className="bg-background/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Corporativo</label>
                                <Input id="email" type="email" required placeholder="nome@empresa.com.br" className="bg-background/50" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Mensagem</label>
                                <Textarea
                                    id="message"
                                    required
                                    placeholder="Como podemos ajudar?"
                                    className="min-h-[120px] bg-background/50 resize-none"
                                />
                            </div>

                            <Button type="submit" variant="amber" className="w-full" disabled={loading} size="lg">
                                {loading ? "Enviando..." : (
                                    <>
                                        Enviar Mensagem
                                        <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
