const normas = [
  {
    titulo: "01. VALORAR LA VIDA",
    descripcion:
      "Debes cuidar tu vida como si fuera real, evitando riesgos innecesarios y obedeciendo en situaciones de peligro.",
  },
  {
    titulo: "02. IN CHARACTER (IC)",
    descripcion:
      "Todo lo que ocurre dentro del mundo del rol y las acciones propias del personaje.",
  },
  {
    titulo: "03. OUT OF CHARACTER (OOC)",
    descripcion:
      "Todo lo que ocurre fuera del rol. Utilizar información OOC dentro del IC está prohibido.",
  },
  {
    titulo: "04. METAGAMING (MG)",
    descripcion:
      "Usar información obtenida fuera del personaje para beneficiarlo dentro del rol.",
  },
  {
    titulo: "05. POWERGAMING (PG)",
    descripcion:
      "Realizar acciones imposibles o irreales aprovechando limitaciones del juego.",
  },
  {
    titulo: "06. FAIR PLAY",
    descripcion:
      "Debe prevalecer el juego limpio evitando abusos y ventajas injustas.",
  },
  {
    titulo: "07. PLAYER KILL (PK)",
    descripcion:
      "Muerte temporal del personaje sin pérdida total de la historia.",
  },
  {
    titulo: "08. CHARACTER KILL (CK)",
    descripcion:
      "Muerte permanente del personaje aprobada por la administración.",
  },
  {
    titulo: "09. DEATH MATCH (DM)",
    descripcion:
      "Atacar o matar sin un motivo de rol válido está prohibido.",
  },
  {
    titulo: "10. REVENGE KILL (RK)",
    descripcion:
      "Volver tras una muerte para vengarse incumpliendo la pérdida de memoria.",
  },
  {
    titulo: "11. BUNNY JUMP (BJ)",
    descripcion:
      "Saltar repetidamente para desplazarse más rápido está prohibido.",
  },
  {
    titulo: "12. ZONAS SEGURAS",
    descripcion:
      "Áreas donde no se permite cometer delitos o iniciar enfrentamientos.",
  },
  {
    titulo: "13. VEHICLE DEATHMATCH (VDM)",
    descripcion:
      "Usar un vehículo como arma sin contexto de rol válido.",
  },
  {
    titulo: "14. BAD DRIVING (BD)",
    descripcion:
      "Conducir de forma irrealista o temeraria sin justificación IC.",
  },
  {
    titulo: "15. ROL DE ENTORNO",
    descripcion:
      "Considerar siempre el entorno y las personas presentes al realizar acciones.",
  },
  {
    titulo: "16. EVASIÓN DE ROL",
    descripcion:
      "Abandonar o evitar un rol activo para evitar consecuencias.",
  },
];

export default function GeneralesPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">
        Normas Generales
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {normas.map((norma) => (
          <div
            key={norma.titulo}
            className="bg-[#0b0f1f] border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-cyan-400 font-bold text-lg mb-4">
              {norma.titulo}
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {norma.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
