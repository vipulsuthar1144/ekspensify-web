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
    profile_pic: "",
    name: "Dilip Suthar",
    email: "dksuthar264@gmail.com",
    role: "Android Developer",
    linkedin: "https://www.linkedin.com/in/dilipkumar264/",
    github: "https://github.com/memeusix",
  },
  {
    profile_pic: "",
    name: "Gokul Suthar",
    email: "gokulsuthar22@gmail.com",
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/gokulsuthar22/",
    github: "https://github.com/gokulsuthar22",
  },
  {
    profile_pic: "",
    name: "Deepak Suthar",
    email: "mrrdeepsuthrr@gmail.com",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/deepak-sutharr/",
    behance: "https://www.behance.net/deepaksutharr",
  },
  {
    profile_pic: "",
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
    desc: "Ekspensify’s Android app is built with Kotlin and Jetpack Compose for a modern, smooth UI. It follows MVVM architecture for clean code and uses Dagger Hilt for dependency management. Retrofit handles API calls, Room Database manages offline data, and Firebase provides analytics and crash reporting.",
    technologies: [icAndroidStudio, icKotlin, icJetpackCompose, icOneSignal],
    github: "https://github.com/memeusix/Ekspensify",
  },
  {
    title: "Backend",
    desc: "Effortlessly track your online transactions in real time. Enable auto-tracking, and Ekspensify will automatically detect online transactions and mark them as pending. Review and categorize them later with just a tap!",
    technologies: [icNodejs, icMySql, icTypescript],
    github: "https://github.com/gokulsuthar22/ekspensify",
  },
  {
    title: "Web",
    desc: "Ekspensify Web is a modern, responsive frontend built with React, TypeScript, MUI, Tailwind CSS, and Framer Motion to provide a seamless user experience. This project serves as the official landing page for Ekspensify, along with dedicated pages for the Privacy Policy, Terms & Conditions, and Open Source contributions.",
    technologies: [icVscode, icReactjs, icTypescript],
    github: "https://github.com/vipulsuthar1144/ekspensify-landing-page",
  },
  {
    title: "Design",
    desc: "Effortlessly track your online transactions in real time. Enable auto-tracking, and Ekspensify will automatically detect online transactions and mark them as pending. Review and categorize them later with just a tap!",
    technologies: [icFigma, icNotion],
    figma: "https://www.figma.com/@mrsuthrr",
  },
];
