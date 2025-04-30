// import { useEffect } from "react";
// import CategoryItem from "../components/CategoryItem";
// import { useProductStore } from "../stores/useProductStore";
// import FeaturedProducts from "../components/FeaturedProducts";

// const categories = [
// 	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
// 	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
// 	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
// 	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
// 	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
// 	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
// 	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
// ];

// const HomePage = () => {
// 	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

// 	useEffect(() => {
// 		fetchFeaturedProducts();
// 	}, [fetchFeaturedProducts]);

// 	return (
// 		<div className='relative min-h-screen text-white overflow-hidden'>
//   {/* Banner Section */}
//   <div className='relative h-[700px] w-full'>
//     <img
//       src='/banner.jpg' 
//       alt='Banner'
//       className='w-full h-full object-cover'
//     />
//     {/* Overlay Text */}
//     <div className='absolute left-8 top-1/2 transform -translate-y-1/2 p-6 rounded-lg max-w-md'>
//       <h2 className='text-4xl font-bold text-white mb-2'>Style That Speaks</h2>
//       <p className='text-lg text-gray-200'>Discover your next favorite look with CartHaven</p>
//     </div>
//   </div>

//   {/* Categories and Featured Section */}
//   <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
//     <h1 className='text-center text-5xl sm:text-6xl font-bold text-sky-400 mb-4'>
//       Explore Our Categories
//     </h1>
//     <p className='text-center text-xl text-gray-300 mb-12'>
//       Discover the latest trends in eco-friendly fashion
//     </p>

//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
//       {categories.map((category) => (
//         <CategoryItem category={category} key={category.name} />
//       ))}
//     </div>

//     {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
//   </div>
// </div>

// 	);
// };
// export default HomePage;

import { useState, useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";


const categories = [
    { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
    { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
    { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
    { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
    { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
    { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
    { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];
    

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  
  useEffect(() => {
    setIsVisible(true);
    
    // Text animation sequence for each line
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setTextIndex(prev => {
          if (prev >= 2) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 500);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className='relative min-h-screen text-white overflow-hidden'>
      {/* Banner Section with Stylish Text Animation */}
      <div className='relative h-[700px] w-full'>
        <img
          src='/banner.jpg' 
          alt='Banner'
          className='w-full h-full object-cover'
        />
        
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent pointer-events-none"></div>
        
        {/* Animated Text Only - No Box */}
        <div className="absolute left-40 top-1/2 transform -translate-y-1/2 w-full max-w-lg">
          {/* Main Heading with Animation */}
          <h1 className="relative ">
            <span 
              className={`block text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300
                        transition-all duration-700 
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}
            >
              Style
              <span className="absolute -right-4 -top-4 text-6xl text-sky-400 opacity-50">*</span>
            </span>
            
            <span 
              className={`block text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 ml-24
                        transition-all duration-700 delay-300
                        ${textIndex >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}
            >
              That
              <span className="absolute right-8 -top-2 text-5xl text-orange-300 opacity-50">#</span>
            </span>
            
            <span 
              className={`block text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-200 ml-48
                        transition-all duration-700 delay-500
                        ${textIndex >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}
            >
              Speaks
            </span>
          </h1>
          
        
          {/* Tagline with Animation and drop shadow */}
          <p 
            className={`text-xl text-white font-light ml-20 drop-shadow-xl transition-all duration-700 delay-1000
                      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
          >
            <span className="italic text-sky-200">Discover</span> your next favorite look with 
            <span className="font-semibold text-orange-200"> CartHaven</span>
          </p>
          
          {/* Animated button */}
          <button 
            className={`mt-8 ml-52 px-8 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full 
                      font-medium tracking-wide hover:from-sky-600 hover:to-indigo-700 transition-all 
                      transform hover:scale-105 shadow-lg shadow-indigo-500/30 flex items-center
                      duration-700 delay-1200
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span>EXPLORE PRODUCTS</span>
           
          </button>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='text-center text-5xl sm:text-6xl font-bold text-sky-400 mb-4'>
          Explore Our Categories
        </h1>
        <p className='text-center text-xl text-gray-300 mb-12'>
          Discover the latest trends in eco-friendly fashion
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

      </div>
      {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}

    </div>
  );
};

export default HomePage;