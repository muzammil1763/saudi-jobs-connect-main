export type JobCategory = {
  slug: string;
  name: string;
  icon: string; // lucide-react icon name
  short: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  industries: string[];
  salary?: string; // Monthly salary in SAR
};

export const jobCategories: JobCategory[] = [
  {
    slug: "office-boy",
    name: "Office Boy",
    icon: "Briefcase",
    short: "Office support & tea/coffee service",
    salary: "2000 SAR",
    description:
      "Office boys provide general support in offices including serving tea/coffee, cleaning, and running errands.",
    responsibilities: [
      "Serve tea, coffee and refreshments",
      "Maintain cleanliness of office premises",
      "Assist staff with photocopying and filing",
      "Run office errands as required",
      "Receive and distribute mail/documents",
    ],
    requirements: [
      "Matric or equivalent",
      "Presentable and well-mannered",
      "Basic English communication",
      "Physically fit",
    ],
    industries: ["Corporate", "Government", "Offices"],
  },
  {
    slug: "helper",
    name: "Helper",
    icon: "Users",
    short: "General helper for various trades",
    salary: "1750 SAR",
    description: "Helpers assist skilled tradesmen on construction sites and in factories.",
    responsibilities: [
      "Assist electricians, plumbers and other tradesmen",
      "Material handling and site cleaning",
      "Loading and unloading materials",
      "Follow supervisor instructions",
    ],
    requirements: [
      "No formal education required",
      "Physically fit and hardworking",
      "Willing to work in shifts",
    ],
    industries: ["Construction", "Manufacturing", "Maintenance"],
  },
  {
    slug: "packing",
    name: "Packing Worker",
    icon: "Package",
    short: "Packaging in factories & warehouses",
    salary: "2200 SAR",
    description: "Packing workers handle product packaging in factories, warehouses and distribution centers.",
    responsibilities: [
      "Pack products as per specifications",
      "Label and seal packages",
      "Maintain packing quality standards",
      "Operate packing machinery",
      "Stock management and inventory",
    ],
    requirements: [
      "1+ year experience preferred",
      "Attention to detail",
      "Physically fit",
      "Ability to work in shifts",
    ],
    industries: ["Manufacturing", "Warehousing", "Food Industry"],
  },
  {
    slug: "welder",
    name: "Welder",
    icon: "Flame",
    short: "Metal joining and fabrication work",
    salary: "2200 SAR",
    description: "Welders work on structural steel, pipelines and fabrication projects.",
    responsibilities: [
      "MIG / TIG / arc welding",
      "Reading WPS and technical drawings",
      "Quality checks and inspections",
      "Fabrication and assembly",
    ],
    requirements: [
      "Welder certification",
      "3+ years experience",
      "Knowledge of welding standards",
    ],
    industries: ["Oil & Gas", "Construction", "Fabrication"],
  },
  {
    slug: "driver",
    name: "Light Driver",
    icon: "Car",
    short: "Light vehicle drivers with valid license",
    salary: "2000 SAR",
    description: "Drive company vehicles, sedans and small vans for staff and goods transport.",
    responsibilities: [
      "Safely drive light vehicles",
      "Maintain vehicle cleanliness and basic checks",
      "Follow traffic and company rules",
      "Timely pick and drop of staff",
    ],
    requirements: [
      "Valid Pakistani driving license",
      "2+ years experience",
      "Clean driving record",
    ],
    industries: ["Logistics", "Corporate"],
  },
  {
    slug: "heavy-driver",
    name: "Heavy Driver",
    icon: "Truck",
    short: "Truck, trailer, crane, forklift operators",
    salary: "3000 SAR",
    description: "Drive trucks, trailers and heavy equipment for construction and logistics companies.",
    responsibilities: [
      "Operate heavy vehicles safely",
      "Carry out daily vehicle inspections",
      "Deliver loads as scheduled",
      "Maintain logbooks",
    ],
    requirements: [
      "Valid heavy license (LTV/HTV)",
      "3+ years experience",
      "Saudi license preferred",
    ],
    industries: ["Logistics", "Construction"],
  },
  {
    slug: "electrician",
    name: "Electrician",
    icon: "Zap",
    short: "Residential & industrial electrical work",
    salary: "2600 SAR",
    description:
      "Skilled electricians are in high demand across Saudi Arabia for residential, commercial and industrial projects.",
    responsibilities: [
      "Install electrical wiring in buildings and facilities",
      "Repair and maintain electrical systems",
      "Troubleshoot faults and electrical issues",
      "Ensure safety and code compliance",
      "Read blueprints and technical diagrams",
    ],
    requirements: [
      "Minimum 2–5 years of relevant experience",
      "Diploma or ITI in Electrical (preferred)",
      "Knowledge of IEC / NEC standards",
      "Physically fit and able to work on site",
    ],
    industries: ["Construction", "Factories", "Maintenance"],
  },
  {
    slug: "security-guard",
    name: "Security Guard",
    icon: "Shield",
    short: "Building & facility security",
    salary: "2200 SAR",
    description: "Provide security for residential, commercial and industrial premises.",
    responsibilities: [
      "Patrolling & monitoring premises",
      "Access control and visitor management",
      "Incident reporting",
      "CCTV monitoring",
    ],
    requirements: [
      "Matric preferred",
      "Physically fit",
      "No criminal record",
      "Ex-military preferred",
    ],
    industries: ["Security Services"],
  },
  {
    slug: "cashier",
    name: "Cash Counter / Cashier",
    icon: "CreditCard",
    short: "Cash handling in retail & supermarkets",
    salary: "2400 SAR",
    description: "Cashiers handle cash and card transactions in retail stores, supermarkets and restaurants.",
    responsibilities: [
      "Process customer payments",
      "Operate POS systems",
      "Maintain cash drawer accuracy",
      "Issue receipts and invoices",
      "Handle customer queries",
    ],
    requirements: [
      "Matric or intermediate",
      "Basic computer skills",
      "Honest and reliable",
      "Customer service skills",
    ],
    industries: ["Retail", "Supermarkets", "Restaurants"],
  },
  {
    slug: "painter",
    name: "Painter",
    icon: "Paintbrush",
    short: "Interior & exterior painting",
    salary: "2700 SAR",
    description: "Painters carry out interior and exterior painting for buildings and facilities.",
    responsibilities: [
      "Surface preparation and priming",
      "Spray and brush painting",
      "Finishing and touch-up work",
      "Mixing paints to required shades",
    ],
    requirements: [
      "2+ years experience",
      "Knowledge of paint types and tools",
      "Physically fit",
    ],
    industries: ["Construction", "Maintenance"],
  },
  {
    slug: "mason",
    name: "Mason",
    icon: "BrickWall",
    short: "Brick laying, plastering, tile fixing",
    salary: "1800 SAR",
    description: "Masons handle masonry, plastering and finishing on construction sites.",
    responsibilities: [
      "Brick and block laying",
      "Plastering walls and ceilings",
      "Reading construction drawings",
      "Tile fixing and grouting",
    ],
    requirements: [
      "3–5 years experience",
      "Strong physical health",
      "Knowledge of construction materials",
    ],
    industries: ["Construction"],
  },
  {
    slug: "mechanic",
    name: "Mechanic",
    icon: "Wrench",
    short: "Vehicle & machinery repair",
    salary: "2200 SAR",
    description: "Mechanics repair and maintain vehicles, machinery and equipment.",
    responsibilities: [
      "Diagnose mechanical faults",
      "Repair engines and transmissions",
      "Routine maintenance and servicing",
      "Parts replacement",
    ],
    requirements: [
      "ITI / trade certificate",
      "3+ years experience",
      "Knowledge of diagnostic tools",
    ],
    industries: ["Automotive", "Construction", "Industrial"],
  },
  {
    slug: "cook",
    name: "Cook",
    icon: "ChefHat",
    short: "Cooking in restaurants & labor camps",
    salary: "2000 SAR",
    description: "Cooks prepare meals in restaurants, hotels, labor camps and private households.",
    responsibilities: [
      "Prepare and cook meals",
      "Maintain kitchen hygiene",
      "Manage food inventory",
      "Follow food safety standards",
    ],
    requirements: [
      "2+ years cooking experience",
      "Knowledge of Pakistani/Arabic cuisine",
      "Food hygiene certificate preferred",
    ],
    industries: ["Hospitality", "Labor Camps", "Restaurants"],
  },
  {
    slug: "storekeeper",
    name: "Storekeeper",
    icon: "Warehouse",
    short: "Inventory & warehouse management",
    salary: "1800 SAR",
    description: "Storekeepers manage inventory, stock records and warehouse operations.",
    responsibilities: [
      "Receive and inspect incoming goods",
      "Maintain stock records and inventory",
      "Issue materials to departments",
      "Conduct regular stock counts",
    ],
    requirements: [
      "Matric or intermediate",
      "Basic computer skills",
      "1–2 years experience",
      "Organized and detail-oriented",
    ],
    industries: ["Warehousing", "Construction", "Manufacturing"],
  },
  {
    slug: "cleaner",
    name: "Cleaner",
    icon: "Sparkles",
    short: "Office, building & facility cleaning",
    salary: "1600 SAR",
    description: "Cleaners maintain hygiene and cleanliness in offices, buildings and facilities.",
    responsibilities: [
      "Clean and sanitize offices and common areas",
      "Mop floors and vacuum carpets",
      "Empty waste bins",
      "Maintain cleaning supplies",
    ],
    requirements: [
      "No formal education required",
      "Physically fit",
      "Reliable and punctual",
    ],
    industries: ["Facility Management", "Hospitality"],
  },
  {
    slug: "khadim",
    name: "Khadim (Servant)",
    icon: "Home",
    short: "Household & domestic work",
    salary: "2000 SAR",
    description: "Khadim/domestic workers provide household services for Saudi families.",
    responsibilities: [
      "Household cleaning and maintenance",
      "Serving family members",
      "Running household errands",
      "Assisting with daily chores",
    ],
    requirements: [
      "Honest and trustworthy",
      "Basic Arabic preferred",
      "Previous domestic experience preferred",
    ],
    industries: ["Domestic / Household"],
  },
  {
    slug: "khabbaz",
    name: "Khabbaz (Baker)",
    icon: "Wheat",
    short: "Bread baking & bakery work",
    salary: "2500 SAR",
    description: "Khabbaz/bakers prepare traditional Arabic bread and bakery products.",
    responsibilities: [
      "Prepare and bake Arabic bread (khubz)",
      "Operate bakery ovens and equipment",
      "Maintain bakery hygiene",
      "Manage dough preparation",
    ],
    requirements: [
      "2+ years bakery experience",
      "Knowledge of Arabic bread types",
      "Food hygiene awareness",
    ],
    industries: ["Bakeries", "Restaurants", "Hotels"],
  },
  {
    slug: "umrah-hajj-visa",
    name: "Umrah & Hajj Visa",
    icon: "Star",
    short: "Umrah & Hajj visa processing services",
    salary: "N/A",
    description:
      "We provide complete Umrah and Hajj visa processing services for Pakistani pilgrims. Our experienced team handles all documentation and embassy requirements.",
    responsibilities: [
      "Umrah visa application processing",
      "Hajj visa documentation",
      "Passport and document verification",
      "Embassy submission and follow-up",
      "Group and individual visa packages",
    ],
    requirements: [
      "Valid Pakistani passport (min. 6 months validity)",
      "Passport-size photographs",
      "CNIC copy",
      "Vaccination certificate (Meningitis)",
      "Mahram documents (for women)",
    ],
    industries: ["Visa Services", "Religious Travel"],
  },
];

export type Company = {
  name: string;
  nameAr?: string;
  industry: string;
  location: string;
  logo?: string;
  description: string;
};

export const featuredCompanies: Company[] = [
  {
    name: "Almarai Company",
    nameAr: "شركة المراعي",
    industry: "Food & Dairy",
    location: "Riyadh, Saudi Arabia",
    logo: "/almarai.jpeg",
    description: "One of the world's largest vertically integrated dairy companies, hiring across production, logistics and maintenance.",
  },
  {
    name: "Al Afnar Company",
    nameAr: "شركة الأفنار",
    industry: "Electrical & Engineering",
    location: "Riyadh, Saudi Arabia",
    logo: "/alfanar.jpeg",
    description: "Leading electrical engineering and contracting company in Saudi Arabia, hiring electricians, technicians and engineers.",
  },
  {
    name: "Al Majal Company",
    nameAr: "شركة المجال",
    industry: "Facility Management",
    location: "Multiple Cities, KSA",
    logo: "/almajal alarabi.jpeg",
    description: "Major facility management company providing cleaning, maintenance and security services across Saudi Arabia.",
  },
  {
    name: "Nadak Company",
    nameAr: "شركة ندك",
    industry: "Construction & Contracting",
    location: "Riyadh, Saudi Arabia",
    logo: "/nadec.jpeg",
    description: "Established construction and contracting company with large-scale projects across the Kingdom.",
  },
  {
    name: "Al Saif Company",
    nameAr: "شركة السيف",
    industry: "Retail & Trading",
    location: "Multiple Cities, KSA",
    logo: "/alsaif.jpeg",
    description: "Well-known retail and trading group operating across Saudi Arabia, hiring sales staff, drivers and warehouse workers.",
  },
  {
    name: "Bin Ladin Group",
    nameAr: "مجموعة بن لادن",
    industry: "Construction & Real Estate",
    location: "Mecca & Multiple Cities, KSA",
    logo: "/binladin.jpeg",
    description: "One of Saudi Arabia's largest construction and engineering conglomerates, with landmark projects including the Grand Mosque expansion and major infrastructure across the Kingdom.",
  },
];

export type JobOpening = {
  id: string;
  title: string;
  categorySlug: string;
  city: string;
  experience: string;
  education: string;
  type: string;
  vacancies: number;
  requirements: string[];
  company?: string;
  salary?: string;
};

export const cities = ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina", "Tabuk"];

export const jobOpenings: JobOpening[] = [
  { id: "j1", title: "Office Boy", categorySlug: "office-boy", city: "Jeddah", experience: "1 year", education: "Matric", type: "Full-time", vacancies: 30, requirements: ["Presentable", "Basic English"], company: "Al Afnar Company", salary: "2000 SAR" },
  { id: "j2", title: "Helper", categorySlug: "helper", city: "Jeddah", experience: "0-1 year", education: "None", type: "Full-time", vacancies: 50, requirements: ["Physically fit", "Hardworking"], company: "Al Majal Company", salary: "1750 SAR" },
  { id: "j3", title: "Packing Worker", categorySlug: "packing", city: "Jeddah", experience: "1 year", education: "None", type: "Full-time", vacancies: 40, requirements: ["Factory experience", "Shift work"], company: "Almarai Company", salary: "2200 SAR" },
  { id: "j4", title: "Welder", categorySlug: "welder", city: "Jeddah", experience: "3 years", education: "Certification", type: "Full-time", vacancies: 18, requirements: ["MIG/TIG certified", "Reading WPS"], company: "Nadak Company", salary: "2200 SAR" },
  { id: "j5", title: "Light Driver", categorySlug: "driver", city: "Mecca", experience: "2 years", education: "Matric", type: "Full-time", vacancies: 25, requirements: ["Valid license", "Clean record"], company: "Al Saif Company", salary: "2000 SAR" },
  { id: "j6", title: "Heavy Driver", categorySlug: "heavy-driver", city: "Mecca", experience: "3 years", education: "Matric", type: "Full-time", vacancies: 30, requirements: ["Valid HTV license", "Clean record"], company: "Almarai Company", salary: "3000 SAR" },
  { id: "j7", title: "Electrician", categorySlug: "electrician", city: "Jeddah", experience: "3 years", education: "Diploma", type: "Full-time", vacancies: 25, requirements: ["3 years exp", "Diploma in Electrical"], company: "Al Afnar Company", salary: "2600 SAR" },
  { id: "j8", title: "Security Guard", categorySlug: "security-guard", city: "Jeddah", experience: "1 year", education: "Matric", type: "Full-time", vacancies: 50, requirements: ["Physically fit", "No record"], company: "Al Majal Company", salary: "2200 SAR" },
  { id: "j9", title: "Cash Counter / Cashier", categorySlug: "cashier", city: "Jeddah", experience: "1 year", education: "Intermediate", type: "Full-time", vacancies: 20, requirements: ["POS experience", "Honest"], company: "Al Saif Company", salary: "2400 SAR" },
  { id: "j10", title: "Painter", categorySlug: "painter", city: "Jeddah", experience: "2 years", education: "None", type: "Full-time", vacancies: 22, requirements: ["Spray & brush painting"], company: "Nadak Company", salary: "2700 SAR" },
  { id: "j11", title: "Mason", categorySlug: "mason", city: "Jeddah", experience: "5 years", education: "None", type: "Full-time", vacancies: 40, requirements: ["Brick & block laying", "Plastering"], company: "Nadak Company", salary: "1800 SAR" },
  { id: "j12", title: "Mechanic", categorySlug: "mechanic", city: "Jeddah", experience: "3 years", education: "ITI", type: "Full-time", vacancies: 15, requirements: ["Vehicle repair", "Diagnostic tools"], company: "Al Afnar Company", salary: "2200 SAR" },
  { id: "j13", title: "Cook", categorySlug: "cook", city: "Jeddah", experience: "2 years", education: "None", type: "Full-time", vacancies: 20, requirements: ["Pakistani/Arabic cuisine"], company: "Al Majal Company", salary: "2000 SAR" },
  { id: "j14", title: "Storekeeper", categorySlug: "storekeeper", city: "Jeddah", experience: "2 years", education: "Matric", type: "Full-time", vacancies: 12, requirements: ["Inventory management", "Computer skills"], company: "Almarai Company", salary: "1800 SAR" },
  { id: "j15", title: "Cleaner", categorySlug: "cleaner", city: "Jeddah", experience: "0-1 year", education: "None", type: "Full-time", vacancies: 60, requirements: ["Physically fit", "Reliable"], company: "Al Majal Company", salary: "1600 SAR" },
  { id: "j16", title: "Khadim (Servant)", categorySlug: "khadim", city: "Mecca", experience: "1 year", education: "None", type: "Full-time", vacancies: 25, requirements: ["Honest", "Basic Arabic"], company: "Al Saif Company", salary: "2000 SAR" },
  { id: "j17", title: "Khabbaz (Baker)", categorySlug: "khabbaz", city: "Jeddah", experience: "2 years", education: "None", type: "Full-time", vacancies: 15, requirements: ["Arabic bread baking", "Bakery experience"], company: "Al Saif Company", salary: "2500 SAR" },
  { id: "j18", title: "Umrah & Hajj Visa", categorySlug: "umrah-hajj-visa", city: "Mecca / Medina", experience: "N/A", education: "N/A", type: "Visa Service", vacancies: 0, requirements: ["Valid passport", "CNIC copy", "Vaccination certificate"], salary: "Contact for pricing" },
];

export function getCategory(slug: string) {
  return jobCategories.find((c) => c.slug === slug);
}

export function jobsByCategory(slug: string) {
  return jobOpenings.filter((j) => j.categorySlug === slug);
}
