import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, AlertCircle, ArrowRight } from 'lucide-react';
import { blogArticles } from './Resources';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = blogArticles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The resource you are looking for might have been moved or deleted.</p>
          <Link to="/resources" className="inline-flex items-center text-accent font-bold hover:underline">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  // Get 3 other articles for "Read Next" section
  const readNextArticles = blogArticles
    .filter(a => a.id !== id)
    .sort(() => 0.5 - Math.random()) // Shuffle a bit
    .slice(0, 3);

  // Helper component to render article body content based on ID
  const renderContent = (id: string) => {
    switch (id) {
      case '1':
        return (
          <>
            <p>In 2022, a major hurricane swept through coastal North Carolina. Among the casualties was a sprawling marina and boat storage facility. The owners, diligent about their coverage, filed a claim for what appeared to be obvious wind and surge damage to their steel structures and roofing systems.</p>
            <h3>The Initial Denial</h3>
            <p>The carrier's adjuster arrived, spent three hours on site, and issued a full denial within 14 days. The reason? "Lack of causation." They claimed the metal fatigue and fastener failures were the result of long-term coastal corrosion and "pre-existing wear and tear," rather than the hurricane event.</p>
            <div className="bg-primary/5 border-l-4 border-accent p-6 my-8 rounded-r-lg">
              <p className="font-medium text-primary italic">"The carrier wasn't lying about the corrosion—it existed. But they were using it as a smoke screen to ignore the catastrophic structural failure caused by 110mph wind gusts."</p>
            </div>
            <h3>How StormChecks Overturned It</h3>
            <p>Our team didn't just take photos. We pulled the exact NOAA meteorological coordinates for the eye wall passage. We performed microscopic analysis on the fastener apertures, proving that the metal had "ovaled" recently due to high-velocity lateral tension—a signature of wind-driven structural racking, not slow corrosion.</p>
            <p>We built a 140-page Expert File. When the carrier saw the level of forensic specificity, they didn't just reopen the file. They settled for $3.9M without going to appraisal.</p>
          </>
        );
      case '2':
        return (
          <>
            <p>Most commercial property owners view the insurance claim process as a negotiation. Inside the carrier's office, it's viewed as a "defensive audit."</p>
            <p>Our founder, Michael Paul, spent two decades behind those closed doors. He knows that every adjuster has a silent checklist. If your claim doesn't check the boxes, it goes to the bottom of the pile—or the denial bin.</p>
            <h3>The 3 Main "Denial Triggers"</h3>
            <ul>
              <li><strong>The Vague Description:</strong> Using terms like "roof looks bad" instead of "latent mechanical fracture of the bitumen substrate."</li>
              <li><strong>The Missing Storm:</strong> Not citing a specific weather event that aligns with the carrier's proprietary data sets.</li>
              <li><strong>The Contractor Bid:</strong> Submitting a simple price quote instead of a forensic causation narrative.</li>
            </ul>
            <p>Carriers love contractor bids because they are easy to lowball. They have no forensic weight. By providing an "Expert File" instead of a "Bid," you take the leverage away from the carrier's internal audit team.</p>
          </>
        );
      case '3':
        return (
          <>
            <p>In forensic engineering, "Storm Nexus" is the proven link between a meteorological event and physical property damage. Without a nexus, you don't have a claim—you have a maintenance problem.</p>
            <h3>The Power of Coordinates</h3>
            <p>General weather reports (like those from local news) aren't enough for commercial claims. Carriers use high-resolution radar data that can show hail size variance within a single city block. If your claim says "hail in April" but the carrier's radar shows the 2-inch hail core missed your building by 300 yards, you're done.</p>
            <p>At StormChecks, we verify coordinates using multiple sources:</p>
            <ul>
              <li>National Oceanic and Atmospheric Administration (NOAA) archives.</li>
              <li>Private radar-matching algorithms.</li>
              <li>On-site impact directionality (measuring "spatter" and "dings" to verify wind direction).</li>
            </ul>
            <p>This level of technical verification makes it mathematically impossible for a carrier to claim "wear and tear" when the data shows a catastrophic impact occurred on your specific roof at 2:14 PM on a Tuesday.</p>
          </>
        );
      case '4':
        return (
          <>
            <p>Every state in the US has a statute of limitations for property insurance claims. Most range from 1 to 3 years. But here's the kicker: for commercial properties, the "clock" often starts the moment the storm happens, whether you've noticed the damage yet or not.</p>
            <h3>Deadlines to Watch in 2024</h3>
            <p>If your property was in the path of 2021 or 2022 storms in the following regions, you are likely in the "Red Zone" for filing:</p>
            <ul>
              <li><strong>Texas & Gulf Coast:</strong> Heavy 2021 hurricane activity deadlines are expiring now.</li>
              <li><strong>Midwest Hail Belt:</strong> Major 2022 hail events will reach their 2-year filing limits by summer 2024.</li>
              <li><strong>Florida:</strong> Recent legislative changes have significantly shortened the windows for "Notice of Loss."</li>
            </ul>
            <p>Once the deadline passes, your policy rights are effectively nullified. This is why our free monitoring looks back 24 months—to ensure you don't discover a $500k roof failure the month after your filing window closes.</p>
          </>
        );
      case '5':
        return (
          <>
            <p>A retail property owner in Missouri received a $587,000 estimate from a local roofing contractor for hail damage. The insurance carrier offered $150,000, claiming they only needed to "repair" sections rather than replace the whole system.</p>
            <p>The owner almost took the deal. Then they called us.</p>
            <h3>Why the Bid Failed</h3>
            <p>The contractor's bid was just a price. It didn't explain <em>why</em> the entire system was compromised. It didn't mention the HVAC condenser fins or the brittle-test failures of the surrounding flashing.</p>
            <h3>The Expert File Result</h3>
            <p>StormChecks documented that the hail impacts had caused "micro-fracturing" of the fiberglass mat within the shingles. This isn't visible from 10 feet away, but it's a structural failure. We provided a carrier-grade Xactimate estimate that accounted for building codes and "line-item" accuracy.</p>
            <p>The final recovery? $3.9M. The difference between a "bid" and an "expert file" was $3.75M.</p>
          </>
        );
      case '6':
        return (
          <>
            <p>The most dangerous storm damage is the kind that doesn't leak. Yet.</p>
            <p>On TPO or EPDM commercial roofs, a hail impact might not tear the surface. Instead, it creates a "latent fracture" in the underlying substrate. To the untrained eye—or a carrier's adjuster—the roof looks fine. No leaks, no problem, right?</p>
            <h3>The "Brittle Test"</h3>
            <p>Over the next two summers, the thermal expansion and contraction of the building cause those micro-fractures to widen. Eventually, they become leaks. But by the time it leaks, the storm happened three years ago, and the claim window is closed.</p>
            <p>We use forensic techniques to identify this damage early:</p>
            <ul>
              <li>Infrared thermography to detect moisture trapped under the membrane.</li>
              <li>Substrate core sampling to check for "bruising" of the insulation board.</li>
              <li>Impact crater measurement.</li>
            </ul>
            <p>Documentation of these latent failures today ensures your building's value is protected before the "wear and tear" clock starts ticking in the carrier's favor.</p>
          </>
        );
      default:
        return <p>Content coming soon...</p>;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header - Centered Content */}
      <div className="bg-primary pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={article.image} alt="" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Link 
            to="/resources" 
            className="inline-flex items-center text-accent font-bold mb-10 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Resources
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="bg-accent text-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> {article.date}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-2" /> {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-12 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Body */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 mb-12">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto rounded-xl mb-12"
              />
              
              <div className="prose prose-lg prose-slate max-w-none text-gray-700 leading-relaxed space-y-6">
                {renderContent(article.id)}
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-accent font-bold">
                    SC
                  </div>
                  <div>
                    <p className="text-primary font-bold">StormChecks Editorial Team</p>
                    <p className="text-gray-500 text-sm">Forensic Building Consultancy</p>
                  </div>
                </div>
                <button className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Aligned with main content */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Sidebar CTA Box - Updated background to bg-primary to match navigation */}
            <div className="bg-primary rounded-[22px] p-8 text-white border border-white/10 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Protect Your Asset</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Don't wait for a leak. Our free storm history audit covers the last 24 months of activity at your specific coordinates.
              </p>
              <Link 
                to="/contact?focus=true" 
                className="block w-full bg-[#C99700] text-primary text-center py-4 rounded-lg font-bold hover:bg-[#E6AC00] transition-all"
              >
                Get Free Audit
              </Link>
            </div>

            {/* Topics Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Explore Categories</h4>
              <div className="flex flex-wrap gap-2">
                {['Success Stories', 'Insurance Insights', 'Technical Insights', 'Preparedness'].map(cat => (
                  <Link 
                    key={cat}
                    to="/resources"
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:border-accent hover:text-accent transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Read Next Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Read Next</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {readNextArticles.map((item) => (
              <Link 
                key={item.id} 
                to={`/resources/${item.id}`} 
                className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-accent px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-[10px] text-gray-400 mb-3 space-x-3">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {item.readTime}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center text-accent text-sm font-bold">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;