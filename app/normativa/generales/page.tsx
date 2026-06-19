export default function Generales() {
  const normas = [
    {
      titulo: "Valorar la Vida",
      descripcion:
        "Debes cuidar tu vida como si fuera real, evitando riesgos innecesarios y obedeciendo en situaciones de peligro.",
    },
    {
      titulo: "In Character (IC)",
      descripcion:
        "Todo lo que ocurre dentro del rol y las acciones propias del personaje.",
    },
    {
      titulo: "Out Of Character (OOC)",
      descripcion:
        "Toda información externa al rol. Utilizarla dentro del personaje está prohibido.",
    },
    {
      titulo: "Metagaming (MG)",
      descripcion:
        "Utilizar información obtenida fuera del rol para beneficiar al personaje.",
    },
    {
      titulo: "Powergaming (PG)",
      descripcion:
        "Realizar acciones imposibles o poco realistas aprovechando limitaciones del juego.",
    },
    {
      titulo: "Fair Play",
      descripcion:
        "Debe prevalecer el juego limpio y el respeto entre todos los usuarios.",
    },
    {
      titulo: "Player Kill (PK)",
      descripcion:
        "Muerte temporal del personaje dentro de una trama de rol.",
    },
    {
      titulo: "Character Kill (CK)",
      descripcion:
        "Muerte permanente del personaje autorizada por la administración.",
    },
    {
      titulo: "Death Match (DM)",
      descripcion:
        "Agredir o matar sin motivo de rol válido está totalmente prohibido.",
    },
    {
      titulo: "Revenge Kill (RK)",
      descripcion:
        "Volver para vengarse después de morir en un rol está prohibido.",
    },
    {
      titulo: "Bunny Jump (BJ)",
      descripcion:
        "Saltar repetidamente para desplazarse más rápido rompe la inmersión.",
    },
    {
      titulo: "Zonas Seguras",
      descripcion:
        "En zonas seguras no se permiten agresiones ni actividades delictivas.",
    },
    {
      titulo: "Vehicle Deathmatch (VDM)",
      descripcion:
        "Usar vehículos como arma sin justificación de rol está prohibido.",
    },
    {
      titulo: "Bad Driving (BD)",
      descripcion:
        "Conducir de forma antirrealista o irresponsable sin contexto IC.",
    },
    {
      titulo: "Rol de Entorno",
      descripcion:
        "Siempre debes considerar el entorno y las consecuencias de tus acciones.",
    },
    {
      titulo: "Evasión de Rol",
      descripcion:
        "Abandonar, desconectarse o evitar un rol activo es sancionable.",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">
        Normas Generales
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {normas.map((norma, index) => (
          <div
            key={index}
            className="rounded-xl border border-cyan-500/20 bg-[#0b0f22] p-6 transition hover:border-cyan-400"
          >
            <h2 className="text-cyan-400 font-bold text-lg mb-4">
              {(index + 1).toString().padStart(2, "0")}. {norma.titulo}
            </h2>

            <p className="text-gray-300 leading-7">
              {norma.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
