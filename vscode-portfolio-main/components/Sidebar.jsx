import Link from 'next/link';
import Explorer from './Explorer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';
import styles1 from '../styles/Explorer.module.css';


const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  // {
  //   Icon: GithubIcon,
  //   path: '/',
  // },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  // {
  //   Icon: PencilIcon,
  //   path: '/articles',
  // },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [ExprolerOpen, setExprolerOpen] = useState(true);


  return (
    
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}  onClick={() => setExprolerOpen(!ExprolerOpen)} >
            
            
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <div className={styles1.explorer} style={ExprolerOpen ? { display: 'block' } : { display: 'none' }} >
                       
                       </div>
              
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
                />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link href={path} key={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
    
  );
};

export default Sidebar;
