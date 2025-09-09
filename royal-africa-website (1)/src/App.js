import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Home(){
  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4">Nurturing Minds, Restoring Hope</h1>
      <p className="mb-6">Royal Africa delivers hands-on STEM labs, daily meals and dignity kits to vulnerable children in Nairobi's informal settlements. We train local youth as facilitators and measure learning gains with a rigorous M&E framework.</p>
      <Link to="/contact" className="inline-block bg-[#F5B041] text-black px-6 py-3 rounded font-semibold">Partner with us</Link>
    </div>
  )
}

function About(){
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Royal Africa</h2>
      <p className="mb-4">Royal Africa was founded to address the barriers to education in Nairobi’s informal settlements. Our mission is to nurture minds and restore hope by integrating education, nutrition, and dignity support for children who need it most.</p>
      <p>Our pilot program targets 750 children in Kibera, Mukuru, and Kawangware with STEM labs, meals, and dignity kits. We believe in measurable impact and community-driven change.</p>
    </div>
  )
}

function Programs(){
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold mb-2">Mobile STEM Labs</h3>
          <p>Hands-on coding, robotics and science kits led by trained local facilitators.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold mb-2">Daily Meals</h3>
          <p>Nutritious meals to ensure children can learn and thrive.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-bold mb-2">Dignity Kits</h3>
          <p>Uniforms, stationery and hygiene supplies to remove barriers to learning.</p>
        </div>
      </div>
    </div>
  )
}

function Impact(){
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#F3F4F6] rounded-lg text-center">
          <div className="text-4xl font-extrabold">750</div>
          <div className="mt-2">Children targeted (Year 1)</div>
        </div>
        <div className="p-6 bg-[#F3F4F6] rounded-lg text-center">
          <div className="text-4xl font-extrabold">70%</div>
          <div className="mt-2">Average attendance target</div>
        </div>
        <div className="p-6 bg-[#F3F4F6] rounded-lg text-center">
          <div className="text-4xl font-extrabold">20%</div>
          <div className="mt-2">Target learning gains</div>
        </div>
      </div>
    </div>
  )
}

function Blog(){
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Stories & Updates</h2>
      <p className="mb-4">Coming soon: success stories, volunteer experiences, and program updates from Royal Africa.</p>
    </div>
  )
}

function Contact(){
  return (
    <div className="px-6 py-12 grid md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="mb-4">Contact Jehoshaphat King to discuss partnerships, in-kind support, or donor agreements.</p>
        <p className="font-medium">Email: jehoshaphatking689@gmail.com<br/>Phone: +254 742 280 222</p>
      </div>
      <div className="p-6 rounded-lg border">
        <h3 className="font-bold mb-2">Sign up for updates</h3>
        <form className="space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Name" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <button className="w-full bg-[#0B4F8C] text-white py-2 rounded">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

function Navbar(){
  return (
    <header className="bg-gradient-to-r from-[#0B4F8C] to-[#29A0A3] text-white py-6">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">Royal <span className="text-[#29A0A3]">Africa</span></div>
          <div className="ml-2 text-yellow-400">★</div>
        </div>
        <nav className="mt-4 md:mt-0 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded">Partner</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="font-bold">Royal Africa</div>
        <div className="text-sm mt-2">Nurturing Minds, Restoring Hope — Registered entity pending</div>
        <div className="mt-4 text-sm">© {new Date().getFullYear()} Royal Africa</div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}