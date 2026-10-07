export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: 'accepted' | 'published' | 'under-review';
  links?: { code?: string; pdf?: string };
  figureSrc?: string;
  description?: string;
};

export type Education = {
  school: string;
  degree: string;
  gpa?: string;
  time: string;
  place: string;
};

export type Experience = {
  role: string;
  org: string;
  time: string;
  place: string;
  bullets: string[];
};

export type Project = {
  name: string;
  stack: string[];
  desc: string;
};

export type About = {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  github: string;
  interests: string[];
  avatar: string;
  cv?: string;
  skills?: Record<string, string[]>;
  bio?: string;
};
