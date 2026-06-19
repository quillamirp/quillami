export default function Donaciones() {
  const normas = [
    { titulo: "Voluntarias", descripcion: "Toda donación es completamente voluntaria." },
    { titulo: "No Reembolsables", descripcion: "Las donaciones no tienen devolución." },
    { titulo: "Beneficios", descripcion: "Los beneficios son únicamente los anunciados." },
    { titulo: "Transferencia", descripcion: "No se transfieren entre usuarios." },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Donaciones</h1>
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
