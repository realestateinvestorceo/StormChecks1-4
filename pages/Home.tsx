import React from 'react';
import { ArrowRight, AlertTriangle, FileWarning, TrendingDown, FileText, XCircle, Search, CheckCircle, Handshake, Clock, Eye, Bell, Check } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
        {/* Abstract Background Shapes - Right Side */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large soft white glow */}
          <div className="absolute -right-[10%] -top-[10%] w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl"></div>
          {/* Amber accent glow */}
          <div className="absolute right-[5%] top-[25%] w-[600px] h-[600px] bg-accent opacity-[0.04] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full py-12 lg:py-0">
          <div className="max-w-3xl space-y-8">
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div className="h-0.5 w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                Forensic Documentation Experts
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
              We Know Why Claims Get Denied. <br className="hidden lg:block"/>
              <span className="text-gray-400">Because We Used To Deny Them.</span>
            </h1>

            {/* Subhead */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl border-l-2 border-gray-700 pl-6">
              Our founder spent 20 years inside insurance carriers denying claims. 
              Now he builds the files that don't get denied. You pay nothing unless you recover.
            </p>

            <div className="space-y-6 pt-4">
              {/* Body Text */}
              <p className="text-lg text-gray-400 font-medium">
                Start with free monitoring. If we find damage, you decide what's next.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col items-start gap-3">
                <button className="group bg-accent text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-[0_4px_20px_rgba(201,151,0,0.2)] hover:shadow-[0_4px_25px_rgba(201,151,0,0.35)] hover:-translate-y-0.5 flex items-center gap-2">
                  Get Free Storm Monitoring
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-gray-500 text-sm font-medium pl-1">
                  2-year lookback + ongoing alerts. No cost, no obligation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Empty but maintaining grid structure for spacing */}
          <div className="hidden lg:block h-full"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Hidden Damage Is Draining Your Building's Value
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Most commercial buildings have storm damage that owners never see. It hides in roofing membranes, behind cladding, inside HVAC systems. Your maintenance team won't catch it. Your annual inspection won't flag it.
                </p>
                <p>
                  We consistently find <strong className="font-bold text-primary">$10–$15 per square foot</strong> in recoverable damage that standard inspections miss. For a 30,000 sq ft building, that's over $300,000 sitting on the table — money your insurance company hopes you never claim.
                </p>
              </div>

              {/* Callout Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {/* Card 1 */}
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent shadow-sm">
                  <div className="flex items-start space-x-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-primary text-lg">The Clock Is Ticking</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You have 1–3 years from the storm date to file. After that, the window closes forever — and the insurance company keeps the money.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start space-x-3 mb-3">
                    <FileWarning className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-primary text-lg">Carriers Don't Pay What They Don't Have To</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Insurance companies are in the business of not paying claims. Without forensic-grade documentation linking damage to a specific storm event, your claim gets denied or lowballed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Column - Stats Card */}
            <div className="lg:col-span-5">
              <div className="bg-primary rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingDown className="w-5 h-5 text-accent" />
                    <span className="text-sm font-bold tracking-widest text-accent uppercase">Potential Loss</span>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-5xl md:text-6xl font-bold text-accent tracking-tight">
                      $450,000+
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed border-t border-gray-700 pt-6">
                    Average unclaimed damage on a 45k sq ft industrial roof.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Claims Get Denied Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Claims Get Denied (Even When Valid)
            </h2>
            <p className="text-xl text-gray-600">
              The damage is real. But if the paperwork doesn't meet the carrier's internal criteria, you get $0.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">The Wrong Language</h3>
              <p className="text-gray-600 leading-relaxed">
                Most claims fail because contractors speak 'construction' while adjusters speak 'policy'. If your documentation doesn't map damage directly to policy definitions, it gets rejected.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <XCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">No Storm Nexus</h3>
              <p className="text-gray-600 leading-relaxed">
                Carriers deny claims by calling damage 'wear and tear'. We build the meteorological evidence linking specific damage to a specific storm event date.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Missing Internal Criteria</h3>
              <p className="text-gray-600 leading-relaxed">
                Carriers use specific, often unwritten checklists to approve files. We know these checklists. Your inspection might be accurate, but if the paperwork misses the criteria, you get $0.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Win Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center lg:text-left">
            {/* Label */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="h-0.5 w-12 bg-accent"></div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                Why We Win
              </span>
            </div>
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Documentation Designed to Pass The Test.
            </h2>
            {/* Body */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
              <p>
                Our founder spent 20 years sitting on the other side of the desk at major insurance carriers. His job was to approve or deny claims. He knows exactly what gets a file flagged for denial — and exactly what a file needs to sail through approval.
              </p>
              <p>
                Now, StormChecks builds forensic files designed to pass the same tests he used to administer. Not contractor estimates. Not photos without context. Carrier-grade evidence that meets the internal criteria adjusters actually use.
              </p>
            </div>
          </div>

          {/* Comparison Box */}
          <div className="bg-[#132e4a] rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-white/10 shadow-2xl relative overflow-hidden">
             {/* Subtle background glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-10 text-center relative z-10">The Difference</h3>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-red-500 mb-2">
                  <XCircle className="w-8 h-8 flex-shrink-0" />
                  <h4 className="font-bold text-xl text-white">Standard Contractor Bid</h4>
                </div>
                <div className="bg-white/5 p-6 rounded-lg italic text-gray-400 border border-white/5 leading-relaxed">
                  "Replace roof due to hail damage. Cost: $250,000."
                </div>
                <p className="font-bold text-red-400 tracking-wide text-sm flex items-center">
                  RESULT: DENIED (INSUFFICIENT PROOF)
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-4 relative">
                {/* Vertical Divider for desktop */}
                <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                
                <div className="flex items-center space-x-3 text-green-500 mb-2">
                  <CheckCircle className="w-8 h-8 flex-shrink-0" />
                  <h4 className="font-bold text-xl text-white">StormChecks Forensic File</h4>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-gray-300 border border-white/5 leading-relaxed">
                  120-page engineering report with NOAA weather data, microscopic impact analysis, storm-to-damage linkage, and carrier-compliant Xactimate estimate.
                </div>
                <p className="font-bold text-green-400 tracking-wide text-sm flex items-center">
                  RESULT: APPROVED ($250,000+ PAID)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Real Results. Real Recovery.
            </h2>
            <p className="text-xl text-gray-600">
              These are real properties with real settlements. StormChecks built the forensic file. The public adjusters we connected them with did the rest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-primary">Commercial Marina</h3>
                <p className="text-gray-500 text-sm">Coastal Florida</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                   <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                   <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$3,900,000</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Carrier denied the claim citing 'lack of causation.' Our file linked damage to a specific hurricane date. Denial overturned."
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-primary">Industrial Warehouse</h3>
                <p className="text-gray-500 text-sm">Texas</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                   <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                   <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$3,400,000</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Roof damage dismissed as 'wear and tear.' StormChecks documented hail impact patterns proving storm origin."
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-primary">Self-Storage Facility</h3>
                <p className="text-gray-500 text-sm">Georgia</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                   <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$725,000</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                   <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$6,500,000</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Carrier lowballed by 90%. Our forensic file proved damage scope was 9x their estimate."
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-primary">Retail Strip Center</h3>
                <p className="text-gray-500 text-sm">Midwest</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Initial</span>
                   <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-bold">$150,000</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded border border-gray-100 shadow-sm">
                   <span className="text-xs font-semibold text-gray-500 uppercase">Final</span>
                   <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">$1,700,000</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Initial offer covered 10% of actual damage. Full documentation forced a complete reassessment."
              </p>
            </div>
          </div>
          
           <div className="mt-12 text-center space-y-8">
              <p className="text-gray-400 text-xs max-w-2xl mx-auto">
                StormChecks provides forensic documentation only. All settlements negotiated by independent public adjusters or attorneys engaged by the property owner.
              </p>
              
              <a href="#" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
              </a>
           </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Free to start. You only pay if you recover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">1. Free Monitoring Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                We analyze your property's storm history for the past 2 years and set up continuous monitoring. If there's damage now, we'll find it. If a storm hits later, we'll alert you. No cost ever for this.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6 shadow-lg">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">2. Forensic Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                If damage exists, we deploy our field team to document every inch. We build the carrier-grade evidence file that proves your loss irrefutably.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">3. Claim Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                We connect you with a vetted top-tier public adjuster. They use our evidence file to file the claim and negotiate the maximum settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Monitoring Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Free For Life
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              We Watch Your Building So You Don't Have To
            </h2>
            <div className="space-y-6 text-xl text-gray-600 mb-8">
              <p>
                Most owners don't find out about storm damage until the filing window has already closed. We fix that.
              </p>
              <p>
                Sign up and we'll analyze your property's storm exposure for the past 2 years — completely free. Then we monitor your location indefinitely. If a storm hits that may have caused claimable damage, we alert you within 48 hours.
              </p>
            </div>
            <p className="font-bold text-primary text-xl">
              No cost. No commitment. No surprise repair bills years later.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">2-Year Lookback</h3>
              <p className="text-gray-600">We check your property against every storm event from the past 24 months</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">Your property stays on our radar. Every storm, every season, forever.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">48-Hour Alerts</h3>
              <p className="text-gray-600">If we detect a potential claim, you'll know within 2 days — not 2 years</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Monitoring
            </button>
            <p className="text-gray-500 text-sm mt-4 font-medium">
              Takes 2 minutes. We just need your property address.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            You Pay Nothing Unless You Get Paid
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Zero out-of-pocket cost. Zero upfront fees. StormChecks takes 10% only when your claim pays out. The public adjuster takes 20%. If the claim doesn't pay, you owe nothing to anyone.
          </p>

          <div className="bg-white/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-white/10 mb-12">
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 text-left">
               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">Free storm history analysis</span>
               </div>
               
               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">No upfront fees</span>
               </div>

               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">No recovery, no fee</span>
               </div>

               <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-white">Vetted public adjuster network</span>
               </div>
            </div>
             <p className="text-gray-400 mt-10 pt-8 border-t border-white/10">
                It starts with free monitoring. If we find something, you decide what to do next.
             </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-lg hover:-translate-y-1">
              Start Free Monitoring
            </button>
            <p className="text-gray-500 text-sm font-medium">
              Takes 2 minutes. No obligation. Completely confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-[#050E17] py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-8 ring-1 ring-accent/20">
            <Clock className="w-10 h-10 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Every Month You Wait, the Window Shrinks
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Storm damage claims have a 1–3 year filing deadline depending on your state. After that, the money is gone — no matter how much damage exists. If your building has been through a storm in the last 3 years, now is the time to find out what you're owed.
          </p>

          <button className="bg-accent text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#E6AC00] transition-all shadow-[0_4px_20px_rgba(201,151,0,0.2)] hover:shadow-[0_4px_25px_rgba(201,151,0,0.35)] hover:-translate-y-1">
            Start Free Monitoring
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;