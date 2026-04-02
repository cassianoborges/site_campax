import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border/40 py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://mzqthywvdavavviqbolm.supabase.co/storage/v1/object/public/campax_img/Logcampax.png"
              alt="CAMPAX"
              className={`object-cover rounded-full ring-2 ring-border/30 transition-all duration-300 group-hover:ring-secondary/60 ${
                scrolled ? "h-14 w-14 md:h-16 md:w-16" : "h-16 w-16 md:h-20 md:w-20"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contato">
              <Button
                variant="amber"
                className="transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Agendar Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-muted/50" : "hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-medium py-3 px-2 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="amber" className="w-full">
                    Agendar Demo
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
