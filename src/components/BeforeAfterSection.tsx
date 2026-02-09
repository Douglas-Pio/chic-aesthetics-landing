import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const results = [
  {
    id: 1,
    procedure: "Harmonização Facial",
    testimonial: "Me sinto mais confiante e bonita. O resultado ficou super natural!",
    name: "Maria S.",
  },
  {
    id: 2,
    procedure: "Preenchimento Labial",
    testimonial: "Sempre quis lábios mais definidos. Estou apaixonada pelo resultado!",
    name: "Ana P.",
  },
  {
    id: 3,
    procedure: "Botox",
    testimonial: "As linhas de expressão sumiram e ninguém percebe que fiz. Perfeito!",
    name: "Carla M.",
  },
  {
    id: 4,
    procedure: "Rejuvenescimento Corporal",
    testimonial: "Minha pele ficou muito mais firme. Recomendo demais a clínica!",
    name: "Juliana R.",
  },
];

const BeforeAfterSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % results.length);
  const prev = () => setCurrent((prev) => (prev - 1 + results.length) % results.length);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Resultados
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Transformações <span className="italic text-gradient-gold">reais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja os resultados incríveis que nossas pacientes conquistaram.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Before/After placeholder */}
              <div className="bg-gradient-rose aspect-square md:aspect-auto flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="flex gap-4 justify-center mb-6">
                    <div className="w-32 h-40 rounded-xl bg-nude-dark/50 flex items-center justify-center text-muted-foreground text-xs">
                      Antes
                    </div>
                    <div className="w-32 h-40 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">
                      Depois
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {results[current].procedure}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-5xl text-primary/20 font-display leading-none">"</span>
                </div>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-display italic">
                  {results[current].testimonial}
                </p>
                <div>
                  <p className="font-semibold text-foreground">{results[current].name}</p>
                  <p className="text-sm text-muted-foreground">{results[current].procedure}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {results.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Resultado ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
