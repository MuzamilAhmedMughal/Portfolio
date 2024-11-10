// components/Hero.js
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component


const Hero = () => {
  return (
    <div className="grid items-center mb-10 justify-items-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5" id="home">
      <div className="flex flex-col justify-center pt-[100px] pl-[10%] hero-text">
        <span className="text-[#ff9f43] text-3xl animate-fadeInUp"><h3>Hello! Everyone</h3></span>
        <span className="text-4xl animate-fadeInUp"><h2>I am Muzamil Ahmed</h2></span>
        <span className="text-[#ff9f43] text-3xl animate-fadeInUp"><h3>&</h3></span>
        <span className="text-4xl animate-fadeInUp"><h2>I am a web-developer</h2></span>
        <span className="animate-fadeInUp mt-4">
          <Link href="https://pk.linkedin.com/in/muzamil-ahmed-mughal-9573182b5?trk=people-guest_people_search-card" className="bt bg-[#37bcf7] text-[#f5f5f5] rounded-[20px] py-2 px-4 text-lg font-semibold transition-all duration-300 hover:bg-[#2b2d42] hover:text-[#ff9f43]">
            Hire me!
          </Link>
        </span>
      </div>
      <div className="flex justify-center items-center hero-image">
        <Image
          src="/1.png" // Ensure the image path is correct
          alt="Hero Image"
          width={400} // Set the width
          height={450} // Set the height
          className="object-cover rounded-[10px ] animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;