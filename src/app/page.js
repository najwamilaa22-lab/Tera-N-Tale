import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#FFF0F4] via-[#FDFBF7] to-[#E9F0E9] flex flex-col items-center justify-center p-8 lg:p-16 font-[var(--font-poppins)] relative overflow-hidden">

      {/* Decorative abstract soft blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4A3B3] rounded-full mix-blend-multiply opacity-20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#A4BEA8] rounded-full mix-blend-multiply opacity-20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl w-full text-center relative z-10 mx-auto">
        <div className="space-y-6 pt-10">
          <p className="text-[#899B8B] text-xs font-light tracking-[0.4em] uppercase">Ceramic Workshop & Repository</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-medium text-[#4A5D4E] tracking-tight leading-tight">
            Tera & Tale <br /> <span className="italic font-light text-[#D4A3B3] pr-4">Studio</span>
          </h1>
          <p className="text-[#899B8B] text-xl md:text-2xl font-[var(--font-playfair)] italic tracking-widest mt-6 opacity-80">
            "From Earth to Art"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-24 mb-10">
          {/* POS Link */}
          <Link href="/pos" className="group h-full">
            <div className="bg-white/50 backdrop-blur-xl px-8 py-14 rounded-3xl border border-white hover:border-[#A4BEA8]/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(92,113,94,0.1)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden">
              <span className="absolute top-6 left-8 text-6xl font-[var(--font-playfair)] text-[#5C715E]/5 italic font-light select-none pointer-events-none">I</span>
              <div className="w-14 h-14 rounded-full bg-[#F2F6F3] flex items-center justify-center mb-8 group-hover:bg-[#A4BEA8] group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-[#5C715E] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h2 className="text-2xl font-medium text-[#4A5D4E] mb-3 font-[var(--font-playfair)] tracking-wide">Clay Market</h2>
              <p className="text-sm text-[#899B8B] font-light leading-relaxed">Manage pottery sales & transactions.</p>
            </div>
          </Link>

          {/* Login Link */}
          <Link href="/login" className="group h-full md:-translate-y-8">
            <div className="bg-white/50 backdrop-blur-xl px-8 py-14 rounded-3xl border border-white hover:border-[#D4A3B3]/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(212,163,179,0.15)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden">
              <span className="absolute top-6 left-8 text-6xl font-[var(--font-playfair)] text-[#D4A3B3]/10 italic font-light select-none pointer-events-none">II</span>
              <div className="w-14 h-14 rounded-full bg-[#FFF5F7] flex items-center justify-center mb-8 group-hover:bg-[#D4A3B3] group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-[#D4A3B3] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h2 className="text-2xl font-medium text-[#4A5D4E] mb-3 font-[var(--font-playfair)] tracking-wide">Collection</h2>
              <p className="text-sm text-[#899B8B] font-light leading-relaxed">Explore the ceramic pieces created by studio artisans.</p>
            </div>
          </Link>

          {/* Register Link */}
          <Link href="/register" className="group h-full">
            <div className="bg-white/50 backdrop-blur-xl px-8 py-14 rounded-3xl border border-white hover:border-[#E5D4B3]/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(229,212,179,0.15)] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden">
              <span className="absolute top-6 left-8 text-6xl font-[var(--font-playfair)] text-[#E5D4B3]/15 italic font-light select-none pointer-events-none">III</span>
              <div className="w-14 h-14 rounded-full bg-[#FAF7F2] flex items-center justify-center mb-8 group-hover:bg-[#E5D4B3] group-hover:scale-110 transition-all duration-500">
                <svg className="w-6 h-6 text-[#C4B393] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <h2 className="text-2xl font-medium text-[#4A5D4E] mb-3 font-[var(--font-playfair)] tracking-wide">Become an Artisan</h2>
              <p className="text-sm text-[#899B8B] font-light leading-relaxed">Hands-on pottery sessions where clay becomes art.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
