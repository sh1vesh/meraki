const services = [
 ['01','Go-to-Market Strategy','Positioning, launch architecture, audience mapping, campaign design and market-entry planning.'],
 ['02','Narrative & Content Systems','Category language, founder POV, social content systems, launch narratives and editorial direction.'],
 ['03','KOL & Creator Marketing','Creator sourcing, campaign orchestration, 1:1 activations, UGC, QRT programs and distribution.'],
 ['04','Community Growth','Community campaigns, social-to-Discord/Telegram funnels, ecosystem participation and retention mechanics.'],
 ['05','Launch & Ecosystem Activation','Token, product, protocol, feature and ecosystem launches built around coordinated attention windows.'],
 ['06','Performance & Conversion','Campaign measurement, acquisition funnels, landing experiences, conversion paths and iteration.']
];
export default function Services(){return <><section className="page-hero shell"><span className="eyebrow">Capabilities</span><h1>Full-stack marketing for emerging technology.</h1><p>Built for teams that need strategy and execution to operate as one system.</p></section><section className="section shell"><div className="services-grid">{services.map(([n,t,d])=><article key={t}><span>{n}</span><h2>{t}</h2><p>{d}</p></article>)}</div></section></>}
