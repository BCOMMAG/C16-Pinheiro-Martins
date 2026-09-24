"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  ArrowUpRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do mapa com zoom out suave
      if (mapColRef.current) {
        gsap.fromTo(
          mapColRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapColRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                07 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Contato & Localização
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Sede física no bairro Portão em Curitiba/PR com ambiente executivo reservado e estrutura tecnológica completa para atendimento presencial ou online em todo o Brasil.
          </p>
        </div>

        {/* Grid 12 colunas: Informações à Esquerda (5 cols) + Google Maps à Direita (7 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Coluna 1: Informações e Ações (5 colunas) */}
          <div
            ref={cardsColRef}
            className="lg:col-span-5 flex flex-col justify-between space-y-4 will-change-transform"
          >
            <div className="space-y-4">
              {/* Card WhatsApp & Telefone */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-xs hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#0B192C] dark:bg-[#121E2E] text-white flex items-center justify-center flex-shrink-0 shadow-xs border border-[#D1D5DB]/30">
                  <Phone className="w-5 h-5 text-[#D1D5DB]" />
                </div>
                <div className="flex-1">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    WhatsApp & Atendimento Direto
                  </span>
                  <a
                    href={OFFICE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-lg font-bold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors inline-block"
                  >
                    {OFFICE_INFO.whatsappFormatted}
                  </a>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil para triagem de casos e agendamento de consultas jurídicas.
                  </p>
                </div>
              </div>

              {/* Card Endereço da Sede com Link de Rota */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-xs hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Sede Física em Curitiba
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    {OFFICE_INFO.address}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-0.5">
                    Bairro Portão • Curitiba/PR • CEP 81070-430
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)]/25">
                    <a
                      href={OFFICE_INFO.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[var(--accent)] hover:text-[var(--text-main)] transition-colors group/route"
                    >
                      <Navigation className="w-3.5 h-3.5 transition-transform group-hover/route:rotate-12 text-[var(--accent)]" />
                      <span>Traçar rota no GPS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/route:translate-x-0.5 group-hover/route:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Formato de Atendimento Presencial & Digital */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-xs hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Formato de Atendimento
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    Presencial & 100% Online
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-0.5">
                    Atendimento presencial no Portão e consultas estratégicas por videoconferência para clientes em todo o Paraná e no Brasil.
                  </p>
                </div>
              </div>

              {/* Card Horário de Atendimento */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-xs hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-medium">
                    {OFFICE_INFO.schedule.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {OFFICE_INFO.schedule.saturday}
                  </p>
                  <p className="font-body text-xs text-[var(--accent)] mt-0.5 font-medium">
                    {OFFICE_INFO.schedule.sunday}
                  </p>
                </div>
              </div>

              {/* Redes Sociais Oficiais */}
              <div className="contact-info-card p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30 flex items-center justify-between">
                <span className="text-xs font-heading font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                  Canais Oficiais:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={OFFICE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-main)] hover:text-[#E1306C] border border-[var(--border-subtle)]/30 hover:scale-105 transition-all"
                    aria-label="Instagram Oficial Pinheiro e Martins Advocacia"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={OFFICE_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-main)] hover:text-[#0A66C2] border border-[var(--border-subtle)]/30 hover:scale-105 transition-all"
                    aria-label="LinkedIn Profissional Pinheiro e Martins Advocacia"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Botão Principal Full-Width */}
            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#0B192C] hover:bg-[#132238] text-white border-2 border-[#D1D5DB]/60 py-3.5 gap-2 shadow-[0_4px_20px_rgba(11,25,44,0.3)] text-sm sm:text-base cursor-pointer hover-lift transition-all inline-flex items-center justify-center font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#D1D5DB]" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Google Maps Interativo com Camada de Conversão (7 colunas) */}
          <div
            ref={mapColRef}
            className="lg:col-span-7 flex flex-col justify-between will-change-transform min-h-[420px]"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-md">
              <iframe
                title="Localização do Escritório Pinheiro & Martins Advocacia em Curitiba PR"
                src={OFFICE_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />

              {/* Badge de Identificação no Topo Esquerdo do Mapa */}
              <div className="absolute top-4 left-4 p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-[#0B192C]/95 backdrop-blur-md border border-[var(--border-subtle)]/40 text-xs shadow-lg max-w-[280px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span className="font-heading font-bold text-[var(--text-main)] block truncate">
                    Pinheiro & Martins Advocacia
                  </span>
                </div>
                <span className="text-[var(--text-muted)] font-body text-[0.6875rem] leading-tight block">
                  R. Dep. Estefano Mikilita, 125 • Sl 604
                  <br />
                  Portão, Curitiba - PR
                </span>
              </div>

              {/* Botão de Rota Traçada Flutuante na Base do Mapa */}
              <div className="absolute bottom-4 inset-x-4 sm:left-auto sm:right-4 p-2 sm:p-2.5 rounded-2xl bg-white/95 dark:bg-[#0B192C]/95 backdrop-blur-md border border-[var(--border-subtle)]/40 shadow-xl flex items-center justify-between sm:justify-start gap-3">
                <div className="hidden sm:block pl-2 pr-1">
                  <span className="font-heading text-xs font-bold text-[var(--text-main)] block">
                    Como Chegar
                  </span>
                  <span className="text-[0.6875rem] text-[var(--text-muted)] font-body block">
                    Curitiba/PR e Região
                  </span>
                </div>
                <a
                  href={OFFICE_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#0B192C] hover:bg-[#132238] hover:scale-105 text-white border border-[#D1D5DB]/60 py-2.5 px-4 text-xs font-semibold gap-2 shadow-md inline-flex items-center justify-center w-full sm:w-auto transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D1D5DB]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}