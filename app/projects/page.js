import PageContainer from "../page-container";
import ProjectCon from "./components/ProjectCon";
import "./projects.css";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Typimon",
      description:
        "KaygreyKennel is a lightweight pet store, mostly dogs.\n\nIt comes with an administrator's dashboard for creating, deleting, updating posts about pets...",
      dateCreated: new Date(),
      images: [
        "/images/projects/typimon.png",
        "/images/projects/kaygrey.png",
        "/images/projects/bjncalc.png",
        "/images/projects/youtube_clone.png",
        "/images/projects/funaab_dev.png",
        "/images/projects/react_todo.png",
      ],
      alt_attr: "Typimon Illustration",
      techs: ["HTML", "CSS", "Vanilla Javascript", "Fetch API"],
    },
  ];

  return (
    <>
      <main>
        <PageContainer>
          <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-32">
            <div className="flex items-center space-x-6">
              <h1 className="text-4xl font-bold mb-8">
                Projects<span className="text-orange-500">.</span>
              </h1>

              <div className="h-[2px] flex-1 bg-[#f3570943] rounded-md"></div>
            </div>

            <div id="project-container" className="space-y-10">
              {projects && projects.map((project_data, index) => <ProjectCon key={index} project={project_data} />)}
            </div>
          </div>
        </PageContainer>
      </main>
    </>
  );
};

export default ProjectsPage;
