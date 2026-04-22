import React from 'react';
import { useLang } from '../LangContext';

export const Schedule = () => {
  const { t } = useLang();
  const days = t('schedule.days') as any[]; // Type assertion for our simple dictionary

  return (
    <section id="schedule" className="bg-white border-b border-gray-200 p-8 lg:p-16">
      <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 mb-8 max-w-7xl mx-auto">{t('schedule.title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-[#1B4332] font-black uppercase tracking-tight text-xl mb-4 border-b-2 border-[#F27D26] pb-2">{day.date}</h4>
            <ul className="text-xs space-y-4 font-semibold text-gray-700">
              {day.events.map((event: any, eventIndex: number) => (
                <li key={eventIndex} className="flex flex-col border-b border-dashed border-gray-300 pb-2">
                  <span className="font-black text-[#F27D26] mb-1">{event.time}</span> 
                  <span className="uppercase tracking-wide leading-tight">{event.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
