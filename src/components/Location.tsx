import React from 'react';
import { useLang } from '../LangContext';

export const Location = () => {
  const { t } = useLang();

  return (
    <section id="location" className="border-b border-gray-200">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 p-8 lg:p-16 border-r border-gray-200 flex flex-col bg-white">
          <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 mb-6">{t('location.title')}</h3>
          <h4 className="text-3xl font-extrabold text-[#1B4332] mb-4 uppercase tracking-tighter">
            {t('location.venue')}
          </h4>
          <p className="text-sm text-gray-700 font-medium mb-8 leading-relaxed">
            {t('location.address')}<br/><br/>
            {t('location.description')}
          </p>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white font-black py-4 px-8 rounded-lg uppercase tracking-tighter text-sm transition-colors"
          >
            {t('location.viewMap')}
          </a>
        </div>
        
        <div className="w-full lg:w-2/3 min-h-[400px] relative bg-gray-200 hidden sm:block">
          {/* Embedded Google Map Placeholder - using a static image or a real iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.2723689405626!2d-3.692298684534724!3d42.34149997918804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd45fd42c4b8e211%3A0xe679237077e6fae8!2sPolideportivo%20Municipal%20El%20Plant%C3%ADo!5e0!3m2!1sen!2ses!4v1683030000000!5m2!1sen!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(100%) opacity(0.8)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Burgos Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
