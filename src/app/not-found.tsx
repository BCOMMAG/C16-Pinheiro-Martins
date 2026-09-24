import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] px-4">
      <div className="text-center space-y-6 max-w-md">
        <span className="inline-block text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--accent-text)]">
          Erro 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-primary)]">
          Página Não Encontrada
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          O conteúdo solicitado não foi localizado ou foi movido. Retorne à página inicial da Pinheiro & Martins Advocacia.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--action-bg)] text-white text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-all border border-[#D1D5DB]/30 shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  );
}
