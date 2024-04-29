import React from 'react'
// import experience from '../assets/experience.png'
// import bg from '../assets/dot-bg.png'
 import tech1 from '../assets/tech1.png'
 import tech2 from '../assets/tech2.png'
 import tech3 from '../assets/tech3.png'
import tech4 from '../assets/tech4.png'
import Card from './Card'
import AboutImg from '../assets/about.jpg'



function Skills() {
  return (
   <>
   <div id="about" class="relative bg-white overflow-hidden mt-16">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About Khalid
                    </h2>

                    <p>
                    
Khalid Haider Jafri is a versatile individual with a passion for multimedia production and software development. As a video editor and videographer, he has honed his skills in crafting visually captivating content. His proficiency extends to programming, where he excels in languages such as C/C++ and web development, leveraging his knowledge to create dynamic and engaging digital experiences.

In addition to his technical prowess, Khalid possesses a keen understanding of Data Structures and Algorithms (DSA), enabling him to tackle complex problems with efficiency and creativity. Alongside his professional endeavors, Khalid is an active content creator on Instagram, where he shares his expertise and creative projects with his audience of over 30K followers.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img  class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={AboutImg} alt="asa"/>
    </div>
</div>
<div className="flex items-center justify-between flex-wrap ">
<Card text='HackeRank' image={tech4} url='https://www.hackerrank.com/profile/zayyeem'/>
<Card text = 'Github' image={tech3} url='https://github.com/xayyeem/' />
<Card text='LeetCode' image={tech2} url='https://leetcode.com/u/zayyeem/' />
<Card text='Geeks For Geeks' image={tech1} url='https://www.geeksforgeeks.org/user/khalidhaiderjafri/' />
</div>

   </>
  )
}

export default Skills