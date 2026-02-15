export interface ServiceItem {
  title: string;
  slug: string;
  areas: string | null;
  description: string;
  details: string[];
}

export const industries: ServiceItem[] = [
  {
    title: "Citizenship by Investment",
    slug: "citizenship-by-investment",
    areas: "6 programs",
    description: "Expert guidance through the world's leading citizenship by investment programs at every step.",
    details: [
      "Citizenship Capital Group provides full-service advisory for citizenship by investment programs across the Caribbean and Europe. We guide clients through program selection, documentation, due diligence, and application management.",
      "Our team has deep relationships with government agencies in every jurisdiction we serve, enabling us to provide insights and support that go beyond what other firms can offer. With a 99% approval rate across over 1,500 applications, our track record speaks for itself.",
      "Programs we cover include Antigua & Barbuda, Dominica, Grenada, Malta, Saint Lucia, and St. Kitts & Nevis. Each program has distinct advantages, and our advisors will help you identify the best fit for your goals, timeline, and budget.",
    ],
  },
  {
    title: "Residency by Investment",
    slug: "residency-by-investment",
    areas: "4 programs",
    description: "Secure European and global residency through strategic investment in qualifying programs.",
    details: [
      "Our residency by investment practice covers the most sought-after programs in Europe and beyond. Whether you are looking for Schengen Area access, a pathway to EU citizenship, or a strategic base for international business, we have the expertise to guide you.",
      "We cover programs in Greece, Hungary, Latvia, Portugal, Spain, and the USA (EB-5). Our advisors provide end-to-end support from initial consultation through to residency permit issuance and renewal.",
      "Each program has unique requirements, investment thresholds, and benefits. Our team stays current with regulatory changes and policy updates to ensure clients receive the most accurate and timely advice.",
    ],
  },
  {
    title: "Family Office Advisory",
    slug: "family-office",
    areas: null,
    description: "Integrated advisory services for family offices managing global mobility and wealth structuring.",
    details: [
      "Our family office advisory practice brings together investment migration expertise with broader wealth management considerations. We work closely with family offices to develop strategies that address mobility, tax efficiency, succession planning, and asset protection.",
      "We collaborate with families' existing advisors, including tax counsel, wealth managers, and estate planners, to ensure that investment migration decisions are fully integrated into the broader family strategy.",
      "Our approach is long-term and practical. We help families think beyond today's needs, creating flexibility and optionality for future generations.",
    ],
  },
  {
    title: "Government Advisory",
    slug: "government-advisory",
    areas: null,
    description: "Advising governments on the design, development, and implementation of investment migration programs.",
    details: [
      "Citizenship Capital Group's sovereign advisory practice assists government agencies in developing and operating investment migration programs that meet international standards while achieving national economic objectives.",
      "Our team brings decades of combined experience in program design, regulatory frameworks, due diligence systems, and marketing strategies. We have contributed to program design in multiple jurisdictions across the Caribbean and beyond.",
      "We work closely with government stakeholders to balance the need for economic development with the imperative of maintaining program integrity and international reputation.",
    ],
  },
  {
    title: "Asset Protection & Structuring",
    slug: "asset-protection",
    areas: null,
    description: "Strategic asset protection and international structuring to safeguard your wealth across borders.",
    details: [
      "Our asset protection practice helps clients structure their international holdings to minimize risk and maximize flexibility. We work with qualified legal and tax professionals to develop structures that are compliant, efficient, and resilient.",
      "Services include international trust formation, corporate structuring, holding company optimization, and cross-border estate planning. Each solution is designed around the client's specific circumstances and jurisdictional considerations.",
      "We recognize that asset protection is closely linked to mobility planning. Our integrated approach ensures that your investment migration strategy and your asset protection framework work together effectively.",
    ],
  },
  {
    title: "Tax Planning & Optimization",
    slug: "tax-planning",
    areas: null,
    description: "International tax planning strategies that complement your investment migration objectives.",
    details: [
      "Effective tax planning is a critical component of any investment migration strategy. Our team works with leading international tax advisors to help clients understand and optimize their tax position across multiple jurisdictions.",
      "We provide guidance on topics including tax residency planning, non-habitual resident regimes, territorial taxation, capital gains optimization, and succession tax planning.",
      "Our approach is always collaborative. We work with your existing tax advisors to ensure that recommendations are practical, compliant, and fully integrated into your broader financial strategy.",
    ],
  },
  {
    title: "Real Estate Advisory",
    slug: "real-estate",
    areas: "3 areas",
    description: "Expert guidance on qualifying real estate investments for citizenship and residency programs.",
    details: [
      "Many citizenship and residency programs require investment in approved real estate developments. Our real estate advisory practice helps clients identify, evaluate, and acquire qualifying properties that meet program requirements while offering sound investment fundamentals.",
      "We maintain relationships with approved developers across all program jurisdictions, giving our clients access to the best qualifying projects. Our team conducts thorough due diligence on each property, including title verification, developer assessment, and market analysis.",
      "Whether you are looking for a personal residence, a rental investment, or a hotel resort share, our real estate team will guide you to the right property for your needs and budget.",
    ],
  },
  {
    title: "Wealth Management",
    slug: "wealth-management",
    areas: null,
    description: "Coordinating investment migration with your broader wealth management strategies.",
    details: [
      "Our wealth management coordination service ensures that your investment migration decisions are fully aligned with your broader financial objectives. We work with your existing wealth managers and financial advisors to create a cohesive strategy.",
      "Services include investment portfolio review in the context of migration, currency risk assessment, insurance optimization across jurisdictions, and banking relationship establishment in new countries of residence.",
      "Our goal is not to replace your existing financial advisors, but to add a layer of international mobility expertise that strengthens your overall wealth management framework.",
    ],
  },
];

export const practices: ServiceItem[] = [
  {
    title: "Due Diligence & Compliance",
    slug: "due-diligence",
    areas: null,
    description: "Thorough due diligence screening and compliance solutions for investment migration.",
    details: [
      "Due diligence is the cornerstone of our practice. We conduct thorough pre-screening of all clients before any formal application is submitted, ensuring that only qualified applicants proceed through the process.",
      "Our proprietary screening methodology includes checks against international sanctions lists, criminal databases, adverse media searches, and politically exposed persons registers. We work with leading international due diligence firms to ensure the highest standards of verification.",
      "This rigorous approach contributes directly to our 99% approval rate and protects our clients from the cost and difficulty of application rejection.",
    ],
  },
  {
    title: "Immigration Law",
    slug: "immigration-law",
    areas: "3 areas",
    description: "Expert immigration legal services supporting citizenship and residency applications worldwide.",
    details: [
      "Our immigration law practice provides the legal foundation for all citizenship and residency by investment applications. Our team of qualified immigration lawyers ensures that every application is legally sound and fully compliant with program requirements.",
      "We handle all legal aspects of the application process, including document legalization, sworn translations, affidavits, and legal opinions. Our lawyers are admitted to practice in multiple jurisdictions and maintain current knowledge of immigration law developments worldwide.",
      "For complex cases involving dual nationality restrictions, prior visa refusals, or unusual circumstances, our legal team provides strategic advice and practical solutions.",
    ],
  },
  {
    title: "Corporate Structuring",
    slug: "corporate-structuring",
    areas: null,
    description: "International corporate structures optimized for global mobility and business operations.",
    details: [
      "Our corporate structuring practice helps clients establish and optimize corporate structures that support their international mobility and business objectives. We work with qualified legal and tax professionals in each jurisdiction to ensure full compliance.",
      "Services include holding company formation, international subsidiary structuring, nominee arrangements, and corporate governance frameworks. Each structure is designed with both current needs and future flexibility in mind.",
    ],
  },
  {
    title: "Global Compliance",
    slug: "global-compliance",
    areas: null,
    description: "Managing complex global regulatory requirements with confidence and precision.",
    details: [
      "The investment migration industry operates within an increasingly complex regulatory environment. Our global compliance practice helps clients and partner organizations manage anti-money laundering regulations, sanctions requirements, and cross-border compliance obligations.",
      "We provide compliance training for partner organizations, regulatory advisory services for government agencies, and ongoing monitoring of regulatory developments that may affect our clients' positions.",
    ],
  },
  {
    title: "International Tax Law",
    slug: "international-tax-law",
    areas: null,
    description: "Cross-border tax advisory integrated with investment migration planning.",
    details: [
      "Our international tax law practice works at the intersection of taxation and mobility. We help clients understand the tax implications of acquiring new citizenship or residency, changing tax residence, and structuring cross-border investments.",
      "We collaborate with leading international tax law firms to provide thorough advice on double taxation treaties, exchange of information agreements, substance requirements, and beneficial ownership reporting.",
    ],
  },
  {
    title: "Private Client Services",
    slug: "private-client",
    areas: null,
    description: "Dedicated advisory services for ultra-high-net-worth individuals and families.",
    details: [
      "Our private client practice provides the highest level of personalized service for ultra-high-net-worth individuals and families. Each private client engagement is led by a senior partner and supported by a dedicated team of specialists.",
      "Services include multi-program strategy development, VIP application management, concierge relocation support, and ongoing advisory on maintaining and optimizing citizenship and residency positions over time.",
    ],
  },
  {
    title: "Cross-Border Transactions",
    slug: "cross-border-transactions",
    areas: null,
    description: "Facilitating international transactions in the context of investment migration.",
    details: [
      "Cross-border transactions are inherent to investment migration. Our team assists clients with the legal, regulatory, and practical aspects of making qualifying investments across international borders.",
      "We coordinate with banks, escrow agents, developers, and government agencies to ensure smooth transaction execution. Our experience with international fund transfers, currency conversion, and regulatory approvals streamlines the investment process.",
    ],
  },
  {
    title: "Regulatory Affairs",
    slug: "regulatory-affairs",
    areas: null,
    description: "Monitoring and interpreting evolving investment migration regulations worldwide.",
    details: [
      "The investment migration regulatory environment is constantly evolving. Our regulatory affairs practice monitors developments across all jurisdictions we serve, providing clients and partner organizations with timely analysis of regulatory changes.",
      "We maintain active engagement with regulatory bodies, industry associations, and government stakeholders to stay ahead of policy shifts. This intelligence directly informs our advisory recommendations and ensures clients are always working with current information.",
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return [...industries, ...practices].find(s => s.slug === slug);
};
