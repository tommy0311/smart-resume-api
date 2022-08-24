const createWorks = () => {
  return [
    {
      id: (Date.now() + Math.random()).toString(36),
      company: 'My Company1',
      title: 'My Title',
      years: '2020 - Present',
      createdAt: Date.now()
    },
    {
      id: (Date.now() + Math.random()).toString(36),
      company: 'My Company2',
      title: 'My Title',
      years: '2020 - Present',
      createdAt: Date.now()
    }
  ]
}

const createIcons = () => {
  return [
    {
      name: 'HTML 5',
      class: 'devicon-html5-plain',
      select: true
    },
    {
      name: 'CSS 3',
      class: 'devicon-css3-plain',
      select: true
    },
    {
      name: 'Angular',
      class: 'devicon-angularjs-plain',
      select: false
    },
    {
      name: 'TypeScript',
      class: 'devicon-typescript-plain',
      select: false
    },
    {
      name: 'JavaScript',
      class: 'devicon-javascript-plain',
      select: false
    },
    {
      name: 'Sass',
      class: 'devicon-sass-original',
      select: false
    },
    {
      name: 'Bootstrap',
      class: 'devicon-bootstrap-plain',
      select: false
    },
    {
      name: 'C#',
      class: 'devicon-csharp-plain',
      select: false
    },
    {
      name: 'MySql',
      class: 'devicon-mysql-plain',
      select: false
    }
  ]
}

const createTechs = () => {
  return [
    {
      name: 'Express.js',
      select: true
    },
    {
      name: 'MySQL',
      select: false
    },
    {
      name: 'MongoDB',
      select: false
    },
    {
      name: 'Sequelize',
      select: false
    },
    {
      name: 'Mongoose',
      select: false
    },
    {
      name: 'RESTful API',
      select: false
    },
    {
      name: 'React',
      select: false
    },
    {
      name: 'React Redux',
      select: false
    },
    {
      name: 'React Router',
      select: false
    },
    {
      name: 'React Bootstrap',
      select: false
    },
    {
      name: 'Vue',
      select: false
    },
    {
      name: 'Vuex',
      select: false
    },
    {
      name: 'Handlebars',
      select: false
    },
    {
      name: 'Sass',
      select: false
    }
  ]
}

const createProjects = () => {
  return [
    {
      title: 'Animal Shelter',
      startDate: '2020',
      description: "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      images: [
        '/images/portfolio/animal-shelter/p1.jpg',
        '/images/portfolio/animal-shelter/p2.jpg'
      ],
      url: '',
      technologies: [
        {
          class: 'devicon-angularjs-plain',
          name: 'Angular'
        },
        {
          class: 'devicon-typescript-plain',
          name: 'TypeScript'
        },
        {
          class: 'devicon-csharp-plain',
          name: 'C#'
        }
      ]
    },
    {
      title: 'Photography',
      startDate: '2018',
      description: "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      images: [
        '/images/portfolio/photography/p1.jpg',
        '/images/portfolio/photography/p2.jpg'
      ],
      url: 'https://github.com',
      technologies: [
        {
          class: 'devicon-react-original',
          name: 'React'
        },
        {
          class: 'devicon-javascript-plain',
          name: 'JavaScript'
        }
      ]
    },
    {
      title: '3D Object Viewer',
      startDate: '2015',
      description: "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      images: [
        '/images/portfolio/adventure/p1.jpg',
        '/images/portfolio/adventure/p2.jpg'
      ],
      url: 'https://github.com',
      technologies: [
        {
          class: 'devicon-angularjs-plain',
          name: 'Angular'
        },
        {
          class: 'devicon-typescript-plain',
          name: 'TypeScript'
        },
        {
          class: 'devicon-csharp-plain',
          name: 'C#'
        }
      ]
    }
  ]
}

const createBasicInfo = () => {
  return {
    resumeName: 'USER RESUME',
    name: 'USER NAME',
    titles: ['Front-end Developer', 'Senior Data Engineer', 'Dev Team lead', 'Mobile App Developer'],
    social: [
      {
        name: 'github',
        url: 'https://github.com',
        class: 'fab fa-github'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com',

        class: 'fab fa-instagram'
      }
    ],
    image: 'myProfile.jpg',
    description_header: 'Hi',
    description: "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
    sectionName: {
      about: 'About me',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience'
    }
  }
}

module.exports = { createWorks, createIcons, createTechs, createProjects, createBasicInfo }
