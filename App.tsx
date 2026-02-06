
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Utensils, 
  Dumbbell, 
  Users, 
  Wine, 
  CigaretteOff, 
  CheckCircle,
  Clock,
  Instagram,
  Facebook,
  CreditCard,
  Building,
  Menu,
  X,
  Plane,
  Briefcase,
  ShieldCheck,
  Trophy,
  Tv,
  Thermometer,
  Shield,
  Star,
  Dog,
  Wind,
  Trash2,
  Lock,
  Baby,
  Sparkles,
  Shirt,
  Flame,
  Camera,
  Bell,
  HardHat,
  Accessibility,
  Droplets,
  Trees,
  DoorOpen,
  LayoutGrid
} from 'lucide-react';
import { translations } from './translations';
import { GALLERY_DATA, LOGO_URL, ROOMS_DATA, SOCIAL_LINKS, BOOKING_LINKS } from './constants';
import { Language, GalleryImage, Room } from './types';

const LanguageSwitcher = ({ current, setLang }: { current: Language, setLang: (l: Language) => void }) => {
  const flags = {
    sq: "https://flagcdn.com/w40/al.png",
    en: "https://flagcdn.com/w40/gb.png",
    de: "https://flagcdn.com/w40/de.png"
  };

  return (
    <div className="flex gap-2 p-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
      {(['sq', 'en', 'de'] as Language[]).map(l => (
        <motion.button
          key={l}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLang(l)}
          className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border-2 transition-all ${current === l ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30' : 'border-transparent opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`}
        >
          <img src={flags[l]} alt={l} className="w-full h-full object-cover" />
        </motion.button>
      ))}
    </div>
  );
};

const FloatingContact = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col gap-3">
      <motion.a
        href={SOCIAL_LINKS.phone}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 bg-[#d4af37] text-white px-5 py-4 rounded-full shadow-2xl font-black uppercase tracking-widest text-[9px] border border-white/20"
      >
        <Phone size={16} fill="white" />
        {t.callNow}
      </motion.a>
      <motion.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl font-black uppercase tracking-widest text-[9px] border border-white/20"
      >
        <MessageCircle size={16} fill="white" />
        {t.whatsapp}
      </motion.a>
    </div>
  );
};

const RoomCard: React.FC<{ room: Room; lang: Language }> = ({ room, lang }) => {
  const t = translations[lang];
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 flex flex-col h-full group"
    >
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.title[lang]} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-2 group-hover:text-[#d4af37] transition-colors">{room.title[lang]}</h3>
        <p className="text-stone-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">{room.size}</p>
        
        <p className="text-stone-500 text-sm mb-6 flex items-center gap-2 font-medium">
          <Users size={18} className="text-[#d4af37]" /> {t.maxPeople}: {room.maxPeople} {t.people} • {room.beds[lang]}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.slice(0, 8).map((amenity, idx) => (
            <span key={idx} className="bg-stone-50 text-stone-700 px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-stone-100">
              <CheckCircle size={10} className="text-[#d4af37]" /> {amenity}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
          <span className="text-[#d4af37] text-[9px] font-black uppercase tracking-[0.4em]">{t.exclusiveAccommodations}</span>
          <motion.a
            href={BOOKING_LINKS.booking}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="bg-stone-900 text-white px-6 py-3.5 rounded-full flex items-center gap-2 text-[9px] font-black uppercase tracking-widest hover:bg-[#d4af37] transition-all shadow-xl"
          >
            {t.bookNow} <ChevronRight size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16 px-6">
    {subtitle && <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">{subtitle}</span>}
    <h2 className="text-4xl md:text-8xl font-serif italic mb-6 leading-tight">{title}</h2>
    <div className="w-20 h-[1px] bg-[#d4af37] mx-auto" />
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('sq');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden selection:bg-[#d4af37] selection:text-white">
      
      {/* Premium Header */}
      <nav className="fixed w-full z-[120] py-6 md:py-8 px-4 md:px-16 pointer-events-none">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between pointer-events-auto bg-black/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/5">
          <div className="flex-none">
            <img src={LOGO_URL} alt="Logo" className="h-12 md:h-20 drop-shadow-2xl" />
          </div>

          {/* Language Switcher between Logo and Menu on ALL devices */}
          <div className="flex items-center gap-4">
             <LanguageSwitcher current={lang} setLang={setLang} />
          </div>

          <div className="flex items-center gap-4 md:gap-12">
            <div className="hidden lg:flex gap-8 text-white text-[9px] font-black uppercase tracking-[0.3em]">
              <a href="#rooms" onClick={(e) => handleNavClick(e, 'rooms')} className="hover:text-[#d4af37] transition-all">Dhomat</a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-[#d4af37] transition-all">Galeria</a>
              <a href="#nearby" onClick={(e) => handleNavClick(e, 'nearby')} className="hover:text-[#d4af37] transition-all">Çfarë ka afër</a>
              <a href="#facilities" onClick={(e) => handleNavClick(e, 'facilities')} className="hover:text-[#d4af37] transition-all">Fasilitetet</a>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(true)} 
              className="bg-black/30 backdrop-blur-xl text-white p-3 rounded-2xl border border-white/10 hover:bg-[#d4af37] transition-all shadow-2xl"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-stone-950/98 backdrop-blur-3xl text-white z-[200] flex flex-col p-12 overflow-y-auto custom-scrollbar"
          >
            <div className="flex justify-between items-center mb-16">
              <img src={LOGO_URL} alt="Logo" className="h-16" />
              <button onClick={() => setMobileMenuOpen(false)} className="bg-white/10 p-5 rounded-full hover:bg-[#d4af37] transition-colors"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-10 text-4xl md:text-7xl font-serif italic mb-20">
              <a href="#rooms" onClick={(e) => handleNavClick(e, 'rooms')}>Dhomat</a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Galeria</a>
              <a href="#nearby" onClick={(e) => handleNavClick(e, 'nearby')}>Çfarë ka afër</a>
              <a href="#facilities" onClick={(e) => handleNavClick(e, 'facilities')}>Fasilitetet</a>
            </div>
            <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-t border-white/10 pt-12">
              <div className="flex gap-10">
                <a href={SOCIAL_LINKS.facebook} target="_blank" className="text-white hover:text-[#d4af37] transition-colors"><Facebook size={32} /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" className="text-white hover:text-[#d4af37] transition-colors"><Instagram size={32} /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" className="text-white hover:text-[#d4af37] transition-colors"><i className="fab fa-tiktok text-3xl"></i></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingContact lang={lang} />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white text-center px-6 overflow-hidden">
        <img src="https://i.ibb.co/TDxFv24d/205530626.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-stone-50" />
        
        <div className="relative z-10 flex flex-col items-center max-w-6xl">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-6 relative"
          >
            <h1 className="text-7xl md:text-[10rem] font-serif italic leading-none select-none drop-shadow-2xl flex flex-col items-center">
              <span className="px-10 relative inline-block">
                Kuint
              </span>
              <span className="text-[#d4af37] not-italic font-sans font-black uppercase text-3xl md:text-7xl block tracking-[0.5em] mt-2 md:-mt-8">Hotel</span>
            </h1>
          </motion.div>
          
          {/* Glow Gold/White Text for Breakfast */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-12 py-3 px-8 rounded-full border border-[#d4af37]/40 bg-stone-950/60 backdrop-blur-2xl flex items-center gap-4 shadow-[0_0_50px_rgba(212,175,55,0.3)] group"
          >
            <Star size={16} fill="#d4af37" color="#d4af37" className="group-hover:rotate-180 transition-transform duration-700" />
            <span className="glow-text-pulse text-sm md:text-base font-black uppercase tracking-[0.4em] leading-tight">MËNGJES I MREKULLUESHËM</span>
            <Star size={16} fill="#d4af37" color="#d4af37" className="group-hover:rotate-180 transition-transform duration-700" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="text-base md:text-2xl font-light mb-16 tracking-[0.5em] uppercase opacity-90"
          >
            Kulmi i Luksit
          </motion.p>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <motion.a 
              href="#rooms" 
              onClick={(e) => handleNavClick(e, 'rooms')}
              className="bg-[#d4af37] px-16 md:px-24 py-6 md:py-8 rounded-full text-[11px] md:text-sm font-black uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(212,175,55,0.4)] hover:scale-105 transition-all text-white"
            >
              Eksploro
            </motion.a>
            <motion.a 
              href="#gallery" 
              onClick={(e) => handleNavClick(e, 'gallery')}
              className="border-2 border-white/30 backdrop-blur-xl px-16 md:px-24 py-6 md:py-8 rounded-full text-[11px] md:text-sm font-black uppercase tracking-[0.3em] hover:bg-white hover:text-stone-900 transition-all shadow-2xl text-white"
            >
              Galeria
            </motion.a>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40 text-center flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.6em]">Scroll to Discover</span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </header>

      {/* Redesigned Booking Buttons Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading title="Rezervo Tani" subtitle="Zgjidhni partnerin tuaj" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Agoda", link: BOOKING_LINKS.agoda, color: "bg-blue-50 text-blue-900", sub: "Easy Booking" },
              { name: "Booking.com", link: BOOKING_LINKS.booking, color: "bg-stone-900 text-[#d4af37]", sub: "Official Partner", primary: true },
              { name: "Priceline", link: BOOKING_LINKS.priceline, color: "bg-stone-100 text-stone-900", sub: "Exclusive Deals" }
            ].map((btn, i) => (
              <motion.a 
                key={i}
                href={btn.link}
                target="_blank"
                whileHover={{ y: -10, scale: 1.02 }}
                className={`flex flex-col items-center justify-center p-10 md:p-12 rounded-[3rem] shadow-2xl transition-all ${btn.color} ${btn.primary ? 'border-2 border-[#d4af37]' : 'border border-stone-100'}`}
              >
                <h4 className="text-3xl md:text-4xl font-serif italic mb-2">{btn.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-6">{btn.sub}</p>
                <div className="bg-current opacity-10 w-full h-px mb-6" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                  Rezervo <ChevronRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 md:py-40 bg-stone-50">
        <div className="max-w-[1500px] mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <SectionHeading title="Dhomat tona" subtitle="Relaksim Total" />
              <p className="text-stone-400 text-xl md:text-3xl font-light leading-relaxed -mt-8">Mëngjes i mrekullueshëm i përfshirë në çdo dhomë. Eksperience unike e luksit në Pejë.</p>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-stone-100 flex items-center gap-8 md:gap-10">
              <div className="text-right">
                <p className="text-[10px] md:text-[11px] text-stone-400 font-black uppercase tracking-[0.3em] mb-2 md:mb-3">Pikët tona</p>
                <div className="flex gap-1 md:gap-1.5 mb-1.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#d4af37" color="#d4af37" />)}
                </div>
                <p className="font-serif text-2xl md:text-4xl italic text-stone-900">E shkëlqyeshme</p>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 bg-stone-900 text-[#d4af37] rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center font-serif text-3xl md:text-6xl italic border-2 md:border-4 border-[#d4af37]/20 shadow-2xl">
                9.5
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {ROOMS_DATA.map(room => (
              <RoomCard key={room.id} room={room} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE FACILITIES SECTION */}
      <section id="facilities" className="py-24 md:py-40 bg-white">
        <div className="max-w-[1500px] mx-auto px-6 md:px-16">
          <SectionHeading title="Fasilitetet tona" subtitle="Gjithçka që ju nevojitet" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            
            {/* Highlights */}
            <div className="space-y-10">
              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <Sparkles size={20} /> Ideale për qëndrimin tuaj
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4 bg-stone-50 p-5 rounded-3xl"><Utensils size={20} className="text-[#d4af37]" /> Restorant</li>
                <li className="flex items-center gap-4 bg-stone-50 p-5 rounded-3xl"><Car size={20} className="text-[#d4af37]" /> Parking falas</li>
                <li className="flex items-center gap-4 bg-stone-50 p-5 rounded-3xl"><Wifi size={20} className="text-[#d4af37]" /> Wifi falas</li>
                <li className="flex items-center gap-4 bg-stone-50 p-5 rounded-3xl"><Dog size={20} className="text-[#d4af37]" /> Pet friendly</li>
                <li className="flex items-center gap-4 bg-stone-50 p-5 rounded-3xl"><Dumbbell size={20} className="text-[#d4af37]" /> Fitness</li>
                <li className="flex items-center gap-4 bg-stone-50 p-5 rounded-3xl"><Plane size={20} className="text-[#d4af37]" /> Airport Shuttle</li>
              </ul>
            </div>

            {/* Outdoors & Food */}
            <div className="space-y-10">
              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <LayoutGrid size={20} /> Outdoors & Garden
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Mobilje të jashtme</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Terasë & Kopsht</li>
              </ul>
              
              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 pt-6">
                <Coffee size={20} /> Food & Drink
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Coffee house on site</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Fruta (Extra)</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Verë/Shampanjë (Extra)</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Buffet per fëmijë</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Snack bar & Bar</li>
              </ul>
            </div>

            {/* Reception & Safety */}
            <div className="space-y-10">
              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <DoorOpen size={20} /> Front Desk Services
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Lockers</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Private check-in/out</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Bagazh (Extra)</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> 24-hour front desk</li>
              </ul>

              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 pt-6">
                <ShieldCheck size={20} /> Siguria
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Fire extinguishers</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> CCTV outside</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> CCTV common areas</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Smoke alarms</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> 24-hour security</li>
              </ul>
            </div>

            {/* General & Cleaning */}
            <div className="space-y-10">
              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
                <LayoutGrid size={20} /> General
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Shuttle service (Extra)</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Air conditioning</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Soundproof rooms</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Elevator</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Dhoma jo-duhanpirëse</li>
              </ul>

              <h4 className="text-[#d4af37] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 pt-6">
                <Accessibility size={20} /> Aksesueshmëria
              </h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Wheelchair accessible</li>
                <li className="flex items-center gap-4"><CheckCircle size={16} className="text-[#d4af37]" /> Raised toilet</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-40 bg-white">
        <GallerySection lang={lang} />
      </section>

      {/* Destination / Nearby */}
      <section id="nearby" className="py-24 md:py-40 bg-stone-50">
        <div className="max-w-[1500px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div>
            <SectionHeading title="Çfarë ka afër" subtitle="Zbuloni Pejën" />
            <div className="space-y-8 md:space-y-10">
              {[
                { icon: <Building size={24} />, title: t.nearbyInfo.museum, dist: "2.2 km" },
                { icon: <MapPin size={24} />, title: t.nearbyInfo.park, dist: "3.1 km" },
                { icon: <Trophy size={24} />, title: t.nearbyInfo.adventure, dist: "4.4 km" },
                { icon: <Plane size={24} />, title: t.nearbyInfo.airport, dist: "69 km" },
              ].map((loc, idx) => (
                <div key={idx} className="flex items-center justify-between pb-6 md:pb-8 border-b border-stone-200 group">
                  <div className="flex items-center gap-6 md:gap-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-all">
                      {loc.icon}
                    </div>
                    <span className="text-xl md:text-3xl font-serif text-stone-800">{loc.title}</span>
                  </div>
                  <span className="text-stone-400 font-black text-xs tracking-widest">{loc.dist}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] md:h-[800px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[10px] md:border-[20px] border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.868846114405!2d20.2882193!3d42.6508687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fd647183e87b%3A0x6003698926752761!2sKuint%20Hotel!5e0!3m2!1sen!2s!4v1710350000000!5m2!1sen!2s" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
              className="grayscale contrast-125"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-32 md:py-40 px-6 md:px-8">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center text-center">
          <img src={LOGO_URL} alt="Logo" className="h-32 md:h-40 mb-16 md:mb-20 drop-shadow-2xl" />
          <h3 className="text-4xl md:text-[9rem] font-serif italic mb-10 md:mb-12 leading-none">Qëndrimi i ëndrrave</h3>
          <p className="max-w-4xl text-stone-400 text-lg md:text-4xl font-light mb-20 md:mb-24 italic opacity-80 leading-relaxed px-4">
            "{t.legacyOfExcellence}"
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-stone-500 mb-24 md:mb-32">
             <a href="#rooms" onClick={(e) => handleNavClick(e, 'rooms')} className="hover:text-[#d4af37] transition-all tracking-[0.4em] md:tracking-[0.8em]">Dhomat</a>
             <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-[#d4af37] transition-all tracking-[0.4em] md:tracking-[0.8em]">Galeria</a>
             <a href="#nearby" onClick={(e) => handleNavClick(e, 'nearby')} className="hover:text-[#d4af37] transition-all tracking-[0.4em] md:tracking-[0.8em]">Çfarë ka afër</a>
             <a href="#facilities" onClick={(e) => handleNavClick(e, 'facilities')} className="hover:text-[#d4af37] transition-all tracking-[0.4em] md:tracking-[0.8em]">Fasilitetet</a>
          </div>
          <div className="w-full h-px bg-white/5 mb-20 md:mb-24" />
          <div className="flex flex-col md:flex-row justify-between w-full gap-10 md:gap-12 text-stone-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
             <p>© 2025 KUINT HOTEL. {t.architectsOfLuxury}.</p>
             <div className="flex gap-10 md:gap-16">
               <a href={SOCIAL_LINKS.facebook} target="_blank" className="hover:text-white transition-colors">Facebook</a>
               <a href={SOCIAL_LINKS.instagram} target="_blank" className="hover:text-white transition-colors">Instagram</a>
               <a href={SOCIAL_LINKS.tiktok} target="_blank" className="hover:text-white transition-colors">TikTok</a>
             </div>
             <p className="text-stone-800">DESIGN BY VIP AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const GallerySection = ({ lang }: { lang: Language }) => {
  const [filter, setFilter] = useState('all');
  const t = translations[lang];

  const categories = [
    { id: 'all', label: t.all, count: GALLERY_DATA.length },
    { id: 'rooms', label: t.rooms, count: GALLERY_DATA.filter(i => i.category === 'rooms').length },
    { id: 'views', label: t.views, count: GALLERY_DATA.filter(i => i.category === 'views').length },
    { id: 'facilities', label: t.facilities, count: GALLERY_DATA.filter(i => i.category === 'facilities').length },
    { id: 'dining', label: t.dining, count: GALLERY_DATA.filter(i => i.category === 'dining').length }
  ];

  const filtered = filter === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(img => img.category === filter);

  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-8">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-5xl md:text-[12rem] font-serif mb-12 md:mb-16 italic tracking-tighter leading-none">Galeria</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 md:px-10 py-3 md:py-5 rounded-2xl md:rounded-3xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl ${filter === cat.id ? 'bg-stone-900 text-white scale-110' : 'bg-stone-50 text-stone-500 hover:bg-stone-100'}`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map(img => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-stone-100 group shadow-xl"
            >
              <img src={img.url} alt={img.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
