const projectPreviews = [
  {
    imageSrc: "/images/projects/bstore/4.png",
    imageText: "BenCalc Screenshot",
    name: "BStore",
    viewLink: "/projects#bstore",
    descriptionContent: (
      <p className="text-sm font-light">
        BStore is an online store, where users find products and services, It comes with an administrator&apos;s
        dashboard for creating, deleting, updating posts basically it performs CRUD operations. Users can also sign up
        as a seller and sell products to other users. <br />
        <br />
        It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
      </p>
    ),
    techStack: ["NextJs", "Mongoose", "MongoDB", "Stripe", "TailwindCSS"],
    duration: "Jun 2023 - Date",
  },
  {
    imageSrc: "/images/projects/ceelyrics/cee1.png",
    imageText: "Ceelyrics Screenshot",
    name: "Ceelyrics",
    viewLink: "/projects#ceelyrics",
    descriptionContent: (
      <p className="text-sm font-light">
        Ceelyrics is a fast-growing lyrics provider website personally managed and owned by me, it&apos;s constantly
        being updated. <br /> <br /> Ceelyrics was inspired by Azlyrics.com, but Ceelyrics is Azyrics on steroid because
        It&apos;s faster, more user friendly and easy to access.
      </p>
    ),
    techStack: ["Node.js", "MySQL", "Ejs", "TailwindCSS"],
    duration: "Dec 2022 - Mar 2023",
  },
  {
    imageSrc: "/images/projects/kaygrey/kaygrey1.png",
    imageText: "Kaygrey",
    name: "KaygreyKennel",
    viewLink: "/projects#kaygrey",
    descriptionContent: (
      <p className="text-sm font-light">
        KaygreyKennel is a pet store (mostly dogs), KaygreyKennel was inspired by my love for dogs and pets in general.
        It also comes with an admin interface for admins to perform CRUD operations on posts data. <br />
        <br /> It also has search & sort functionality, which makes users to search for things easily, improving User
        Experience.
      </p>
    ),
    techStack: ["NodeJs", "MySQL", "Ejs"],
    duration: "April 2023 - Jun 2023",
  },
];

export default projectPreviews;
