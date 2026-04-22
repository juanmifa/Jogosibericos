import React from 'react';
import { useLang } from '../LangContext';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-[500px] flex flex-col lg:flex-row border-b border-gray-200">
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white z-10 order-2 lg:order-1">
        <div className="inline-block self-start bg-[#F27D26] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
          Burgos, España • {t('hero.dates')}
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-black leading-[0.9] mb-6 uppercase tracking-tighter text-[#1B4332] [text-wrap:balance]">
          {t('hero.title').split('-')[0]}<span className="text-[#F27D26] block">IBÉRICOS</span>
        </h1>
        
        <p className="text-lg font-medium border-l-4 border-[#1B4332] pl-4 max-w-md text-gray-700">
          <span className="italic text-gray-500">Jogos Abertos: </span> 
          Un evento abierto para todos los niveles de Abadá-Capoeira.
        </p>

        <div className="mt-8">
          <a 
            href="#register" 
            className="inline-flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#d96c1e] text-white font-black py-4 px-8 rounded-lg uppercase tracking-tighter text-xl shadow-lg transition-colors"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
      
      {/* Stylized Hero Image / Composite */}
      <div className="w-full lg:w-1/2 relative bg-[#1B4332] overflow-hidden min-h-[300px] order-1 lg:order-2">
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          {/* Symbolic shapes for cathedral/monument */}
          <div className="w-64 h-96 border-2 border-white absolute -bottom-10 left-10 rotate-12"></div>
          <div className="w-48 h-80 border-2 border-white absolute bottom-0 right-10 -rotate-6"></div>
        </div>
        
        {/* Capoeirista Placeholder Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[12px] border-[#F27D26] flex items-center justify-center relative bg-black/20 bg-cover bg-center bg-blend-overlay" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1596466059353-27c9f6927da8?auto=format&fit=crop&q=80")'}}>
              <div className="text-white font-black text-8xl sm:text-9xl opacity-20">26</div>
              <div className="absolute bottom-4 sm:bottom-10 -left-6 sm:-left-10 bg-white text-[#1B4332] px-4 py-2 transform -rotate-12 font-bold shadow-xl border border-gray-100 text-sm">
                ABADÁ-CAPOEIRA
              </div>
           </div>
        </div>
        
        {/* Flags Union Branding */}
        <div className="absolute top-6 right-6 lg:top-10 lg:right-10 flex gap-4 bg-black/10 p-2 rounded backdrop-blur-sm">
           <div className="h-10 w-1 bg-[#F27D26]"></div>
           <div className="text-white text-[10px] uppercase font-bold leading-tight flex flex-col justify-center">
             União Ibérica<br/>Espanha & Portugal
           </div>
        </div>
      </div>
    </section>
  );
};
