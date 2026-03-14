"use client";
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
        <div className="min-h-screen bg-gradient-to-tr from-[#FFF0F4] via-[#FDFBF7] to-[#E9F0E9] p-6 lg:p-10 font-[var(--font-poppins)] relative overflow-hidden selection:bg-[#E5D4B3] selection:text-[#4A5D4E]">

            {/* Decorative abstract blurs to match Home */}
            <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#D4A3B3] rounded-full mix-blend-multiply opacity-20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#A4BEA8] rounded-full mix-blend-multiply opacity-20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 relative z-10">
                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-[var(--font-playfair)] text-[#4A5D4E] font-medium tracking-wide">Studio Inventory</h2>
                            <p className="text-[#899B8B] text-sm mt-1 font-light">Pilih karya untuk ditambahkan ke keranjang.</p>
                        </div>
                        <span className="bg-[#A4BEA8]/10 text-[#4A5D4E] px-4 py-1.5 rounded-full text-xs font-medium border border-[#A4BEA8]/30 tracking-wide backdrop-blur-sm shadow-sm">
                            ✨ Handcrafted Quality
                        </span>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => addToCart(product)}
                                className="bg-white/60 backdrop-blur-xl p-4 rounded-3xl border border-white hover:border-[#D4A3B3]/60 cursor-pointer transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(212,163,179,0.15)] hover:-translate-y-1.5 group flex flex-col h-full"
                            >
                                <div className="h-32 bg-gradient-to-br from-[#FDFBF7] to-[#F2F6F3] rounded-2xl mb-4 flex items-center justify-center text-[#4A5D4E] font-[var(--font-playfair)] text-3xl italic shadow-inner border border-white/50 group-hover:scale-[1.02] transition-transform duration-500">
                                    {product.name[0]}
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-medium text-[#4A5D4E] mb-1 group-hover:text-[#D4A3B3] transition-colors">{product.name}</h3>
                                        <p className="text-[10px] text-[#899B8B] uppercase tracking-widest font-semibold">{product.category}</p>
                                    </div>
                                    <p className="text-[#4A5D4E] font-semibold mt-3 bg-white/50 inline-block px-3 py-1 rounded-lg text-sm w-max border border-white/80">Rp {product.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cart & Summary */}
                <div className="w-full md:w-96 lg:w-[420px] bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white p-6 lg:p-8 flex flex-col h-[calc(100vh-5rem)] sticky top-10">
                    <h3 className="text-2xl font-[var(--font-playfair)] mb-6 text-[#4A5D4E] font-medium border-b border-gray-100 pb-4">Current Order</h3>

                    <div className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2 custom-scrollbar">
                        {cart.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-[#899B8B] opacity-70">
                                <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                <p className="italic font-light text-sm">Keranjang masih kosong...</p>
                            </div>
                        )}
                        {cart.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm bg-white/50 p-3 rounded-xl border border-white/60 shadow-sm hover:bg-white transition-colors">
                                <div>
                                    <p className="font-medium text-[#4A5D4E]">{item.name}</p>
                                    <p className="text-[10px] text-[#899B8B] uppercase tracking-wider mt-0.5">{item.category}</p>
                                </div>
                                <p className="font-semibold text-[#4A5D4E]">Rp {item.price.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto space-y-6">
                        <div className="bg-[#FDFBF7] p-5 rounded-2xl space-y-3 border border-[#E9F0E9] shadow-sm">
                            <div className="flex justify-between text-sm text-[#5C715E] font-light">
                                <span>Subtotal</span>
                                <span>Rp {subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm text-[#5C715E] font-light">
                                <span>PPN (11%)</span>
                                <span>Rp {tax.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-medium text-lg text-[#4A5D4E] border-t border-[#E9F0E9] pt-3 mt-1">
                                <span>Total</span>
                                <span>Rp {total.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Profit Estimator Box */}
                        <div className="bg-gradient-to-r from-[#A4BEA8]/10 to-[#D4A3B3]/10 p-4 rounded-2xl border border-white/50 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>
                            <div className="flex justify-between items-center text-[#4A5D4E] relative z-10">
                                <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#A4BEA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                    Estimasi Profit
                                </span>
                                <span className="font-semibold bg-white/60 px-2 py-1 rounded-md text-sm border border-white/80 text-[#D4A3B3]">Rp {estProfit.toLocaleString()}</span>
                            </div>
                        </div>

                        <button
                            className={`w-full py-4 rounded-xl font-medium tracking-wide shadow-md transition-all duration-300 transform active:scale-[0.98] ${cart.length === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' : 'bg-[#4A5D4E] hover:bg-[#3A4A3E] text-[#FDFBF7] hover:shadow-lg'}`}
                            disabled={cart.length === 0}
                        >
                            Selesaikan Transaksi
                        </button>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #A4BEA8;
                    border-radius: 20px;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    );
};

export default POSInput;
