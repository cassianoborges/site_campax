import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src="https://mzqthywvdavavviqbolm.supabase.co/storage/v1/object/public/campax_img/Logcampax.png" 
              alt="CAMPAX" 
              className="h-16 w-16 object-contain rounded-full mb-4 bg-white/10 p-1"
            />
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Presente quando a distância não pode separar. Plataforma de transmissão ao vivo para velórios, desenvolvida com respeito e tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-primary-foreground text-lg mb-4">Plataforma</h4>
            <ul className="space-y-3">
              <li><a href="#recursos" className="text-primary-foreground/60 hover:text-secondary transition-colors">Recursos</a></li>
              <li><a href="#como-funciona" className="text-primary-foreground/60 hover:text-secondary transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="text-primary-foreground/60 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-primary-foreground text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li><a href="mailto:contato@campax.com.br" className="text-primary-foreground/60 hover:text-secondary transition-colors">contato@campax.com.br</a></li>
              <li><span className="text-primary-foreground/60">Suporte 24/7</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2024 CAMPAX. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/60 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/60 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
