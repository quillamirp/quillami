export default function Home() {
  const categorias = [
    "Normas Generales",
    "Términos y Condiciones",
    "Normas EMS",
    "Normas Facciones / Negocios",
    "Normas Mecánico",
    "Normas Policiales",
    "Normas Ilegales",
    "Normas del TSJ",
    "Normas TV Quillami",
    "Normas Sociales",
    "Normas de Seguridad",
    "Sanciones Quillami",
    "Donaciones",
    "Multas de Donaciones",
    "Normas Creadores de Contenido",
  ];

  return (
    <div className="min-h-screen bg-[#070714] text-white flex">
      <aside className="w-72 border-r border-gray-800 p-6">
        <h1 className="text-2xl font-bold mb-8">
          Quillami RP
        </h1>

        <ul className="space-y-4 text-gray-300">
          {categorias.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">
          Normas Generales
        </h1>

        <div className="space-y-4 text-gray-300">
          <p>
            Bienvenido a Quillami RP. El respeto entre usuarios
            es obligatorio en todo momento.
          </p>

          <p>
            Está prohibido realizar Metagaming (MG),
            Powergaming (PG), Revenge Kill (RK),
            Combat Logging (CL) y cualquier acción
            que afecte negativamente la experiencia
            de rol.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">
            Horario Delictivo
          </h2>

          <p>
            El horario delictivo es desde las
            6:00 PM hasta las 6:00 AM.
          </p>

          <p>
            Durante este horario se permiten robos
            a civiles. No será obligatorio generar
            entorno para robos menores.
          </p>

          <p>
            Los ciudadanos deben evitar "dar papaya",
            permaneciendo atentos y cuidando sus
            pertenencias en zonas peligrosas.
          </p>
        </div>
      </main>
    </div>
  );
}
