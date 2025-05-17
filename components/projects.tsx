import React from 'react'
import card from '../app/assets/benefits/card-2.svg'

const Projects = () => {
  return <>
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">

    <div className='flex flex-wrap gap-10 mb-10'>
      <div className="block relative p-0.5 bg-no-repeat bg-[lenght:100%_100%] md:max-w-[24rem]"
      style={{backgroundImage: `url(${card.src})`}}
      >
        iuhui
      </div>
    </div>
    </section>
    </>
  
}

export default Projects
