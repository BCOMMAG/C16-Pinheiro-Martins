"use client";

import { OFFICE_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip elegante visível apenas no hover */}
      <div className="mr-3 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] text-[var(--text-main)] text-xs font-heading font-medium border border-[var(--border-subtle)]/50 shadow-lg transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
        <span>Falar com Advogado</span>
      </div>

      <a
        href={OFFICE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento direto via WhatsApp - Pinheiro & Martins Advocacia"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 relative cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#080E18]" />
      </a>
    </div>
  );
}