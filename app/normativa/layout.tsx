import Image from "next/image";
import Link from "next/link";

export default function NormativaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    ["Normas Generales", "/normativa/generales"],
    ["Términos y Condiciones", "/normativa/terminos"],
    ["Normas EMS", "/normativa/ems"],
    ["Normas Facciones / Negocios", "/normativa/facciones"],
    ["Normas Mecánico", "/normativa/mecanico"],
    ["Normas Policiales", "/normativa/policiales"],
    ["Normas Ilegales", "/normativa/ilegales"],
    ["Normas del TSJ", "/normativa/tsj"],
    ["Normas TV Quillami", "/normativa/tv"],
    ["Normas Sociales", "/normativa/sociales"],
    ["Normas de Seguridad", "/normativa/seguridad"],
    ["Sanciones", "/normativa/sanciones"],
    ["Donaciones", "/normativa/donaciones"],
    ["Multas de Donaciones", "/normativa/multas"],
    ["Normas Creadores de Contenido", "/normativa/creadores"],
  ];

  return (
    <div className="flex min-h-screen bg-[#050512] text-white">
      {/* Sidebar */}
      <aside className="w-80 bg-[#080818] border-r border-gray-800 overflow-y-auto">
        <div className="p-6 text-center border-b border-gray-800">
          <Image
            src="/logo.png"
            alt="Quillami RP"
            width={220}
            height={120}
            className="mx-auto"
            priority
          />

          <h1 className="text-3xl font-bold mt-4">
            Quillami RP
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Normativa Oficial
          </p>
        </div>

        <nav className="p-4">
          {menu.map(([titulo, ruta]) => (
            <Link
              key={ruta}
              href={ruta}
              className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-[#15152a] hover:text-yellow-400 transition-all"
            >
              {titulo}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
