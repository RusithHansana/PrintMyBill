# PrintMyBill

PrintMyBill is a simple, lightweight web application built with React and Vite that allows users to create and print itemized bills or receipts. Perfect for small businesses, cafes, or any situation where you need to quickly generate a professional-looking bill.

## Features

- 🛒 Add multiple items with name, quantity, and price
- 💰 Automatically calculate the total bill amount
- 🖨️ Print bills

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/PrintMyBill.git
   cd PrintMyBill
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

## Usage

1. Fill in the item details (name, quantity, price) in the form
2. Click "Add Item" to add it to your bill
3. Add as many items as needed
4. Click "Print Bill" to preview the bill
5. In the preview modal, click "Print Bill" again to send to your printer

## Technologies Used

- React 19
- Vite 6
- TailwindCSS 4
- ESLint

## Customization

You can customize the currency symbol by editing the `App.jsx` and `BillModal.jsx` files. By default, it uses "Rs." (Rupees).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Vite's React template
