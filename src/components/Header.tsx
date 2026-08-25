import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Method','/method'],['Services','/services'],['Case Studies','/case-studies'],['Industries','/industries'],['About','/about']
];

export function Header() {
  return <header className="site-header">
    <div className="shell nav-wrap">
      <Link href="/" className="brand" aria-label="Meraki home">
        <Image src="/brand/meraki-mark.png" alt="Meraki" width={42} height={42} className="brand-mark" />
        <span>MERAKI</span>
      </Link>
      <nav className="nav-links">
        {links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link href="/contact" className="button small">Start a project</Link>
    </div>
  </header>;
}
