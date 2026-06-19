export default function Terminos() {
  const terminos = [
    {
      titulo: "Cuenta Personal",
      descripcion:
        "Cada jugador es responsable de la seguridad y uso de su cuenta.",
    },
    {
      titulo: "Respeto",
      descripcion:
        "Se debe mantener respeto hacia jugadores, staff y comunidad.",
    },
    {
      titulo: "Prohibición de Cheats",
      descripcion:
        "El uso de programas externos, hacks o modificaciones está prohibido.",
    },
    {
      titulo: "Errores y Bugs",
      descripcion:
        "Aprovechar errores del servidor para obtener beneficios está prohibido.",
    },
    {
      titulo: "Suplantación",
      descripcion:
        "Está prohibido hacerse pasar por miembros del staff o administración.",
    },
    {
      titulo: "Contenido Ofensivo",
      descripcion:
        "No se permite contenido discriminatorio, racista o de odio.",
    },
    {
      titulo: "Comercio Externo",
      descripcion:
        "La venta o compra de bienes del servidor por dinero real está prohibida.",
    },
    {
      titulo: "Decisiones del Staff",
      descripcion:
        "Las decisiones administrativas deberán respetarse en todo momento.",
    },
    {
      titulo: "Uso de Donaciones",
      descripcion:
        "Las donaciones son voluntarias y no garantizan privilegios especiales.",
    },
    {
      titulo: "Cambios en la Normativa",
      descripcion:
        "La administración puede modificar las normas cuando sea necesario.",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">
        Términos y Condiciones
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {terminos.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-cyan-500/20 bg-[#0b0f22] p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-cyan-400 font-bold text-lg mb-4">
              {(index + 1).toString().padStart(2, "0")}. {item.titulo}
            </h2>

            <p className="text-gray-300 leading-7">
              {item.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
