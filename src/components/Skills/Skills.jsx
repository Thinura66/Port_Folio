import React from 'react';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

const CATEGORIES = [
  {
    title: 'Frontend & Frameworks',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'DotNet', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'ClickUp', icon: 'https://juliety.com/wp-content/uploads/2023/08/desktop-app@2x-edited.png' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 md:py-24 px-4 md:px-8">
    <SectionHeading
      title="My Skills"
      subtitle="Here are the technologies and tools I work with to bring ideas to life."
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {CATEGORIES.map(({ title, skills }, i) => (
        <Card key={title} className={`scroll-animate scroll-animate-delay-${i + 1}`}>
          <h4 className="text-primary-400 text-center text-lg md:text-xl mb-8">{title}</h4>
          <div className="grid grid-cols-3 gap-6">
            {skills.map(({ name, icon, invert }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <img
                  src={icon}
                  alt={name}
                  className={`w-10 h-10 md:w-12 md:h-12 ${invert ? 'invert' : ''}`}
                />
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
