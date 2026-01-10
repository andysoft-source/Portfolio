// Personal Information Constants
export const PERSONAL_INFO = {
  name: 'Andy',
  title: 'Full-Stack Developer | AI Integration Specialist',
  location: 'Taguig, National Capital Region, Philippines',
  email: 'andysoft9333@outlook.com',
  phone: '+1 (785) 260-2480',
  social: {
    github: 'https://github.com/andysofthub',
    linkedin: 'https://www.linkedin.com/in/andy-chan9333',
    resume: process.env.NODE_ENV === 'development' ? '/api/download-cv' : '/Andy-Resume.pdf',
    portfolio: 'https://portfolio-andy-soft.vercel.app',
  },
};

