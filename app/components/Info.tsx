// components/AboutMe.js
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" id="intro">
      <div className="text-center">
        <div className="heading mb-6">
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        <div className="into grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 mb-24 text-justify">
          <div className="into2 w-11/12 mx-auto">
            <p>
              Hello, I’m Muzamil Ahmed. I’m a web developer with experience in
              creating websites and web applications. I work with various
              technologies like HTML, CSS, and JavaScript to build functional and
              user-friendly digital solutions. I started in web development
              because I enjoy solving problems and making things work better
              online. I’m always looking to improve my skills and learn about new
              tools and techniques. I’m currently seeking new opportunities and
              would be excited to bring my skills to a dynamic team or project. If
              you’re looking for a dedicated developer or just want to discuss a
              potential project, feel free to get in touch.
            </p>
            <br />
            <span className='flex items-center justify-center'>
              <Link
                href="https://pk.linkedin.com/in/muzamil-ahmed-mughal-9573182b5?trk=people-guest_people_search-card"
                className="bt bg-[#37bcf7] text-[#f5f5f5] rounded-[20px] py-2 px-4 text-lg font-semibold transition-all duration-300 hover:bg-[#2b2d42] hover:text-[#ff9f43]"
                role="button"
              >
                For more Info
              </Link>
            </span>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/1.png" 
              alt="Muzamil Ahmed"
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;