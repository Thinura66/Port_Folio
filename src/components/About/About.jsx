import React from 'react';
import Card from '../ui/Card';  

const About = () => (
  <section 
    id="about" 
    className="py-8 md:py-20 px-4 md:px-8"
    style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f1419 50%, #151515 100%)', width: '100vw', maxWidth: '100vw', overflowX: 'hidden' }}
  >
    <div className="w-full mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12 px-2 sm:px-4">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-8">
          <div className="mb-6 lg:mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto lg:mx-0 mb-6 lg:mb-8"></div>
          </div>
          
          <div className="scroll-animate-left">
            <p className="text-blue-100 text-base md:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6">
               I'm an AI-focused IT undergraduate with production internship experience on a multi-tenant document digitization platform: LLM-driven information extraction,
               OCR pipelines, and embedding-based entity resolution in Python and FastAPI.
            </p>
            <p className="text-blue-100 text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8">
                I'm comfortable owning a feature end to end &mdash; data model, migrations, async pipeline steps, performance profiling, and testing &mdash;
                and I'm now seeking an Associate AI Engineer role applying AI and NLP to real, messy data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 lg:mb-8">
              <div>
                <p className="text-white mb-2">
                  <strong>Location:</strong> <span className="text-blue-100">Sri Lanka</span>
                </p>
                <p className="text-white mb-2">
                  <strong>3rd Year Undergraduate</strong> 
                </p>
              </div>
              <div>
                <p className="text-white mb-2">
                  <strong>Freelance:</strong> <span className="text-blue-100">Available</span>
                </p>
                <p className="text-white mb-2">
                  <strong>Languages:</strong> <span className="text-blue-100">English, Sinhala</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills/Services Content */}
        <div className="flex-1 scroll-animate-right">
          <Card>
            <h4 className="text-white text-xl md:text-2xl mb-6">What I Do</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">🧠 LLM Information Extraction</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Building LLM-driven pipelines to extract structured information from unstructured, messy documents.
                </p>
              </div>
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">🔍 OCR & Entity Resolution</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Designing OCR pipelines and embedding-based entity resolution for multi-tenant document platforms.
                </p>
              </div>
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">⚙️ End-to-End Feature Ownership</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Owning features from data model and migrations through async pipeline steps, profiling, and testing in Python and FastAPI.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default About;
