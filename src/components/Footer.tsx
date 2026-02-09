const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-background mb-4">
              Clínica <span className="text-gold-light">Estética</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Realçando a beleza natural com tecnologia, segurança e cuidado humanizado.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              {["Sobre", "Procedimentos", "Resultados", "Equipe", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-background/60 text-sm hover:text-gold-light transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-background text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-background/60 text-sm">
              <p>(11) 99999-9999</p>
              <p>contato@clinicaestetica.com.br</p>
              <p>Av. Paulista, 1000 - São Paulo</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-xs">
            © 2026 Clínica Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
