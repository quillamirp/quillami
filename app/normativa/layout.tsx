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
    ["Creadores de Contenido", "/normativa/creadores"],
  ];

  return (
    <div className="min-h-screen bg-[#070714] text-white flex">
      <aside className="w-72 border-r border-gray-800 p-5">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="Quillami RP"
            width={220}
            height={220}
            priority
          />

          <h1 className="font-bold text-2xl mt-2">
            Quillami RP
          </h1>
        </div>

        <nav className="space-y-2">
          {menu.map(([titulo, ruta]) => (
            <Link
              key={ruta}
              href={ruta}
              className="block rounded-lg px-3 py-2 text-gray-300 hover:bg-[#17182d] hover:text-yellow-400 transition"
            >
              {titulo}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
