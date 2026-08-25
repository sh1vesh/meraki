export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  campaign: string;
  duration: string;
  summary: string;
  image: string;
  featuredMetric: string;
  featuredLabel: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  strategy: string;
  execution: string[];
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rain-protocol', name: 'Rain Protocol', sector: 'Web3 / Finance', campaign: 'Tier 1 Community Sprint', duration: '2 hours',
    summary: 'A high-velocity activation built to turn a narrow attention window into coordinated community momentum.', image: '/case-studies/rain-protocol.png',
    featuredMetric: '83K+', featuredLabel: 'impressions',
    metrics: [{label:'Creator posts',value:'152'},{label:'Engagements',value:'7,823'},{label:'Avg. engagement rate',value:'9.34%'},{label:'Duration',value:'2 hrs'}],
    challenge: 'Convert time-scarcity into structured momentum without relying on random hype.',
    strategy: 'Coordinate a compressed Tier 1 activation around a single narrative, clear posting windows and fast creator feedback loops.',
    execution: ['Aligned creators around one campaign narrative','Sequenced posts to build velocity instead of isolated spikes','Used real-time coordination to sustain attention through the full sprint'],
    outcomes: ['High engagement density in a short window','Visible lift in ecosystem conversation and profile activity','A repeatable model for high-speed community activation']
  },
  {
    slug: 'sixr-cricket', name: 'SIXR Cricket', sector: 'SportsFi / Web3', campaign: 'UGC & KOL Campaign', duration: '7 days',
    summary: 'Creator-led distribution designed to earn organic attention around SIXR and its Pulse partnership.', image: '/case-studies/sixr-cricket.png',
    featuredMetric: '150K+', featuredLabel: 'impressions',
    metrics: [{label:'KOL posts',value:'110+'},{label:'Smart followers',value:'11K+'},{label:'Avg. engagement rate',value:'~7.5%'},{label:'Duration',value:'7 days'}],
    challenge: 'Create authentic SportsFi conversation while expanding awareness beyond the existing Web3 audience.',
    strategy: 'Blend creator discovery, UGC and strategic QRTs to bridge Web2 cricket audiences with Web3 builders.',
    execution: ['Activated relevant creators and communities','Focused content on cricket ownership and real-time participation','Used QRTs to compound credible third-party conversation'],
    outcomes: ['Creator discovery and ecosystem reach','Stronger Web2-to-Web3 bridge','Persistent visibility beyond the initial launch window']
  },
  {
    slug: 'goldbase', name: 'Goldbase', sector: 'RWA / NFT', campaign: 'Tier 2 Creator Activation', duration: '5 days',
    summary: 'A concentrated RWA campaign focused on attention quality, organic engagement and sign-up intent.', image: '/case-studies/goldbase.png',
    featuredMetric: '50K+', featuredLabel: 'impressions',
    metrics: [{label:'KOL posts',value:'70+'},{label:'Avg. impressions',value:'1K+'},{label:'Smart followers',value:'1K+'},{label:'Duration',value:'5 days'}],
    challenge: 'Explain a differentiated gold-backed NFT proposition while creating measurable interest in a short campaign window.',
    strategy: 'Simplify the product story, then distribute it through selected creators whose audiences overlap with RWA, Solana and NFT discovery.',
    execution: ['Built creator messaging around physical gold backing','Prioritized relevant audiences over raw reach','Drove repeat exposure across a five-day window'],
    outcomes: ['High-quality engagement and sign-up intent','50K+ organic impressions','Foundation of targeted followers for future activations']
  },
  {
    slug: 'mint', name: 'MINT', sector: 'Consumer Web3', campaign: 'Multi-wave Tier 1 QRT', duration: '8 weeks',
    summary: 'Six coordinated campaign waves designed to create sustained presence instead of a one-off launch spike.', image: '/case-studies/mint.png',
    featuredMetric: '520K+', featuredLabel: 'impressions',
    metrics: [{label:'KOL posts',value:'480+'},{label:'Avg. impressions',value:'1.5K+'},{label:'Smart followers',value:'14.5K+'},{label:'Campaign waves',value:'6'}],
    challenge: 'Build sustained brand awareness through a soft-launch period while maintaining audience quality.',
    strategy: 'Run multiple coordinated activation waves with distinct creator sets and repeat narrative reinforcement.',
    execution: ['Six campaign waves across eight weeks','Curated creators by audience fit and performance','Maintained narrative consistency across each activation'],
    outcomes: ['520K+ impressions','480+ creator posts','Strong repeat visibility and sustained community presence']
  },
  {
    slug: 'fairplay', name: 'Fairplay', sector: 'Trading / Web3', campaign: 'Tier 2 Creator Campaign', duration: '7 days',
    summary: 'A creator-led activation built around community competition, discovery and high-intent participation.', image: '/case-studies/fairplay.png',
    featuredMetric: '90K+', featuredLabel: 'impressions',
    metrics: [{label:'KOL posts',value:'80+'},{label:'Avg. impressions',value:'1K+'},{label:'Smart followers',value:'7K+'},{label:'Duration',value:'7 days'}],
    challenge: 'Generate qualified attention around a competitive community mechanic while keeping conversation organic.',
    strategy: 'Pair creator distribution with a clear participation narrative and community-led social proof.',
    execution: ['Activated 80+ targeted creators','Centered content on competition and participation','Used repeated community touchpoints to extend reach'],
    outcomes: ['90K+ impressions','High-intent community participation','Stronger brand visibility among active Web3 users']
  },
  {
    slug: 'voice', name: 'VOICE', sector: 'OpinionFi / Social', campaign: 'T1 UGC + 1:1 KOLs', duration: 'Multiple waves',
    summary: 'A coordinated social-camp rollout built to acquire users, expand audience and create repeated product conversation.', image: '/case-studies/voice.png',
    featuredMetric: '4.5K+', featuredLabel: 'organic sign-ups',
    metrics: [{label:'Impressions',value:'250K+'},{label:'KOL posts',value:'170+'},{label:'Smart followers',value:'8.8K+'},{label:'Sign-ups',value:'4.5K+'}],
    challenge: 'Turn a pre-launch social mechanic into measurable acquisition rather than vanity engagement.',
    strategy: 'Combine Tier 1 reach with one-to-one KOL activations, UGC and repeated conversion-oriented campaign waves.',
    execution: ['Built campaign flow around social-camp participation','Activated 170+ KOL posts across multiple waves','Aligned creator messaging with sign-up actions'],
    outcomes: ['4.5K+ organic sign-ups','2.8K+ organic followers reported during the activation period','250K+ impressions with repeated product exposure']
  },
  {
    slug: 'enlv', name: '$ENLV', sector: 'Public Markets / Crypto-adjacent', campaign: 'Two-Wave Burst Campaign', duration: '2 rapid waves',
    summary: 'Two coordinated rapid-response campaigns built around a high-attention earnings narrative and social-market conversation.', image: '/case-studies/enlv-wave-2.png',
    featuredMetric: '1M+', featuredLabel: 'combined impressions',
    metrics: [{label:'Wave 1 posts',value:'200+'},{label:'Wave 2 posts',value:'240+'},{label:'Smart followers',value:'9.5K+'},{label:'Activation style',value:'Rapid response'}],
    challenge: 'Move quickly around a market-moving news window while keeping distribution organized and credible.',
    strategy: 'Use coordinated burst campaigns to rapidly amplify a timely narrative through relevant creators and social proof.',
    execution: ['Two rapid campaign waves','Creator coordination under tight execution windows','Narrative amplification around public earnings news'],
    outcomes: ['1M+ combined impressions across the two waves','Reached broader X news conversation','Strong visibility during a short attention window']
  },
  {
    slug: 'league-of-sloths', name: 'League of Sloths', sector: 'NFT / Gaming', campaign: 'UGC + Community Funnel', duration: '4 days',
    summary: 'A focused NFT/community campaign that linked social attention directly to Discord and ecosystem growth.', image: '/case-studies/league-of-sloths.png',
    featuredMetric: '38K+', featuredLabel: 'impressions',
    metrics: [{label:'KOL posts',value:'70+'},{label:'Avg. impressions',value:'1.1K+'},{label:'Smart followers',value:'6K+'},{label:'Duration',value:'4 days'}],
    challenge: 'Create social traction while building a direct pathway into Discord during difficult market conditions.',
    strategy: 'Use a two-way funnel between X and Discord with community-native creative and tightly curated creator distribution.',
    execution: ['70+ creator posts','Direct X-to-Discord funnel','Community-focused creative and collaboration mechanics'],
    outcomes: ['38K+ impressions','Expanded visibility across NFT audiences','Built an engaged audience base despite challenging market conditions']
  }
];

export const getCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug);
