import React from 'react';
import { ChevronRight } from 'lucide-react';

const ModernPortfolio = () => {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-[#9acd32] text-3xl font-bold"></div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-[#9acd32]">HOME</a></li>
            <li><a href="#" className="hover:text-[#9acd32]">ABOUT</a></li>
            <li><a href="#" className="hover:text-[#9acd32]">PROJECTS</a></li>
            <li><a href="#" className="hover:text-[#9acd32]">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Kaushal Kuwar</h1>
          <h2 className="text-5xl font-bold mb-6 text-[#9acd32]">UX/UI Designer</h2>
          <p className="mb-6">Passionate about creating intuitive and engaging user experiences. With a keen eye for detail and a user-centered approach, I craft digital solutions that marry form and function.</p>
          <button className="bg-[#9acd32] text-black px-6 py-2 rounded hover:bg-[#8bbc2f]">ABOUT ME</button>
        </div>
        
      </section>

      {/* Stats */}
      <section className="bg-[#222] py-8">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="text-center">
            <h3 className="text-3xl font-bold">5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">30+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p>Industry Awards</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#222] p-6 rounded-lg relative">
            <div className="absolute -top-4 -left-4 bg-[#9acd32] p-2 rounded">
              <ChevronRight size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">UX/UI Design</h3>
            <p>Creating user-centered designs that enhance usability and user satisfaction through research, wireframing, and prototyping.</p>
          </div>
          <div className="bg-[#222] p-6 rounded-lg relative">
            <div className="absolute -top-4 -left-4 bg-[#9acd32] p-2 rounded">
              <ChevronRight size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">Product Design</h3>
            <p>Developing innovative product designs that balance aesthetics and functionality to meet user needs and business goals.</p>
          </div>
          <div className="bg-[#222] p-6 rounded-lg relative">
            <div className="absolute -top-4 -left-4 bg-[#9acd32] p-2 rounded">
              <ChevronRight size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">Branding</h3>
            <p>Crafting unique brand identities that resonate with target audiences and effectively communicate brand values.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src="/images/project1.jpg" alt="E-commerce App Redesign" className="rounded-lg w-full h-auto" />
          <img src="/images/project2.png" alt="Financial Dashboard UI" className="rounded-lg w-full h-auto" />
          <img src="/images/project3.jpg" alt="Travel Booking Platform" className="rounded-lg w-full h-auto" />
          <img src="/images/project4.png" alt="Health and Fitness App" className="rounded-lg w-full h-auto" />
        </div>
      </section>
    </div>
  );
};

export default App;
