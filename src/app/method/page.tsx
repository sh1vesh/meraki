import { MethodStrip } from '@/components/MethodStrip';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
const layers = [
 ['Product','Hephaestus / The Forge','Before distribution, the offer needs a reason to exist. We pressure-test the product story, audience fit, differentiation and proof so marketing amplifies substance rather than masking gaps.'],
 ['Narrative','Athena / Strategy','Markets move around stories they can repeat. We define category, positioning, language, founder POV and campaign narratives that make the product easy to understand and hard to ignore.'],
 ['Attention','Hermes / Distribution','Attention is engineered through the right mix of creators, communities, social surfaces, launch moments and paid or organic amplification.'],
 ['Trust','The Temple / Proof','Credibility comes from consistency, third-party signal, clear evidence and the feeling that a brand belongs in its category. We design for that compounding effect.'],
 ['Conversion','The Laurel / Outcome','The final layer connects campaigns to measurable actions: sign-ups, users, communities, ecosystem participation, partnerships and revenue intent.']
];
export default function Method(){return <>
<section className="page-hero shell"><span className="eyebrow">The Meraki Method</span><h1>Product. Narrative. Attention. Trust. Conversion.</h1><p>A five-layer operating system for taking emerging technology from product truth to market momentum.</p></section>
<section className="section shell"><MethodStrip/></section>
<section className="section shell method-detail">{layers.map(([t,m,d],i)=><article key={t}><div className="method-num">0{i+1}</div><div><span className="eyebrow">{m}</span><h2>{t}</h2><p>{d}</p></div></article>)}</section>
<section className="section shell"><div className="video-concept"><span className="eyebrow">Launch film direction</span><h2>A cinematic story about how markets are made.</h2><p>The site is structured to accommodate a future 60–90 second Method film using original or licensed cinematic footage, product UI, campaign proof and restrained Greek mythology motifs.</p><Link href="/contact" className="button">Build the next launch <ArrowUpRight size={17}/></Link></div></section>
</>}
