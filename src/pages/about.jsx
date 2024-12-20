import React from 'react'

const About = () => {
  return (
   <> <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
      <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>This is</h1>
      <div className='stats bg-primary shadow'>
        <div className='stat'> 
          <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
            Store
          </div>
        </div>
      </div>
    </div>
    <div className="bg-base-100 text-base-content mt-20">
      {/* Header Section */}
      <header className="hero bg-secondary text-primary-content py-10 rounded-lg shadow-lg">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Furniture Store </h1>
            <p className="py-4 text-xl">
              Discover the perfect blend of comfort and style.
            </p>
          </div>
        </div>
      </header>

      {/* Offerings Section */}
      <section className="py-10 px-5">
        <h2 className="text-4xl font-bold text-center mb-6">What We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Living Room</h3>
              <p>Sofas, coffee tables, recliners, and more.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Bedroom</h3>
              <p>Luxurious beds, wardrobes, and dressers.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Dining Room</h3>
              <p>Elegant dining sets and chairs.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Office</h3>
              <p>Ergonomic desks and chairs for productivity.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Outdoor</h3>
              <p>Durable patio and garden furniture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-5 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Customizable Designs: Tailor furniture to your needs and style.</li>
          <li>Affordable Luxury: Quality furniture at unbeatable prices.</li>
          <li>
            Seamless Shopping: Easy online ordering with fast delivery and
            assembly services.
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="bg-info text-[black] py-6 text-center">
        <p>Turn your house into a home with furniture that speaks your style.</p>
        <button className="btn btn-secondary mt-4">Explore Our Collection</button>
      </footer>
    </div>
    </>
  )
}

export default About;
