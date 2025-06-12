
// Comprehensive internship domain database
const INTERNSHIP_DOMAINS = [
  {
    id: 'web-development',
    domain: 'Web Development',
    description: 'Build dynamic websites and web applications using modern technologies like React, Node.js, and cloud platforms',
    skills: ['Web Development (HTML, CSS, JavaScript)', 'Programming (Python, Java, C++)', 'Database Management (SQL, NoSQL)', 'UI/UX Design'],
    interests: ['Web Development & Frontend', 'UI/UX Design'],
    potentialRoles: ['Frontend Developer Intern', 'Full Stack Developer Intern', 'Web Designer Intern', 'React Developer Intern'],
    demandLevel: 'Very High',
    avgSalary: '₹15,000-30,000/month',
    industryGrowth: '25% annually'
  },
  {
    id: 'data-science',
    domain: 'Data Science & Analytics',
    description: 'Extract insights from complex datasets using statistical analysis, machine learning, and visualization tools',
    skills: ['Data Analysis & Statistics', 'Programming (Python, Java, C++)', 'Machine Learning & AI', 'Research & Analytics'],
    interests: ['Data Science & Analytics', 'Artificial Intelligence & Machine Learning', 'Research & Development'],
    potentialRoles: ['Data Analyst Intern', 'Business Intelligence Intern', 'Data Scientist Intern', 'Analytics Intern'],
    demandLevel: 'Very High',
    avgSalary: '₹20,000-40,000/month',
    industryGrowth: '30% annually'
  },
  {
    id: 'artificial-intelligence',
    domain: 'Artificial Intelligence & Machine Learning',
    description: 'Develop intelligent systems, neural networks, and automated decision-making algorithms',
    skills: ['Machine Learning & AI', 'Programming (Python, Java, C++)', 'Data Analysis & Statistics', 'Research & Analytics'],
    interests: ['Artificial Intelligence & Machine Learning', 'Data Science & Analytics', 'Research & Development'],
    potentialRoles: ['AI Research Intern', 'ML Engineer Intern', 'Computer Vision Intern', 'NLP Engineer Intern'],
    demandLevel: 'Extremely High',
    avgSalary: '₹25,000-50,000/month',
    industryGrowth: '40% annually'
  },
  {
    id: 'mobile-development',
    domain: 'Mobile App Development',
    description: 'Create innovative mobile applications for iOS and Android platforms using native and cross-platform technologies',
    skills: ['Mobile App Development', 'Programming (Python, Java, C++)', 'UI/UX Design', 'Database Management (SQL, NoSQL)'],
    interests: ['Mobile App Development', 'Web Development & Frontend', 'UI/UX Design'],
    potentialRoles: ['iOS Developer Intern', 'Android Developer Intern', 'React Native Developer Intern', 'Flutter Developer Intern'],
    demandLevel: 'High',
    avgSalary: '₹18,000-35,000/month',
    industryGrowth: '20% annually'
  },
  {
    id: 'digital-marketing',
    domain: 'Digital Marketing & Growth',
    description: 'Drive online growth through SEO, social media, content marketing, and data-driven campaign strategies',
    skills: ['Digital Marketing & SEO', 'Content Writing & Communication', 'Data Analysis & Statistics', 'Research & Analytics'],
    interests: ['Digital Marketing & Growth', 'Content Creation & Media', 'Research & Development'],
    potentialRoles: ['Digital Marketing Intern', 'Social Media Marketing Intern', 'Content Marketing Intern', 'Growth Hacking Intern'],
    demandLevel: 'High',
    avgSalary: '₹12,000-25,000/month',
    industryGrowth: '15% annually'
  },
  {
    id: 'cybersecurity',
    domain: 'Cybersecurity',
    description: 'Protect digital assets, networks, and systems from cyber threats using advanced security technologies',
    skills: ['Programming (Python, Java, C++)', 'Database Management (SQL, NoSQL)', 'Research & Analytics'],
    interests: ['Cybersecurity', 'Research & Development', 'Cloud Computing & DevOps'],
    potentialRoles: ['Security Analyst Intern', 'Ethical Hacker Intern', 'Security Engineer Intern', 'Cybersecurity Consultant Intern'],
    demandLevel: 'Extremely High',
    avgSalary: '₹20,000-40,000/month',
    industryGrowth: '35% annually'
  },
  {
    id: 'cloud-computing',
    domain: 'Cloud Computing & DevOps',
    description: 'Design, deploy, and manage scalable cloud infrastructure and automated deployment pipelines',
    skills: ['Programming (Python, Java, C++)', 'Database Management (SQL, NoSQL)', 'Research & Analytics'],
    interests: ['Cloud Computing & DevOps', 'Research & Development', 'Cybersecurity'],
    potentialRoles: ['Cloud Engineer Intern', 'DevOps Intern', 'Site Reliability Engineer Intern', 'Cloud Architect Intern'],
    demandLevel: 'Very High',
    avgSalary: '₹22,000-45,000/month',
    industryGrowth: '28% annually'
  },
  {
    id: 'product-management',
    domain: 'Product Management',
    description: 'Guide product strategy, roadmap development, and cross-functional team coordination from conception to launch',
    skills: ['Project Management', 'Research & Analytics', 'UI/UX Design', 'Data Analysis & Statistics'],
    interests: ['Product Management', 'Consulting & Strategy', 'Digital Marketing & Growth'],
    potentialRoles: ['Product Manager Intern', 'Product Analyst Intern', 'Product Marketing Intern', 'Strategy Intern'],
    demandLevel: 'High',
    avgSalary: '₹18,000-35,000/month',
    industryGrowth: '18% annually'
  },
  {
    id: 'finance-fintech',
    domain: 'Finance & FinTech',
    description: 'Analyze financial markets, develop trading algorithms, and create innovative financial technology solutions',
    skills: ['Financial Analysis', 'Data Analysis & Statistics', 'Research & Analytics', 'Programming (Python, Java, C++)'],
    interests: ['Finance & Banking', 'Data Science & Analytics', 'Research & Development'],
    potentialRoles: ['Financial Analyst Intern', 'Investment Banking Intern', 'FinTech Developer Intern', 'Quantitative Analyst Intern'],
    demandLevel: 'High',
    avgSalary: '₹20,000-40,000/month',
    industryGrowth: '22% annually'
  },
  {
    id: 'ui-ux-design',
    domain: 'UI/UX Design',
    description: 'Create intuitive user interfaces and exceptional user experiences through research-driven design methodologies',
    skills: ['UI/UX Design', 'Research & Analytics', 'Content Writing & Communication'],
    interests: ['UI/UX Design', 'Content Creation & Media', 'Digital Marketing & Growth'],
    potentialRoles: ['UI/UX Designer Intern', 'Product Designer Intern', 'User Researcher Intern', 'Interaction Designer Intern'],
    demandLevel: 'High',
    avgSalary: '₹15,000-30,000/month',
    industryGrowth: '20% annually'
  }
];

// Advanced matching algorithm with weighted scoring
function calculateDomainMatch(profileData: any, domain: any): number {
  let totalScore = 0;
  let weightSum = 0;

  // Skills matching (40% weight)
  const skillWeight = 40;
  const userSkills = profileData.skills || [];
  const matchingSkills = userSkills.filter((userSkill: string) => 
    domain.skills.some((domainSkill: string) => 
      domainSkill.toLowerCase().includes(userSkill.toLowerCase()) || 
      userSkill.toLowerCase().includes(domainSkill.toLowerCase()) ||
      getSkillSimilarity(userSkill, domainSkill) > 0.7
    )
  );
  const skillMatchRatio = userSkills.length > 0 ? matchingSkills.length / userSkills.length : 0;
  const skillScore = Math.min(100, skillMatchRatio * 100 + (matchingSkills.length * 10));
  
  totalScore += skillScore * skillWeight;
  weightSum += skillWeight;

  // Interests matching (35% weight)
  const interestWeight = 35;
  const userInterests = profileData.interests || [];
  const matchingInterests = userInterests.filter((userInterest: string) => 
    domain.interests.some((domainInterest: string) => 
      domainInterest.toLowerCase().includes(userInterest.toLowerCase()) ||
      userInterest.toLowerCase().includes(domainInterest.toLowerCase()) ||
      getInterestSimilarity(userInterest, domainInterest) > 0.6
    )
  );
  const interestMatchRatio = userInterests.length > 0 ? matchingInterests.length / userInterests.length : 0;
  const interestScore = Math.min(100, interestMatchRatio * 100 + (matchingInterests.length * 15));
  
  totalScore += interestScore * interestWeight;
  weightSum += interestWeight;

  // Academic background relevance (15% weight)
  const academicWeight = 15;
  const academicScore = calculateAcademicRelevance(profileData, domain);
  
  totalScore += academicScore * academicWeight;
  weightSum += academicWeight;

  // Experience relevance (10% weight)
  const experienceWeight = 10;
  const experienceScore = calculateExperienceRelevance(profileData, domain);
  
  totalScore += experienceScore * experienceWeight;
  weightSum += experienceWeight;

  return Math.round(totalScore / weightSum);
}

// Helper function to calculate skill similarity
function getSkillSimilarity(skill1: string, skill2: string): number {
  const s1 = skill1.toLowerCase();
  const s2 = skill2.toLowerCase();
  
  const keywords1 = s1.split(/[\s,&()]+/).filter(word => word.length > 2);
  const keywords2 = s2.split(/[\s,&()]+/).filter(word => word.length > 2);
  
  let matches = 0;
  keywords1.forEach(word1 => {
    keywords2.forEach(word2 => {
      if (word1.includes(word2) || word2.includes(word1)) {
        matches++;
      }
    });
  });
  
  return matches / Math.max(keywords1.length, keywords2.length);
}

// Helper function to calculate interest similarity
function getInterestSimilarity(interest1: string, interest2: string): number {
  return getSkillSimilarity(interest1, interest2);
}

// Calculate academic background relevance
function calculateAcademicRelevance(profileData: any, domain: any): number {
  const branch = profileData.branch?.toLowerCase() || '';
  const degree = profileData.degree?.toLowerCase() || '';
  
  let score = 50; // Base score
  
  // Domain-specific academic bonuses
  const academicMappings = {
    'web-development': ['computer', 'software', 'information technology', 'it'],
    'data-science': ['computer', 'statistics', 'mathematics', 'data', 'analytics'],
    'artificial-intelligence': ['computer', 'software', 'artificial intelligence', 'machine learning'],
    'mobile-development': ['computer', 'software', 'information technology'],
    'digital-marketing': ['marketing', 'business', 'commerce', 'management', 'communications'],
    'cybersecurity': ['computer', 'information security', 'cybersecurity', 'it'],
    'cloud-computing': ['computer', 'information technology', 'cloud computing'],
    'product-management': ['business', 'management', 'industrial', 'mba'],
    'finance-fintech': ['finance', 'economics', 'commerce', 'mathematics', 'statistics'],
    'ui-ux-design': ['design', 'arts', 'computer', 'media', 'communications']
  };
  
  const relevantKeywords = academicMappings[domain.id as keyof typeof academicMappings] || [];
  
  relevantKeywords.forEach(keyword => {
    if (branch.includes(keyword) || degree.includes(keyword)) {
      score += 20;
    }
  });
  
  return Math.min(100, score);
}

// Calculate experience relevance
function calculateExperienceRelevance(profileData: any, domain: any): number {
  const experience = profileData.pastExperience?.toLowerCase() || '';
  
  if (!experience || experience.length < 10) {
    return 30; // Base score for minimal experience
  }
  
  let score = 40; // Base score for having experience
  
  // Check for domain-relevant keywords in experience
  const domainKeywords = [
    domain.domain.toLowerCase(),
    ...domain.skills.map((s: string) => s.toLowerCase()),
    ...domain.potentialRoles.map((r: string) => r.toLowerCase())
  ];
  
  domainKeywords.forEach(keyword => {
    const keywordParts = keyword.split(/[\s,&()]+/).filter(part => part.length > 2);
    keywordParts.forEach(part => {
      if (experience.includes(part)) {
        score += 8;
      }
    });
  });
  
  return Math.min(100, score);
}

// Generate personalized reasoning
function generatePersonalizedReasoning(profileData: any, domain: any, matchingSkills: string[]): string {
  const reasons = [];
  
  // Skills-based reasoning
  if (matchingSkills.length > 0) {
    const topSkills = matchingSkills.slice(0, 2);
    reasons.push(`Your expertise in ${topSkills.join(' and ')} aligns perfectly with this domain's requirements`);
  }
  
  // Interest-based reasoning
  const relevantInterests = profileData.interests?.filter((interest: string) => 
    domain.interests.some((domainInterest: string) => 
      domainInterest.toLowerCase().includes(interest.toLowerCase())
    )
  ) || [];
  
  if (relevantInterests.length > 0) {
    reasons.push(`your passion for ${relevantInterests[0]} makes this an excellent career fit`);
  }
  
  // Academic background reasoning
  const branch = profileData.branch?.toLowerCase() || '';
  if (branch.includes('computer') && domain.id.includes('development')) {
    reasons.push('your computer science background provides essential technical foundations');
  } else if (branch.includes('business') && domain.id.includes('management')) {
    reasons.push('your business education offers valuable strategic thinking skills');
  }
  
  // Experience-based reasoning
  if (profileData.pastExperience && profileData.pastExperience.length > 50) {
    reasons.push('your hands-on experience demonstrates practical commitment to the field');
  }
  
  // Industry growth insight
  reasons.push(`the ${domain.domain.toLowerCase()} industry is experiencing ${domain.industryGrowth} growth, offering excellent career prospects`);
  
  return reasons.length > 0 
    ? reasons.join(', ') + '.'
    : `This domain offers exceptional growth opportunities that complement your academic background and career aspirations.`;
}

// Main recommendation engine
export function generateRecommendations(profileData: any) {
  console.log('🤖 AI Engine: Analyzing profile data...', profileData);

  const recommendations = INTERNSHIP_DOMAINS.map(domain => {
    const matchScore = calculateDomainMatch(profileData, domain);
    
    // Find matching skills for detailed display
    const matchingSkills = (profileData.skills || []).filter((skill: string) => 
      domain.skills.some((domainSkill: string) => 
        domainSkill.toLowerCase().includes(skill.toLowerCase()) || 
        skill.toLowerCase().includes(domainSkill.toLowerCase()) ||
        getSkillSimilarity(skill, domainSkill) > 0.7
      )
    );

    const reasoning = generatePersonalizedReasoning(profileData, domain, matchingSkills);

    return {
      id: domain.id,
      domain: domain.domain,
      description: domain.description,
      matchScore,
      matchingSkills: matchingSkills.slice(0, 5), // Top 5 matching skills
      reasoning,
      potentialRoles: domain.potentialRoles,
      demandLevel: domain.demandLevel,
      avgSalary: domain.avgSalary,
      industryGrowth: domain.industryGrowth
    };
  });

  // Sort by match score and return top 5 recommendations
  const topRecommendations = recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);

  console.log('🎯 AI Engine: Generated top recommendations:', topRecommendations);
  
  return topRecommendations;
}
