export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  bio: string[];
  specializations: string[];
}

export const team: TeamMember[] = [
  {
    slug: "alexandra-mercer",
    name: "Alexandra Mercer",
    role: "Managing Partner",
    location: "London",
    email: "a.mercer@javaidassociates.com",
    phone: "+44 20 7946 0958",
    bio: [
      "Alexandra Mercer is the Managing Partner of Javaid & Associates - Citizenship Capital Group, bringing over 25 years of experience in international law, investment migration, and private client advisory. She joined the firm to lead its investment migration division with a vision to provide exceptional service to high-net-worth individuals and families seeking global mobility solutions.",
      "Prior to joining Javaid & Associates, Alexandra served as a senior partner at a leading international law firm in London, where she built one of the UK's most respected immigration and citizenship practices. Her expertise spans citizenship by investment programs, tax-efficient structuring, and cross-border family planning.",
      "Alexandra is a frequent speaker at international migration conferences and has been recognized by leading industry publications as one of the most influential figures in investment migration. She holds degrees from Oxford University and Harvard Law School.",
    ],
    specializations: ["Investment Migration Strategy", "Private Client Advisory", "Cross-Border Tax Planning", "Family Office Structuring"],
  },
  {
    slug: "david-chen",
    name: "David Chen",
    role: "Senior Partner, Asia-Pacific",
    location: "Hong Kong",
    email: "d.chen@javaidassociates.com",
    phone: "+852 3103 7500",
    bio: [
      "David Chen leads the Asia-Pacific practice from Hong Kong, serving ultra-high-net-worth clients across Greater China, Southeast Asia, and the broader region. With over 20 years of experience, David has helped hundreds of families through complex immigration and citizenship pathways.",
      "David's practice focuses on citizenship by investment programs, particularly for clients from mainland China, Hong Kong, and Southeast Asia. He is known for his deep understanding of both Asian and Western regulatory frameworks, enabling him to provide truly cross-cultural advisory services.",
      "Before joining Javaid & Associates, David was a director at a major Asian wealth management firm, where he developed specialized immigration solutions for the firm's private banking clients. He is a graduate of the University of Hong Kong and Columbia Law School.",
    ],
    specializations: ["Asia-Pacific Market Strategy", "Wealth Management Integration", "Greater China Practice", "High-Value Program Advisory"],
  },
  {
    slug: "sophia-laurent",
    name: "Sophia Laurent",
    role: "Head of Citizenship Programs",
    location: "Dubai",
    email: "s.laurent@javaidassociates.com",
    phone: "+971 4 568 5220",
    bio: [
      "Sophia Laurent oversees all citizenship by investment program operations at Javaid & Associates - Citizenship Capital Group, managing relationships with government agencies across the Caribbean, Europe, and beyond. Based in Dubai, she serves clients throughout the Middle East, Africa, and South Asia.",
      "With over 15 years in the investment migration industry, Sophia has personally managed more than 1,000 successful citizenship applications. Her meticulous attention to detail and deep knowledge of program requirements contribute to the firm's industry-leading 99% approval rate.",
      "Sophia is a recognized expert in Caribbean CBI programs and has served as a consultant to several government agencies on program design and due diligence frameworks. She holds a law degree from Sorbonne University and an MBA from INSEAD.",
    ],
    specializations: ["Caribbean CBI Programs", "Government Relations", "Due Diligence Frameworks", "Application Management"],
  },
  {
    slug: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    role: "Director, Government Relations",
    location: "Montreal",
    email: "m.rodriguez@javaidassociates.com",
    phone: "+1 514 568 5220",
    bio: [
      "Marcus Rodriguez directs the government relations and sovereign advisory practice. Based in Montreal, he works directly with government agencies and regulatory bodies to develop and implement investment migration programs worldwide.",
      "Marcus brings a unique perspective having served in diplomatic roles before entering the private sector. His government experience includes postings in the Caribbean and Europe, where he developed deep expertise in the policy frameworks that underpin citizenship and residency programs.",
      "He is a sought-after advisor for nations considering the establishment or reform of investment migration programs, having contributed to program design in multiple jurisdictions. Marcus holds degrees from McGill University and the London School of Economics.",
    ],
    specializations: ["Government Advisory", "Program Design & Implementation", "Regulatory Compliance", "Sovereign Partnerships"],
  },
  {
    slug: "elena-koslov",
    name: "Elena Koslov",
    role: "Chief Compliance Officer",
    location: "Singapore",
    email: "e.koslov@javaidassociates.com",
    phone: "+65 6221 1234",
    bio: [
      "Elena Koslov serves as Chief Compliance Officer at Javaid & Associates - Citizenship Capital Group, ensuring that all firm operations and client applications meet the highest standards of regulatory compliance. Based in Singapore, she oversees the firm's global compliance framework.",
      "With a background in international financial regulation and anti-money laundering, Elena has over 18 years of experience in compliance roles at major international financial institutions. She developed the firm's proprietary compliance screening methodology that contributes to the exceptional approval rate.",
      "Elena is a certified anti-money laundering specialist (CAMS) and serves on the compliance advisory boards of several investment migration industry bodies. She holds a law degree from Moscow State University and an LLM from the National University of Singapore.",
    ],
    specializations: ["Regulatory Compliance", "Anti-Money Laundering", "Due Diligence Systems", "Risk Management"],
  },
  {
    slug: "james-harrington",
    name: "James Harrington",
    role: "Partner, Real Estate Advisory",
    location: "London",
    email: "j.harrington@javaidassociates.com",
    phone: "+44 20 7946 0959",
    bio: [
      "James Harrington leads the real estate advisory practice at Javaid & Associates - Citizenship Capital Group, helping clients identify and evaluate qualifying real estate investments for residency and citizenship programs. His practice covers properties across the Caribbean, Europe, and beyond.",
      "With 20 years of experience in international real estate, James brings deep market knowledge to the firm's investment migration practice. He has personally evaluated hundreds of approved developments across multiple program jurisdictions, ensuring clients make informed investment decisions.",
      "James works closely with approved developers, government agencies, and legal teams to streamline the property acquisition process for CBI and RBI applicants. He holds a degree in Estate Management from the Royal Agricultural University and is a Fellow of the Royal Institution of Chartered Surveyors (FRICS).",
    ],
    specializations: ["Qualifying Real Estate Investments", "Property Due Diligence", "Developer Relations", "Real Estate Market Analysis"],
  },
  {
    slug: "amara-okonkwo",
    name: "Amara Okonkwo",
    role: "Senior Associate, African Markets",
    location: "Dubai",
    email: "a.okonkwo@javaidassociates.com",
    phone: "+971 4 568 5221",
    bio: [
      "Amara Okonkwo serves African market clients from the Dubai office, specializing in investment migration solutions for high-net-worth individuals from across the continent. She has rapidly become one of the firm's most accomplished advisors since joining five years ago.",
      "Amara's understanding of the unique challenges and opportunities facing African investors, from currency controls to documentation requirements, makes her an invaluable resource for clients seeking global mobility. She has managed successful applications for clients from over 20 African nations.",
      "She holds degrees from the University of Lagos and University College London, and is fluent in English, French, and Yoruba.",
    ],
    specializations: ["African Market Advisory", "Currency & Transfer Compliance", "Family Migration Planning", "Emerging Market Clients"],
  },
  {
    slug: "thomas-winter",
    name: "Thomas Winter",
    role: "Associate, European Programs",
    location: "London",
    email: "t.winter@javaidassociates.com",
    phone: "+44 20 7946 0960",
    bio: [
      "Thomas Winter specializes in European residency and citizenship programs, with particular expertise in Portugal, Greece, Malta, and Spain. He guides clients through every stage of the European investment migration process.",
      "Before joining Javaid & Associates, Thomas practiced immigration law at a top-tier London firm, where he developed deep expertise in EU freedom of movement, residency rights, and citizenship acquisition through naturalization.",
      "Thomas holds a law degree from King's College London and a master's in EU Law from the College of Europe in Bruges.",
    ],
    specializations: ["European Golden Visa Programs", "EU Immigration Law", "Portuguese NHR Tax Regime", "Malta Citizenship"],
  },
];

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return team.find(m => m.slug === slug);
};
