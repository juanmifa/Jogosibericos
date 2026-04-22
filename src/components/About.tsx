import React from 'react';
import { useLang } from '../LangContext';

export const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="bg-gray-50 border-b border-gray-200">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 lg:p-16 border-r border-gray-200 flex flex-col justify-center">
          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
            {t('about.title')}
          </h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] mb-6 leading-tight uppercase tracking-tighter">
            Uniendo la Península a través de la Capoeira
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 font-medium">
            <p>{t('about.content1')}</p>
            <p>{t('about.content2')}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8 p-6 bg-white border border-gray-200 shadow-sm">
            <div>
               <p className="text-3xl font-black tracking-tighter text-[#F27D26]">4</p>
               <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Días de Evento</p>
            </div>
            <div>
               <p className="text-3xl font-black tracking-tighter text-[#F27D26]">500+</p>
               <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Participantes</p>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 min-h-[400px] relative bg-gray-100 p-8 lg:p-16 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square bg-white border-8 border-white shadow-2xl p-2 transform rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1628151016629-dccdb6a9787e?auto=format&fit=crop&q=80" 
              alt="Burgos Cathedral" 
              className="w-full h-full object-cover border border-gray-100 filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -top-4 -right-4 bg-[#F27D26] text-white p-4 font-black text-2xl border-2 border-white shadow-lg">
              XXII
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
