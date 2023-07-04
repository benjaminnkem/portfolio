import PageContainer from "../page-container";
import ProjectCon from "./components/ProjectCon";
import "./projects.css";

const ProjectsPage = () => {
  const projects = [
    {
      name: "BStore",
      description:
        "BStore is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/typimon.png", "/images/projects/react_todo.png"],
      alt_attr: "Typimon Illustration",
      techs: ["MongoDB", "ReactJs", "NodeJs", "NextJs", "Mongoose", "TailwindCSS"],
    },
    {
      name: "KaygreyKennel",
      description:
        "KaygreyKennel is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/kaygrey.png", "/images/projects/bjncalc.png"],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "TailwindCSS", "NodeJs", "ExpressJs", "MySQL"],
    },
    {
      name: "BenCalc",
      description:
        "BenCalc is a lightweight pet store, mostly dogs.\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      images: ["/images/projects/typimon.png", "/images/projects/react_todo.png"],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "CSS", "Vanilla Javascript", "Fetch API"],
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
      techs: ["HTML", "CSS"],
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
