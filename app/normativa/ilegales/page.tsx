const normas = [
  {
    titulo: "01. ORGANIZACIONES",
    descripcion:
      "Toda organización ilegal debe respetar la normativa general.",
  },
  {
    titulo: "02. SECUESTROS",
    descripcion:
      "Los secuestros deben tener un motivo de rol válido.",
  },
  {
    titulo: "03. ROBOS",
    descripcion:
      "Los robos deben respetar el horario delictivo establecido.",
  },
  {
    titulo: "04. ENTORNO",
    descripcion:
      "Siempre debe generarse el entorno correspondiente.",
  },
];

export default function IlegalesPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas Ilegales</h1>

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
