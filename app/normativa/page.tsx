import Image from "next/image";

export default function Normativa() {
  return (
    <div className="min-h-screen bg-[#070714] text-white flex">
      <aside className="w-72 border-r border-gray-800 p-5">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Quillami RP"
            width={180}
            height={180}
            priority
          />

          <h1 className="mt-3 text-xl font-bold">
            Quillami RP
          </h1>
        </div>

        <nav className="space-y-4 text-gray-300">
          <a href="#" className="block hover:text-yellow-400">
            Normas Generales
          </a>

          <a href="#" className="block hover:text-yellow-400">
            Términos y Condiciones
          </a>

          <a href="#" className="block hover:text-yellow-400">
            Normas EMS
          </a>

          <a href="#" className="block hover:text-yellow-400">
            Normas Policiales
          </a>

          <a href="#" className="block hover:text-yellow-400">
            Normas Ilegales
          </a>

          <a href="#" className="block hover:text-yellow-400">
            Normas TSJ
          </a>

          <a href="#" className="block hover:text-yellow-400">
            Sanciones
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold mb-8">
          Normativa Quillami RP
        </h1>

        <div className="bg-[#0f1022] rounded-xl p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            Horario Delictivo
          </h2>

          <p className="mb-4 text-gray-300">
            El horario delictivo será desde las
            6:00 PM hasta las 6:00 AM.
          </p>

          <p className="mb-4 text-gray-300">
            Durante este horario se permiten
            robos a civiles sin necesidad de
            generar entorno para robos menores.
          </p>

          <p className="text-gray-300">
            Los ciudadanos deberán evitar
            "dar papaya", manteniendo medidas
            razonables de seguridad.
          </p>
        </div>
      </main>
    </div>
  );
}
