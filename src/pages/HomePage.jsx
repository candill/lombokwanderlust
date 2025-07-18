import React from 'react';
    import { Helmet } from 'react-helmet-async';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Star, MapPin, ArrowRight } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const featuredPackages = [
      {
        id: 1,
        title: 'Petualangan Eksotis Bali',
        location: 'Bali, Indonesia',
        rating: 4.9,
        price: '3.500.000',
        image: 'Pulau tropis Bali dengan pura di tepi danau',
        alt: 'Pura Ulun Danu Beratan di Bali',
      },
      {
        id: 2,
        title: 'Pesona Sejarah Yogyakarta',
        location: 'Yogyakarta, Indonesia',
        rating: 4.8,
        price: '2.800.000',
        image: 'Candi Borobudur saat matahari terbit',
        alt: 'Candi Borobudur yang megah di Yogyakarta',
      },
      {
        id: 3,
        title: 'Keajaiban Alam Raja Ampat',
        location: 'Raja Ampat, Indonesia',
        rating: 5.0,
        price: '7.200.000',
        image: 'Pemandangan udara gugusan pulau karst di Raja Ampat',
        alt: 'Pemandangan indah kepulauan Raja Ampat',
      },
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Rina Amelia',
            comment: '"Perjalanan ke Bali bersama WisataYuk sangat luar biasa! Semuanya terorganisir dengan baik. Pemandu wisatanya ramah dan sangat berpengetahuan. Sangat direkomendasikan!"',
            avatar: 'Potret wanita tersenyum bahagia',
            alt: 'Foto profil Rina Amelia',
        },
        {
            id: 2,
            name: 'Budi Santoso',
            comment: '"Pengalaman tak terlupakan di Raja Ampat. Pemandangan bawah lautnya spektakuler. Terima kasih WisataYuk telah mewujudkan liburan impian saya!"',
            avatar: 'Pria petualang dengan latar belakang gunung',
            alt: 'Foto profil Budi Santoso',
        }
    ];

    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      in: { opacity: 1, y: 0 },
      out: { opacity: 0, y: -20 },
    };

    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
    };

    const HomePage = () => {
      const { toast } = useToast();

      const handleActionClick = () => {
        toast({
          title: "Fitur Belum Tersedia 🚧",
          description: "Fungsionalitas ini belum diimplementasikan. Anda bisa memintanya di prompt berikutnya! 🚀",
        });
      };

      return (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Helmet>
            <title>WisataYuk - Jelajahi Destinasi Impian Anda</title>
            <meta name="description" content="Temukan dan pesan paket wisata terbaik ke destinasi paling menakjubkan di seluruh dunia. Liburan impian Anda dimulai di sini." />
          </Helmet>

          <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white px-4">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img  className="absolute inset-0 w-full h-full object-cover" alt="Pantai tropis yang indah saat matahari terbenam" src="https://images.unsplash.com/photo-1693169537521-9beef1dc31ca" />
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Jelajahi Dunia, Ciptakan Kenangan
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                Temukan petualangan tak terlupakan dengan paket wisata eksklusif kami.
              </p>
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white text-lg px-8 py-6 rounded-full" onClick={handleActionClick}>
                Lihat Semua Paket
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </section>

          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">Paket Wisata Unggulan</h2>
                <p className="text-slate-400 mt-2">Destinasi paling populer yang dipilih oleh para petualang.</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-800 border-slate-700 text-white overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg shadow-sky-900/20">
                      <CardHeader className="p-0 relative">
                        <img  className="w-full h-56 object-cover" alt={pkg.alt} src="https://images.unsplash.com/photo-1702567855965-176e97304a4b" />
                        <div className="absolute top-4 right-4 bg-slate-900/70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{pkg.rating}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-bold mb-2">{pkg.title}</CardTitle>
                        <div className="flex items-center text-slate-400 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{pkg.location}</span>
                        </div>
                        <p className="text-2xl font-extrabold text-sky-400">
                          Rp {pkg.price}
                          <span className="text-sm font-normal text-slate-400">/orang</span>
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-sky-600 hover:bg-sky-700" onClick={handleActionClick}>
                          Lihat Detail
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Apa Kata Mereka?</h2>
                    <p className="text-slate-400 mt-2">Pengalaman nyata dari para pelanggan kami yang puas.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="glassmorphism p-6 h-full flex flex-col justify-center items-center text-center border-sky-500/30">
                                <img  className="w-24 h-24 rounded-full mb-4 border-4 border-sky-400 object-cover" alt={testimonial.alt} src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                                <p className="text-slate-300 italic mb-4">{testimonial.comment}</p>
                                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
          </section>
        </motion.div>
      );
    };

    export default HomePage;