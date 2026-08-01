import React from 'react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const CATEGORIES = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: devicon('python') },
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'Java', icon: devicon('java') },
      { name: 'C', icon: devicon('c') },
      { name: 'C++', icon: devicon('cplusplus') },
      { name: 'SQL' },
    ],
  },
  {
    title: 'AI',
    skills: [
      { name: 'sentence-transformers' },
      { name: 'Ultralytics YOLOv8' },
      { name: 'NumPy' },
      { name: 'OpenAI API' },
      { name: 'LLM & Vision-LLM Prompting' },
      { name: 'OCR (AWS Textract)', icon: devicon('amazonwebservices', 'original-wordmark') },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'FastAPI', icon: devicon('fastapi') },
      { name: 'SQLAlchemy 2.0' },
      { name: 'Alembic' },
      { name: 'PostgreSQL', icon: devicon('postgresql') },
      { name: 'pgvector' },
      { name: 'MySQL', icon: devicon('mysql') },
      { name: 'MongoDB', icon: devicon('mongodb') },
      { name: 'Firebase', icon: devicon('firebase', 'plain') },
      { name: 'Supabase' },
      { name: 'Prisma ORM' },
      { name: 'Node.js', icon: devicon('nodejs') },
      { name: 'Express', icon: devicon('express') },
      { name: 'Spring Boot', icon: devicon('spring') },
      { name: '.NET', icon: devicon('dotnetcore') },
    ],
  },
  {
    title: 'MLOps & Tools',
    skills: [
      { name: 'Docker', icon: devicon('docker') },
      { name: 'Dagster' },
      { name: 'MLflow' },
      { name: 'Git', icon: devicon('git') },
      { name: 'GitHub', icon: devicon('github'), invert: true },
      { name: 'Bitbucket Pipelines', icon: devicon('bitbucket') },
      { name: 'pytest' },
      { name: 'Postman' },
      { name: 'Jira' },
      { name: 'Figma', icon: devicon('figma') },
      { name: 'ClickUp', icon: 'https://juliety.com/wp-content/uploads/2023/08/desktop-app@2x-edited.png' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: devicon('react') },
      { name: 'Next.js', icon: devicon('nextjs') },
      { name: 'React Native', icon: devicon('react') },
      { name: 'HTML5', icon: devicon('html5') },
      { name: 'CSS', icon: devicon('css3') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss', 'plain') },
      { name: 'Chakra UI', icon: devicon('chakraui') },
    ],
  },
];

const initials = (name) =>
  name
    .replace(/[().]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const Skills = () => (
  <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
    <SectionHeading
      title="My Skills"
      subtitle="Here are the technologies and tools I work with to bring ideas to life."
    />

    <div className="flex flex-wrap justify-center gap-6 w-full">
      {CATEGORIES.map(({ title, skills }, i) => (
        <Card
          key={title}
          className={`scroll-animate scroll-animate-delay-${i + 1} w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]`}
        >
          <h4 className="text-primary-400 text-center text-lg md:text-xl mb-6">{title}</h4>
          <div className="grid grid-cols-3 gap-5">
            {skills.map(({ name, icon, invert }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                {icon ? (
                  <img
                    src={icon}
                    alt={name}
                    className={`w-10 h-10 md:w-12 md:h-12 ${invert ? 'invert' : ''}`}
                  />
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-500/20 border border-primary-400/40 flex items-center justify-center">
                    <span className="text-primary-300 text-xs md:text-sm font-semibold">{initials(name)}</span>
                  </div>
                )}
                <span className="text-white text-xs md:text-sm text-center">{name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Skills;
