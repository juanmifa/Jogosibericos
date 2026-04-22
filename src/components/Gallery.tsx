import React from 'react';
import { useLang } from '../LangContext';

export const Gallery = () => {
  const { t } = useLang();

  const images = [
    'https://images.unsplash.com/photo-1549471013-336214ed0b26?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579401777263-54911aa6e2d1?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1605372433917-e9fa49ed2db3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1596466059439-d37536d7a468?auto=format&fit=crop&q=80',
  ];

  return (
    <section id="gallery" className="bg-white border-b border-gray-200">
      <div className="h-16 bg-white flex items-center px-8 gap-4 border-b border-gray-100 max-w-7xl mx-auto">
        <span className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest">{t('gallery.title')}:</span>
        <div className="flex-1 hidden sm:flex gap-1 h-3">
          <div className="flex-1 bg-gray-200 rounded-sm"></div>
          <div className="flex-1 bg-gray-300 rounded-sm"></div>
          <div className="flex-1 bg-gray-200 rounded-sm"></div>
          <div className="flex-1 bg-gray-100 rounded-sm"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto p-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="aspect-square bg-gray-100 border border-gray-200 p-1 group">
            <img 
              src={src} 
              alt={`Capoeira Gallery ${index + 1}`} 
              className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
