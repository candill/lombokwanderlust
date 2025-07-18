import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Menu, X, Globe } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';

    const navLinks = [
      { name: 'Beranda', path: '/' },
      { name: 'Paket Wisata', path: '/packages' },
      { name: 'Tentang Kami', path: '/about' },
      { name: 'Kontak', path: '/contact' },
    ];

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const { toast } = useToast();

      const handleNavClick = (path) => {
        if (path !== '/') {
          toast({
            title: "Segera Hadir! 🚧",
            description: "Halaman ini belum tersedia. Anda bisa memintanya di prompt berikutnya! 🚀",
          });
        }
        setIsOpen(false);
      };

      return (
        <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold text-white">LombokWanderlust</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors hover:text-sky-300 ${
                      isActive ? 'text-sky-400' : 'text-slate-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button variant="ghost" onClick={() => handleNavClick('/login')}>Masuk</Button>
              <Button className="ml-2 bg-sky-600 hover:bg-sky-700 text-white" onClick={() => handleNavClick('/register')}>
                Daftar
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 p-4 bg-slate-800 rounded-lg"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="text-lg font-medium text-slate-300 hover:text-sky-300"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="border-t border-slate-700 pt-4 mt-2 flex flex-col gap-2">
                    <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavClick('/login')}>Masuk</Button>
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white" onClick={() => handleNavClick('/register')}>Daftar</Button>
                </div>
              </nav>
            </motion.div>
          )}
        </header>
      );
    };

    export default Header;
