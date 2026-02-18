import { MapPin, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Localização
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Venha nos <span className="italic text-gradient-gold">visitar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border aspect-square md:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1114.7482908702061!2d-44.003325890263184!3d-19.985360909910693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bdc031c3a47d%3A0x9bd1c70631b941e7!2sR.%20Amilcar%20Cabral%2C%20490%20-%20Milion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030620-250!5e0!3m2!1spt-BR!2sbr!4v1771443260194!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Estética"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  R. Amilcar Cabral, 490 <br />
                  Milionários, Belo Horizonte - MG <br />
                  CEP: 30620-250
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Horário de Funcionamento
                </h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Segunda a Sexta: 8h às 20h</p>
                  <p>Sábado: 9h às 16h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5500000000000?text=Olá! Como chego até a clínica?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-gold text-center w-fit"
            >
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
