import React from 'react';
    import { Link } from 'react-router-dom';
    import { Globe, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const Footer = () => {
      const { toast } = useToast();

      const handleLinkClick = (e) => {
        e.preventDefault();
        toast({
          title: "Fitur Belum Tersedia 🚧",
          description: "Fungsionalitas ini belum diimplementasikan. Anda bisa memintanya di prompt berikutnya! 🚀",
        });
      };

      return (
        <footer className="bg-slate-900/50 border-t border-slate-800 text-slate-400">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-8 w-8 text-sky-400" />
                  <span className="text-2xl font-bold text-white">WisataYuk</span>
                </div>
                <p className="max-w-xs">
                  Jelajahi destinasi impian Anda bersama kami. Pengalaman tak terlupakan menanti.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-4">Tautan Cepat</p>
                <ul>
                  <li className="mb-2"><Link to="/" className="hover:text-sky-300 transition-colors">Beranda</Link></li>
                  <li className="mb-2"><a href="#" onClick={handleLinkClick} className="hover:text-sky-300 transition-colors">Paket Wisata</a></li>
                  <li className="mb-2"><a href="#" onClick={handleLinkClick} className="hover:text-sky-300 transition-colors">Tentang Kami</a></li>
                  <li><a href="#" onClick={handleLinkClick} className="hover:text-sky-300 transition-colors">Kontak</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-4">Hubungi Kami</p>
                <ul>
                  <li className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-sky-400" />
                    <span>kontak@wisatayuk.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-sky-400" />
                    <span>(021) 123-4567</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-4">Ikuti Kami</p>
                <div className="flex gap-4">
                  <a href="#" onClick={handleLinkClick} className="text-slate-400 hover:text-sky-300 transition-colors"><Facebook size={24} /></a>
                  <a href="#" onClick={handleLinkClick} className="text-slate-400 hover:text-sky-300 transition-colors"><Twitter size={24} /></a>
                  <a href="#" onClick={handleLinkClick} className="text-slate-400 hover:text-sky-300 transition-colors"><Instagram size={24} /></a>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-800 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} WisataYuk. Semua Hak Cipta Dilindungi.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;