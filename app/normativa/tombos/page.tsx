export default function Tombos() {
  const normas = [
    {
      titulo: "Respeto Institucional",
      descripcion:
        "Todo funcionario deberá actuar con profesionalismo y respeto hacia la ciudadanía.",
    },
    {
      titulo: "Uso Progresivo de la Fuerza",
      descripcion:
        "La fuerza deberá utilizarse únicamente cuando sea necesaria y de forma proporcional.",
    },
    {
      titulo: "Persecuciones",
      descripcion:
        "Las persecuciones deberán realizarse priorizando la seguridad de civiles y oficiales.",
    },
    {
      titulo: "Corrupción",
      descripcion:
        "La corrupción solo estará permitida si la administración la autoriza expresamente.",
    },
    {
      titulo: "Allanamientos",
      descripcion:
        "Todo allanamiento deberá contar con las pruebas o permisos correspondientes.",
    },
    {
      titulo: "Retenes",
      descripcion:
        "Los retenes deberán estar correctamente señalizados y justificados.",
    },
    {
      titulo: "Uso de Armamento",
      descripcion:
        "El armamento solo podrá utilizarse en situaciones justificadas dentro del rol.",
    },
    {
      titulo: "Detenciones",
      descripcion:
        "Toda detención deberá estar respaldada por motivos válidos dentro del rol.",
    },
    {
      titulo: "Abuso de Autoridad",
      descripcion:
        "Queda prohibido aprovechar el cargo policial para obtener beneficios personales.",
    },
    {
      titulo: "Comunicación",
      descripcion:
        "Las comunicaciones oficiales deberán mantenerse claras y profesionales.",
    },
    {
      titulo: "Negociaciones",
      descripcion:
        "Los oficiales deberán intentar resolver conflictos antes de escalar el uso de fuerza.",
    },
    {
      titulo: "Evidencias",
      descripcion:
        "Toda evidencia recolectada deberá manejarse correctamente dentro del rol.",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">
        Normas Policiales
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {normas.map((norma, index) => (
          <div
            key={index}
            className="rounded-xl border border-cyan-500/20 bg-[#0b0f22] p-6 hover:border-cyan-400 transition"
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
