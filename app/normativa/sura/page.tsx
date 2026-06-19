const normas = [
  {
    titulo: "01. HERIDAS",
    descripcion:
      "Las heridas graves deben ser interpretadas correctamente durante todo el rol.",
  },
  {
    titulo: "02. REANIMACIÓN",
    descripcion:
      "Al ser atendido por EMS debes seguir las indicaciones médicas.",
  },
  {
    titulo: "03. VALORAR VIDA",
    descripcion:
      "La atención médica tiene prioridad sobre cualquier otra actividad.",
  },
  {
    titulo: "04. ABUSO DE EMS",
    descripcion:
      "Solicitar EMS sin motivo real será sancionable.",
  },
];

export default function EMSPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas EMS</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {normas.map((n) => (
          <div key={n.titulo} className="bg-[#0b0f1f] border border-cyan-500/20 rounded-2xl p-6">
            <h2 className="text-cyan-400 font-bold mb-4">{n.titulo}</h2>
            <p className="text-gray-300">{n.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
