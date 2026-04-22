import React, { useState } from 'react';
import { useLang } from '../LangContext';

export const FormRegistration = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="register" className="bg-gray-50 border-b border-gray-200 p-8 lg:p-16 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-sm p-8 lg:p-12">
        <div className="mb-10 border-l-4 border-[#F27D26] pl-4">
          <h3 className="text-3xl sm:text-4xl font-black text-[#1B4332] mb-1 uppercase tracking-tighter">{t('footer.register')}</h3>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Plazas limitadas</p>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#1B4332] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black">
              ✓
            </div>
            <h4 className="text-xl font-bold text-[#1B4332] mb-2 uppercase">¡Inscripción Recibida!</h4>
            <p className="text-gray-500 text-sm">Nos pondremos en contacto contigo pronto con más detalles.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Nombre Completo</label>
                <input required type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#1B4332] focus:border-[#1B4332] outline-none transition-all text-sm font-medium" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Correo Electrónico</label>
                <input required type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#1B4332] focus:border-[#1B4332] outline-none transition-all text-sm font-medium" placeholder="tucorreo@ejemplo.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="grad" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Graduación (Cuerda)</label>
                <select id="grad" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#1B4332] focus:border-[#1B4332] outline-none transition-all text-sm font-medium">
                  <option>Iniciante (Sin cuerda)</option>
                  <option>Cruda / Amarilla</option>
                  <option>Amarilla / Naranja</option>
                  <option>Naranja / Azul</option>
                  <option>Azul y superiores</option>
                </select>
              </div>
              <div>
                <label htmlFor="country" className="block text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">País</label>
                <select id="country" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:ring-1 focus:ring-[#1B4332] focus:border-[#1B4332] outline-none transition-all text-sm font-medium">
                  <option>España</option>
                  <option>Portugal</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#F27D26] hover:bg-[#d96c1e] text-white font-black py-4 mt-4 uppercase tracking-tighter text-xl shadow-lg transition-colors">
              {t('footer.cta')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
