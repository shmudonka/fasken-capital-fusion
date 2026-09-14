import programAntiguaBarbuda from "@/assets/program-antigua-barbuda.jpg";
import programDominica from "@/assets/program-dominica.jpg";
import programGrenada from "@/assets/program-grenada.jpg";
import programMalta from "@/assets/program-malta.jpg";
import programSaintLucia from "@/assets/program-saint-lucia.jpg";
import programStkitts from "@/assets/program-stkitts.jpg";
import programGreece from "@/assets/program-greece.jpg";
import programHungary from "@/assets/program-hungary.jpg";
import programLatvia from "@/assets/program-latvia.jpg";
import programPortugal from "@/assets/program-portugal.jpg";
import programSpain from "@/assets/program-spain.jpg";
import programUsaEb5 from "@/assets/program-usa-eb5.jpg";
import programTurkey from "@/assets/program-turkey.jpg";
import programQuebecCanada from "@/assets/program-quebec-canada.jpg";

export interface KeyFact {
  label: string;
  value: string;
}

export interface EvidenceSection {
  heading: string;
  items: string[];
  note?: string;
}

export interface ComparisonTable {
  heading: string;
  columns: string[];
  rows: string[][];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Program {
  slug: string;
  country: string;
  type: string;
  category: "citizenship" | "residency" | "business-visa";
  minInvestment: string;
  timeline: string;
  visaFree: string;
  description: string;
  benefits: string[];
  requirements: string[];
  process: string[];
  image?: string;
  /** Short hero tagline. Falls back to `description` when omitted. */
  summary?: string;
  /** Multi-paragraph overview. Falls back to `description` when omitted. */
  overview?: string[];
  /** Replaces the default four-stat bar when provided. */
  keyFacts?: KeyFact[];
  /** Rendered alongside `benefits` as an "Often a strong fit for" column. */
  bestFit?: string[];
  evidence?: EvidenceSection;
  comparison?: ComparisonTable;
  faqs?: Faq[];
  /** Overrides the default closing call-to-action copy. */
  ctaText?: string;
  /** Custom labels for the Requirements and Application Process headings. */
  requirementsHeading?: string;
  processHeading?: string;
}

const eVisaComparison: ComparisonTable = {
  heading: "E-1 and E-2 Comparison",
  columns: ["Issue", "E-1 Treaty Trader", "E-2 Treaty Investor"],
  rows: [
    [
      "Core qualification",
      "Substantial, principal trade between the United States and treaty country",
      "Substantial capital invested in a real, operating U.S. enterprise",
    ],
    ["Fixed dollar threshold", "No", "No fixed statutory minimum; proportionality applies"],
    [
      "Central evidence",
      "Recurring transactions and treaty-country trade ratio",
      "Committed at-risk capital, lawful funds, operations, and non-marginality",
    ],
    [
      "Applicant role",
      "Principal trader or qualified executive, supervisor, or essential employee",
      "Investor developing and directing the enterprise or qualified executive, supervisor, or essential employee",
    ],
    [
      "Family",
      "Spouse and unmarried children under 21 may qualify as dependents",
      "Spouse and unmarried children under 21 may qualify as dependents",
    ],
    ["Permanent residence", "Not granted by E-1 status", "Not granted by E-2 status"],
  ],
};

const eVisaFaqs: Faq[] = [
  {
    question: "Is E-1 or E-2 a green card?",
    answer:
      "No. Both are nonimmigrant classifications. They can support an extended U.S. business presence through continued qualification and approved extensions or renewed visas, but neither category by itself grants permanent residence.",
  },
  {
    question: "Which nationalities qualify?",
    answer:
      "Eligibility depends on the current U.S. treaty-country list and the applicant's nationality. E-1 and E-2 country coverage is not identical. Nationality and enterprise ownership should be screened before significant commitments are made.",
  },
  {
    question: "Is there a minimum E-2 investment?",
    answer:
      "U.S. law does not state a single minimum dollar amount. The adjudicator evaluates whether the capital is substantial relative to the cost of the business, sufficient to show commitment, and likely to support successful operations. Very low-cost businesses face a higher proportional investment expectation.",
  },
  {
    question: "Can borrowed funds qualify for E-2?",
    answer:
      "They may, depending on the structure. Debt secured by the assets of the E-2 enterprise generally does not count toward the qualifying investment. Personal debt secured by the investor's personal assets may be treated differently. The loan, collateral, lawful source, and transfer trail require careful review.",
  },
  {
    question: "Can funds remain in a bank account until approval?",
    answer:
      "Uncommitted or revocable funds generally are not considered an investment. Some transactions use a binding escrow arrangement conditioned on visa issuance, but the terms must place the funds irrevocably at risk subject to the qualifying condition.",
  },
  {
    question: "Must the E-2 business already be operating?",
    answer:
      "The enterprise must be real and active, and the investor must be investing or actively in the process of investing. A paper company or merely speculative plan is insufficient. The appropriate stage of operations depends on the facts and filing route.",
  },
  {
    question: "Does E-1 require a minimum number of transactions?",
    answer:
      "There is no universal numerical minimum. The record must show a sizable and continuing volume of trade. A series of recurring transactions generally presents more strongly than one isolated transaction, even if that transaction is valuable.",
  },
  {
    question: "Can family members accompany the principal applicant?",
    answer:
      "A spouse and unmarried children under 21 may seek derivative E status. Qualifying spouses in valid E dependent status may be employment authorized incident to status. Children may attend school but do not receive employment authorization through E dependent status.",
  },
  {
    question: "How long can an E visa holder stay?",
    answer:
      "Visa validity depends on the reciprocity schedule for the applicant's nationality and is different from authorized stay. Admission and extension periods are commonly granted in increments of up to two years, subject to eligibility and the I-94. Applicants should check the I-94 after every entry.",
  },
  {
    question: "Can an applicant apply inside the United States?",
    answer:
      "An eligible person may be able to request a change to or extension of E status through USCIS. That approval is status, not a visa foil for travel. A person who later travels abroad generally needs an E visa from a U.S. consular post to seek readmission in E classification.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Timing depends on the business's readiness, evidence development, filing route, consular post, appointment availability, and possible administrative processing. A case-specific estimate should be given only after reviewing the applicant, enterprise, and intended post.",
  },
  {
    question: "Is approval guaranteed?",
    answer:
      "No. Eligibility is adjudicated by the U.S. government, and no advisor can guarantee approval. Strong preparation improves clarity and readiness but does not remove government discretion.",
  },
];

export const programs: Program[] = [
  {
    slug: "antigua-barbuda",
    country: "Antigua & Barbuda",
    type: "Citizenship by Investment",
    category: "citizenship",
    image: programAntiguaBarbuda,
    minInvestment: "USD $230,000",
    timeline: "3-4 months",
    visaFree: "100+ countries",
    description: "Antigua and Barbuda's Citizenship by Investment Program, established in 2013, offers one of the most affordable and efficient pathways to Caribbean citizenship. The program provides visa-free travel to over 150 countries, including the UK and Schengen Area.",
    benefits: [
      "Visa-free travel to 150+ countries including UK, Schengen, Hong Kong, and Singapore",
      "No personal income tax, capital gains tax, or inheritance tax",
      "Dual citizenship permitted with no need to renounce current nationality",
      "Include spouse, children, parents, and grandparents in one application",
      "No minimum residency requirement, only 5 days in first 5 years",
      "Fast processing within 3-4 months",
    ],
    requirements: [
      "Minimum donation of USD $100,000 to the National Development Fund",
      "Or real estate investment of USD $200,000 in an approved project",
      "Or business investment of USD $400,000 individually or $200,000 jointly",
      "Clean criminal record and background check",
      "Good health and medical examination",
      "Non-refundable government processing fees apply",
    ],
    process: [
      "Initial consultation and eligibility assessment with Citizenship Capital Group",
      "Document collection and preparation of application package",
      "Submission of application to the Citizenship by Investment Unit (CIU)",
      "Due diligence and background verification",
      "Application review and approval by the CIU",
      "Investment completion and payment of government fees",
      "Issuance of Certificate of Citizenship and passport",
    ],
  },
  {
    slug: "dominica",
    country: "Dominica",
    type: "Economic Citizenship Program",
    category: "citizenship",
    image: programDominica,
    minInvestment: "USD $200,000",
    timeline: "3-4 months",
    visaFree: "134 countries",
    description: "Named the Nature Island for its unspoiled natural beauty, Dominica is one of the most breathtaking islands in the Caribbean. Officially the Commonwealth of Dominica, this island boasts pristine sandy beaches, lush green mountains, acres of unspoiled tropical rainforests, and some of the best diving and hiking in the Caribbean. A diverse blend of English, French, African and Carib peoples and cultures, Dominica is a politically and economically stable state with the lowest crime rate in the region.",
    benefits: [
      "Visa-free travel to 134 countries including Europe's Schengen zone, the U.K., Hong Kong, Malaysia, Singapore, and Turkey",
      "No physical residency requirements",
      "Inclusion of dependent children under 30 and unmarried daughters under 30 living with and fully supported by the main applicant",
      "Inclusion of dependent parents and grandparents over 65",
      "No education or managerial experience required",
      "No taxes on worldwide income for non-residents",
      "Dual citizenship recognized",
    ],
    requirements: [
      "Minimum donation of USD $200,000 to the Economic Diversification Fund (single applicant)",
      "Family of four: USD $250,000 including main applicant, spouse, and two dependents",
      "Or real estate investment of USD $220,000 in a government-approved project (held for minimum 3 years)",
      "Be of outstanding character with no criminal record",
      "Have excellent health",
      "Have a basic knowledge of English",
      "Due diligence and processing fees apply",
    ],
    process: [
      "Free initial assessment with our advisory team",
      "Engagement and document preparation",
      "Application submission to the CBIU",
      "Due diligence screening by international agencies",
      "Government review and approval decision",
      "Investment fulfillment",
      "Citizenship certificate and passport issuance",
    ],
  },
  {
    slug: "grenada",
    country: "Grenada",
    type: "Citizenship by Investment",
    category: "citizenship",
    image: programGrenada,
    minInvestment: "USD $235,000",
    timeline: "4 months",
    visaFree: "138 countries",
    description: "Popularly known as the Spice Island for its locally grown spices, Grenada offers one of the most picturesque waterfronts in all the Caribbean. Diving, sailing, excellent restaurants, fabulous beaches, and a calendar of unforgettable festivities have fortified Grenada's status as the preferred destination of many high net worth investors. Grenada recognizes dual citizenship, meaning investors can still benefit from their current passports.",
    benefits: [
      "E-2 Visa Program signed between Grenada and the United States allows citizens to operate a business in the U.S. and reside therein",
      "Visa-free travel to 138 countries, including Europe's Schengen zone",
      "Fast processing within four months",
      "Inclusion of dependent children under 30 and dependent siblings aged 18 and older with no children",
      "Inclusion of dependent parents",
      "No physical residency requirements",
      "No requirement to travel to Grenada during the application process",
      "No education or management experience required",
      "No tax on worldwide income",
    ],
    requirements: [
      "Minimum donation of USD $235,000 to the National Transformation Fund (single applicant or family of up to four)",
      "Additional USD $25,000 per extra dependent",
      "Or real estate investment of USD $270,000 in a government-approved project (held for minimum 5 years)",
      "Government fees of USD $50,000 for real estate option (family of four)",
      "Be of outstanding character with no criminal record",
      "Have excellent health and high personal net worth",
      "Due diligence and processing fees apply",
    ],
    process: [
      "Consultation and program suitability assessment",
      "Document gathering and application preparation",
      "Formal submission to the Grenada CBI Committee",
      "Multi-layered due diligence process",
      "Committee review and decision",
      "Investment completion upon approval",
      "Citizenship certificate and passport issuance",
    ],
  },
  {
    slug: "malta",
    country: "Malta",
    type: "Permanent Residency by Investment",
    category: "residency",
    image: programMalta,
    minInvestment: "EUR €500,000+",
    timeline: "12-18 months",
    visaFree: "Schengen Area",
    description: "Although one of the smallest countries in the world, Malta offers some of the biggest opportunities. A natively English-speaking member of the European Union and the Eurozone, Malta's strategic position in the central Mediterranean Sea plays an important role in its attraction to both visitors and investors. As an EU member since 2004, Malta is often considered the gateway to the Euro-Mediterranean region and has become an excellent choice for investment due to its stable political climate, growing economy, and booming tourist property market.",
    benefits: [
      "Fastest permanent residency program in Europe, residency permit within 9 months",
      "The right to live and settle indefinitely in Malta",
      "Visa-free travel throughout the Schengen Area",
      "Access to an excellent healthcare system",
      "No physical residency requirements during or after the application",
      "Inclusive program that allows the addition of dependents",
      "Member of the European Union and the British Commonwealth",
      "Fastest growing economy in the EU, rated A+ by Fitch",
    ],
    requirements: [
      "Real estate rent: minimum annual lease of EUR €14,000 for 5 years, plus EUR €37,000 government contribution and EUR €2,000 NGO donation",
      "Or real estate purchase: minimum EUR €375,000, held for minimum 5 years, plus EUR €37,000 government contribution and EUR €2,000 NGO donation",
      "Be a non-EU, non-EEA, and non-Swiss national",
      "Proof of capital: EUR €500,000 in total assets including EUR €150,000 in liquid financial assets",
      "Or EUR €650,000 in total assets including EUR €75,000 in liquid financial assets",
      "Have a stable and regular source of income",
      "Have a clean criminal record and certificate of good health",
    ],
    process: [
      "Initial eligibility review and strategic planning",
      "Selection of real estate (rent or purchase)",
      "Application submission with supporting documents",
      "Government review and due diligence",
      "Administration fee payment (EUR €15,000 upon submission)",
      "Letter of Approval in Principle and balance payment (EUR €45,000)",
      "Residence permit issuance",
    ],
  },
  {
    slug: "saint-lucia",
    country: "Saint Lucia",
    type: "Citizenship by Investment",
    category: "citizenship",
    image: programSaintLucia,
    minInvestment: "USD $240,000",
    timeline: "3 months",
    visaFree: "140 countries",
    description: "Saint Lucia's Citizenship by Investment Program, established in 2015, offers a streamlined pathway to Caribbean citizenship. The program has quickly gained recognition for its efficiency, with approvals typically granted within 90 days of qualifying for processing.",
    benefits: [
      "Visa-free travel to 140 countries including Schengen Zone, UK, and Hong Kong",
      "No personal income tax, wealth tax, or capital gains tax",
      "Dual citizenship allowed",
      "Include dependent children under 30, dependent siblings under 18, and dependent parents above 55",
      "No physical residency requirements",
      "National Action Bond option available for conservative investors",
    ],
    requirements: [
      "Minimum donation of USD $240,000 to the National Economic Fund (single or family of up to 4)",
      "Or real estate investment of USD $300,000 in a pre-approved development",
      "Or National Action Bond investment of USD $300,000 (plus $50,000 admin fee)",
      "Be of outstanding character with no criminal record",
      "Have excellent health",
      "Processing and due diligence fees apply",
    ],
    process: [
      "Consultation and eligibility assessment",
      "Document preparation and compilation",
      "Application filing with the CIU",
      "Due diligence and background checks",
      "Review and approval by the Board (approx. 90 days)",
      "Investment fulfillment",
      "Citizenship and passport issuance",
    ],
  },
  {
    slug: "st-kitts-nevis",
    country: "St. Kitts & Nevis",
    type: "Citizenship by Investment",
    category: "citizenship",
    image: programStkitts,
    minInvestment: "USD $250,000",
    timeline: "4 months",
    visaFree: "148 countries",
    description: "The St. Kitts and Nevis Citizenship by Investment Program, established in 1984 under the regulations of the Citizenship Act, is the oldest citizenship by investment program in the world. This beautiful two-island nation is blessed with tropical temperatures, clear blue waters and a bustling trade and tourism economy. It is well-connected by direct flights to and from Europe and the U.S., and offers residents and citizens sought-after advantages such as dual citizenship and tax-free worldwide income.",
    benefits: [
      "World's oldest CBI program, established 1984 with a proven track record",
      "Fast processing within four months",
      "Visa-free travel to 148 countries including Schengen member states, the U.K., Hong Kong, Singapore, and more",
      "Inclusion of dependent children under 25 and dependent parents or grandparents over 55",
      "No physical residency requirements",
      "No requirement to travel to St. Kitts & Nevis during the application process",
      "No interview, education, or managerial experience required",
      "No tax on worldwide income",
      "Dual citizenship recognized",
    ],
    requirements: [
      "Minimum contribution of USD $250,000 to the Sustainable Island State Contribution (SISC) Fund",
      "SISC covers main applicant, spouse, and up to three qualifying dependents",
      "USD $25,000 per additional dependent under 18; USD $50,000 per dependent aged 18+",
      "Or real estate investment of USD $325,000 in a government-approved property (held for minimum 7 years)",
      "Enhanced due diligence through multi-layered screening",
      "Be of outstanding character with no criminal record and in excellent health",
      "High personal net worth",
    ],
    process: [
      "Detailed consultation and program overview",
      "Document preparation",
      "Formal application submission to CIU",
      "International due diligence screening",
      "Government review and approval",
      "Investment completion",
      "Certificate of Citizenship and passport delivery",
    ],
  },
  {
    slug: "turkey",
    country: "Turkey (Türkiye)",
    type: "Citizenship by Investment",
    category: "citizenship",
    image: programTurkey,
    minInvestment: "USD $400,000",
    timeline: "1-3 months",
    visaFree: "110+ countries",
    description: "Turkey's Citizenship by Investment Program offers a fast and affordable pathway to Turkish citizenship through real estate investment or capital deposit. Turkey's strategic location between Europe and Asia, combined with a rapidly growing economy, makes it an attractive option for investors seeking global mobility and business opportunities.",
    benefits: [
      "Visa-free or visa-on-arrival access to 110+ countries",
      "Strategic location bridging Europe and Asia",
      "Fast processing within 1-3 months",
      "Include spouse and children under 18",
      "No requirement to reside in Turkey",
      "Growing economy with strong real estate market",
      "Dual citizenship recognized",
    ],
    requirements: [
      "Real estate investment of minimum USD $400,000 (held for 3 years)",
      "Or fixed capital investment of USD $500,000",
      "Or bank deposit of USD $500,000 (held for 3 years)",
      "Clean criminal record",
      "Valid passport",
      "Medical examination",
    ],
    process: [
      "Initial consultation and eligibility assessment",
      "Property selection or investment identification",
      "Investment completion and verification",
      "Application submission to the General Directorate of Population and Citizenship Affairs",
      "Background verification and due diligence",
      "Approval and citizenship certificate issuance",
      "Turkish passport application",
    ],
  },
  {
    slug: "greece",
    country: "Greece",
    type: "Golden Visa Program",
    category: "residency",
    image: programGreece,
    minInvestment: "EUR €250,000",
    timeline: "3-9 months",
    visaFree: "Schengen Area",
    description: "Greece's Golden Visa Program is one of the most popular residency by investment programs in Europe, offering a cost-effective gateway to the Schengen Area. The program grants renewable five-year residency permits to non-EU investors and their families.",
    benefits: [
      "Free movement throughout the 27 Schengen Area countries",
      "One of the lowest investment thresholds in European RBI programs",
      "No minimum stay requirement to maintain residency status",
      "Include spouse, children under 21, and parents of both spouses",
      "Pathway to permanent residency after 5 years",
      "Potential pathway to Greek (EU) citizenship after 7 years",
    ],
    requirements: [
      "Real estate investment of minimum EUR €250,000 (€500,000 in prime areas)",
      "Or capital investment of EUR €400,000 in Greek companies or government bonds",
      "Valid passport and clean criminal record",
      "Health insurance coverage in Greece",
      "Proof of legitimate source of investment funds",
      "No requirement to reside in Greece",
    ],
    process: [
      "Initial consultation and investment strategy",
      "Property search and selection with approved partners",
      "Legal due diligence on chosen property",
      "Purchase completion and investment verification",
      "Residency permit application submission",
      "Biometric data collection and processing",
      "Golden Visa issuance, valid for 5 years and renewable",
    ],
  },
  {
    slug: "hungary",
    country: "Hungary",
    type: "Investor Residence Program",
    category: "residency",
    image: programHungary,
    minInvestment: "EUR €250,000",
    timeline: "2-3 months",
    visaFree: "Schengen Area",
    description: "Hungary's Investor Residence Program, relaunched in 2024, provides a pathway to European residency through qualifying investments. The program offers access to the Schengen Area and Hungary's favorable tax environment.",
    benefits: [
      "Access to the Schengen Area with free movement across 27 European countries",
      "Competitive investment threshold compared to other EU programs",
      "Hungary's favorable flat tax rate of 15%",
      "Include immediate family members in the application",
      "Pathway to permanent residency and eventual citizenship",
      "Strategic Central European location",
    ],
    requirements: [
      "Investment in a qualifying Hungarian real estate fund (min. EUR €250,000)",
      "Or donation to a Hungarian higher education institution",
      "Or residential property purchase of min. EUR €500,000",
      "Valid passport and clean criminal record",
      "Health insurance coverage",
      "Proof of legitimate funds",
    ],
    process: [
      "Consultation and investment option review",
      "Selection of qualifying investment vehicle",
      "Application submission with supporting documents",
      "Government review and due diligence",
      "Approval and investment completion",
      "Issuance of residence permit",
      "Renewal and pathway to permanent status",
    ],
  },
  {
    slug: "latvia",
    country: "Latvia",
    type: "Residency by Investment",
    category: "residency",
    image: programLatvia,
    minInvestment: "EUR €50,000",
    timeline: "2-3 months",
    visaFree: "Schengen Area",
    description: "Latvia offers one of the most accessible European residency by investment programs, with relatively modest investment requirements. The program grants a five-year temporary residence permit with Schengen Area access.",
    benefits: [
      "Schengen Area access with free travel across Europe",
      "One of the most affordable EU residency programs",
      "Fast processing times, as quick as 30 days",
      "Include spouse and minor children",
      "Pathway to permanent residency after 5 years",
      "High quality of life and education system",
    ],
    requirements: [
      "Real estate investment of min. EUR €250,000 in Riga or major cities",
      "Or subordinated capital investment in a Latvian credit institution (EUR €280,000)",
      "Or company share capital investment (EUR €50,000 with conditions)",
      "Clean criminal record",
      "Proof of legitimate income and funds",
      "Health insurance valid in Latvia",
    ],
    process: [
      "Eligibility assessment and program selection",
      "Investment identification and completion",
      "Application preparation with required documents",
      "Submission to the Office of Citizenship and Migration Affairs",
      "Review and approval",
      "Temporary residence permit issuance",
      "Annual renewal and pathway to permanent residency",
    ],
  },
  {
    slug: "portugal",
    country: "Portugal",
    type: "Golden Residence Permit",
    category: "residency",
    image: programPortugal,
    minInvestment: "EUR €250,000",
    timeline: "6-12 months",
    visaFree: "Schengen Area",
    description: "Portugal's Golden Residence Permit is one of the world's most renowned residency by investment programs. While real estate is no longer a qualifying option for new applicants, the program offers strong alternatives through investment funds, capital transfers, and job creation.",
    benefits: [
      "Schengen Area access and free movement throughout the EU",
      "Minimal physical presence: 7 days in the first year, then 14 days per 2-year period",
      "Pathway to Portuguese (EU) citizenship after 5 years",
      "Portugal allows dual citizenship with no renunciation required",
      "Access to the Portuguese and EU education and healthcare systems",
      "One of Europe's most favorable tax regimes for new residents",
    ],
    requirements: [
      "Investment fund subscription of minimum EUR €500,000",
      "Or capital transfer of EUR €1,500,000 to Portuguese financial institutions",
      "Or creation of minimum 10 jobs in Portugal",
      "Or scientific research contribution of EUR €500,000",
      "Clean criminal record in all countries of residence",
      "Valid health insurance",
    ],
    process: [
      "Strategic consultation and investment planning",
      "Selection and subscription to qualifying investment fund",
      "Application preparation and legal documentation",
      "Submission to AIMA (Agency for Integration, Migration and Asylum)",
      "Biometric appointment in Portugal",
      "Residence permit issuance, valid 2 years and renewable",
      "Citizenship application eligibility after 5 years",
    ],
  },
  {
    slug: "spain",
    country: "Spain",
    type: "Residency Program",
    category: "residency",
    image: programSpain,
    minInvestment: "EUR €500,000",
    timeline: "2-3 months",
    visaFree: "Schengen Area",
    description: "Spain's Golden Visa program grants residency to non-EU investors who make significant investments in Spanish real estate, financial assets, or business ventures. The program provides access to one of Europe's most vibrant countries.",
    benefits: [
      "Schengen Area access and free movement across Europe",
      "Live in one of Europe's most desirable countries",
      "Include spouse, children, and dependent parents",
      "No minimum stay requirement to maintain status",
      "Pathway to permanent residency after 5 years",
      "Pathway to Spanish citizenship after 10 years of residency",
    ],
    requirements: [
      "Real estate investment of minimum EUR €500,000",
      "Or bank deposit of EUR €1,000,000",
      "Or Spanish government bonds of EUR €2,000,000",
      "Or business investment creating employment or economic impact",
      "Clean criminal record",
      "Health insurance and proof of financial means",
    ],
    process: [
      "Program overview and investment strategy consultation",
      "Property or investment identification",
      "Legal due diligence and purchase completion",
      "Visa application at Spanish consulate",
      "Travel to Spain for residency card processing",
      "Initial one-year permit, then renewable for 2 years",
      "Permanent residency and citizenship pathway",
    ],
  },
  {
    slug: "usa-eb5",
    country: "USA EB-5",
    type: "Immigrant Investor Program",
    category: "residency",
    image: programUsaEb5,
    minInvestment: "USD $800,000",
    timeline: "24-36 months",
    visaFree: "N/A",
    description: "The U.S. EB-5 Immigrant Investor Program provides a pathway to lawful permanent residency (Green Card) in the United States for foreign investors who make qualifying investments in U.S. commercial enterprises that create jobs for American workers.",
    benefits: [
      "U.S. permanent residency (Green Card) for investor and immediate family",
      "Right to live, work, and study anywhere in the United States",
      "Pathway to U.S. citizenship after 5 years of permanent residency",
      "No requirement to manage the investment day-to-day",
      "Access to U.S. education and healthcare systems",
      "Investment return potential through qualifying projects",
    ],
    requirements: [
      "Investment of USD $800,000 in a Targeted Employment Area (TEA)",
      "Or USD $1,050,000 in a non-TEA area",
      "Investment must create or preserve 10 full-time U.S. jobs",
      "Lawful source of investment funds with complete documentation",
      "Clean criminal record and admissibility to the United States",
      "Medical examination by approved physicians",
    ],
    process: [
      "Consultation and investment project selection",
      "Source of funds analysis and documentation",
      "I-526E petition preparation and filing with USCIS",
      "USCIS adjudication and approval",
      "Consular processing or adjustment of status",
      "Conditional Green Card issuance (2-year validity)",
      "I-829 petition to remove conditions and obtain permanent Green Card",
    ],
  },
  {
    slug: "quebec-canada",
    country: "Quebec, Canada",
    type: "Immigrant Investor Program",
    category: "residency",
    image: programQuebecCanada,
    minInvestment: "$1.2 million",
    timeline: "1-2 years",
    visaFree: "N/A",
    description: "The Quebec Immigrant Investor Program (QIIP) is one of Canada's most established pathways to permanent residency. Designed for experienced business professionals and investors, the program grants Canadian permanent residency through a passive, government-guaranteed investment in the province of Quebec.",
    benefits: [
      "Canadian permanent residency for the entire family",
      "Government-guaranteed investment with full return after 5 years",
      "No requirement to start or manage a business",
      "Access to Canadian healthcare, education, and social services",
      "Pathway to Canadian citizenship after meeting residency requirements",
      "One of the most stable and reputable immigration programs in the world",
    ],
    requirements: [
      "Net worth of at least CAD $2,000,000 acquired legally",
      "Investment of CAD $1,200,000 through an authorized financial intermediary",
      "Minimum 2 years of management experience in the last 5 years",
      "Intend to settle in Quebec",
      "Clean criminal record and medical clearance",
      "Basic knowledge of French is an asset",
    ],
    process: [
      "Initial consultation and eligibility assessment",
      "Document preparation and net worth verification",
      "Application submission to the Quebec Ministry of Immigration",
      "Government review and due diligence",
      "Quebec Selection Certificate (CSQ) issuance",
      "Federal permanent residency application",
      "Investment completion and PR card issuance",
    ],
  },
  {
    slug: "usa-e1-treaty-trader",
    country: "USA E-1 Treaty Trader",
    type: "Treaty Trader Visa",
    category: "business-visa",
    image: programUsaEb5,
    minInvestment: "No fixed investment amount",
    timeline: "Case and post specific",
    visaFree: "N/A",
    summary: "Build and manage substantial trade between your treaty country and the United States.",
    description:
      "The E-1 Treaty Trader visa is designed for eligible nationals of treaty countries who conduct substantial and principally treaty-country trade with the United States. Qualifying trade may include goods, services, technology, international banking, insurance, transportation, tourism, communications, and certain other exchanges with an identifiable value.",
    overview: [
      "The E-1 Treaty Trader visa is designed for eligible nationals of treaty countries who conduct substantial and principally treaty-country trade with the United States. Qualifying trade may include goods, services, technology, international banking, insurance, transportation, tourism, communications, and certain other exchanges with an identifiable value.",
      "For business owners, founders, and qualifying employees, E-1 status can provide a practical platform to oversee an active U.S. trading enterprise. The strongest applications tell a clear commercial story supported by transaction records: trade is already real, recurring, measurable, and principally between the United States and the applicant's treaty country.",
    ],
    keyFacts: [
      { label: "Category", value: "Nonimmigrant business visa" },
      { label: "Core Basis", value: "Substantial qualifying trade" },
      { label: "U.S. Link", value: "More than 50% with treaty country" },
      { label: "Timeline", value: "Case and post specific" },
    ],
    benefits: [
      "Live in the United States to direct and develop qualifying treaty trade",
      "No fixed statutory investment amount because eligibility is based on trade, not capital investment",
      "Trade can include services and technology as well as goods",
      "Qualifying executives, supervisors, and essential employees may be eligible",
      "Spouse and unmarried children under 21 may accompany the principal applicant; qualifying E spouses may be employment authorized incident to status",
      "Extensions or renewals may be available while the enterprise and applicant continue to qualify",
    ],
    bestFit: [
      "Companies with a meaningful record of U.S.-treaty-country transactions",
      "Service providers, technology companies, logistics businesses, distributors, and other cross-border operators",
      "Treaty-country enterprises expanding their commercial presence in the United States",
      "Owners or key employees who will perform executive, supervisory, or essential functions",
    ],
    requirementsHeading: "Eligibility Requirements",
    requirements: [
      "Treaty nationality. The principal applicant must be a national of an E-1 treaty country. The U.S. trading enterprise must also have treaty-country nationality, generally shown through at least 50% ownership by nationals of that country.",
      "Qualifying international trade. There must be an exchange of qualifying goods, services, or technology between the United States and the treaty country.",
      "Substantial trade. Trade must reflect a sizable and continuing flow of transactions. There is no single minimum dollar figure; both volume and value matter, with greater emphasis often placed on numerous recurring transactions.",
      "Principal trade. More than 50% of the enterprise's international trade must be between the United States and the treaty country.",
      "Role in the enterprise. A principal trader must come to carry on and direct the trade. An employee must generally serve in an executive or supervisory position or possess skills essential to efficient operations.",
      "Temporary intent. The applicant must intend to depart when E status ends.",
    ],
    processHeading: "Our Process",
    process: [
      "Strategy consultation and treaty-nationality screening",
      "Enterprise ownership and trade-flow analysis",
      "Transaction mapping and evidence audit",
      "Executive, supervisory, or essential-role assessment where applicable",
      "Application forms, legal submission, and supporting-document preparation",
      "Consular interview preparation or U.S. change-of-status filing strategy, as applicable",
      "Post-approval compliance planning for entries, extensions, renewals, and family members",
    ],
    evidence: {
      heading: "Evidence That Makes the Case Persuasive",
      items: [
        "A transaction schedule showing dates, invoice numbers, values, trading parties, countries, and annual totals.",
        "Invoices, contracts, purchase orders, bills of lading, customs records, payment evidence, and shipping or service-delivery records tied back to the schedule.",
        "A calculation of total international trade and the percentage conducted between the United States and the treaty country.",
        "Corporate formation and ownership evidence, including passports of owners and an ownership chart.",
        "Tax returns, financial statements, bank statements, payroll records, leases, licenses, and proof that the U.S. enterprise is active.",
        "For employee cases, a detailed role description, organization chart, qualifications, and evidence explaining executive, supervisory, or essential responsibilities.",
      ],
      note: "The evidence package should be tailored to the adjudicating embassy, consulate, or USCIS filing route. A large file is not automatically a strong file; the goal is a well-indexed record in which the key trade calculations can be verified quickly.",
    },
    comparison: eVisaComparison,
    faqs: eVisaFaqs,
    ctaText:
      "Turn established cross-border trade into a structured U.S. business-visa strategy. Citizenship Capital Group can coordinate your eligibility review, ownership analysis, trade documentation, application preparation, and interview readiness with qualified U.S. immigration counsel. Request a confidential E-1 assessment.",
  },
  {
    slug: "usa-e2-treaty-investor",
    country: "USA E-2 Treaty Investor",
    type: "Treaty Investor Visa",
    category: "business-visa",
    image: programUsaEb5,
    minInvestment: "No fixed statutory minimum",
    timeline: "Case and post specific",
    visaFree: "N/A",
    summary: "Develop and direct a real U.S. business backed by capital that is committed and at risk.",
    description:
      "The E-2 Treaty Investor visa enables eligible nationals of treaty countries to enter the United States to develop and direct a qualifying U.S. enterprise in which they have invested, or are actively in the process of investing, a substantial amount of capital. It can be used for a new venture, an acquisition, or a franchise when the legal and commercial requirements are carefully documented.",
    overview: [
      "The E-2 Treaty Investor visa enables eligible nationals of treaty countries to enter the United States to develop and direct a qualifying U.S. enterprise in which they have invested, or are actively in the process of investing, a substantial amount of capital. It can be used for a new venture, an acquisition, or a franchise when the legal and commercial requirements are carefully documented.",
      "Unlike programs built around a prescribed investment threshold, E-2 adjudication is proportional and fact-specific. The capital must be substantial in relation to the total cost of purchasing or creating the business, genuinely committed, lawfully sourced, and placed at commercial risk. The enterprise must be real, active, and capable of doing more than merely supporting the investor and family.",
    ],
    keyFacts: [
      { label: "Category", value: "Nonimmigrant investor visa" },
      { label: "Investment", value: "No fixed statutory minimum" },
      { label: "Enterprise", value: "Real and operating" },
      { label: "Timeline", value: "Case and post specific" },
    ],
    benefits: [
      "Operate and grow your own qualifying U.S. business",
      "No fixed statutory minimum investment; proportionality and business viability drive the analysis",
      "Flexibility to establish, purchase, or invest in a qualifying active enterprise",
      "Qualifying executives, supervisors, and essential employees of the treaty enterprise may be eligible",
      "Spouse and unmarried children under 21 may accompany the principal applicant; qualifying E spouses may be employment authorized incident to status",
      "Extensions or renewals may be available while eligibility continues",
    ],
    bestFit: [
      "Entrepreneurs ready to commit capital before adjudication or through a properly structured irrevocable mechanism",
      "Buyers acquiring an operating business or franchise",
      "Founders with a credible operating plan, relevant experience, and a documented path to revenue and U.S. hiring",
      "Treaty-owned companies transferring qualified executives, supervisors, or essential employees to U.S. operations",
    ],
    requirementsHeading: "Eligibility Requirements",
    requirements: [
      "Treaty nationality. The investor must be a national of an E-2 treaty country. The enterprise must have treaty-country nationality, generally established through at least 50% qualifying ownership.",
      "Substantial investment. There is no fixed minimum. The amount must be substantial in proportion to the total cost of purchasing or establishing the enterprise and sufficient to demonstrate commitment to its success.",
      "Capital at risk and irrevocably committed. Funds must be subject to partial or total loss if the business fails. Idle or revocable funds generally do not qualify. A carefully drafted escrow arrangement may be appropriate in some transactions.",
      "Lawful source and path of funds. The application should document how the investor obtained the capital and trace it into the U.S. enterprise or qualifying transaction.",
      "Real and operating commercial enterprise. The business must be active, for-profit, and producing goods or services, not a passive or speculative holding.",
      "Not marginal. The enterprise must have the present or future capacity to generate more than a minimal living for the investor and family or make a significant U.S. economic contribution.",
      "Develop and direct. The principal investor must control the enterprise or otherwise be positioned to develop and direct it. Employees must qualify as executives, supervisors, or essential employees.",
      "Temporary intent. The applicant must intend to depart when E status ends.",
    ],
    processHeading: "Our Process",
    process: [
      "Eligibility, nationality, and ownership assessment",
      "Business model, acquisition, or franchise evaluation",
      "Investment amount and proportionality analysis",
      "Source-of-funds and path-of-funds planning",
      "Transaction structuring and capital-at-risk review with appropriate counsel",
      "Business plan, hiring plan, and supporting evidence development",
      "Application preparation and consular interview or U.S. filing strategy",
      "Post-approval compliance planning and renewal readiness",
    ],
    evidence: {
      heading: "Evidence That Makes the Case Persuasive",
      items: [
        "A source-and-path-of-funds narrative supported by bank records, income evidence, tax records, sale documents, loan or gift evidence, and wire confirmations as relevant.",
        "Formation documents, capitalization records, ownership chart, stock or membership records, licenses, lease, insurance, and tax registrations.",
        "Purchase agreement, franchise agreement, escrow documents, closing statements, equipment and inventory invoices, and proof of payment.",
        "A credible business plan with market analysis, operating strategy, financial projections, hiring plan, and explanation of how the enterprise will become more than marginal.",
        "Evidence that operations are real: premises, website and marketing, contracts, customer and supplier relationships, payroll, tax filings, bank activity, photos, and financial statements.",
        "Evidence of the investor's ability to develop and direct the business, including experience, credentials, role description, and organization chart.",
      ],
      note: "An E-2 business plan is not a substitute for committed capital or real operations, but it is often central to presenting how the enterprise will execute, earn revenue, employ workers, and meet the non-marginality requirement.",
    },
    comparison: eVisaComparison,
    faqs: eVisaFaqs,
    ctaText:
      "Your investment should be structured as a business strategy before it becomes a visa application. Citizenship Capital Group can coordinate enterprise selection, investment documentation, source-of-funds analysis, business-plan development, application preparation, and interview readiness with qualified U.S. immigration counsel. Request a confidential E-2 assessment.",
  },
];

export const categoryLabels: Record<Program["category"], string> = {
  citizenship: "Citizenship",
  residency: "Residency",
  "business-visa": "Business Visa",
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return programs.find(p => p.slug === slug);
};
