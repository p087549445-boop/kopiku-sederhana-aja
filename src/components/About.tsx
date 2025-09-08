const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
              Tentang BrewCafe
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              BrewCafe adalah kedai kopi yang lahir dari kecintaan mendalam terhadap kopi berkualitas tinggi. 
              Sejak 2020, kami berkomitmen untuk menyajikan pengalaman kopi yang tak terlupakan.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Setiap biji kopi yang kami gunakan dipilih secara teliti dari petani lokal terbaik. 
              Kami percaya bahwa secangkir kopi yang sempurna dimulai dari biji kopi berkualitas 
              dan proses seduh yang penuh dedikasi.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-coffee-cream/30 rounded-lg">
                <div className="text-3xl font-bold text-coffee-gold mb-2">500+</div>
                <div className="text-sm text-coffee-dark">Pelanggan Setia</div>
              </div>
              <div className="text-center p-4 bg-coffee-cream/30 rounded-lg">
                <div className="text-3xl font-bold text-coffee-gold mb-2">15+</div>
                <div className="text-sm text-coffee-dark">Varian Kopi</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-coffee-cream/40 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">Misi Kami</h3>
              <p className="text-muted-foreground">
                Menyajikan kopi berkualitas tinggi yang dapat menghadirkan kebahagiaan 
                dan energi positif untuk memulai hari yang produktif.
              </p>
            </div>
            
            <div className="bg-coffee-cream/40 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">Visi Kami</h3>
              <p className="text-muted-foreground">
                Menjadi kedai kopi terdepan yang mengutamakan kualitas, 
                keberlanjutan, dan kepuasan pelanggan.
              </p>
            </div>
            
            <div className="bg-coffee-cream/40 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-coffee-dark mb-3">Nilai Kami</h3>
              <p className="text-muted-foreground">
                Kualitas, Konsistensi, dan Kepedulian terhadap komunitas lokal 
                serta lingkungan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;