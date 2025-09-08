const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-coffee-gold rounded-full"></div>
              <h3 className="text-2xl font-bold">BrewCafe</h3>
            </div>
            <p className="text-coffee-cream">
              Kopi terbaik untuk hari yang lebih baik. Nikmati pengalaman kopi yang tak terlupakan bersama kami.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coffee-gold">Menu</h4>
            <ul className="space-y-2 text-coffee-cream">
              <li><a href="#" className="hover:text-white transition-colors">Espresso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cappuccino</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cold Brew</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coffee-gold">Tentang</h4>
            <ul className="space-y-2 text-coffee-cream">
              <li><a href="#about" className="hover:text-white transition-colors">Cerita Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-coffee-gold">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-cream hover:text-coffee-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-coffee-cream hover:text-coffee-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-coffee-cream hover:text-coffee-gold transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.086-.771-.148-1.956.031-2.799.162-.759 1.05-4.46 1.05-4.46s-.268-.537-.268-1.333c0-1.249.724-2.183 1.624-2.183.766 0 1.136.575 1.136 1.265 0 .772-.492 1.927-.746 2.998-.212.897.45 1.628 1.334 1.628 1.603 0 2.839-1.69 2.839-4.129 0-2.156-1.551-3.666-3.769-3.666-2.565 0-4.068 1.925-4.068 3.919 0 .775.297 1.605.668 2.058.073.089.084.167.062.258-.067.284-.216.895-.246 1.021-.039.165-.127.2-.293.12-1.097-.512-1.785-2.115-1.785-3.406 0-2.840 2.063-5.446 5.947-5.446 3.125 0 5.553 2.226 5.553 5.203 0 3.102-1.954 5.595-4.665 5.595-.911 0-1.768-.474-2.059-1.04l-.559 2.134c-.202.78-.747 1.759-1.112 2.355.84.259 1.731.398 2.656.398 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-coffee-medium mt-8 pt-6 text-center text-coffee-cream">
          <p>&copy; 2024 BrewCafe. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;