const normas = [
  {
    titulo: "01. PROCEDIMIENTOS",
    descripcion:
      "Todo procedimiento debe realizarse siguiendo protocolos IC.",
  },
  {
    titulo: "02. CORRUPCIÓN",
    descripcion:
      "La corrupción policial requiere autorización administrativa.",
  },
  {
    titulo: "03. ABUSO DE PODER",
    descripcion:
      "El abuso de autoridad será sancionado.",
  },
  {
    titulo: "04. NEGOCIACIONES",
    descripcion:
      "Las negociaciones deben respetar la normativa del servidor.",
  },
];

export default function PolicialesPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas Policiales</h1>

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
