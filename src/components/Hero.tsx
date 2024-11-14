import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    title: "Mountain View Rooms",
    description: "Wake up to breathtaking views of the Northern Range"
  },
  {
    image: "https://images.unsplash.com/photo-1551525212-a1dc18871d4a?auto=format&fit=crop&q=80",
    title: "Free Parking Available",
    description: "Secure, on-site parking for your convenience"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    title: "Dedicated Workspace",
    description: "High-speed Wi-Fi and comfortable work areas"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Piarco Guest House</h1>
            <p className="text-xl md:text-2xl mb-8">
              Relaxed Accommodation Minutes from Piarco International Airport
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">{slide.title}</h2>
            <p className="text-lg md:text-xl">{slide.description}</p>
            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;