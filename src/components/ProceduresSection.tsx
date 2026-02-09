import { MessageCircle } from "lucide-react";

const facialProcedures = [
  {
    title: "Botox",
    description: "Suavize linhas de expressão e conquiste um visual rejuvenescido com resultados naturais.",
  },
  {
    title: "Preenchimento Labial",
    description: "Lábios mais volumosos e definidos com ácido hialurônico de última geração.",
  },
  {
    title: "Harmonização Facial",
    description: "Equilíbrio e simetria facial para realçar seus traços com elegância.",
  },
  {
    title: "Limpeza de Pele",
    description: "Pele renovada, livre de impurezas e com viço natural.",
  },
];

const bodyProcedures = [
  {
    title: "Gordura Localizada",
    description: "Tratamentos avançados para redução de medidas e modelagem corporal.",
  },
  {
    title: "Rejuvenescimento Corporal",
    description: "Restaure a firmeza e elasticidade da pele com tecnologia de ponta.",
  },
  {
    title: "Estética Corporal",
    description: "Procedimentos personalizados para o corpo dos seus sonhos.",
  },
];

const ProcedureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-gold hover:border-primary/20 transition-all duration-500 group flex flex-col">
    <div className="w-2 h-2 rounded-full bg-primary mb-5" />
    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
      {description}
    </p>
    <div className="flex gap-3">
      <a
        href="#contato"
        className="text-sm font-medium text-primary hover:text-gold-dark transition-colors tracking-wide"
      >
        Saiba Mais →
      </a>
      <a
        href={`https://wa.me/5500000000000?text=Olá! Tenho interesse em ${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <MessageCircle size={14} />
        WhatsApp
      </a>
    </div>
  </div>
);

const ProceduresSection = () => {
  return (
    <section id="procedimentos" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Procedimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Tratamentos <span className="italic text-gradient-gold">exclusivos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça nossos procedimentos faciais e corporais realizados com excelência e tecnologia.
          </p>
        </div>

        {/* Facial */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Faciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facialProcedures.map((p) => (
              <ProcedureCard key={p.title} {...p} />
            ))}
          </div>
        </div>

        {/* Corporal */}
        <div>
          <h3 className="font-display text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Corporais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyProcedures.map((p) => (
              <ProcedureCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
