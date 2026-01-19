import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  price: number;
  period: string;
  features: string[];
  ctaText: string;
  guarantee: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}