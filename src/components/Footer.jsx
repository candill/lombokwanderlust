
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">WisataKu</span>
            </div>
            <p className="text-gray-300">
              Menjelajahi keindahan Indonesia dengan paket wisata terbaik dan pengalaman yang tak terlupakan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Menu Cepat</span>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link to="/packages" className="block text-gray-300 hover:text-white transition-colors">
                Paket Wisata
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                Tentang Kami
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Kontak
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Layanan</span>
            <div className="space-y-2">
              <p className="text-gray-300">Paket Wisata Domestik</p>
              <p className="text-gray-300">Paket Wisata Internasional</p>
              <p className="text-gray-300">Hotel & Akomodasi</p>
              <p className="text-gray-300">Transportasi</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Kontak Kami</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">info@wisataku.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                <span className="text-gray-300">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WisataKu. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
