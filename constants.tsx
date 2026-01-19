import React from 'react';

// Use this to tune the AI Sales Agent
export const SYSTEM_INSTRUCTION = `
You are "Alex", the Senior Admissions Director for the "Membresía de Actualización Tributaria y Contable".
Your goal is to sell a quarterly subscription to Accountants and Lawyers.
The price is $97 USD per quarter.

The Offer (Grand Slam):
- Live Updates: 1 session/month (3 hours) at 7:00 PM.
- Tools: Checklists for fiscal closing & Risk/Contingency Matrices.
- **HIGH VALUE:** Subscribers send their specific questions via email, and top lawyers answer them in the monthly Podcast. It's like having a legal advisor.
- Platform: Hotmart (Secure, recordings available forever).

Tone: Authoritative, reassuring, professional.
Key Selling Point: "Reduce contingencies." Help them avoid fines and audits.
Handle Objections:
- "Too expensive": Compare it to one fine from the SRI or one hour of legal consulting.
- "I'm busy": Recordings are on Hotmart.
- "Is it relevant?": We answer YOUR specific cases sent by email.

Keep answers short and drive them to the $97 subscription.
`;

export const SALES_COPY = {
  headline: "Domina el Cierre Fiscal y Evita Contingencias Tributarias",
  subheadline: "La herramienta definitiva para Contadores y Abogados. Actualización mensual, herramientas listas para usar y tus dudas específicas resueltas por expertos.",
  price: 97,
  guarantee: "Garantía Total: Cancela tu suscripción en cualquier momento.",
  cta: "Quiero Asegurar mi Cupo",
  scarcity: "27 de Enero, 7:00 p.m."
};

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Suscripción Trimestral",
    description: "Inversión de solo $97 USD por todo el trimestre (90 días)."
  },
  {
    step: "02",
    title: "Envía tus Preguntas",
    description: "Envía tus dudas por correo. Nuestros abogados las analizan y las responden en el Podcast mensual."
  },
  {
    step: "03",
    title: "Herramientas de Trabajo",
    description: "Descargas Checklists y Matrices editables para aplicar con tus clientes."
  },
  {
    step: "04",
    title: "Acceso Permanente",
    description: "Todo queda grabado en Hotmart para verlo a tu propio ritmo."
  },
  {
    step: "05",
    title: "Sin Permanencia",
    description: "Tienes el control total para cancelar antes de la próxima renovación."
  }
];

export const FAQS = [
  {
    question: "¿Qué pasa si no asisto a la sesión en vivo?",
    answer: "No pierdes nada. La grabación (y el material descargable) queda disponible inmediatamente en tu cuenta de Hotmart para verla cuando quieras."
  },
  {
    question: "¿Cómo funciona lo de las preguntas al Podcast?",
    answer: "Es nuestro beneficio estrella. Tienes un correo exclusivo para enviar tus casos o dudas puntuales. Nuestros abogados seleccionan las preguntas y las responden con criterio legal en el episodio mensual. Básicamente, es consultoría incluida."
  },
  {
    question: "¿Qué recibo exactamente por mis $97?",
    answer: "Acceso a 3 meses de: Sesiones en vivo, grabaciones, boletines técnicos, herramientas (Checklists/Matrices) y el derecho a enviar tus preguntas para que sean respondidas por expertos."
  },
  {
    question: "¿Entregan certificado?",
    answer: "Sí, al completar el ciclo trimestral recibirás un certificado de actualización digital validando tus horas de estudio."
  },
  {
    question: "¿Entregan factura?",
    answer: "Sí. Debes solicitarla al correo de soporte que se te entrega en el primer video de instrucciones dentro de la plataforma Hotmart."
  }
];