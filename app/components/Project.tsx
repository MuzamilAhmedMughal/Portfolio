// components/Projects.js
import Link from 'next/link';

const Projects = () => {
  // Array of project objects
  const projects = [
    {
      title: 'Teaching website',
      link: 'https://github.com/MuzamilAhmedMughal/website-project',
    },
    {
      title: 'Todo list',
      link: 'https://www.linkedin.com/posts/muzamil-ahmed-mughal-9573182b5_to-do-list-with-some-colour-activity-7185533005749198848-kO0I?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Bakery system',
      link: 'https://github.com/MuzamilAhmedMughal/Cakes-Shop-CLI',
    },
    {
      title: 'Profile',
      link: 'https://github.com/MuzamilAhmedMughal/profile',
    },
    {
      title: 'CRUD with PHP',
      link: 'https://pk.linkedin.com/in/muzamil-ahmed-mughal-9573182b5?trk=people-guest_people_search-card',
    },
    {
      title: 'Student Management System',
      link: 'https://www.linkedin.com/posts/muzamil-ahmed-mughal-9573182b5_webdevelopment-typescript-javascript-activity-7192039749883166720-iNMK?utm_source=share&utm_medium=member_desktop',
    },
  ];

  return (
    <div id="project" className="flex flex-col items-center">
      <div className="heading mb-6">
        <h2 className="text-2xl font-bold text-center uppercase">Projects</h2>
      </div>
      <div className="project grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {projects.map((project, index) => (
          <div key={index} className="card w-[280px] h-[300px] text-center border-2 border-[#ff9f43] transition-all duration-300 ease-in-out hover:shadow-lg">
            <span>
              <h4 className="mt-16 text-xl mb-24">{project.title}</h4>
            </span>
            <span>
              <Link href={project.link}>
                <button className="w-[150px] h-[30px] text-lg text-[#ff9f43] bg-[#2b2d42] rounded-[20px] transition-all duration-200 ease-in-out hover:w-[170px] hover:h-[35px]">
                  View
                </button>
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;