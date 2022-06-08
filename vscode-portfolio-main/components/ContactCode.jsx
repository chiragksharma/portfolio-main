import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'chiragsharma.me',
    href: 'https://github.com/chiragksharma',
  },
  {
    social: 'email',
    link: 'chiragksharma15@gmail.com',
    href: 'mailto:chiragksharma15@gmail.com',
  },
  {
    social: 'github',
    link: 'chiragksharma',
    href: 'https://github.com/chiragksharma',
  },
  {
    social: 'linkedin',
    link: 'chirag sharma',
    href: 'https://www.linkedin.com/in/chirag-kumar-sharma-5286b51b8/',
  },
  {
    social: 'twitter',
    link: '@chirags93395286',
    href: 'https://twitter.com/chirags93395286',
  },
  {
    social: 'instagram',
    link: 'chiragsharma862',
    href: 'https://www.instagram.com/chiragsharma862/',
  },
 
 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
