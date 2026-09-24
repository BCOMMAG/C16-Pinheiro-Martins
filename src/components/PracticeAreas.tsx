"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import {
  CheckCircle2,
  ArrowUpRight,
  Scale,
  Briefcase,
  Calculator,
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
  Landmark,
  Home,
  BadgePercent,
  ChevronDown,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GeometricLines } from "@/components/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const filteredAreas =
    activeFilter === "all"
      ? PRACTICE_AREAS
      : PRACTICE_AREAS.filter((area) => area.category === activeFilter);

  const toggleCardExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  useGSAP(
    () => {
      // 1. Animação do cabeçalho
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

      // 2. Animação de entrada dos cards
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".practice-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef, dependencies: [activeFilter] }
  );

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[var(--accent)]" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-[var(--accent)]" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-[var(--accent)]" />;
      case "Landmark":
        return <Landmark className="w-5 h-5 text-[var(--accent)]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />;
      case "Home":
        return <Home className="w-5 h-5 text-[var(--accent)]" />;
      case "BadgePercent":
        return <BadgePercent className="w-5 h-5 text-[var(--accent)]" />;
      case "Calculator":
        return <Calculator className="w-5 h-5 text-[var(--accent)]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[var(--accent)]" />;
      default:
        return <Scale className="w-5 h-5 text-[var(--accent)]" />;
    }
  };

  const filterTabs = [
    { id: "all", label: "Todas as Especialidades (9)" },
    { id: "civil-familia", label: "Família, Sucessões & Cível" },
    { id: "patrimonial-negocial", label: "Bancário, Imobiliário & Fiscal" },
    { id: "social-trabalhista", label: "Previdenciário, Consumidor & Trabalho" },
  ];

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden"
    >
      {/* Linhas Geométricas Sutis de Fundo */}
      <GeometricLines variant="areas" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-10 sm:mb-12 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atendimento jurídico completo nas principais áreas do Direito, unindo prevenção consultiva e atuação contenciosa enérgica para proteção integral de pessoas e negócios.
          </p>
        </div>

        {/* Abas de Filtro Institucional */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                  setExpandedCardId(null);
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0B192C] text-white border border-[#D1D5DB]/60 shadow-sm"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]/40 hover:border-[var(--accent)]/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Cards Executivos (3 colunas no desktop) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 will-change-transform"
        >
          {filteredAreas.map((area, idx) => {
            const isCardExpanded = expandedCardId === area.id;

            return (
              <div
                key={area.id}
                className="practice-card p-6 sm:p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs hover:border-[var(--accent)]/50 hover:shadow-md flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[var(--accent)]">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center group-hover:bg-[#0B192C] dark:group-hover:bg-[#121E2E] transition-colors duration-300 shadow-2xs">
                      {getAreaIcon(area.iconName)}
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                    {area.highlightText}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--text-main)] mb-2.5 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {area.shortDesc}
                  </p>

                  {/* Tópicos com CheckCircle2 extraídos dos .docx */}
                  <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]/20">
                    {(isCardExpanded ? area.coverageList : area.coverageList.slice(0, 4)).map(
                      (item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      )
                    )}
                  </div>

                  {area.coverageList.length > 4 && (
                    <button
                      type="button"
                      onClick={() => toggleCardExpand(area.id)}
                      className="mt-3 text-xs font-heading font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>
                        {isCardExpanded
                          ? "Mostrar menos tópicos"
                          : `+ Ver todos os ${area.coverageList.length} tópicos`}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isCardExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá, Pinheiro & Martins Advocacia! Gostaria de uma orientação jurídica sobre ${area.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[var(--accent)] hover:text-[var(--text-main)] transition-colors group/link cursor-pointer"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Consulta Multidisciplinar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-main)] mb-2">
              Sua demanda envolve mais de uma área do Direito?
            </h4>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Muitos casos de família envolvem inventário e patrimônio imobiliário, assim como questões empresariais exigem atuação conjunta em Direito Bancário e Tributário. Nossa equipe analisa seu cenário de forma integrada.
            </p>
          </div>
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#0B192C] hover:bg-[#132238] text-white border-2 border-[#D1D5DB]/60 py-3 px-6 text-xs sm:text-sm font-semibold shadow-md hover-lift transition-all inline-flex items-center gap-2 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            <span>Falar com Nossa Equipe</span>
            <ArrowUpRight className="w-4 h-4 text-[#D1D5DB]" />
          </a>
        </div>

      </div>
    </section>
  );
}