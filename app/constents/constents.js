
import { X } from "lucide-react";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

export const socials = [
  {
    icon: (
      <Instagram className="w-6 h-6 text-gray-600  transition-all duration-300" />
    ),
    href: "https://www.instagram.com/spreadnext.in/",
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    bg: "",
  },
  {
    icon: (
      <FaLinkedin className="w-6 h-6 text-gray-600  transition" />
    ),
    href: "https://www.linkedin.com/showcase/spreadnext/posts/?feedView=all",
    bg: "bg-[#0A66C2]", // LinkedIn official
  },
  // {
  //   icon: (
  //     <FaFacebookSquare className="w-7 h-7 text-gray-600 hover:text-[#1877F2] transition" />
  //   ),
  //   href: "https://facebook.com",
  //   bg: "bg-[#1877F2]", // Facebook official
  // },
  {
    icon: (
      <FaXTwitter className="w-6 h-6 text-gray-600  transition" />
    ),
    href: "https://x.com/Spreadnext_in?t=UAvSaOQhmKcHJt_nB2B7xA&s=08",
    bg: "bg-[#1DA1F2]", // Twitter (X) blue
  },
  {
    icon: (
      <Youtube className="w-6 h-6 text-gray-600  transition" />
    ),
    href: "https://www.youtube.com/@AmbiSpineTechnologies",
    bg: "bg-[#FF0000]", // YouTube red
  },
];


export const footerLinks = [
  {
    title: "Explore Spreads",
    links: [
      { name: "Sign Up", href: "/signup" },
      { name: "Help Center", href: "/help" },
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Developers", href: "/developers" },
    ],
  },
  {
    title: "Opportunities",
    links: [
      { name: "Jobs", href: "/jobs" },
      { name: "Microblog Circles", href: "/microblogs" },
      { name: "Salaries", href: "/salaries" },
      { name: "Top Roles", href: "/top-roles" },
      { name: "Remote Work", href: "/remote" },
      { name: "Global Talent Feed", href: "/global-talent" },
    ],
  },
  {
    title: "Opportunities",
    links: [
      { name: "Jobs", href: "/jobs" },
      { name: "Microblog Circles", href: "/microblogs" },
      { name: "Salaries", href: "/salaries" },
      { name: "Top Roles", href: "/top-roles" },
      { name: "Remote Work", href: "/remote" },
      { name: "Global Talent Feed", href: "/global-talent" },
    ],
  },
  {
    title: "For Organizations",
    links: [
      { name: "Talent Solutions", href: "/org/talent" },
      { name: "Hiring Dashboard", href: "/org/dashboard" },
      { name: "Employer Branding", href: "/org/branding" },
      { name: "Community Hiring", href: "/org/hiring" },
    ],
  },
  {
    title: "Directories",
    links: [
      { name: "Members", href: "/directory/members" },
      { name: "Jobs", href: "/directory/jobs" },
      { name: "Startups", href: "/directory/startups" },
      { name: "Universities", href: "/directory/universities" },
      { name: "Articles", href: "/directory/articles" },
      { name: "Circles", href: "/directory/circles" },
      { name: "Creators", href: "/directory/creators" },
      { name: "Fellowships", href: "/directory/fellowships" },
    ],
  },
];

export const footerPolicies = [
  { name: "About", href: "/about" },
  { name: "Accessibility", href: "/accessibility" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Brand Policy", href: "/brand" },
  { name: "Guest Controls", href: "/guest-controls" },
  { name: "Community Guidelines", href: "/community-guidelines" },
];
