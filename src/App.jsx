import React, { useState , useEffect } from 'react';
import { Check, X, Fuel, Gauge, Banknote, Calendar, Search, ArrowRight , Menu , ChevronLeft, ChevronRight, Clock, User , Home , ChevronDown } from 'lucide-react';

// --- MOCK DATA ARRAY (Simulating AI Backend) ---
const vehiclesData = [
  {
    id: 1,
    name: "Mahindra Thar ROXX",
    variant: "AX7 L Diesel AT 4WD",
    price: "₹ 12.99 - 20.49 Lakh*",
    imageUrl: "/hero-car.jpg",
    specs: [
      { icon: <Gauge size={16} />, label: "Mileage", value: "15.2 kmpl" },
      { icon: <Fuel size={16} />, label: "Engine", value: "2184 cc" },
    ],
    pros: ["Road Presence", "Off-road Capable"],
    cons: ["Stiff Ride", "Low Mileage"]
  },
  {
    id: 2,
    name: "Tata Curvv EV",
    variant: "Empowered Plus 55",
    price: "₹ 17.49 - 21.99 Lakh*",
    imageUrl: "/hero-car1.jpg",
    specs: [
      { icon: <Gauge size={16} />, label: "Range", value: "585 km" },
      { icon: <Fuel size={16} />, label: "Battery", value: "55 kWh" },
    ],
    pros: ["Futuristic Design", "Great Range"],
    cons: ["Rear Headroom", "Touch Controls"]
  },
  {
    id: 3,
    name: "Royal Enfield Himalayan",
    variant: "Hanle Black 450",
    price: "₹ 2.85 - 2.98 Lakh*",
    imageUrl: "/hero-bike.jpg",
    specs: [
      { icon: <Gauge size={16} />, label: "Mileage", value: "30 kmpl" },
      { icon: <Fuel size={16} />, label: "Engine", value: "452 cc" },
    ],
    pros: ["Excellent Suspension", "Navigation Pod"],
    cons: ["Top Heavy", "Tube Tyres"]
  },
  {
    id: 4,
    name: "Hyundai Creta N Line",
    variant: "N8 DCT",
    price: "₹ 16.82 - 20.45 Lakh*",
    imageUrl: "/hero-car2.jpg",
    specs: [
      { icon: <Gauge size={16} />, label: "Mileage", value: "18 kmpl" },
      { icon: <Fuel size={16} />, label: "Engine", value: "1.5L Turbo" },
    ],
    pros: ["Sporty Handling", "Premium Interiors"],
    cons: ["Stiff Suspension", "Expensive"]
  }
];

// 2. Carousel Data 
const carouselItems = [
  {
    id: 1,
    imageUrl: "/carousel1.jpg", 
    title: "Yamaha XSR 155 Vs Royal Enfield Hunter 350 Comparison: Two Takes On Retro",
    description: "A detailed comparison of two popular retro-modern motorcycles in India."
  },
  {
    id: 2,
    imageUrl: "/carousel2.jpg", 
    title: "All-New 2026 Toyota Fortuner Hybrid: What to Expect",
    description: "The king of SUVs is getting a major upgrade with a powerful hybrid powertrain."
  },
  {
    id: 3,
    imageUrl: "/carousel3.jpg", 
    title: "First Drive Review: Maruti Suzuki eVX Electric SUV",
    description: "We get behind the wheel of Maruti's first-ever electric vehicle."
  },
  {
    id: 4,
    imageUrl: "/carousel4.jpg", 
    title: "Top 5 Safest Cars in India Under ₹15 Lakh (GNCAP Rated)",
    description: "Looking for a safe family car? Here are the best options with 5-star ratings."
  }
];

// 3. Latest Articles Data 
const latestArticles = [
  {
    id: 1,
    imageUrl: "/article1.jpg", 
    category: "Video",
    title: "Quick News video: February 8, 2026",
    date: "Yesterday",
    author: "Jay Patil"
  },
  {
    id: 2,
    imageUrl: "/article2.jpg", 
    category: "Images",
    title: "Mercedes-Benz V-Class interior image gallery",
    date: "Yesterday",
    author: "Dipan Sur"
  },
  {
    id: 3,
    imageUrl: "/article3.jpg", 
    category: "Feature",
    title: "3 reasons to buy the Hyundai Exter, and 2 to skip it",
    date: "Yesterday",
    author: "Dhruv Dhaka"
  },
  {
    id: 4,
    imageUrl: "/article4.jpg", 
    category: "Feature",
    title: "6 Things to know before buying the Yamaha EC-06",
    date: "Yesterday",
    author: "Azaman Chothia"
  },
    {
    id: 5,
    imageUrl: "/article5.jpg", 
    category: "News",
    title: "Kia Clavis SUV spotted testing again, launch soon",
    date: "2 days ago",
    author: "Staff Writer"
  },
    {
    id: 6,
    imageUrl: "/article6.jpg", 
    category: "Review",
    title: "Long term review: Honda Elevate after 10,000km",
    date: "2 days ago",
    author: "Rishabh Bhaskar"
  }
];

// --- COMPONENT: Header with Search ---
const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper for Nav Items with Dropdowns
  const NavItem = ({ title }) => (
    <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition group">
      <span className="font-medium text-sm text-gray-700 group-hover:text-red-600">{title}</span>
      <ChevronDown size={14} className="text-gray-500 group-hover:text-red-600" />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* 1. MAIN WHITE HEADER */}
      <div className="bg-white relative z-20">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Logo & Mobile Menu Toggle */}
            <div className="flex justify-between items-center w-full md:w-auto">
              <img
                src="https://gadijankari.com/wp-content/uploads/2025/09/Play-1.png"
                alt="Gadi Jankari"
                className="h-9 object-contain"
              />
              <button
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96 order-last md:order-none">
              <input
                type="text"
                placeholder="Search cars, bikes, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-red-600 bg-gray-50 text-sm"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
            </div>

            {/* Top Right Links (Login/Socials placeholder) */}
            <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-gray-800">
               <a href="#" className="hover:text-red-600">Login / Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. GRAY NAVIGATION STRIP  */}
      <div className="bg-gray-100 border-b border-gray-200 hidden md:block relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-8 py-2.5">
            {/* Home Icon */}
            <a href="#" className="text-gray-700 hover:text-red-600">
              <Home size={18} />
            </a>
            
            {/* Separator */}
            <div className="h-4 w-px bg-gray-300"></div>

            {/* Nav Links */}
            <nav className="flex items-center gap-6">
              <NavItem title="Find a Car" />
              <NavItem title="Find a Bike" />
              <NavItem title="News" />
              <NavItem title="Reviews" />
              <NavItem title="Features" />
              <NavItem title="Galleries" />
              
              {/* Simple Links without arrow */}
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-red-600">Sell Car</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-red-600">Advice</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            <a href="#" className="hover:text-red-600">Home</a>
            <a href="#" className="hover:text-red-600">Find a Car</a>
            <a href="#" className="hover:text-red-600">Find a Bike</a>
            <a href="#" className="hover:text-red-600">News & Reviews</a>
            <a href="#" className="hover:text-red-600">Sell Car</a>
          </div>
        </nav>
      )}
    </header>
  );
};

// --- COMPONENT: Modern Footer ---
const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 mt-auto">
    <div className="max-w-6xl mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          {/* Added a white container so it looks like a badge */}
          <div className="inline-block bg-white p-2 rounded-lg">
            <img 
              src="https://gadijankari.com/wp-content/uploads/2025/09/Play-1.png" 
              alt="Gadijankari" 
              className="h-8 object-contain" 
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted AI-powered source for the latest automobile news, reviews, and detailed specs.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Quick Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-red-500 transition">Latest Car Launches</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Electric Vehicles (EV)</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Bike Reviews</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Team</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
          <div className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:border-red-600 focus:outline-none text-sm"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2026 Gadijankari.com. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Designed by Ankit Kumar
        </p>
      </div>
    </div>
  </footer>
);

// --- COMPONENT: Vehicle Card (Grid Item) ---
const VehicleCard = ({ vehicle }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
    {/* Image Section */}
    <div className="relative h-56 overflow-hidden group">
      <img 
        src={vehicle.imageUrl} 
        alt={vehicle.name} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800">
        {vehicle.variant}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-5 flex flex-col flex-grow">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h2>
      <p className="text-red-600 font-bold text-lg mb-4">{vehicle.price}</p>

      {/* Mini Specs */}
      <div className="flex gap-4 mb-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        {vehicle.specs.map((spec, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-red-500">{spec.icon}</span>
            <span>{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Pros & Cons Summary (Compact) */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
        <div>
          <span className="font-bold text-green-700 flex items-center gap-1 mb-1">
            <Check size={12} /> Pros
          </span>
          <p className="text-gray-500 truncate">{vehicle.pros[0]}</p>
        </div>
        <div>
          <span className="font-bold text-red-700 flex items-center gap-1 mb-1">
            <X size={12} /> Cons
          </span>
          <p className="text-gray-500 truncate">{vehicle.cons[0]}</p>
        </div>
      </div>

      <button className="mt-auto w-full py-2.5 border border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition flex items-center justify-center gap-2 group">
        View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
      </button>
    </div>
  </div>
);

// --- COMPONENT: Modern Carousel ---
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? carouselItems.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselItems.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden group">
      {/* Image & Text Overlay */}
      <div
        style={{ backgroundImage: `url(${carouselItems[currentIndex].imageUrl})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white max-w-2xl">
             {/* Title and description */}
            <span className="inline-block bg-red-600 text-xs font-bold px-2 py-1 rounded mb-3">Featured</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">{carouselItems[currentIndex].title}</h2>
            <p className="text-gray-200 text-sm md:text-base hidden md-block">{carouselItems[currentIndex].description}</p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
      >
        <ChevronLeft size={30} />
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {carouselItems.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`transition-all w-2 h-2 bg-white rounded-full cursor-pointer ${currentIndex === slideIndex ? "p-1.5" : "bg-opacity-50"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: Article Card ---
const ArticleCard = ({ article }) => (
  <div className="flex gap-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
    <div className="relative h-24 w-24 md:h-28 md:w-28 flex-shrink-0 rounded-lg overflow-hidden">
      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
      <span className="absolute top-1 left-1 bg-white/90 text-gray-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
        {article.category}
      </span>
    </div>
    <div className="flex flex-col justify-between py-1">
      <h3 className="font-bold text-gray-900 leading-tight line-clamp-2 hover:text-red-600 transition cursor-pointer">
        {article.title}
      </h3>
      <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-1">
          <Clock size={12} /> {article.date}
        </div>
        <div className="flex items-center gap-1">
          <User size={12} /> {article.author}
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const VehiclePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = vehiclesData.filter(v => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="max-w-6xl mx-auto px-4 py-8 flex-grow w-full space-y-16">
        
        {/* SECTION 1: Vehicle Grid */}
        <section>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Latest Launches</h1>
            <p className="text-gray-500">Find the best vehicles suited for your needs.</p>
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No vehicles found</h3>
            </div>
          )}
        </section>

        {/* SECTION 2: Carousel & Latest Articles */}
        <section className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Carousel (70% on lg) */}
          <div className="w-full lg:w-[70%]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <Carousel />
          </div>

          {/* Right Column: Latest Articles (30% on lg) */}
          <div className="w-full lg:w-[30%]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <a href="#" className="text-red-600 text-sm font-semibold hover:underline">View All</a>
            </div>
            <div className="flex flex-col gap-4">
              {latestArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default VehiclePage;