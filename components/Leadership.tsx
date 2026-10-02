export default function Leadership() {
  return (
    <section id="leadership" className="pt-10">
      
      <div className="flex items-center gap-4 mb-8">
        <span className="px-4 py-1.5 bg-black text-[#FF6A00] font-mono font-bold text-sm brutal-border shadow-brutal-sm tilt-pos-1">
          // SECTION 04
        </span>
        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight">
          LEADERSHIP &amp; IMPACT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Leadership Card 1 */}
        <div className="bg-[#FFDE17] p-8 brutal-border-thick shadow-brutal-xl tilt-neg-1 tilt-hover">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-black text-[#FFDE17] font-mono font-black text-xs px-2.5 py-1 brutal-border-sm uppercase">
              COLLEGE PROJECT // 2ND YEAR
            </span>
            <span className="text-2xl">🧠</span>
          </div>

          <h3 className="font-heading font-black text-3xl text-black uppercase mb-4 leading-tight">
            Restaurant Management System Team Lead
          </h3>

          <div className="space-y-4 font-mono text-sm text-black font-semibold leading-relaxed">
            <p className="bg-white p-4 brutal-border-sm shadow-brutal-sm">
              I led a student team during my 2nd year of college to design and deliver a complete Restaurant Management System from scratch.
            </p>
            <div className="bg-black text-white p-4 brutal-border-sm">
              <div className="font-bold text-[#FFDE17] text-xs uppercase mb-1">Execution &amp; Methodology:</div>
              <p className="text-xs text-gray-200">
                I used structured task delegation, milestone planning, and peer coordination to keep the team focused, organized, and moving forward together.
              </p>
            </div>
            <div className="bg-[#00E575] text-black p-4 brutal-border-sm">
              <div className="font-black text-xs uppercase mb-1">Growth &amp; Leadership Insight:</div>
              <p className="text-xs font-bold">
                I learned how to resolve team conflicts, manage project timelines under strict academic deadlines, and guide different skill sets toward a unified final product.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Card 2 */}
        <div className="bg-black text-white p-8 brutal-border-thick shadow-brutal-xl tilt-pos-1 tilt-hover">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-[#FF4F9A] text-black font-mono font-black text-xs px-2.5 py-1 brutal-border-sm uppercase">
              HIGH-STAKES COMPETITION
            </span>
            <span className="text-2xl">🧠</span>
          </div>

          <h3 className="font-heading font-black text-3xl text-[#FFDE17] uppercase mb-4 leading-tight">
            Data Science &amp; ML Hackathon Team Lead
          </h3>

          <div className="space-y-4 font-mono text-sm text-white font-semibold leading-relaxed">
            <p className="bg-gray-900 text-white p-4 brutal-border-sm shadow-brutal-sm border border-gray-700">
              I led a cross-functional team during a competitive data science and machine learning hackathon, steering our strategy from raw data to a working model prototype under extreme time constraints.
            </p>
            <div className="bg-[#FF4F9A] text-black p-4 brutal-border-sm">
              <div className="font-black text-xs uppercase mb-1">Execution &amp; Strategy:</div>
              <p className="text-xs font-bold">
                I used agile decision-making, task partitioning (dividing data cleaning, modeling, and presentation), and real-time pivoting to keep the team aligned under pressure.
              </p>
            </div>
            <div className="bg-[#2E69FF] text-white p-4 brutal-border-sm">
              <div className="font-black text-xs text-[#FFDE17] uppercase mb-1">Growth &amp; Leadership Insight:</div>
              <p className="text-xs font-bold text-white">
                I learned how to manage high-stress technical environments, fast-track problem-solving, and align diverse talents to ship a functional AI prototype within hours.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
