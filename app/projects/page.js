import PageContainer from "../page-container";
import ProjectCon from "./components/ProjectCon";
import "./projects.css";

export const metadata = {
  title: "Benjamin Nkem - Projects",
  description: "Find all my dev projects",
};

const ProjectsPage = () => {
  const projects = [
    {
      name: "BStore",
      description: `BStore is an online store, where users find products and services, It comes with an administrator's dashboard for creating, deleting, updating posts basically it can perform CRUD operations.
      Regular users can also sign up as a seller and sell products to customers.

      It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
      `,
      images: ["/images/projects/bstore.png", "/images/projects/bstore1.png", "/images/projects/bstore2.png"],
      alt_attr: "Typimon Illustration",
      techs: ["NextJs", "MongoDB", "NodeJs", "TailwindCSS"],
    },
    {
      name: "KaygreyKennel",
      description: `KaygreyKennel is a pet store (mostly dogs), KaygreyKennel was inspired by my love for dogs and pets in general. It also comes with an admin interface for admins to perform CRUD operations on posts data.
        It also has search & sort functionality, which makes users to search for things easily, improving User Experience. 
        `,
      images: ["/images/projects/kaygrey.png", "/images/projects/bjncalc.png"],
      alt_attr: "Typimon Illustration",
      techs: ["NodeJs", "ExpressJs", "MySQL", "TailwindCSS"],
    },
    {
      name: "BenCalc",
      description:
        "BenCalc is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/typimon.png", "/images/projects/react_todo.png"],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "CSS", "Typescript"],
    },
    {
      name: "Typimon",
      description:
        "Typimon is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/typimon.png", "/images/projects/react_todo.png"],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "CSS", "Vanilla Javascript", "Fetch API"],
    },
    {
      name: "Youtube Clone",
      description:
        "Youtube Clone is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/kaygrey.png", "/images/projects/bjncalc.png"],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "CSS"],
    },
    {
      name: "YouNote",
      description:
        "YouNote is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/kaygrey.png", "/images/projects/bjncalc.png"],
      alt_attr: "Typimon Illustration",
      techs: ["ReactJs", "CSS"],
    },
  ];

  return (
    <>
      <main>
        <PageContainer>
          <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-28 md:mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-start">
              Projects<span className="text-orange-500">.</span>
            </h1>

            <div id="project-container" className="space-y-10">
              {projects &&
                projects.map((project_data, index) => <ProjectCon key={index} project={project_data} index={index} />)}
            </div>
          </div>
        </PageContainer>
      </main>
    </>
  );
};

export default ProjectsPage;
