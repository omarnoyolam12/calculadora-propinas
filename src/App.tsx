import { MenuItem } from "./components";
import { menuItems } from "./data/db";

function App() {

  return (
    <>
      <header className="py-5">
        <h1 className="text-center text-4xl font-black text-blue-900">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-3 py-20 grid md:grid-cols-2 gap-10">
        <div className="rounded-2xl bg-white shadow-md overflow-hidden">
          <h2 className="text-blue-800 text-3xl font-bold mb-5 pl-5 pt-3">Menú</h2>
          {
            menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
              />
            ))
          }
        </div>

        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
