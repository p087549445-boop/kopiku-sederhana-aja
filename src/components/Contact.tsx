import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Jangan ragu untuk menghubungi kami!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center border-coffee-light/20 hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <CardTitle className="text-coffee-dark">Alamat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Jl. Kopi Nikmat No. 123<br />
                Jakarta Selatan 12345<br />
                Indonesia
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-coffee-light/20 hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <CardTitle className="text-coffee-dark">Telepon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                +62 21 1234 5678<br />
                +62 812 3456 7890<br />
                Senin - Minggu: 07:00 - 22:00
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-coffee-light/20 hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle className="text-coffee-dark">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                info@brewcafe.com<br />
                order@brewcafe.com<br />
                Respon dalam 24 jam
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="bg-coffee-dark/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-coffee-dark mb-4">
              Jam Operasional
            </h3>
            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
              <div>Senin - Jumat: 07:00 - 22:00</div>
              <div>Sabtu - Minggu: 08:00 - 23:00</div>
            </div>
            <div className="mt-6">
              <Button variant="coffee" size="lg">
                Kunjungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;