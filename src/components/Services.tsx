import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  BarChart, 
  Monitor, 
  Users, 
  Shield, 
  Cloud,
  ArrowRight 
} from "lucide-react";
import servicesImage from "@/assets/services-tech.jpg";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "E-commerce & Websites",
      description: "Desenvolvimento de plataformas e-commerce (Vtex, Wake) e websites corporativos personalizados.",
    },
    {
      icon: BarChart,
      title: "ERPs & Sistemas de Gestão",
      description: "Implementação e customização de sistemas ERP Linx e soluções de gestão empresarial.",
    },
    {
      icon: Monitor,
      title: "PDVs & Pontos de Venda",
      description: "Criação e implementação de sistemas de ponto de venda integrados e eficientes.",
    },
    {
      icon: Users,
      title: "Suporte a Sistemas",
      description: "Suporte especializado em vendas, logística e integração de sistemas empresariais.",
    },
    {
      icon: Shield,
      title: "Infraestrutura & TI",
      description: "Manutenção de computadores, instalações e licenciamento de software corporativo.",
    },
    {
      icon: Cloud,
      title: "Banco de Dados & Automação",
      description: "Gestão de banco de dados com automatizações, gatilhos e views personalizadas.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções tecnológicas especializadas para empresas que buscam crescimento digital e eficiência operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={servicesImage}
                alt="Serviços de tecnologia"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-card border border-border">
              <div className="text-lg font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Suporte</div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-card border border-border">
              <div className="text-lg font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;