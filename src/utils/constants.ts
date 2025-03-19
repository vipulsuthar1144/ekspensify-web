import {
  icAndroidStudio,
  icFigma,
  icJetpackCompose,
  icKotlin,
  icMySql,
  icNodejs,
  icNotion,
  icOneSignal,
  icReactjs,
  icTypescript,
  icVscode,
  photoDeepakSuthar,
  photoDilipSuthar,
  photoGokulSuthar,
  photoVipulSuthar,
} from "../assets";

export const URL_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.ekspensify.app";

export const MAIL_SUPPORT = "team@ekspensify.com";
export const MAIL_CONTACT_US = "team@ekspensify.com";

export const DataTeam: {
  profile_pic: string;
  name: string;
  email: string;
  role: string;
  linkedin: string;
  github?: string;
  behance?: string;
}[] = [
  {
    profile_pic: photoDilipSuthar,
    name: "Dilip Suthar",
    email: "dilipsuthar2643@gmail.com",
    role: "Android Developer",
    linkedin: "https://www.linkedin.com/in/dilipkumar264/",
    github: "https://github.com/dilipsuthar264",
  },
  {
    profile_pic: photoGokulSuthar,
    name: "Gokul Suthar",
    email: "gokulsutharofficial@gmail.com",
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/gokulsuthar22/",
    github: "https://github.com/gokulsuthar22",
  },
  {
    profile_pic: photoDeepakSuthar,
    name: "Deepak Suthar",
    email: "mrrdeepsuthrr@gmail.com",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/deepak-sutharr/",
    behance: "https://www.behance.net/deepaksutharr",
  },
  {
    profile_pic: photoVipulSuthar,
    name: "Vipul Suthar",
    email: "vipulsuthar1144@gmail.com",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/vipulsuthar1144/",
    github: "https://github.com/vipulsuthar1144",
  },
];

export const DataProjectTeckStack: {
  title: string;
  desc: string;
  technologies: string[];
  github?: string;
  figma?: string;
}[] = [
  {
    title: "Android",
    desc: "Our Android app delivers a smooth and intuitive user experience, built with modern UI components and best development practices. Whether you're here to explore, contribute, or improve the code, your input is always welcome! Check out the repository and be a part of the journey",
    technologies: [icAndroidStudio, icKotlin, icJetpackCompose, icOneSignal],
    github: "https://github.com/dilipsuthar264/Ekspensify",
  },
  {
    title: "Backend",
    desc: "The backbone of our platform, ensuring fast, secure, and reliable performance. Our backend is built with scalable architecture, robust APIs, and security-first principles. Whether you're interested in authentication, data management, or performance optimization, dive into the code and collaborate with us!",
    technologies: [icNodejs, icMySql, icTypescript],
    github: "https://github.com/gokulsuthar22/ekspensify-backend",
  },
  {
    title: "Web",
    desc: "A clean and responsive landing page that introduces our app with clarity and style. Designed to be fast, accessible, and visually appealing, it provides key information at a glance. If you're interested in frontend tweaks, animations, or improving the user experience, check out the repo and contribute!",
    technologies: [icVscode, icReactjs, icTypescript],
    github: "https://github.com/vipulsuthar1144/ekspensify-web",
  },
  {
    title: "Design",
    desc: "User experience is at the heart of our project. From initial sketches and wireframes to pixel-perfect UI components, our design process ensures a clean and intuitive experience. If you love UI/UX, visual aesthetics, or interaction design, check out our work and help make it even better!",
    technologies: [icFigma, icNotion],
    figma: "https://www.figma.com/@mrsuthrr",
  },
];
