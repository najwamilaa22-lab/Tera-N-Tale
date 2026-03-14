import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D7C49E]">
                <div className="bg-[#829460] p-8 text-center">
                    <h1 className="text-3xl font-serif text-white italic">The Potter's Nook</h1>
                    <p className="text-[#F5F5DC] text-sm mt-2 italic">"Setiap sentuhan adalah doa, setiap karya adalah jiwa."</p>
                </div>

                <div className="p-8">
                    <div className="mb-6 text-center">
                        <p className="text-[#A47551] font-medium">Selamat bertugas, Artisan.</p>
                        <p className="text-gray-500 text-xs mt-1">Ingatlah untuk memberikan pelayanan sehalus permukaan porselen hari ini.</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#5C5C5C]">Email / Username</label>
                            <input type="email" className="w-full mt-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#829460] outline-none transition" placeholder="artisan@studio.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#5C5C5C]">Password</label>
                            <input type="password" className="w-full mt-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#829460] outline-none transition" placeholder="••••••••" />
                        </div>
                        <button className="w-full bg-[#A47551] hover:bg-[#8B6243] text-white font-bold py-3 rounded-lg transition duration-300 shadow-md">
                            Masuk ke Studio
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
