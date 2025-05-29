import { useState } from 'react';

const ItemForm = ({ onSubmit }) => {
    const [item, setItem] = useState({
        itemName: "",
        quantity: 0,
        price: 0
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        })
    }

    return (
        <div className='w-full max-w-md mx-auto rounded-lg p-6 border border-gray-300'>
            <form onSubmit={onSubmit} className="">
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="itemName" className='text-xl font-semibold text-gray-500'>Item</label>
                    <input
                        type="text"
                        name="itemName"
                        id='itemName'
                        onChange={handleChange}
                        value={item.itemName}
                        placeholder='Enter item name'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="quantity" className='text-xl font-semibold text-gray-500'>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        id='quantity'
                        onChange={handleChange}
                        value={item.quantity}
                        placeholder='Enter quantity'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="price" className='text-xl font-semibold text-gray-500'>Price</label>
                    <input
                        type="number"
                        name="price"
                        id='price'
                        onChange={handleChange}
                        value={item.price}
                        placeholder='Enter price'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200'
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ItemForm