import Link from 'next/link';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { MethodStrip } from '@/components/MethodStrip';
import { CaseCard } from '@/components/CaseCard';
import { caseStudies } from '@/data/caseStudies';

export default function Home(){
 const featured = caseStudies.slice(0,6);
 return <>
  <section className="hero shell">
   <div className="hero-glow"/>
   <div className="hero-kicker"><Sparkles size={15}/> Web3 & AI growth company</div>
   <h1>We build markets around <em>products worth noticing.</em></h1>
   <p className="hero-copy">Strategy, narrative and distribution for companies building the next layer of technology. From category creation to community activation, Meraki turns attention into measurable momentum.</p>
   <div className="hero-actions"><Link href="/case-studies" className="button">Explore our work <ArrowUpRight size={17}/></Link><Link href="/method" className="button ghost"><Play size={15}/> The Meraki Method</Link></div>
   <div className="hero-rule"/>
   <div className="proof-grid"><div><strong>500+</strong><span>campaigns managed</span></div><div><strong>9</strong><span>technology verticals</span></div><div><strong>1M+</strong><span>impressions in one rapid case</span></div><div><strong>4.5K+</strong><span>organic sign-ups in one case</span></div></div>
  </section>

  <section className="section shell"><div className="section-head"><span className="eyebrow">The Meraki Method</span><h2>Growth is a system, not a stunt.</h2><p>Five connected layers take a product from being available to being understood, trusted and chosen.</p></div><MethodStrip/><div className="section-link"><Link href="/method">Explore the full method <ArrowUpRight size={16}/></Link></div></section>

  <section className="section shell"><div className="section-head split"><div><span className="eyebrow">Selected outcomes</span><h2>Proof over promises.</h2></div><p>Campaigns across Web3, AI, DeFi, infrastructure, ecosystems, consumer products, NFTs and L1/L2 networks.</p></div><div className="case-grid">{featured.map(item=><CaseCard item={item} key={item.slug}/>)}</div><div className="section-link"><Link href="/case-studies">View all case studies <ArrowUpRight size={16}/></Link></div></section>

  <section className="section shell"><div className="manifesto"><span className="eyebrow">What we do</span><h2>Strategy that survives contact with the market.</h2><div className="manifesto-grid"><p>We help ambitious teams sharpen positioning, create narratives, activate creators and communities, build trust and convert attention into business outcomes.</p><div className="service-list"><span>Go-to-market & positioning</span><span>Narrative systems & content</span><span>KOL / creator distribution</span><span>Community growth</span><span>Launch & ecosystem activation</span><span>Performance & conversion</span></div></div><Link href="/services" className="button ghost">See capabilities <ArrowUpRight size={17}/></Link></div></section>

  <section className="section shell"><div className="cta"><span className="eyebrow">Build with Meraki</span><h2>Your product deserves more than noise.</h2><p>Tell us what you are building, where you are stuck, and what the market needs to believe next.</p><Link href="/contact" className="button light">Start a project <ArrowUpRight size={17}/></Link></div></section>
 </>;
}
