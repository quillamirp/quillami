export default function Ilegales() {
  const normas = [
    { titulo: "Robos", descripcion: "Todo robo debe respetar la normativa general." },
    { titulo: "Secuestros", descripcion: "Deben existir motivos IC válidos." },
    { titulo: "Negociaciones", descripcion: "Se debe priorizar el rol antes que el tiroteo." },
    { titulo: "Rehenes", descripcion: "No se pueden usar amigos como rehenes." },
    { titulo: "Emboscadas", descripcion: "Deben tener contexto de rol previo." },
    { titulo: "Mafias", descripcion: "Las organizaciones deben respetar jerarquías." },
    { titulo: "Bandas", descripcion: "No pueden dominar todo el mapa." },
    { titulo: "Guerras", descripcion: "Toda guerra debe tener motivo IC." },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas Ilegales</h1>
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
