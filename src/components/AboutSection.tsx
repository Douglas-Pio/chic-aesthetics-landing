import { Shield, Heart, Sparkles, Users } from "lucide-react";

const differentials = [
  {
    icon: Sparkles,
    title: "Equipamentos Modernos",
    description: "Tecnologia de ponta para resultados superiores e seguros.",
  },
  {
    icon: Users,
    title: "Profissionais Especializados",
    description: "Equipe altamente qualificada com formação contínua.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é única e merece atenção personalizada.",
  },
  {
    icon: Shield,
    title: "Resultados Naturais",
    description: "Realçamos sua beleza de forma sutil e harmoniosa.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Sobre Nós
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Beleza que{" "}
            <span className="italic text-gradient-gold">transforma</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A Clínica Estética nasceu da paixão por realçar a beleza natural de cada pessoa.
            Com anos de experiência, nossa equipe se dedica a oferecer procedimentos seguros,
            modernos e com resultados que respeitam a individualidade de cada paciente.
            Nossa missão é promover autoestima, naturalidade e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-gold hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all duration-500">
                <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
