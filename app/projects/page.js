import { projects } from "@/lib/utils/projects-list";
import PageContainer from "../../components/Common/Shared/page-container";
import ProjectCon from "./components/ProjectCon";
import "./projects.css";

export const metadata = {
  title: "Benjamin Nkem - Projects 🔬🧘‍♂️",
  description: "Find some of my dev projects",
};

const ProjectsPage = () => {
  return (
    <>
      <PageContainer>
        <main>
          <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-28 md:mt-32">
            <h1 className="mb-8 text-4xl font-bold text-center md:text-start">
              Projects<span className="text-primary">.</span>
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
