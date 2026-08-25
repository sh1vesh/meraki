import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div>
        <Image src="/brand/meraki-mark.png" alt="Meraki" width={54} height={54} />
        <h3>Markets are built, not found.</h3>
        <p>Strategy, narrative and distribution for Web3, AI and emerging technology.</p>
      </div>
      <div><span className="eyebrow">Explore</span><Link href="/method">Method</Link><Link href="/services">Services</Link><Link href="/case-studies">Case Studies</Link></div>
      <div><span className="eyebrow">Company</span><Link href="/industries">Industries</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
    </div>
    <div className="shell footer-bottom"><span>© 2026 Meraki.</span><span>Web3 · AI · Emerging Tech</span></div>
  </footer>;
}
