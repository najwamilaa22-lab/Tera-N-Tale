import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-[#FFF0F4] via-[#FDFBF7] to-[#E9F0E9] flex items-center justify-center p-4 font-[var(--font-poppins)] relative overflow-hidden selection:bg-[#E5D4B3] selection:text-[#4A5D4E]">

            {/* Decorative abstract blurs to match Home */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4A3B3] rounded-full mix-blend-multiply opacity-20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#A4BEA8] rounded-full mix-blend-multiply opacity-20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-md w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white overflow-hidden relative z-10">
                <div className="bg-[#4A5D4E] p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    <h1 className="text-3xl font-[var(--font-playfair)] text-[#FDFBF7] italic font-medium tracking-wide">The Potter's Nook</h1>
                    <p className="text-[#A4BEA8] text-sm mt-2 font-light italic tracking-wide">"Setiap sentuhan adalah jiwa."</p>
                </div>

                <div className="p-8">
                    <div className="mb-8 text-center">
                        <p className="text-[#4A5D4E] font-medium text-lg tracking-wide">Selamat bertugas, Artisan.</p>
                        <p className="text-[#899B8B] text-xs mt-2 font-light leading-relaxed">Berikan pelayanan sehalus porselen.</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1.5">Email / Username</label>
                            <input type="email" className="w-full p-3.5 bg-white/80 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#D4A3B3] outline-none transition-all duration-300 text-[#4A5D4E] shadow-[0_2px_10px_rgb(0,0,0,0.02)] placeholder:text-[#899B8B]/60" placeholder="artisan@studio.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1.5">Password</label>
                            <input type="password" className="w-full p-3.5 bg-white/80 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#D4A3B3] outline-none transition-all duration-300 text-[#4A5D4E] shadow-[0_2px_10px_rgb(0,0,0,0.02)] placeholder:text-[#899B8B]/60" placeholder="••••••••" />
                        </div>

                        <div className="pt-2">
                            <button className="w-full bg-[#D4A3B3] hover:bg-[#C18A9E] text-white font-medium tracking-wide py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                Masuk ke Studio
                            </button>
                        </div>

                        <div className="mt-8 text-center text-sm border-t border-gray-100 pt-6">
                            <span className="text-[#899B8B] font-light">Belum punya akun? </span>
                            <a href="/register" className="text-[#4A5D4E] font-medium hover:text-[#D4A3B3] transition-colors">
                                Daftar sekarang
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;