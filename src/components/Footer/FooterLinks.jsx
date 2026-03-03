import styles from './Footer.module.css';

const groups = [
  {
    title: 'Product',
    links: ['Features', 'Solution', 'How it Works', 'Security'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Team', 'Contact'],
  },
  {
    title: 'Resources',
    links: ["FAQ's", 'Help Center'],
  },
  {
    title: 'Terms and Policy',
    links: ["Privacy Policy", 'Terms of Service'],
  },
];

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      {groups.map((group) => (
        <div key={group.title}>
          <h4>{group.title}</h4>
          {group.links.map((l) => (
            <a key={l} href='#'>
              {l}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
