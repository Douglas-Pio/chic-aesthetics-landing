import heroImage from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clínica Estética - Ambiente moderno e sofisticado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-gold-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Clínica Estética Premium
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-card">
            Realce sua beleza com{" "}
            <span className="italic text-gold-light">naturalidade</span>{" "}
            e segurança
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 text-card/80 font-light max-w-lg">
            Procedimentos estéticos de excelência com resultados naturais.
            Cuide da sua autoestima com quem entende de beleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:opacity-90 transition-all shadow-gold text-center"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#contato"
              className="border border-card/30 text-card px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-card/10 transition-all text-center backdrop-blur-sm"
            >
              Solicitar Avaliação
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-card/60 text-xs tracking-[0.2em] uppercase">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-card/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
