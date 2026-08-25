import Image from 'next/image';
import Link from 'next/link';
import { CaseStudy } from '@/data/caseStudies';

export function CaseCard({item}:{item:CaseStudy}){
 return <Link className="case-card" href={`/case-studies/${item.slug}`}>
   <div className="case-image"><Image src={item.image} alt={`${item.name} case study`} fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
   <div className="case-body"><div className="case-meta"><span>{item.sector}</span><span>{item.duration}</span></div><h3>{item.name}</h3><p>{item.summary}</p><div className="case-metric"><strong>{item.featuredMetric}</strong><span>{item.featuredLabel}</span></div></div>
 </Link>
}
