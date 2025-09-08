import { Button } from "@/components/ui/button";
import coffeeHero from "@/assets/coffee-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coffeeHero})` }}
      >
        <div className="absolute inset-0 bg-coffee-dark/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Kopi Terbaik
          <span className="block text-coffee-gold">Untuk Hari Mu</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-coffee-cream max-w-2xl mx-auto">
          Nikmati secangkir kopi berkualitas tinggi yang diseduh dengan penuh cinta dan dedikasi
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Lihat Menu
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-coffee-dark">
            Tentang Kami
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;