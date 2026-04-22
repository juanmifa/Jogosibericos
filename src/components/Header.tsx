import React, { useState } from 'react';
import { useLang } from '../LangContext';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.location'), href: '#location' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.gallery'), href: '#gallery' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
          ABADÁ
        </div>
        <span className="font-bold tracking-tighter text-xl uppercase text-[#1B4332] hidden sm:block">
          Capoeira Burgos
        </span>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-widest text-[#1B4332]">
          {navLinks.map((link) => (
             <a
              key={link.name}
              href={link.href}
              className="hover:text-[#F27D26] transition-colors"
             >
               {link.name}
             </a>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
          <div 
            onClick={() => setLang('es')} 
            className={`flex gap-1 items-center cursor-pointer transition-opacity ${lang === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          >
            <div className="w-4 h-3 flex flex-col border border-gray-300">
              <div className="bg-red-600 h-1/4"></div><div className="bg-yellow-400 h-2/4"></div><div class="bg-red-600 h-1/4"></div>
            </div>
            <span className="text-[10px] font-bold text-gray-800">ES</span>
          </div>
          <div className="w-px h-3 bg-gray-300"></div>
          <div 
            onClick={() => setLang('pt')} 
            className={`flex gap-1 items-center cursor-pointer transition-opacity ${lang === 'pt' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
          >
            <div className="w-4 h-3 flex border border-gray-300">
              <div className="bg-green-700 w-2/5"></div><div className="bg-red-600 w-3/5"></div>
            </div>
            <span className="text-[10px] font-bold text-gray-800">PT</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1B4332]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 border-b border-gray-100">
           {navLinks.map((link) => (
             <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1B4332] font-semibold text-sm uppercase tracking-widest hover:text-[#F27D26] w-full text-center py-2"
             >
               {link.name}
             </a>
          ))}
        </div>
      )}
    </nav>
  );
};
