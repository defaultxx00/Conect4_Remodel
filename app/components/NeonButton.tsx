// Definimos o componente
export default function NeonButton({ label }: { label: string }) {
  return (
    <button className="bg-black text-red-600 border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,0,0,0.8)] px-4 py-2 transition-all">
      {label}
    </button>
  );
}