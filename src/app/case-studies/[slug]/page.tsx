import Image from 'next/image';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';

export function generateStaticParams(){return caseStudies.map(({slug})=>({slug}));}
export default function CaseStudyPage({params}:{params:{slug:string}}){
 const item=getCaseStudy(params.slug); if(!item) notFound();
 return <>
 <section className="case-hero shell"><div><span className="eyebrow">Case study · {item.sector}</span><h1>Meraki × {item.name}</h1><p>{item.summary}</p></div><div className="case-hero-metric"><strong>{item.featuredMetric}</strong><span>{item.featuredLabel}</span></div></section>
 <section className="shell metric-row">{item.metrics.map(m=><div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</section>
 <section className="section shell case-layout"><div className="case-copy"><span className="eyebrow">Challenge</span><h2>{item.challenge}</h2><span className="eyebrow gap">Strategy</span><p>{item.strategy}</p><span className="eyebrow gap">Execution</span><ul>{item.execution.map(x=><li key={x}>{x}</li>)}</ul><span className="eyebrow gap">Outcomes</span><ul>{item.outcomes.map(x=><li key={x}>{x}</li>)}</ul></div><div className="case-proof"><Image src={item.image} alt={`${item.name} campaign evidence`} width={1600} height={1100}/><p>Original campaign recap supplied by Meraki. Public-facing metric language should be kept aligned with source records before publication.</p></div></section>
 </>
}
