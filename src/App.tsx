import { MenuItem, OrderContents, OrderTotals, TipPercentage } from "./components";
import { menuItems } from "./data/db";
import { useOrden } from "./hooks/useOrder";

function App() {

  const { addItem, orden, removeItem, tip, setTip, placeOrder } = useOrden();

  return (
    <>
      <header className="py-5">
        <h1 className="text-center text-4xl font-black text-blue-900">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-3 py-20 flex justify-center items-start flex-col lg:flex-row gap-10">
        <div className="rounded-2xl bg-white shadow-md overflow-hidden sticky top-5 w-full lg:w-1/2">
          <h2 className="text-blue-800 text-3xl font-bold mb-5 pl-5 pt-3">Menú</h2>
          {
            menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))
          }
        </div>

        <div className="border border-dashed border-blue-400 rounded space-y-10 p-5 w-full lg:w-1/2">
          {
            orden.length === 0 ? (
              <p className="text-slate-700 text-center p-2">
                La orden esta vacia
              </p>
            ) : (
              <>

                <OrderContents
                  order={orden}
                  removeItem={removeItem}
                />

                <TipPercentage
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotals
                  order={orden}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
