import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
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
      title: 'SM-Auction',
      desc: 'A secure platform for online bidding, allowing users to buy and sell products through real-time competitive auctions.',
      image: Youtube,
      live: 'https://sm-auction.vercel.app/',
      github: 'https://github.com/sjethani1994/auction',
    },
    {
      title: 'Super Car',
      desc: 'Explore the world’s finest supercars with stunning designs, unmatched performance, and cutting-edge technology. Your dream ride awaits!',
      image: Supercar,
      live: 'https://supercar911.netlify.app/',
      github: 'https://github.com/mohit01110/SuperCars-Website',
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
