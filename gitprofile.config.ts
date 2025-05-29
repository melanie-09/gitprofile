// gitprofile.config.ts

const CONFIG = { //comment
  github: {
    username: 'melanie-09', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Melanie Navaratna',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'melanie-navaratna',
    email: 'navaratna.melanie@gmail.com',
  },
  resume: {
    fileUrl:
      'file:///C:/Users/mop95/Downloads/Navaratna_Melanie_Resume_PLUS.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'TypeScript',
    'JavaScript',
    'React.js',
    'SQL',
    'Git',
    'HTML',
    'CSS',
    'Java',
    'Go'
  ],
  experiences: [
    {
      company: 'Rice University Information Security Office',
      position: 'Information Security Analyst Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: 'https://iso.rice.edu/',
    },
    {
      company: 'Maydm',
      position: 'Summer Program Instructor',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://www.maydm.org/',
    },
    {
      company: 'Rice Bikes',
      position: 'Personnel Manager and Manager on Shift',
      from: 'February 2023',
      to: 'present',
      companyLink: 'https://www.ricebikes.com/',
    },
  ],
  educations: [
    {
      institution: 'Rice University',
      degree: 'Bachelor\'s Degree',
      from: '2022',
      to: '2026 (expected)',
    }
  ],
  publications: [
    {
      title: 'Are Household Devices Spying on our Conversations?',
      conferenceName: '',
      journalName: 'Journal of PGSS',
      authors: 'Alisa Lo, Saishree Mupparaju, Melanie Navaratna, Krystof Purtell, Rohan Shah',
      link: 'https://sciences.pa-gov-schools.org/program/pgss-journal-archives/#1f2E6xUuL4hDIGdxG2Tv-l3WdDjtkjK4dhttps://',
      description:
        'The concept that phones and other household devices spy on human conversations has become increasingly debated in recent years, with many fully convinced that their electronic devices are listening in on their conversations. The belief is that phones use keywords or phrases from daily discussions to retarget advertisements related to these discussed topics. We collected data after applying a set of conversation and website stimuli to our devices to calculate a treatment effect that determines the presence of spying and advertisement retargeting. Contrary to the popular belief in spying phones, for all of our phone conversation data sets, we failed to reject the null hypothesis, meaning an inability to express a treatment effect. Our data and analysis indicate that the claim that devices spy on our conversations cannot be proven true; however, an effect too small to detect in our experiment remains a possibility.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
