import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: 'markdown_icon.svg',
  },
  {
    name: 'skills.js',
    path: '/skills',
    icon: 'js_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: 'typescript.svg',
  },
  // {
  //   name: 'articles.json',
  //   path: '/articles',
  //   icon: 'json_icon.svg',
  // },
  // {
  //   name: 'github.md',
  //   path: '/',
  //   icon: 'markdown_icon.svg',
  // },
];

const explorerItems2 = [
  {
    name: 'Email.tsx',
    path: '/contact',
    icon: 'gmail.svg',
  },
  
];

const explorerItems3 = [
  {
    name: 'Hobbies.cpp',
    path: '/hobbies',
    icon: 'c.svg',
  },
  {
    name: 'Youtube.py',
    path: '/contact',
    icon: 'youtube.svg',
  },
  {
    name: 'Videos.js',
    path: '/contact',
    icon: 'camera.svg',
  },
  {
    name: 'Blogs.py',
    path: '/contact',
    icon: 'edit.svg',
  },
  {
    name: 'Reading.sin',
    path: '/contact',
    icon: 'sin.svg',
  },
  {
    name: 'Music.jsx',
    path: '/contact',
    icon: 'music.gif',
  },
  {
    name: 'startup.js',
    path: '/contact',
    icon: 'js_icon.svg',
  },

];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);
  const [miscOpen, setmiscOpen] = useState(true);
  

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      {/* 1. PORTFOLIO */}
      <div>        
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
     {/* 2. CONTACT */}
      <div>
      <input
          type="checkbox"
          className={styles.checkbox}
          id="contact-checkbox"
          checked={contactOpen}
          onChange={() => setContactOpen(!contactOpen)}
        />
      <label htmlFor="contact-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={contactOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Contact
        </label>
        <div
          className={styles.files}
          style={contactOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems2.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* 3. HOBBIES */}
      <div>
      <input
          type="checkbox"
          className={styles.checkbox}
          id="misc-checkbox"
          checked={miscOpen}
          onChange={() => setmiscOpen(!miscOpen)}
        />
      <label htmlFor="misc-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={miscOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Misc
        </label>
        <div
          className={styles.files}
          style={miscOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems3.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Explorer;
