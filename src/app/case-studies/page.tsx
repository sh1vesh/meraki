import { CaseCard } from '@/components/CaseCard';
import { caseStudies } from '@/data/caseStudies';
export default function CaseStudies(){return <><section className="page-hero shell"><span className="eyebrow">Case studies</span><h1>Work measured in market movement.</h1><p>Selected campaigns across Web3, consumer tech, finance, SportsFi, RWA, social products and emerging ecosystems.</p></section><section className="section shell"><div className="case-grid">{caseStudies.map(item=><CaseCard item={item} key={item.slug}/>)}</div></section></>}
