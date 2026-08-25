const method = [
  ['01','Product','Make the product legible, differentiated and ready to earn attention.'],
  ['02','Narrative','Build the story the market can understand, repeat and believe.'],
  ['03','Attention','Engineer distribution through creators, communities and channels.'],
  ['04','Trust','Compound credibility through proof, social signal and consistency.'],
  ['05','Conversion','Turn attention into users, sign-ups, revenue and durable momentum.']
];
export function MethodStrip(){return <div className="method-grid">{method.map(([n,t,d])=><div className="method-card" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>}
