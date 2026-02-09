import { useState } from "react";
import { Send } from "lucide-react";

const procedures = [
  "Botox",
  "Preenchimento Labial",
  "Harmonização Facial",
  "Limpeza de Pele",
  "Gordura Localizada",
  "Rejuvenescimento Corporal",
  "Estética Corporal",
  "Outro",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    procedure: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future integration: CRM, Supabase, WhatsApp API
    console.log("Lead captured:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", whatsapp: "", procedure: "" });
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Contato
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Agende sua <span className="italic text-gradient-gold">avaliação</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Preencha o formulário e nossa equipe entrará em contato para agendar
                sua avaliação personalizada. Sem compromisso.
              </p>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>📞 (11) 99999-9999</p>
                <p>✉️ contato@clinicaestetica.com.br</p>
                <p>📍 Av. Paulista, 1000 - São Paulo</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-gold/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    Recebemos seu contato!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Nossa equipe entrará em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Procedimento de interesse
                    </label>
                    <select
                      required
                      value={formData.procedure}
                      onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Selecione um procedimento</option>
                      {procedures.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-gold flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Solicitar Avaliação
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
