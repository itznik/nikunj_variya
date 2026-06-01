"use client";

export default function Metrics() {
  return (
    <section className="w-full bg-stripe-navy pt-20 pb-40 border-t border-[#1a365d]">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-24">
          The backbone <br /> of robust applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10 text-center md:text-left border-b border-[#1a365d] pb-20">
          
          <div>
            <h3 className="text-5xl font-bold text-white mb-4 text-glow">10k+</h3>
            <p className="text-[#adbdcc] text-lg font-medium">Nodes evaluated per second in custom DSA visualization engines.</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white mb-4 text-glow">99.999%</h3>
            <p className="text-[#adbdcc] text-lg font-medium">Target historical uptime for deployed microservices.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
