import React from 'react';
import { useLang } from '../LangContext';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-white px-4 sm:px-8 py-6 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] flex-wrap font-bold text-gray-400 uppercase tracking-widest">
      <div className="text-center sm:text-left">ABADÁ-CAPOEIRA ESPAÑA & PORTUGAL</div>
      <div className="text-center">© {new Date().getFullYear()} XXII JOGOS IBÉRICOS - BURGOS</div>
      <div className="flex gap-4 items-center">
        <a href="#" className="hover:text-[#F27D26] transition-colors"><Instagram size={14} className="sm:hidden" /><span className="hidden sm:inline">Instagram</span></a>
        <a href="#" className="hover:text-[#F27D26] transition-colors"><Facebook size={14} className="sm:hidden" /><span className="hidden sm:inline">Facebook</span></a>
        <a href="#" className="hover:text-[#F27D26] transition-colors"><Youtube size={14} className="sm:hidden" /><span className="hidden sm:inline">YouTube</span></a>
      </div>
    </footer>
  );
};
