export default function Certifications() {
  return (
    <section id="certifications" className="pt-10">
      
      <div className="flex items-center gap-4 mb-8">
        <span className="px-4 py-1.5 bg-black text-[#2E69FF] font-mono font-bold text-sm brutal-border shadow-brutal-sm tilt-pos-2">
          // SECTION 06
        </span>
        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight">
          CERTS &amp; SPECS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Verified Certifications */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-black text-white p-6 brutal-border-thick shadow-brutal-lg tilt-neg-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-black text-2xl text-[#FFDE17] uppercase">
                CERTIFICATIONS
              </h3>
            </div>

            <div className="space-y-4">
              {/* Cert 1: USTHB Scientific Club (University/Institution Icon) */}
              <div className="p-4 bg-gray-900 brutal-border-sm border-gray-700">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#00E575] mb-1">
                  <svg className="w-4 h-4 text-[#00E575]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0.01‍1.652 7.218M12 14l-6.16-3.422A12.083 12.083 0 005.84 17.794M12 21v-7"></path>
                  </svg>
                  <span>USTHB SCIENTIFIC CLUB</span>
                </div>
                <div className="font-heading font-black text-lg text-white mb-2">DataFest Certificate</div>
                <p className="font-mono text-xs text-gray-300 leading-normal font-medium">
                  Awarded for leading data analysis and building a customer churn prediction system for Energical during the USTHB Data Science Scientific Club competition.
                </p>
              </div>

              {/* Cert 2: Codédex Academy (Python Icon) */}
              <div className="p-4 bg-gray-900 brutal-border-sm border-gray-700">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4F9A] mb-1">
                  <svg className="w-4 h-4 text-[#FFDE17]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.923 2C7.756 2 8.435 3.827 8.435 3.827v3.25h3.488v1.025H5.83s-3.83-.678-3.83 3.488c0 4.167 3.488 3.828 3.488 3.828h2.094v-3.082c0-1.92 1.637-2.093 1.637-2.093h3.585s1.748-.096 1.748-1.782V5.155S16.09 2 11.923 2zM9.54 4.54a.726.726 0 110 1.452.726.726 0 010-1.452z"/>
                    <path d="M12.077 22c4.167 0 3.488-1.827 3.488-1.827v-3.25h-3.488V15.9h6.093s3.83.678 3.83-3.488c0-4.167-3.488-3.828-3.488-3.828h-2.094v3.082c0 1.92-1.637 2.093-1.637 2.093h-3.585s-1.748.096-1.748 1.782v3.663S7.91 22 12.077 22zm2.383-2.54a.726.726 0 110-1.452.726.726 0 010 1.452z"/>
                  </svg>
                  <span>CODÉDEX ACADEMY</span>
                </div>
                <div className="font-heading font-black text-lg text-white mb-2">Python Certification</div>
                <p className="font-mono text-xs text-gray-300 leading-normal font-medium">
                  Completed a structured programming curriculum focused on Python fundamentals, scripting, and data manipulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: University Coursework & Technical Training */}
        <div className="lg:col-span-7 bg-white brutal-border-thick shadow-brutal-xl p-6 sm:p-8 tilt-pos-1">
          <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-black uppercase">
              ACADEMIC SPECS &amp; TRAINING
            </h3>
            <span className="font-mono text-xs font-bold bg-[#FFDE17] px-2 py-1 brutal-border-sm">
              5 KEY DOMAINS
            </span>
          </div>

          <div className="space-y-4 font-mono">
            
            {/* Course 1 */}
            <div className="p-3 bg-gray-50 brutal-border-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFDE17]/30 transition-colors">
              <div>
                <span className="font-black text-black text-sm block">Operating Systems</span>
                <span className="text-xs text-gray-700">Process management, concurrency, and memory allocation frameworks.</span>
              </div>
              <span className="bg-black text-[#00E575] text-xs font-bold px-2 py-0.5 whitespace-nowrap self-start sm:self-center">
                CORE SYSTEM
              </span>
            </div>

            {/* Course 2 */}
            <div className="p-3 bg-gray-50 brutal-border-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFDE17]/30 transition-colors">
              <div>
                <span className="font-black text-black text-sm block">Data Structures &amp; Algorithms</span>
                <span className="text-xs text-gray-700">Static &amp; Dynamic data organization, algorithmic complexity, dynamic memory.</span>
              </div>
              <span className="bg-black text-[#FFDE17] text-xs font-bold px-2 py-0.5 whitespace-nowrap self-start sm:self-center">
                DSA / MEMORY
              </span>
            </div>

            {/* Course 3 */}
            <div className="p-3 bg-gray-50 brutal-border-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFDE17]/30 transition-colors">
              <div>
                <span className="font-black text-black text-sm block">Computer Networks</span>
                <span className="text-xs text-gray-700">Network architectures, socket communication protocols, packet-level data transfer.</span>
              </div>
              <span className="bg-black text-[#2E69FF] text-xs font-bold px-2 py-0.5 whitespace-nowrap self-start sm:self-center">
                SOCKETS
              </span>
            </div>

            {/* Course 4 */}
            <div className="p-3 bg-gray-50 brutal-border-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFDE17]/30 transition-colors">
              <div>
                <span className="font-black text-black text-sm block">Databases</span>
                <span className="text-xs text-gray-700">Relational data modeling, query optimization, and structured data storage principles.</span>
              </div>
              <span className="bg-black text-[#FF4F9A] text-xs font-bold px-2 py-0.5 whitespace-nowrap self-start sm:self-center">
                SQL / OPTIM
              </span>
            </div>

            {/* Course 5 */}
            <div className="p-3 bg-gray-50 brutal-border-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FFDE17]/30 transition-colors">
              <div>
                <span className="font-black text-black text-sm block">Core Languages &amp; Paradigms</span>
                <span className="text-xs text-gray-700">Strong foundation in C for low-level systems programming and Java for Object-Oriented (OOP).</span>
              </div>
              <span className="bg-black text-[#FF6A00] text-xs font-bold px-2 py-0.5 whitespace-nowrap self-start sm:self-center">
                C + JAVA
              </span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}