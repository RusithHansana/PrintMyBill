const BillModal = ({ items, onClose }) => {
    const handlePrint = () => {
        const printableContent = document.getElementById('receipt-content').innerHTML;

        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Receipt</title>');
        printWindow.document.write(`
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        tfoot td { font-weight: bold; border-top: 2px solid #000; }
        .text-right { text-align: right; }
        @media print {
          body { -webkit-print-color-adjust: exact; }
        }
      </style>
    </head><body>`);
        printWindow.document.write(printableContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();

        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div id="receipt-content">
                <div className="flex flex-col gap-4 w-full max-w-md mx-auto bg-white rounded-lg p-6 border border-gray-300">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Bill Summary</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-800 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                    <div className="h-full flex-col items-center justify-between">
                        {
                            items.length > 0 ? (
                                items.map((items) => (
                                    <div className="w-full flex items-center justify-between">
                                        <p>{items.itemName} * {items.quantity}</p>
                                        <p>Rs. {items.price.toFixed(2)}</p>
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
                    <div className="w-full flex items-center justify-center mt-4">
                        <button
                            onClick={handlePrint}
                            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200'
                        >
                            Print Bill
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillModal