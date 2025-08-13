import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      position: "Diretor de TI",
      company: "Ecosystems Europe",
      rating: 5,
      text: "A Vertoo entregou nossa plataforma e-commerce Vtex com excelência. A agilidade da equipe surpreendeu positivamente.",
      industry: "E-commerce"
    },
    {
      name: "Ana Oliveira",
      position: "CEO",
      company: "Econebra do Brasil",
      rating: 5,
      text: "Implementação do ERP Linx foi perfeita. Como startup, a Vertoo entendeu nossas necessidades de crescimento rápido.",
      industry: "Gestão"
    },
    {
      name: "Carlos Mendes",
      position: "Gerente Operacional",
      company: "TechStart",
      rating: 5,
      text: "Suporte técnico excepcional e soluções de PDV que transformaram nosso atendimento. Recomendo totalmente!",
      industry: "Varejo"
    }
  ];

  const clients = [
    "Ecosystems Europe", "Econebra do Brasil", "TechStart", "LogisticPlus", 
    "HealthTech", "EduSystem", "RetailPro", "StartupHub"
  ];

  const industries = [
    "E-commerce", "Varejo", "Gestão", "Logística", 
    "Saúde", "Educação", "Tecnologia", "Startups"
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confiança é a base do nosso trabalho. Veja o que nossos clientes dizem sobre nós.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {testimonial.industry}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground italic">
                  "{testimonial.text}"
                </CardDescription>
                <div className="border-t border-border pt-4">
                  <CardTitle className="text-sm text-foreground">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {testimonial.position} - {testimonial.company}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Empresas que Confiam em Nós
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={client}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-card transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="text-primary-foreground font-bold text-sm">
                    {client.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{client}</p>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="text-center space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Setores Atendidos
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <Badge 
                  key={industry}
                  variant="outline" 
                  className="px-4 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Seja Nosso Próximo Caso de Sucesso
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;