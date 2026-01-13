import React from 'react';
import { Link } from 'react-router-dom';

const CaseWork: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Real Properties. Real Settlements.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We don't deal in hypotheticals. These are documented outcomes from real commercial properties — owners who discovered hidden storm damage and recovered what they were owed.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            StormChecks provides forensic documentation only. All settlements were negotiated by independent public adjusters or attorneys engaged directly by the property owner.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
             
             {/* Stat 1 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$30M+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Total documented recoveries</div>
             </div>

             {/* Stat 2 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$0 → $3.9M</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Largest denial reversal</div>
             </div>

             {/* Stat 3 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">9x</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Largest settlement increase</div>
             </div>

             {/* Stat 4 */}
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Of clients paid $0 upfront</div>
             </div>

          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Commercial Marina</h3>
                  <p className="text-gray-500 font-medium">Coastal Florida</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$0</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$3,900,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Carrier denied the claim outright, citing 'lack of causation.' Our forensic file established meteorological attribution linking damage to a specific hurricane date. Denial overturned."
               </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Industrial Warehouse</h3>
                  <p className="text-gray-500 font-medium">Texas</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$0</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$3,400,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Roof damage dismissed as 'wear and tear.' StormChecks documented hail impact patterns and microscopic fracturing proving storm origin. Full claim paid."
               </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Self-Storage Facility</h3>
                  <p className="text-gray-500 font-medium">Georgia</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$725,000</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$6,500,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Carrier lowballed by 90%. Our forensic file proved damage scope was 9x their initial estimate. Complete reassessment forced."
               </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Retail Strip Center</h3>
                  <p className="text-gray-500 font-medium">Midwest</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$150,000</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$1,700,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Initial offer covered just 10% of actual damage. Full documentation forced the carrier to reassess the entire claim."
               </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Self-Storage Facility</h3>
                  <p className="text-gray-500 font-medium">North Carolina</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$0</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$3,900,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Carrier denied coverage citing insufficient documentation. Expert File established clean event specificity with evidence libraries and measurement references."
               </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Industrial Facility</h3>
                  <p className="text-gray-500 font-medium">Iowa</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$0</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$3,400,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Storm damage not identified in prior inspections. StormChecks documented roof and envelope damage with clear causation and scope attribution."
               </p>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Industrial Property</h3>
                  <p className="text-gray-500 font-medium">Colorado</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$30,000</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$730,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Carrier offered 4% of actual damage. Forensic inspection and meteorological analysis proved the true scope. Settlement increased 24x."
               </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 relative overflow-hidden group hover:shadow-xl transition-shadow">
               <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">Retail Center</h3>
                  <p className="text-gray-500 font-medium">Missouri</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                     <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Initial Offer</div>
                     <div className="text-xl font-bold text-red-700">$587,000</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                     <div className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Final Settlement</div>
                     <div className="text-xl font-bold text-green-700">$3,900,000</div>
                  </div>
               </div>
               
               <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-6">
                 "Event-specific damage previously unrecognized. Expert File documented full scope. Settlement increased nearly 7x."
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Building Could Be Next
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Most of these owners didn't know they had recoverable damage until we found it. Free monitoring takes 2 minutes to set up.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link to="/contact" className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Monitoring
            </Link>
            <p className="text-gray-500 text-sm font-medium">
              No cost. No obligation. We just need your property address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseWork;