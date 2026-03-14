import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-[#FFF0F4] via-[#FDFBF7] to-[#E9F0E9] py-12 px-4 selection:bg-[#E5D4B3] selection:text-[#4A5D4E] font-[var(--font-poppins)] relative overflow-hidden">

            {/* Decorative abstract blurs to match Home */}
            <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#D4A3B3] rounded-full mix-blend-multiply opacity-20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#A4BEA8] rounded-full mix-blend-multiply opacity-20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative z-10">

                {/* Registration Form Section */}
                <div className="flex-1 bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-10 border border-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2F6F3] rounded-bl-full opacity-50 pointer-events-none"></div>

                    <div className="border-b border-gray-100 pb-6 mb-8 relative z-10">
                        <h2 className="text-3xl font-[var(--font-playfair)] text-[#4A5D4E] font-medium tracking-wide">Pendaftaran Anggota</h2>
                        <p className="text-[#899B8B] text-sm mt-2 font-light">Bergabunglah dengan komunitas Tera & Tale Studio.</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 relative z-10">
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1">Nama Lengkap</label>
                            <input type="text" className="w-full p-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A4BEA8] focus:border-transparent outline-none transition-all duration-300" placeholder="Masukkan nama lengkap Anda" required />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1">Email</label>
                            <input type="email" className="w-full p-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A4BEA8] focus:border-transparent outline-none transition-all duration-300" placeholder="nama@email.com" required />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1">Nomor Telepon</label>
                            <input type="tel" className="w-full p-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A4BEA8] focus:border-transparent outline-none transition-all duration-300" placeholder="08xxxxxxxxxx" required />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1">Tanggal Lahir</label>
                            <input type="date" className="w-full p-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A4BEA8] focus:border-transparent outline-none transition-all duration-300 text-gray-600" required />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1">Jenis Kelamin</label>
                            <select className="w-full p-3.5 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#A4BEA8] focus:border-transparent transition-all duration-300 text-gray-600">
                                <option value="" disabled selected>Pilih jenis kelamin</option>
                                <option value="laki-laki">Laki-laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold text-[#5C715E] uppercase tracking-wider mb-1">Alamat Lengkap</label>
                            <textarea className="w-full p-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A4BEA8] focus:border-transparent outline-none transition-all duration-300 resize-none" rows="3" placeholder="Masukkan alamat pengiriman lengkap..."></textarea>
                        </div>

                        <div className="md:col-span-2 pt-4">
                            <button className="w-full bg-[#4A5D4E] hover:bg-[#3A4A3E] text-[#FDFBF7] font-medium py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide">
                                Daftar Sekarang
                            </button>

                            <div className="mt-6 text-center text-sm">
                                <span className="text-[#899B8B]">Sudah punya akun? </span>
                                <a href="/login" className="text-[#D4A3B3] font-semibold hover:text-[#C18A9E] transition-colors">
                                    Masuk di sini
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Pottery Showcase Section */}
                <div className="flex-1 lg:w-96 flex flex-col justify-between">
                    <div className="bg-[#4A5D4E] text-[#FDFBF7] rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-3xl font-[var(--font-playfair)] italic mb-3 text-[#E5D4B3]">Koleksi Terbaru</h3>
                                <p className="text-[#A4BEA8] font-light leading-relaxed text-sm">
                                    Dapatkan akses eksklusif untuk koleksi tembikar buatan tangan kami sebelum dirilis ke publik.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Collection Item 1 */}
                                <div className="group bg-white/5 hover:bg-white/10 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border border-white/5 cursor-pointer">
                                    <div className="w-16 h-16 rounded-xl bg-[#E5D4B3] flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <div className="w-10 h-10 border-2 border-[#4A5D4E] rounded-full opacity-30"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-[var(--font-playfair)] text-lg group-hover:text-[#D4A3B3] transition-colors">Seri Pagi Buta</h4>
                                        <p className="text-xs text-[#A4BEA8] font-light">Mangkuk & Cangkir Tanah Liat Hitam</p>
                                    </div>
                                </div>

                                {/* Collection Item 2 */}
                                <div className="group bg-white/5 hover:bg-white/10 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border border-white/5 cursor-pointer">
                                    <div className="w-16 h-16 rounded-xl bg-[#D4A3B3] flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <div className="w-12 h-8 border-b-4 border-[#4A5D4E] rounded-b-full opacity-30"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-[var(--font-playfair)] text-lg group-hover:text-[#E5D4B3] transition-colors">Sentuhan Pasir</h4>
                                        <p className="text-xs text-[#A4BEA8] font-light">Vas Bertekstur Kasar Alami</p>
                                    </div>
                                </div>

                                {/* Collection Item 3 */}
                                <div className="group bg-white/5 hover:bg-white/10 p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border border-white/5 cursor-pointer">
                                    <div className="w-16 h-16 rounded-xl bg-[#F2F6F3] flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <div className="w-8 h-12 border-l-4 border-r-4 border-b-4 border-[#4A5D4E] rounded-b-lg opacity-30"></div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-[var(--font-playfair)] text-lg group-hover:text-[#A4BEA8] transition-colors">Gletser Embun</h4>
                                        <p className="text-xs text-[#A4BEA8] font-light">Piring Porselen Putih Murni</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;