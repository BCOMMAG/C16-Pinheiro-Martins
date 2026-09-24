"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { INSTITUTIONAL_PROFILE, OFFICE_INFO } from "@/lib/data";
import {
  Compass,
  Eye,
  ShieldCheck,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Scale,
  Building2,
  CheckCircle2,
  Users2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho da Seção com animação bidirecional
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Foto oficial da banca / liderança
      if (photoCardRef.current) {
        gsap.fromTo(
          photoCardRef.current,
          { opacity: 0, scale: 0.92, y: 45 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photoCardRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna de texto institucional em cascata
      if (textContentRef.current) {
        const textElements = textContentRef.current.querySelectorAll(".about-text-anim");
        if (textElements.length > 0) {
          gsap.fromTo(
            textElements,
            { opacity: 0, y: 30 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textContentRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 4. Princípios (Missão, Visão e Valores)
      if (cardsRef.current) {
        const items = cardsRef.current.querySelectorAll(".about-pillar-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                01 / Perfil Institucional & Trajetória
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Sobre a Pinheiro & Martins
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Advocacia e assessoria jurídica moderna, combinando solidez técnica, atendimento humanizado e soluções estratégicas para pessoas físicas e empresas.
          </p>
        </div>

        {/* Bloco Principal: Layout split-screen */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 relative">
          
          {/* Coluna de Conteúdo e Textos (7 colunas) */}
          <div ref={textContentRef} className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-start space-y-6">
            <div className="about-text-anim space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-heading font-semibold text-[var(--accent)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Advocacia Multidisciplinar • Presencial e 100% Online</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] leading-tight">
                Defesa Ágil, Estratégica e Rigorosamente Humanizada
              </h3>
            </div>

            {/* Citação da Proposta de Valor */}
            <div className="about-text-anim p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/30 border-l-4 border-l-[#0B192C] dark:border-l-[#D1D5DB] shadow-2xs">
              <p className="font-heading italic text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
                &ldquo;{OFFICE_INFO.slogan}&rdquo;
              </p>
            </div>

            {/* Resumo Institucional */}
            <div className="about-text-anim space-y-3 font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed font-normal">
              {INSTITUTIONAL_PROFILE.bio.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Destaques Rápidos */}
            <div className="about-text-anim grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                <span className="font-heading text-xs font-bold text-[var(--accent)] block">Desde 2022</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Fundação Sólida em Curitiba</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                <span className="font-heading text-xs font-bold text-[var(--accent)] block">Bairro Portão</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Sede Física & Sala Executiva</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs col-span-2 sm:col-span-1">
                <span className="font-heading text-xs font-bold text-[var(--accent)] block">Híbrido & Seguro</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Presencial ou Online em Todo o País</span>
              </div>
            </div>

            {/* Botões de Ação com Dark Mode Explícito */}
            <div className="about-text-anim flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleToggleExpand}
                className="btn-pill bg-white text-[#0B192C] border-2 border-[#D1D5DB] hover:bg-[#0B192C] hover:text-white dark:bg-[#1C1C1C] dark:text-white dark:border-[#333] dark:hover:bg-[#252525] gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift transition-all cursor-pointer flex items-center"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Ocultar Detalhes" : "Conhecer Diferenciais & Metodologia"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#0B192C] hover:bg-[#132238] text-white border-2 border-[#D1D5DB]/60 gap-2 py-3 px-6 text-xs sm:text-sm shadow-md hover-lift transition-all flex items-center cursor-pointer font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-[#D1D5DB]" />
                <span>Falar com Advogado</span>
              </a>
            </div>

            {/* CONTEÚDO EXPANDIDO */}
            {isExpanded && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]/30 animate-fade-in-down">
                <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-xs space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[var(--accent)]" />
                    <span>Diferenciais Estratégicos da Banca</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] font-body leading-relaxed">
                    {INSTITUTIONAL_PROFILE.differentials.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Coluna Visual: Foto Oficial e Badge Institucional (5 colunas) */}
          <div ref={photoCardRef} className="lg:col-span-5 order-1 lg:order-2 will-change-transform">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura Decorativa com Gradiente */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#0B192C]/40 via-transparent to-[#D1D5DB]/30 blur-lg opacity-70 dark:opacity-40" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--border-subtle)]/40 shadow-xl bg-[var(--bg-card)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/Foto_perfil.jpeg"
                    alt="Pinheiro & Martins Advocacia - Sede e Liderança Jurídica"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
                    className="object-cover object-[center_20%] contrast-[1.04] brightness-[0.98] transition-transform duration-700 hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E18]/85 via-transparent to-transparent" />
                </div>

                {/* Legenda Flutuante na Base da Imagem */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 dark:bg-[#0B192C]/95 backdrop-blur-md border border-[var(--border-subtle)]/40 shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-sm text-[var(--text-main)] block">
                      Pinheiro & Martins Advocacia
                    </span>
                    <span className="text-[0.625rem] px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent)] font-semibold uppercase tracking-wider">
                      Curitiba • PR
                    </span>
                  </div>
                  <p className="text-[0.6875rem] font-body text-[var(--text-muted)] leading-tight">
                    Rua Dep. Estefano Mikilita, 125 • Sala 604 • Portão
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Pilares Institucionais: Missão, Visão e Valores */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 pt-4">
          {INSTITUTIONAL_PROFILE.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="about-pillar-item p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center mb-4 shadow-2xs">
                {idx === 0 && <Compass className="w-5 h-5 text-[var(--accent)]" />}
                {idx === 1 && <Eye className="w-5 h-5 text-[var(--accent)]" />}
                {idx === 2 && <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />}
              </div>
              <h4 className="font-heading text-lg font-bold text-[var(--text-main)] mb-2">
                {pillar.title}
              </h4>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}