export default function Prosegur() {
  const normas = [
    { titulo: "Protección", descripcion: "Garantizar la seguridad de clientes." },
    { titulo: "Custodias", descripcion: "Las escoltas deben realizarse mediante rol." },
    { titulo: "Armamento", descripcion: "Uso responsable y justificado." },
    { titulo: "Vehículos", descripcion: "Solo para tareas de seguridad." },
    { titulo: "Comunicación", descripcion: "Mantener coordinación constante." },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas Prosegur</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {normas.map((n, i) => (
          <div key={i} className="rounded-xl border border-cyan-500/20 bg-[#0b0f22] p-6">
            <h2 className="text-cyan-400 font-bold mb-4">
              {(i + 1).toString().padStart(2, "0")}. {n.titulo}
            </h2>
            <p>{n.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
