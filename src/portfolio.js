/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gokul Raja⚡Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Gokul Raja Portfolio",
    type: "website",
    url: "http://gokul-raja84.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Gokul Raja",
  logo_name: "Gokul Raja",
  nickname: "Software Developer 🚀",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "https://gokul-raja84.github.io/My-Resume/",
  githubProfile: "https://github.com/Gokul-Raja84",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Gokul-Raja84",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Gokul-Raja84",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gokulraja84/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:gokulraja840@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gokul._raja._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analysis & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable models for various Machine Learning and statistical use cases",
        "⚡ Experience of working on Machine Learning projects",
        "⚡ Data quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "carbon:data-volume",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites front end using JS, React",
        "⚡ Experience of hosting websites on servers and cloud platforms",
        "⚡ Developing Web backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Mongodb",
          fontAwesomeClassname: "skill-icons:mongodb",
          // style: {
          //   color: "#663399",
          // },
        },
        {
          skillName: "API",
          fontAwesomeClassname: "arcticons:api-tester",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "logos:figma",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "logos:adobe-xd",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "logos:adobe-illustrator",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Canva",
    //       fontAwesomeClassname: "simple-icons:canva",
    //       style: {
    //         color: "",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#000000",
      },
      profileLink: "https://github.com/Gokul-Raja84",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/gokulraja840",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM Institute of Science and Technology",
      subtitle: "B.Tech. in Information Technology - 9.42 CGPA",
      logo_path: "srm logo.png",
      duration: "2020 - 2024",
      descriptions: [
        "🔺 I studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "📈 Apart from this, I have done courses on Machine Learning, Data Analysis, AWS Cloud Technical, Web Development and UI/UX.",
        "⚡ I also served as DEPARTMENT REPRESENTATIVE of my department.",
      ],
      website_link: "https://srmrmp.edu.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python course by Google",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "",
      logo_path: "images.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "SQL for Data Science",
      subtitle: "UC DAVIS - Coursera",
      logo_path: "course.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#ffffff",
    },
    {
      title: "Google IT Support",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Web Development",
      subtitle: "IBM - Coursera",
      logo_path: "ibm_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Python Data Structures",
      subtitle: "",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Google UX Design",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#ffffff",
    },
    {
      title: "Accenture Developer Virtual Internship",
      subtitle: "- Qwiklabs",
      logo_path: "acc1.jpg",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
    {
      title: "J.P. Morgan Software Engineering Virtual Intership",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "jp.png",
      certificate_link: "",
      alt_name: "NPTEL",
      color_code: "#ffffff",
    },
    {
      title: "Data Visualization",
      subtitle: "- Qwiklabs",
      logo_path: "gl.jpg",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work / Internship",
  description:
    "My projects reflect my current professional experience. I am actively seeking exciting internship opportunities to further my career. If you are aware of any such opportunities, please contact me. Your assistance would be greatly appreciated.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Looking for opportunities",
          company: "",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "Currently Present in ",
          location: "Chennai / Madurai, Tamil Nadu, India",
          description:
            "Improving my skillset each and every day. If you've come this far in my portfolio, it might mean you have an opportunity for me. I'd love to connect and discuss how I can contribute to your team or project. Help me take the next step in my career journey !",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software developer Intern",
          company: "Cosmic Crafts",
          company_url: "https://cosmiccrafts.netlify.app/",
          logo_path: "tiktok_logo.png",
          duration: "July 2023 - October 2023",
          location: "SRMIST, Chennai",
          description:
            "Led a student community in concept development and client engagement for app, web, and design solutions, showcasing leadership, strong teamwork and multitasking skills; Developed and deployed websites and projects, actively contributing to coding, testing, and enhancing user experience.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Department Representative",
          company: "Information Technology Department",
          company_url: "https://srmrmp.edu.in/",
          location:
            "SRM Institute of Science and Technology, Ramapuram, Chennai",
          description:
            "Coordinated students and tasks as a Department Representative, ensuring smooth communication and efficient task management within the IT Department.",
          color: "#D83B01",
        },
        {
          title: "Placement Representative",
          company: "Information Technology Department",
          company_url: "https://srmrmp.edu.in/",
          location:
            "SRM Institute of Science and Technology, Ramapuram, Chennai",
          duration: "July 2023 - Febraury, 2024",
          description:
            "Served as one of the Placement Representative for the IT Department, assisting students in scheduling and organizing placement drives.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Machine Learnig, Python and Data Analysis projects along with Responsive Websites / Web apps and host - deploy them.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on two research papers / projects and ACGAN Project has been accepted for publication in the Journal of Current Research in Engineering and Science.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "Math Scribble",
      createdAt: "",
      description:
        "Project on Deep Learning for Handwritten Math Equations Recognition and Solving for Students",
      url: "",
    },
    {
      id: "",
      name: "ACGAN - Network security deicision making",
      createdAt: "",
      description:
        "Paper on Enhance Network Security Decision Making using ACGAN Machine Learning for unbalanced data in Network attacks",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "GR.jpg",
    description: (
      <span>
        I am available on almost every social media. You can message / connect
        with me, I will reply within 24 hours.
        <br /> I can help you with Python, ML, SQL, Data Analysis, Web Dev and
        UI/UX.
      </span>
    ),
  },
  blogSection: {
    title: "Aspiration",
    subtitle:
      "I am actively seeking Internships and thrilling opportunities where I can contribute and grow. Explore my GitHub to discover my skills and projects, and feel free to reach out if you have a role that aligns with my talents and aspirations.",
    link: "https://github.com/Gokul-Raja84",
    avatar_image_path: "code.png",
  },
  addressSection: {
    title: "Connect",
    subtitle: "Check out my other socials and links here🔻",
    avatar_image_path: "",
    location_map_link: "https://bento.me/gokulraja",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
