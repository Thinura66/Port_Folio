import React, { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionHeading from '../ui/SectionHeading';

// Import Project 2 images
import project2Img1 from '../../assets/Project2/1.png';
import project2Img2 from '../../assets/Project2/2.png';
import project2Img3 from '../../assets/Project2/3.png';
import project2Img4 from '../../assets/Project2/4.png';
import project2Img5 from '../../assets/Project2/5.png';
import project2Img6 from '../../assets/Project2/6.png';

// Import Project 3 images
import project3Img1 from '../../assets/Project3/1.jpg';
import project3Img2 from '../../assets/Project3/2.jpg';
import project3Img3 from '../../assets/Project3/3.jpg';
import project3Img4 from '../../assets/Project3/4.jpg';
import project3Img5 from '../../assets/Project3/5.jpg';

// Import Portfolio project image
import portfolioImg from '../../assets/Project4/image.png';

const Projects = () => {
  // State for Project 2 slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State for Project 3 slideshow
  const [currentProject3ImageIndex, setCurrentProject3ImageIndex] = useState(0);

  // Project 2 images array
  const project2Images = [
    project2Img1,
    project2Img2,
    project2Img3,
    project2Img4,
    project2Img5,
    project2Img6
  ];

  // Project 3 images array
  const project3Images = [
    project3Img1,
    project3Img2,
    project3Img3,
    project3Img4,
    project3Img5
  ];

  // Auto-slide effect for Project 2
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project2Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(slideInterval);
  }, [project2Images.length]);

  // Auto-slide effect for Project 3
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentProject3ImageIndex((prevIndex) =>
        prevIndex === project3Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Change image every 3.5 seconds (different timing)

    return () => clearInterval(slideInterval);
  }, [project3Images.length]);

  return (
  <section id="projects" className="py-16 md:py-24 px-4 md:px-8">
    <SectionHeading
      title="My Projects"
      subtitle="Here are some of the projects I've worked on. Each project showcases different technologies and skills."
    />

    <div className="w-full">
        {/* GeneXtract Internship - most recent, full-width feature */}
        <Card className="scroll-animate scroll-animate-delay-1 overflow-hidden !p-0 mb-6">
            <div style={{
              height: '80px',
              background: 'linear-gradient(135deg, #1e3a5f 0%, #0f1419 100%)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '1.5rem'
            }}>
              <span style={{ fontSize: '1.75rem', marginRight: '0.75rem' }}>📜</span>
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>GeneXtract</h3>
                <span style={{ color: '#8fb8e8', fontSize: '0.85rem' }}>AI Engineering Intern · Feb 2026 – Aug 2026</span>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <p style={{ color: '#eaf0fb', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '12px' }}>
                Multi-tenant document digitization platform for historical church records (computer vision, OCR, NLP).
              </p>
              <ul style={{ color: '#eaf0fb', fontSize: '0.85rem', lineHeight: 1.5 }} className="list-disc pl-5 space-y-1.5 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-1.5">
                <li>Turned unstructured OCR text into queryable location data with LLM-driven extraction and normalization, adding provenance-tracked confidence scores and deduplication so records could be trusted downstream.</li>
                <li>Enabled cross-document identity linking by implementing entity resolution with 768-dimensional multilingual sentence embeddings and pgvector similarity search, surfacing duplicate person records for merge; kept the pipeline responsive by moving embedding inference off the async event loop.</li>
                <li>Owned the parsing feature set: parent-name parser and component extraction, person-to-family relationship matching, and a date-of-birth parser overhaul with idempotent per-label notes, confidence-threshold year estimation, and vision-LLM versus OCR-text cost-reduction iterations.</li>
                <li>Reduced manual review load by adding a per-label confidence pipeline that auto-approves high-confidence extractions and routes only uncertain ones to humans, and an OCR cleaning step that normalized raw AWS Textract output for cleaner parsing.</li>
                <li>Closed a class of cross-tenant data-exposure risks by leading a multi-tenancy hardening pass — scoping previously unscoped repository queries by tenant and making tenant scoping mandatory on lookups project-wide.</li>
                <li>Improved throughput on large documents by eliminating recurring N+1 query patterns (bulk existence checks, vectorized NumPy batch matching, batched commits) and fixing crashes in the person-record and embedding steps.</li>
                <li>Migrated event, location, and family-role types from string enums to integer columns with idempotent Alembic migrations and orphaned-value mapping; added composite and fuzzy-name trigram indexes.</li>
                <li>Cut regression risk by introducing the first test coverage for several modules, and shortened review turnaround with Docker deployment and an automated AI PR-review workflow in Bitbucket Pipelines.</li>
              </ul>
              <div className="mb-1 flex flex-wrap gap-1.5">
                <Badge>Python</Badge>
                <Badge>FastAPI</Badge>
                <Badge>SQLAlchemy 2.0</Badge>
                <Badge>Alembic</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>pgvector</Badge>
                <Badge>sentence-transformers</Badge>
                <Badge>AWS Textract</Badge>
                <Badge>OpenAI</Badge>
                <Badge>Dagster</Badge>
                <Badge>pytest</Badge>
                <Badge>Docker</Badge>
              </div>
            </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <Card className="scroll-animate scroll-animate-delay-2 overflow-hidden !p-0">
            <div style={{
              height: '200px',
              backgroundImage: `url(${project2Images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              transition: 'background-image 0.5s ease-in-out'
            }}>
              {/* Slideshow indicators */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {project2Images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: index === currentImageIndex ? '#4a9eff' : 'rgba(255,255,255,0.5)',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>POS System</h3>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}> PointEdge - Cross Platform POS System </h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A cross-platform POS system designed to streamline retail operations with real-time sales, inventory, and employee shift management.
                Features barcode scanning, discount and loyalty programs, detailed analytics, and role-based dashboards for managers and cashiers.
              </p>
              <div className="mb-5">
                <Badge>React</Badge>
                <Badge>Springboot</Badge>
                <Badge>MySQL</Badge>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="https://github.com/Thinura66/PointEdge-Frontend" className="text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors">GitHub Frontend</a>
                <a href="https://github.com/Thinura66/PointEdge-Backend" className="text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors">GitHub Backend</a>
              </div>
            </div>
        </Card>

        {/* Project 2 */}
        <Card className="scroll-animate scroll-animate-delay-3 overflow-hidden !p-0">
            <div style={{
              height: '200px',
              backgroundImage: `url(${project3Images[currentProject3ImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              transition: 'background-image 0.5s ease-in-out'
            }}>
              {/* Slideshow indicators */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {project3Images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: index === currentProject3ImageIndex ? '#4a9eff' : 'rgba(255,255,255,0.5)',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-6">
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Solo-Runner</h3>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Self-Training Running Track System</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Built a sports technology solution using ESP32-CAM and IoT sensors to capture athlete performance with motion-triggered images. Integrated Firebase for real-time data sync and developed a web interface for playback and analysis.
              </p>
              <div className="mb-5">
                <Badge>ESP32-CAM</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>Firebase</Badge>
                <Badge>IoT Sensors</Badge>
                <Badge>Arduino IDE</Badge>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://github.com/Thinura66/Solo-Runner" target="_blank" rel="noopener noreferrer" className="text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors">GitHub</a>
              </div>
            </div>
        </Card>

        {/* Project 4 - Portfolio */}
        <Card className="scroll-animate scroll-animate-delay-4 overflow-hidden !p-0">
            <div style={{
              height: '200px',
              backgroundImage: `url(${portfolioImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}>
            </div>
            <div className="p-6">
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Personal Portfolio</h3>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Responsive Portfolio Website</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A modern, responsive portfolio website showcasing my projects and skills.
                Features animated backgrounds, smooth scrolling, mobile-optimized design,
                and interactive contact form with EmailJS integration.
              </p>
              <div className="mb-5">
                <Badge>React</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Vite</Badge>
                <Badge>EmailJS</Badge>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="https://github.com/Thinura66/Port_Folio" target="_blank" rel="noopener noreferrer" className="text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors">GitHub</a>
              </div>
            </div>
        </Card>
        </div>
    </div>
  </section>
  );
};

export default Projects;
