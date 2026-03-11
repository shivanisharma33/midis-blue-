const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-background">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-lg">Arooth</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              We blend creativity with strategy to build digital experiences that move brands forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3">
              {["Brand Identity", "UI/UX Strategy", "Digital Marketing", "Product Design", "Web Development"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-xs opacity-60 hover:opacity-100 transition-opacity"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© 2025 Arooth. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
