import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'

const Projects = () => {
  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'This portfolio website is built with React to demonstrate my expertise in front-end development. It includes my bio, projects, providing a polished view of my capabilities.',
      image: Portfolio,
      live: 'https://mohitportfoliousingreact.netlify.app/',
      github: 'https://github.com/mohit01110/mohitPortfolioUsingReact',
    },
    {
      title: 'Focus on Today',
      desc: 'Set and track your daily goals to maintain clarity and productivity.Break your tasks into manageable steps for better time management.Break your tasks into manageable steps.',
      image: SpicyBites,
      live: 'https://todos-list-applications.netlify.app/',
      github: 'https://github.com/rohitsingh93300/YtSpicyBites',
    },
    {
      title: 'YouTube Clone',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Youtube,
      live: 'https://youtube-clone-93300.netlify.app/',
      github: 'https://github.com/rohitsingh93300/YouTube-clone',
    },
    {
      title: 'Webelite builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Webelite,
      live: 'https://www.webelitebuilders.com/',
      github: '#',
    },
    {
      title: 'Super Car',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Supercar,
      live: 'https://supercar123.netlify.app/',
      github: 'https://github.com/rohitsingh93300/supercars',
    },
  ]

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
