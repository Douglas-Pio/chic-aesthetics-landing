import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda L.",
    rating: 5,
    text: "Melhor clínica que já fui! Atendimento impecável e resultados maravilhosos. Super recomendo!",
    procedure: "Harmonização Facial",
  },
  {
    name: "Patricia R.",
    rating: 5,
    text: "Profissionais incríveis e ambiente muito acolhedor. Me senti segura durante todo o procedimento.",
    procedure: "Botox",
  },
  {
    name: "Amanda G.",
    rating: 5,
    text: "Os resultados ficaram naturais, exatamente como eu queria. A equipe é extremamente atenciosa.",
    procedure: "Preenchimento Labial",
  },
  {
    name: "Luciana M.",
    rating: 5,
    text: "Ambiente sofisticado e equipe muito profissional. Voltarei com certeza para novos procedimentos!",
    procedure: "Limpeza de Pele",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            O que nossas <span className="italic text-gradient-gold">pacientes</span> dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-gold hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent-foreground">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.procedure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
