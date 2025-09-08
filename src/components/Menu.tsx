import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coffeeDrinks from "@/assets/coffee-drinks.jpg";

const menuItems = [
  {
    name: "Espresso",
    price: "Rp 15.000",
    description: "Kopi murni dengan rasa yang kuat dan aroma yang menggugah"
  },
  {
    name: "Cappuccino",
    price: "Rp 22.000", 
    description: "Perpaduan espresso dengan susu steamed dan foam yang lembut"
  },
  {
    name: "Latte",
    price: "Rp 25.000",
    description: "Espresso dengan susu steamed yang creamy dan latte art cantik"
  },
  {
    name: "Americano",
    price: "Rp 18.000",
    description: "Espresso dengan air panas, sempurna untuk pecinta kopi hitam"
  },
  {
    name: "Mocha",
    price: "Rp 28.000",
    description: "Kombinasi espresso, cokelat, dan susu yang memanjakan lidah"
  },
  {
    name: "Cold Brew",
    price: "Rp 20.000",
    description: "Kopi dingin yang diseduh khusus selama 12 jam untuk rasa smooth"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-coffee-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">
            Menu Kopi Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilihan kopi terbaik yang dipilih khusus dan diseduh dengan teknik profesional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={coffeeDrinks} 
              alt="Coffee drinks" 
              className="rounded-2xl shadow-coffee w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            {menuItems.slice(0, 3).map((item, index) => (
              <Card key={index} className="border-coffee-light/20 hover:shadow-warm transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-coffee-dark">{item.name}</CardTitle>
                    <span className="text-2xl font-bold text-coffee-gold">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.slice(3).map((item, index) => (
            <Card key={index} className="border-coffee-light/20 hover:shadow-warm transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-coffee-dark text-lg">{item.name}</CardTitle>
                  <span className="text-xl font-bold text-coffee-gold">{item.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="coffee" size="lg" className="text-lg px-8 py-6">
            Lihat Menu Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;