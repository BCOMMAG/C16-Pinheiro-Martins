"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, MessageSquare, ArrowUp, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080E18] text-white border-t border-[#D1D5DB]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo e Apresentação (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="block focus:outline-none group cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-15 sm:h-18 w-54 sm:w-62 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="(min-width: 640px) 248px, 216px"
                />
              </div>
            </Link>
            
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Atendimento jurídico completo e personalizado nas áreas Cível, Família, Sucessões, Trabalhista, Previdenciária, Imobiliária, Bancária, Consumidor e Tributária. Sede física no bairro Portão em Curitiba/PR e atendimento online em todo o Brasil.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D1D5DB]/30 bg-[#0B192C] text-xs font-heading text-[#E5E7EB]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D1D5DB]" />
              <span>Pinheiro & Martins Advocacia • Desde 2022</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#D1D5DB] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-heading text-gray-300">
              <li>
                <Link href="#inicio" className="hover:text-[#D1D5DB] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#D1D5DB] transition-colors">O Escritório</Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#D1D5DB] transition-colors">Pilares Institucionais</Link>
              </li>
              <li>
                <Link href="#atuacao" className="hover:text-[#D1D5DB] transition-colors">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="#como-atuamos" className="hover:text-[#D1D5DB] transition-colors">Metodologia</Link>
              </li>
              <li>
                <Link href="#avaliacoes" className="hover:text-[#D1D5DB] transition-colors">Avaliações Verificadas</Link>
              </li>
              <li>
                <Link href="#educativo" className="hover:text-[#D1D5DB] transition-colors">Conteúdo Didático</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#D1D5DB] transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#D1D5DB] transition-colors">Contato & Localização</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#D1D5DB] hover:text-white hover:underline font-semibold">Central de Links (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos e Redes (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#D1D5DB] font-bold">
              Canais Oficiais
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm font-body text-gray-300">
              <p><strong className="text-white font-heading">Sede Curitiba:</strong> {OFFICE_INFO.address}</p>
              <p><strong className="text-white font-heading">WhatsApp:</strong> {OFFICE_INFO.phone}</p>
              <p><strong className="text-white font-heading">Segunda a Sexta:</strong> {OFFICE_INFO.schedule.weekdays}</p>
              <p><strong className="text-white font-heading">Sábado:</strong> {OFFICE_INFO.schedule.saturday}</p>
              <p><strong className="text-white font-heading">Domingo:</strong> {OFFICE_INFO.schedule.sunday}</p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial Pinheiro e Martins Advocacia"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0B192C] hover:border hover:border-[#D1D5DB]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profissional Pinheiro e Martins Advocacia"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0B192C] hover:border hover:border-[#D1D5DB]/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial Pinheiro e Martins Advocacia"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Ético OAB + Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[0.6875rem] text-gray-400 font-body">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Este website possui caráter exclusivamente informativo e consultivo, em estrita observância à Lei nº 8.906/1994, ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do CFOAB.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-[#D1D5DB] text-gray-300 hover:text-white transition-colors flex-shrink-0 cursor-pointer text-xs font-heading"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}