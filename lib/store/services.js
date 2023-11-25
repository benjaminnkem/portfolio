import { faEarth, faRocket, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  {
    type: "Web Development",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        Are you ready to take your brand to the next level? I can develop fullstack web applications for you or your{" "}
        <span className="text-cyan-500">brand</span>.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faEarth} className="text-5xl" />,
  },
  {
    type: "Website Management",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        Do you have and existing website need a <span className="text-cyan-500">website manager</span>? I&apos;m that
        guy!
      </p>
    ),
    icon: <FontAwesomeIcon icon={faServer} className="text-5xl" />,
  },
  {
    type: "API",
    description: (
      <p className="text-sm leading-relaxed text-opacity-75">
        I build robust, scalable, secure and easily accessible REST APIs.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faRocket} className="text-5xl" />,
  },
];
export default services;
