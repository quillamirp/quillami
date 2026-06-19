export default function Alcaldia() {
  const normas = [
    { titulo: "Gestión Pública", descripcion: "Toda decisión debe beneficiar a la ciudad." },
    { titulo: "Eventos", descripcion: "Los eventos deben ser autorizados." },
    { titulo: "Presupuesto", descripcion: "Uso responsable de fondos públicos." },
    { titulo: "Contratos", descripcion: "Deben tener justificación IC." },
    { titulo: "Respeto", descripcion: "Mantener profesionalismo institucional." },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas Alcaldía</h1>
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
