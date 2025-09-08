import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-coffee-dark rounded-full"></div>
          <h1 className="text-2xl font-bold text-coffee-dark">BrewCafe</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-coffee-medium transition-colors">
            Beranda
          </a>
          <a href="#menu" className="text-foreground hover:text-coffee-medium transition-colors">
            Menu
          </a>
          <a href="#about" className="text-foreground hover:text-coffee-medium transition-colors">
            Tentang
          </a>
          <a href="#contact" className="text-foreground hover:text-coffee-medium transition-colors">
            Kontak
          </a>
        </nav>
        
        <Button variant="coffee" size="sm">
          Pesan Sekarang
        </Button>
      </div>
    </header>
  );
};

export default Header;