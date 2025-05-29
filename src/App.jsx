import { useState } from "react"
import ItemForm from "./components/ItemForm"
import BillModal from "./components/BillModal";

function App() {
  const [items, setItems] = useState([]);
  const [showBill, setShowBill] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = {
      itemName: formData.get('itemName'),
      quantity: parseInt(formData.get('quantity'), 10),
      price: parseFloat(formData.get('price')),
    };

    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex flex-col h-full items-center justify-between gap-8 bg-white shadow-lg rounded-lg p-6 md:p-12">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">Print My Bill</h1>
          <p className="text-base md:text-2xl text-gray-700 font-semibold">A simple app to print bills</p>
        </div>
        <ItemForm onSubmit={onSubmit} />
        {
          items.length > 0 && (
            <div className="flex flex-col w-full max-w-md mx-auto items-end mt-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg text-center font-semibold overflow-hidden">
                <thead>
                  <tr className="text-2xl bg-gray-100">
                    <th className="p-4">Item</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-blue-50  text-xl text-gray-500">
                      <td className="p-4">{item.itemName}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4">Rs. {item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 w-1/2">
                <button
                  type="button"
                  onClick={() => setShowBill(true)}
                  className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200'
                >
                  Print Bill
                </button>
              </div>
            </div>
          )
        }

        {
          showBill && <BillModal items={items} onClose={() => setShowBill(false)} />
        }
      </div>
    </div >
  )
}

export default App
