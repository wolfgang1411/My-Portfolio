export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const CV_DATA = {
  personal: {
    name: 'Mohd Shoaib',
    role: 'Senior Full Stack Developer',
    email: 'shoaibsaifi1411@gmail.com',
    phone: '+91 7531974310',
    location: 'Gurgaon, India',
    linkedin: 'https://www.linkedin.com/in/shoaib982',
    summary:
      'Senior Full Stack Developer with 5+ years of experience building scalable web and mobile systems using Angular, React, Node.js, NestJS, and PostgreSQL. Proven experience in designing end-to-end platforms, including e-commerce, fintech, parking automation, inventory management, and AI-assisted systems. Strong background in system optimization, automation, and third-party integrations.',
  },
  experience: [
    {
      company: 'United Web Enhancers Private Limited',
      role: 'Full Stack Developer',
      duration: 'Jun 2021 – Present',
      location: 'Gurgaon, India',
      description: [
        'Developed full-stack applications using Angular, React, Node.js, NestJS, and PostgreSQL.',
        'Built and maintained international web and mobile applications used across multiple regions.',
        'Designed and implemented scalable APIs, database schemas, and backend architectures.',
        'Modernized legacy platforms to improve performance, scalability, and maintainability.',
        'Collaborated cross-functionally with product, QA, and business teams to deliver high-quality releases.',
        'Supported production deployments, monitoring, and system optimization.',
      ],
    },
    {
      company: 'Tranistics Data Technologies Private Limited',
      role: 'Database Operator',
      duration: 'Nov 2019 – Jun 2020',
      location: 'Noida, India',
      description: [
        'Maintained and updated import/export transaction databases.',
        'Verified, corrected, and uploaded large volumes of international trade data.',
        'Ensured data accuracy, consistency, and regulatory compliance.',
      ],
    },
  ] as Experience[],
  projects: [
    {
      name: 'Auto-Park (Parking Ticketing System)',
      description:
        'Optimized backend ticketing workflows to improve system performance and reliability.',
      technologies: ['Node.js', 'PostgreSQL', 'PDF Generation', 'Automation'],
      features: [
        'Automated detection of unpaid parking sessions and violation ticket generation.',
        'Built and optimized PDF ticket generation with email and physical letter dispatch.',
        'Integrated with Denmark’s legal compliance framework.',
        'Reduced manual intervention through end-to-end automation.',
      ],
    },
    {
      name: 'MITCP Mobile Parking App (Denmark)',
      description:
        'Contributed to development of a nationwide parking rental and management application.',
      technologies: ['Mobile App', 'Backend Integration', 'Payment Gateways'],
      features: [
        'Implemented automated workflows for guest, rental-based, and pay-and-go parking.',
        'Integrated camera-based parking validation systems.',
        'Enabled third-party parking purchases to enhance user flexibility.',
        'Maintained seamless backend coordination between app, infrastructure, and payments.',
      ],
    },
    {
      name: 'TMS – Template Management System',
      description: 'Designed and developed a standalone template management platform.',
      technologies: ['Angular', 'WYSIWYG Editor', 'PDF Generation'],
      features: [
        'Implemented dynamic templates with replaceable keywords.',
        'Built a configurable WYSIWYG editor.',
        'Developed bulk PDF generation with ZIP export.',
        'Reduced manual errors through reusable automation.',
      ],
    },
    {
      name: 'ParkGenie (India-Based Parking Platform)',
      description: 'Developed end-to-end parking booking and management system.',
      technologies: ['Web', 'Mobile', 'Backend'],
      features: [
        'Built Web, Partner, User, and Admin portals.',
        'Implemented backend services for listings, bookings, and automation.',
        'Supported mobile applications for partners and users.',
        'Enabled scalable role-based workflows.',
      ],
    },
    {
      name: 'PGPL Inventory Management System',
      description: 'Developed multi-warehouse inventory management platform.',
      technologies: ['Computer Vision', 'YOLO', 'Inventory Tracking'],
      features: [
        'Implemented camera-based inventory tracking.',
        'Integrated YOLO-based computer vision for reel detection.',
        'Built real-time shipment reconciliation workflows.',
        'Improved operational efficiency using AI-driven automation.',
      ],
    },
    {
      name: 'Kundelister (e-conomic Add-on)',
      description: 'Developed add-on system integrated with e-conomic platform.',
      technologies: ['Integration', 'Webhooks', 'iFrames'],
      features: [
        'Simplified customer and product workflows.',
        'Implemented iframe-based embedded integrations.',
        'Built webhook-based data synchronization.',
        'Improved usability while maintaining data consistency.',
      ],
    },
    {
      name: 'MyAuthorsHub (Multi-Vendor Book Commerce Platform)',
      description: 'Developed multi-vendor e-commerce platform for publishing and distribution.',
      technologies: ['E-commerce', 'Multi-vendor', 'Global Distribution'],
      features: [
        'Built Partner and User platforms for publishers, authors, and customers.',
        'Implemented hierarchical publishing and onboarding model.',
        'Enabled global book distribution across Amazon, Flipkart, Google Play Books.',
        'Designed automated royalty calculation and wallet payout system.',
      ],
    },
  ] as Project[],
  skills: [
    {
      name: 'Frontend',
      skills: ['Angular', 'React', 'Next.js', 'RxJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'REST APIs'],
    },
    {
      name: 'Styling',
      skills: ['Tailwind CSS', 'SCSS', 'SASS', 'Responsive Design'],
    },
    {
      name: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'System Design'],
    },
  ] as SkillCategory[],
  education: [
    {
      degree: 'Bachelor of Science (BSc) – Computer Science',
      institution: 'NIMS Institute of Management Solutions, Janakpuri, Delhi',
      year: 'Jan 2022',
    },
    {
      degree: 'Diploma – Computer Science',
      institution: 'Aditya Institute of Technology, Vasant Kunj, New Delhi',
      year: 'Apr 2019',
    },
  ],
};
