import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10+",
      label: "Especialistas",
      description: "Equipe dedicada"
    },
    {
      icon: Award,
      number: "50+",
      label: "Projetos",
      description: "Entregues com sucesso"
    },
    {
      icon: Globe,
      number: "5+",
      label: "Tecnologias",
      description: "Especializações principais"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Dedicação",
      description: "Foco no resultado"
    },
  ];

  const values = [
    "Agilidade startup com qualidade corporativa",
    "Soluções personalizadas para cada cliente",
    "Especialização em tecnologias específicas",
    "Evolução constante e adaptação rápida",
    "Suporte dedicado e acompanhamento próximo",
    "Foco em resultados e crescimento mútuo"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sobre a <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Vertoo</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Vertoo é uma startup em constante evolução, focada em entregar soluções tecnológicas 
                personalizadas para empresas que buscam crescimento digital e eficiência operacional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa essência está na agilidade e inovação. Como startup, mantemos a flexibilidade 
                necessária para nos adaptar rapidamente às demandas do mercado e às necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Nossa História
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center p-6 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;