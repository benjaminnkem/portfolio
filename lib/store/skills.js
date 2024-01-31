import Image from "next/image";

const skills = {
  frontend: [
    { label: "HTML", icon: <Image alt="golang logo" src={"/images/others/icons8-html.svg"} width={50} height={50} /> },
    { label: "CSS", icon: <Image alt="golang logo" src={"/images/others/icons8-css.svg"} width={50} height={50} /> },
    {
      label: "Tailwind CSS",
      icon: <Image alt="golang logo" src={"/images/others/icons8-tailwind-css.svg"} width={50} height={50} />,
    },
    {
      label: "Bootstrap",
      icon: <Image alt="golang logo" src={"/images/others/icons8-bootstrap.svg"} width={50} height={50} />,
    },
    { label: "SASS", icon: <Image alt="golang logo" src={"/images/others/icons8-sass.svg"} width={50} height={50} /> },
    {
      label: "Javascript",
      icon: <Image alt="golang logo" src={"/images/others/icons8-javascript.svg"} width={50} height={50} />,
    },
    // { label: "THREE.js", icon: <Image alt="golang logo" src={"/images/others/go-blue-logo.svg"} width={50} height={50} />},
    {
      label: "Typescript",
      icon: <Image alt="golang logo" src={"/images/others/icons8-typescript.svg"} width={50} height={50} />,
    },
    {
      label: "ReactJs",
      icon: <Image alt="golang logo" src={"/images/others/icons8-react-native.svg"} width={50} height={50} />,
    },
    {
      label: "NextJs",
      icon: <Image alt="golang logo" src={"/images/others/nextjs-logo.svg"} width={50} height={50} />,
    },
    {
      label: "Golang",
      icon: <Image alt="golang logo" src={"/images/others/go-blue-logo.svg"} width={50} height={50} />,
    },
    {
      label: "Nodejs",
      icon: <Image alt="golang logo" src={"/images/others/icons8-nodejs.svg"} width={50} height={50} />,
    },
    {
      label: "ExpressJs",
      icon: <Image alt="golang logo" src={"/images/others/icons8-express-js.svg"} width={50} height={50} />,
    },
    {
      label: "NestJs",
      icon: <Image alt="golang logo" src={"/images/others/icons8-nestjs.svg"} width={50} height={50} />,
    },
    {
      label: "MySQL",
      icon: <Image alt="golang logo" src={"/images/others/icons8-mysql.svg"} width={50} height={50} />,
    },
    {
      label: "MongoDB",
      icon: <Image alt="golang logo" src={"/images/others/icons8-mongodb.svg"} width={50} height={50} />,
    },
    {
      label: "PostgreSQL",
      icon: <Image alt="golang logo" src={"/images/others/icons8-postgres.svg"} width={50} height={50} />,
    },
    {
      label: "Rest APIs",
      icon: <Image alt="golang logo" src={"/images/others/api.png"} width={50} height={50} />,
    },
  ],
  // backend: [
  //   { label: "Nodejs", icon: <i className="ri-node-tree"></i> },
  //   { label: "ExpressJs", icon: <i className="ri-node-tree"></i> },
  //   { label: "NestJs", icon: <i className="ri-node-tree"></i> },
  // ],
  // databases: [
  //   { label: "MySQL", icon: <i className="ri-database-2-fill"></i> },
  //   { label: "MongoDB", icon: <i className="ri-database-2-fill"></i> },
  //   { label: "PostgreSQL", icon: <i className="ri-database-2-fill"></i> },
  //   { label: "Rest APIs", icon: <i className="ri-server-fill"></i> },
  // ],
  // others: [{ label: "NextJs", icon: <i className="ri-reactjs-fill"></i> }],
};

export default skills;
