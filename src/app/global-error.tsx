"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex items-center justify-center bg-[#080E18] text-white p-4 font-sans">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-bold">Ocorreu um erro inesperado</h2>
          <p className="text-sm text-gray-400">
            Nossa equipe técnica foi notificada. Por favor, tente novamente.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#0B192C] text-white rounded-full border border-[#D1D5DB]/60 text-xs font-semibold cursor-pointer"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
