import PageContainer from "../page-container";
import ProjectCon from "./components/ProjectCon";
import "./projects.css";

export const metadata = {
  title: "Benjamin Nkem - Projects 🔬🧘‍♂️",
  description: "Find some of my dev projects",
};

const ProjectsPage = () => {
  const projects = [
    {
      name: "Ceelyrics",
      description: `Ceelyrics is a fast-growing lyrics website, It's personally managed be me and is constantly being updated.
      
      Ceelyrics was inspired by Azlyrics.com, because of it's simplicity and speed, Ceelyrics was then built to be better, faster and have a better User Interface and User Experience (UI/UX).
      `,
      images: [
        "/images/projects/ceelyrics/cee1.png",
        "/images/projects/ceelyrics/cee2.png",
        "/images/projects/ceelyrics/cee3.png",
        "/images/projects/ceelyrics/cee4.png",
      ],
      alt_attr: "Typimon Illustration",
      techs: ["Nodejs", "ExpressJs", "MySQL", "TailwindCSS"],
      github_repo: "https://github.com/benjaminnkem/ceelyrics",
      live_: {
        url: "https://ceelyrics.com",
        name: "Ceelyrics",
      },
    },
    {
      name: "BStore",
      description: `BStore is an online store, where users find products and services, It comes with an administrator's dashboard for creating, deleting, updating posts basically it can perform CRUD operations.
      Regular users can also sign up as a seller and sell products to customers.

      It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
      `,
      images: [
        "/images/projects/bstore/bstore.png",
        "/images/projects/bstore/bstore1.png",
        "/images/projects/bstore/bstore2.png",
      ],
      alt_attr: "BStore Illustration",
      techs: ["NextJs", "MongoDB", "NodeJs", "TailwindCSS"],
      github_repo: "",
      live_: {},
    },
    {
      name: "KaygreyKennel",
      description: `KaygreyKennel is a pet store (mostly dogs), KaygreyKennel was inspired by my love for dogs and pets in general. It also comes with an admin interface for admins to perform CRUD operations on posts data.
        
      It also has search & sort functionality, which makes users to search for things easily, improving User Experience. 
        `,
      images: [
        "/images/projects/kaygrey/kaygrey.png",
        "/images/projects/kaygrey/kaygrey1.png",
        "/images/projects/kaygrey/kaygrey2.png",
        "/images/projects/kaygrey/kaygrey3.png",
        "/images/projects/kaygrey/kaygrey4.png",
        "/images/projects/kaygrey/kaygrey5.png",
        "/images/projects/kaygrey/kaygrey6.png",
      ],
      alt_attr: "Kaygrey Illustration",
      techs: ["NodeJs", "ExpressJs", "MySQL", "TailwindCSS"],
      github_repo: "",
      live_: {},
    },
    {
      name: "Typimon",
      description: `Typimon is a basic AI implementation for typing, How it works is a random sentence or phrase gets generated on starting, the user gets a typing field where his/her typing goes. While typimon starts typing at a speed which is easily adjustable by the users.
      
      It also comes with a 'correct word' indicator that tells the user if they've made a mistake while typing.`,
      images: [
        "/images/projects/typimon/typimonreal.png",
        "/images/projects/typimon/typimon2.png",
        "/images/projects/typimon/typimon3.png",
      ],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "CSS", "Vanilla Javascript", "Fetch API"],
      github_repo: "https://github.com/benjaminnkem/typimon",
      live_: {
        url: "https://tranquil-bombolone-c95188.netlify.app/",
        name: "Typmimon",
      },
    },
    {
      name: "YouNote",
      description:
        `YouNote is a robust and user-friendly todo tracking web application developed using ReactJs, a popular JavaScript library for building user interfaces. 
        
        With its intuitive interface and efficient design, YouNote allows users to effortlessly manage and organize their tasks, providing them with a seamless and enjoyable productivity experience.`,
      images: ["/images/projects/younote/younote.png", "/images/projects/younote/younote2.png"],
      alt_attr: "YouNote Illustration",
      techs: ["ReactJs", "Vanilla CSS"],
      github_repo: "",
      live_: {},
    },
    {
      name: "BenCalc",
      description: `BenCalc is a well functioning calculator built in TypeScript, HTML and CSS`,
      images: [
        "/images/projects/bjncalc/bjncalc.png",
        "/images/projects/bjncalc/ben_calc1.png",
        "/images/projects/bjncalc/ben_calc3.png",
        "/images/projects/bjncalc/ben_calc4.png",
      ],
      alt_attr: "BenCalc Illustration",
      techs: ["HTML", "CSS", "Typescript"],
      github_repo: "https://github.com/benjaminnkem/bencalc",
      live_: {
        url: "https://adorable-biscuit-b109dd.netlify.app/",
        name: "BenCalc",
      },
    },
  ];

  return (
    <>
      <PageContainer>
        <main>
          <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-28 md:mt-32">
            <h1 className="mb-8 text-4xl font-bold text-center md:text-start">
              Projects<span className="text-orange-500">.</span>
            </h1>

            <div id="project-container" className="space-y-10">
              {projects &&
                projects.map((project_data, index) => <ProjectCon key={index} project={project_data} index={index} />)}
            </div>
          </div>
        </main>
      </PageContainer>
    </>
  );
};

export default ProjectsPage;
