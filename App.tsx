import React, { useState } from 'react';
import { SALES_COPY, FAQS, HOW_IT_WORKS } from './constants';

// Helper Icons
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
);

const VideoIcon = () => (
  <svg className="w-8 h-8 text-blue-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
);

const ToolIcon = () => (
  <svg className="w-8 h-8 text-blue-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
);

const MicIcon = () => (
  <svg className="w-8 h-8 text-blue-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
);

// Specific Payment Link
const PAYMENT_LINK = "https://pay.hotmart.com/E103715175M";
// WhatsApp Sales Number
const WHATSAPP_LINK = "https://wa.me/593959730731"; 

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-32 md:pb-0">
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        {/* Contenido */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-20 md:pt-20 md:pb-24 relative z-10 text-center">
          <div className="inline-block bg-green-600/20 border border-green-500/50 text-green-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 md:mb-8 tracking-widest uppercase backdrop-blur-sm">
            Membresía Trimestral
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {SALES_COPY.headline}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            {SALES_COPY.subheadline}
          </p>
          
          <div className="mt-10 md:mt-12 flex flex-col items-center justify-center gap-4">
            <a 
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-12 rounded-xl text-lg md:text-xl shadow-[0_0_40px_-10px_rgba(22,163,74,0.5)] transition-all transform hover:-translate-y-1 ring-4 ring-green-600/30 whitespace-nowrap"
            >
              {SALES_COPY.cta}
            </a>
            {/* Texto de garantía debajo del botón */}
            <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm mt-2 opacity-80">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Cancela cuando quieras. Sin compromiso.</span>
            </div>
          </div>
          
          {/* SCARCITY LABEL - REFORMATTED */}
          <div className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-slate-800/80 px-5 py-3 rounded-xl border border-slate-700 backdrop-blur-md shadow-lg">
            <span className="relative flex h-3 w-3 mt-1 self-start md:self-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <div className="text-left flex flex-col leading-none">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Próxima sesión en vivo:</span>
                <p className="text-slate-100 font-mono font-bold text-sm leading-tight">
                  {SALES_COPY.scarcity}
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS (Simplified) --- */}
      <div className="py-12 md:py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900">¿Cómo funciona la membresía?</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
             {HOW_IT_WORKS.map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 font-bold flex items-center justify-center text-xl mb-4 shadow-sm border border-slate-200 group-hover:border-green-500 group-hover:bg-green-50 transition-colors">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">{step.description}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* --- VALUE PROPOSITION (Benefits) --- */}
      <div className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Lo que obtienes al ingresar</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Diseñado para ahorrarte tiempo, reducir riesgos y darte seguridad ante el cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
              <VideoIcon />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Actualización en Vivo</h3>
              <p className="text-slate-600 leading-relaxed">
                Cada mes, una sesión profunda de 3 horas. No es teoría aburrida; son casos reales y análisis de impacto. Si faltas, tienes la <strong>grabación inmediata</strong>.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-500 relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider">MÁS VALORADO</div>
              <ToolIcon />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Herramientas Editables</h3>
              <p className="text-slate-600 leading-relaxed">
                No empieces desde cero. Descarga nuestros <strong>Checklists de Cierre</strong> y <strong>Matrices de Riesgo</strong> listas para usar con tus clientes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
              <MicIcon />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tus Dudas Respondidas</h3>
              <p className="text-slate-600 leading-relaxed">
                ¿Tienes un caso complejo? <strong>Envía tu pregunta por correo.</strong> Nuestros abogados la analizan y la responden en el Podcast mensual exclusivo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- PRICING (THE GRAND SLAM OFFER) --- */}
      <div id="pricing" className="py-12 md:py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col md:flex-row">
            
            {/* Left Side: The Value Stack */}
            <div className="p-6 md:p-12 md:w-3/5 bg-slate-50 text-slate-900">
              <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider text-center md:text-left">Todo lo que incluye:</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center"><CheckIcon /><span className="ml-3 font-medium">3 Sesiones en Vivo (Trimestral)</span></div>
                  <span className="text-slate-400 font-mono text-sm line-through decoration-red-500">$150</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center"><CheckIcon /><span className="ml-3 font-medium">Grabaciones Ilimitadas</span></div>
                  <span className="text-slate-400 font-mono text-sm line-through decoration-red-500">$97</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center"><CheckIcon /><span className="ml-3 font-medium">Boletines Técnicos PDF</span></div>
                  <span className="text-slate-400 font-mono text-sm line-through decoration-red-500">$50</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-200 pb-2 bg-green-50/50 -mx-2 px-2 rounded">
                  <div className="flex items-center"><CheckIcon /><span className="ml-3 font-bold text-green-800">Checklists y Matrices</span></div>
                  <span className="text-slate-400 font-mono text-sm line-through decoration-red-500">$200</span>
                </li>
                <li className="flex items-center justify-between pb-2">
                  <div className="flex items-center"><CheckIcon /><span className="ml-3 font-medium">Respuestas a TUS preguntas (Podcast)</span></div>
                  <span className="text-slate-400 font-mono text-sm line-through decoration-red-500">$250</span>
                </li>
              </ul>
              <div className="mt-6 text-right">
                <span className="text-sm text-slate-500 font-bold uppercase">Valor Total Real:</span>
                <span className="ml-2 text-xl font-black text-slate-400 line-through decoration-red-500 decoration-2">$747 USD</span>
              </div>
            </div>

            {/* Right Side: The Offer */}
            <div className="p-8 md:p-12 md:w-2/5 bg-slate-900 text-white flex flex-col justify-center items-center text-center relative border-t md:border-t-0 md:border-l border-slate-700">
               <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full blur-[80px] opacity-20"></div>
               
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Oferta Exclusiva Trimestral</p>
               <div className="flex items-start justify-center">
                 <span className="text-2xl font-bold mt-2">$</span>
                 <span className="text-7xl font-extrabold tracking-tighter text-white">97</span>
               </div>
               <p className="text-slate-400 text-sm mb-8">USD / Trimestre</p>

               <a 
                 href={PAYMENT_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-green-900/50 transition-all transform hover:scale-105"
               >
                 Obtener Acceso Inmediato
               </a>
               
               <p className="mt-4 text-[10px] text-slate-500 max-w-[200px] leading-tight">
                 Pago seguro vía Hotmart. Garantía de satisfacción total.
               </p>
            </div>

          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-slate-800 text-sm md:text-base">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-0 animate-fade-in text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 py-10 pb-32 md:pb-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* WhatsApp Support Block */}
          <div className="mb-10 inline-block bg-green-50 px-6 py-4 rounded-2xl border border-green-100 shadow-sm">
            <p className="text-slate-800 text-sm font-medium mb-2">¿Tienes dudas antes de inscribirte?</p>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors text-lg"
            >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.099-.445.049-.594.136-.136.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
               <span>Escribir al WhatsApp</span>
            </a>
          </div>

          <p className="text-slate-900 font-bold mb-2">El Instituto en colaboración con GSI</p>
          <p className="text-slate-500 text-xs mb-4">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* --- STICKY MOBILE CTA (Bottom) --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-[999] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2">
             <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Próxima sesión: 27 Ene</span>
             <span className="text-xs font-bold text-red-500 animate-pulse">Últimos cupos</span>
          </div>
          <a 
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-600 text-white font-bold py-3.5 rounded-xl shadow-lg text-center text-lg active:bg-green-700 transition-colors"
          >
            Inscribirme Ahora
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;