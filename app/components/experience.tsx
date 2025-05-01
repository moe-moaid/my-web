import React from 'react'
import ExpCard from '@/user-components/expCard';

export default function Experience() {


  let experiences = [
    {
      company: 'Logo9D',
      title: "Senior Frontend Developer",
      at: "9D Technologies",
      start: "5-JUL-2022",
      end: "Current",
      techStack: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Node",
        "Tailwind",
        "BootStrap",
        "CSS",
        "HTML",
        "wordPress",
        "PHP",
      ],
      summary: ["API integration", 'MERN tasks', 'MongoDB, PostgreSQL, and MySQL', 'Frontend Optimization', 'Jest/Cypress test', 'Projects deployment "VPS"']
    },
    {
      company: "SelfEmployee",
      title: "Frontend Developer",
      at: "Self Employee",
      start: "2-Aug-2020",
      end: "5-JUL-2022",
      techStack: [
        "JavaScript",
        "BootStrap",
        "React",
        "Tailwind",
        "CSS",
        "HTML",
        "wordPress",
        "PHP",
      ],
      summary: ["Create Templates from scratch", 'Responsive design', 'Cross-Browsers Test', 'Frontend Optimization', 'develope Plugins', 'Projects deployment "Hosts"']
    },
    {
      company: "LogoUpWork",
      title: "web Developer",
      at: "Upwork",
      start: "12-Aug-2018",
      end: "1-Aug-2020",
      techStack: [
        "JavaScript",
        "BootStrap",
        "CSS",
        "HTML",
        "wordPress",
        "PHP",
      ],
      summary: ["Create Templates from scratch", 'Responsive design', 'Cross-Browsers Test', 'Frontend Optimization', 'develope Plugins', 'Projects deployment "Hosts"']
    },
    
  ]
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-18 justify-evenly mx-auto items-center'>
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00C6CF]/80">
        {experiences.map((exp, id) => (
          <ExpCard
            key={id}
            company={exp.company}
            title={exp.title}
            at={exp.at}
            start={exp.start}
            end={exp.end}
            techStack={exp.techStack}
            summary={exp.summary}
          />
        ))}
        {/* <ExpCard/>
        <ExpCard/>
        <ExpCard/>
        <ExpCard/> */}
      </div>
    </div>
  )
}