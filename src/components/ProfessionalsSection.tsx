const professionals = [
  {
    name: "Dra. Camila Ferreira",
    specialty: "Dermatologista",
    bio: "Especialista em harmonização facial e procedimentos estéticos avançados. CRM/SP 123456.",
    initials: "CF",
  },
  {
    name: "Dr. Rafael Mendes",
    specialty: "Cirurgião Plástico",
    bio: "Referência em estética corporal com mais de 15 anos de experiência. CRM/SP 654321.",
    initials: "RM",
  },
  {
    name: "Dra. Beatriz Santos",
    specialty: "Biomédica Esteta",
    bio: "Especializada em tratamentos faciais minimamente invasivos e rejuvenescimento. CRBM 78901.",
    initials: "BS",
  },
];

const ProfessionalsSection = () => {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Nossa Equipe
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Profissionais de <span className="italic text-gradient-gold">excelência</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça os especialistas que cuidam da sua beleza com dedicação e expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {professionals.map((pro) => (
            <div
              key={pro.name}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-gold transition-all duration-500 group"
            >
              <div className="aspect-[4/3] bg-gradient-rose flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="font-display text-2xl font-bold text-primary">
                    {pro.initials}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {pro.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{pro.specialty}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{pro.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
