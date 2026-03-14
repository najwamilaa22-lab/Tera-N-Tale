import React, { useState } from 'react';

const POSInput = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Hand-thrown Mug', price: 150000, category: 'Produk', cost: 45000 },
        { id: 2, name: 'Sage Ceramic Vase', price: 450000, category: 'Produk', cost: 120000 },
        { id: 3, name: 'Weekend Workshop', price: 350000, category: 'Workshop', cost: 100000 },
        { id: 4, name: 'Custom Wedding Plate', price: 200000, category: 'Custom', cost: 60000 },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.11;
    const total = subtotal + tax;
    const totalCost = cart.reduce((acc, item) => acc + item.cost, 0);
    const estProfit = total > 0 ? total - tax - totalCost : 0;

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col md:flex-row p-6 gap-6">
            {/* Product Grid */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-serif text-[#5C5C5C]">Studio Inventory</h2>
                    <span className="bg-[#829460]/20 text-[#829460] px-4 py-1 rounded-full text-xs font-bold border border-[#829460]">
                        ✨ Handcrafted Quality
                    </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => addToCart(product)}
                            className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-[#A47551] cursor-pointer transition-all hover:shadow-md group"
                        >
                            <div className="h-32 bg-[#F5F5DC] rounded-xl mb-3 flex items-center justify-center text-[#A47551] font-bold">
                                {product.name[0]}
                            </div>
                            <h3 className="font-medium text-gray-800">{product.name}</h3>
                            <p className="text-[#829460] font-bold">Rp {product.price.toLocaleString()}</p>
                            <p className="text-[10px] mt-1 text-gray-400 uppercase tracking-widest">{product.category}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart & Summary */}
            <div className="w-full md:w-96 bg-white rounded-3xl shadow-xl border border-[#D7C49E] p-6 flex flex-col">
                <h3 className="text-xl font-serif mb-4 text-[#A47551]">Current Order</h3>

                <div className="flex-1 overflow-y-auto mb-6 space-y-3">
                    {cart.length === 0 && <p className="text-gray-400 italic text-center mt-10 text-sm">Keranjang masih kosong...</p>}
                    {cart.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-[10px] text-gray-400">{item.category}</p>
                            </div>
                            <p className="font-semibold">Rp {item.price.toLocaleString()}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#F5F5DC]/50 p-4 rounded-2xl space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal</span>
                        <span>Rp {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>PPN (11%)</span>
                        <span>Rp {tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-[#5C5C5C] border-t border-[#D7C49E] pt-2 mt-2">
                        <span>Total</span>
                        <span>Rp {total.toLocaleString()}</span>
                    </div>
                </div>

                {/* Profit Estimator Box */}
                <div className="bg-[#829460]/10 p-3 rounded-xl border border-dashed border-[#829460] mb-6">
                    <div className="flex justify-between items-center text-[#829460]">
                        <span className="text-xs font-bold uppercase">Estimasi Profit Murni</span>
                        <span className="font-bold">Rp {estProfit.toLocaleString()}</span>
                    </div>
                </div>

                <button
                    className="w-full bg-[#A47551] text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-none transition transform active:scale-95"
                    disabled={cart.length === 0}
                >
                    Selesaikan Transaksi
                </button>
            </div>
        </div>
    );
};

export default POSInput;