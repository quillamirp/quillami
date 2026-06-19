export default function Sura() {
  const normas = [
    { titulo: "Atención Médica", descripcion: "Todos los pacientes deben recibir atención adecuada." },
    { titulo: "Respeto", descripcion: "El personal médico debe actuar profesionalmente." },
    { titulo: "Ambulancias", descripcion: "Son exclusivamente para emergencias." },
    { titulo: "Reanimaciones", descripcion: "Deben respetar la situación IC." },
    { titulo: "Guardias", descripcion: "Deben mantenerse activas cuando sea posible." },
    { titulo: "Reportes", descripcion: "Toda actuación importante debe registrarse." },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Normas SURA</h1>
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
