import React, { useState } from "react";
import img1 from "../assets/Main.png";
import img2 from "../assets/Design.png";
import img3 from "../assets/Web.png";
import img4 from "../assets/Mobile.png";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-green-400">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <img
              src="https://picsum.photos/200"
              className="h-12 w-12 rounded-full"
              alt="logo"
            />

            <ul className="hidden md:flex gap-6 text-white font-medium">
              <li><a href="#" className="hover:text-blue-700">Services</a></li>
              <li><a href="#" className="hover:text-blue-700">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-700">About</a></li>
              <li><a href="#" className="hover:text-blue-700">Contact</a></li>
            </ul>

            <button className="hidden md:block bg-green-600 px-6 py-2 rounded-full text-white">
              Signup
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </nav>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-green-500 rounded-xl p-4 flex flex-col items-center text-white space-y-3">
              <a href="#">Services</a>
              <a href="#">Pricing</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <button className="block w-full bg-blue-600 py-2 rounded-full">
                Signup
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-center">
          <p className="text-gray-700">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born...
          </p>
          <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-full">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2">
          <img src={img1} className="w-full max-w-md mx-auto" alt="hero" />
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Web Development", img: img2 },
          { title: "Mobile App Development", img: img3 },
          { title: "Design Development", img: img4 },
        ].map((item, i) => (
          <div key={i} className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <img src={item.img} className="h-40 mx-auto" alt="" />
            <p className="text-gray-600">
              There are many variations of passages of Lorem Ipsum available.
            </p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <h1 className="text-green-600 text-3xl font-bold">Pricing</h1>
          <p className="text-xl">Choose the best plan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { price: "$99", title: "Basic" },
            { price: "$199", title: "Advance" },
            { price: "$299", title: "Business" },
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-2xl p-6 text-center hover:shadow-2xl"
            >
              <h1 className="text-5xl font-bold">{plan.price}</h1>
              <h2 className="text-green-600 font-bold mt-4">{plan.title}</h2>
              <p className="mt-2 text-gray-600">
                All the basic features included
              </p>

              <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="container mx-auto px-4 mt-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Feature Stories</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl text-center"
            >
              <img
                src="https://picsum.photos/300"
                className="w-full h-56 object-cover"
                alt=""
              />
              <h2 className="text-2xl mt-4">Story Title</h2>
              <p className="text-gray-600 my-4">Short description here</p>
              <a href="#" className="text-indigo-600 font-bold mb-4 block">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 mt-20 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <h2 className="text-2xl font-bold">Dharani</h2>

          {[1, 2, 3].map((i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Home;
