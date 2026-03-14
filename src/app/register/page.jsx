import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen bg-[#F5F5DC] py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 border border-[#E5E5E5]">
                <div className="border-b border-gray-100 pb-6 mb-6">
                    <h2 className="text-2xl font-serif text-[#A47551]">Pendaftaran Artisan Baru</h2>
                    <p className="text-gray-500 text-sm">Bergabunglah dengan ekosistem keramik kami.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700">Nama Brand / Studio</label>
                        <input type="text" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl" required />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email Bisnis</label>
                        <input type="email" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl" required />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Nomor HP / WhatsApp</label>
                        <input type="tel" className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl" required />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700">Alamat Studio Utama</label>
                        <textarea className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl" rows="3"></textarea>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700">Kategori Produk Unggulan</label>
                        <select className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#829460]">
                            <option>Tableware (Piring, Gelas, Mangkuk)</option>
                            <option>Home Decor (Vas, Patung)</option>
                            <option>Workshop & Edukasi</option>
                            <option>Custom Commission</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 pt-4">
                        <button className="w-full bg-[#829460] hover:bg-[#6D7B50] text-white font-bold py-4 rounded-xl transition duration-300">
                            Daftarkan Studio
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;