import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const BillModal = ({ items, onClose }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto bg-white rounded-lg p-6 border border-gray-300">
                <div id="receipt-content" ref={componentRef} className="print-content">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Bill Summary</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-800 transition duration-200 no-print"
                        >
                            Close
                        </button>
                    </div>
                    <div className="h-full flex-col items-center justify-between">
                        {
                            items.length > 0 ? (
                                items.map((item, index) => (
                                    <div key={index} className="w-full flex items-center justify-between">
                                        <p>{item.itemName} × {item.quantity}</p>
                                        <p>Rs. {item.price.toFixed(2)}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No items to display</p>
                            )
                        }
                    </div>
                    <div className="w-full flex items-center justify-between mt-4">
                        <p className="text-xl font-semibold text-gray-800">Total</p>
                        <p className="text-xl font-semibold text-gray-800">
                            Rs. {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center mt-4 no-print">
                    <button
                        onClick={handlePrint}
                        className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200'
                    >
                        Print Bill
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BillModal