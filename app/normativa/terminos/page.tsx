const normas = [
  {
    titulo: "01. ACEPTACIÓN",
    descripcion:
      "Al ingresar al servidor aceptas automáticamente toda la normativa vigente.",
  },
  {
    titulo: "02. RESPONSABILIDAD",
    descripcion:
      "El desconocimiento de las normas no exime de las sanciones correspondientes.",
  },
  {
    titulo: "03. CUENTA PERSONAL",
    descripcion:
      "Cada usuario es responsable de todas las acciones realizadas desde su cuenta.",
  },
  {
    titulo: "04. RESPETO",
    descripcion:
      "Se debe mantener el respeto hacia jugadores, staff y comunidad.",
  },
  {
    titulo: "05. MODIFICACIONES",
    descripcion:
      "La administración puede modificar la normativa cuando lo considere necesario.",
  },
];

export default function TerminosPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Términos y Condiciones</h1>

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
