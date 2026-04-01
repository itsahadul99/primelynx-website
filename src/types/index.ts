export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  color?: string;
  offsetTop?: boolean;
  offsetBottom?: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
}

export interface ProjectTag {
  label: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
}

export interface TechCategory {
  title: string;
  color: string;
  borderColor: string;
  techs: string;
}

export interface TechItem {
  name: string;
  color: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
