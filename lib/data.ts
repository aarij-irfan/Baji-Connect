export interface Job {
  id: string
  title: string
  company: string
  companyLogo?: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Temporary"
  salary?: string
  description: string
  skills: string[]
  postedDate: string
}

export const jobData: Job[] = [
  {
    id: "job-1",
    title: "Community Health Worker",
    company: "HealthFirst Medical Center",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹20,000 - ₹25,000 per month",
    description:
      "Join our team of dedicated community health workers to provide essential healthcare services to underserved communities. You'll be responsible for health education, basic health checks, and connecting patients with healthcare resources.",
    skills: ["Patient Care", "Health Education", "Community Outreach", "Basic Medical Knowledge"],
    postedDate: "2 days ago",
  },
  {
    id: "job-2",
    title: "Home Health Aide",
    company: "CareConnect Services",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Delhi, NCR",
    type: "Part-time",
    salary: "₹15,000 - ₹18,000 per month",
    description:
      "Provide compassionate in-home care to elderly and disabled individuals. Responsibilities include assistance with daily activities, medication reminders, and basic health monitoring.",
    skills: ["Elderly Care", "Medication Management", "Compassionate Care", "First Aid"],
    postedDate: "1 week ago",
  },
  {
    id: "job-3",
    title: "Maternal Health Specialist",
    company: "Mother & Child Foundation",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹25,000 - ₹30,000 per month",
    description:
      "Work with expectant mothers to ensure healthy pregnancies and safe deliveries. Provide education on prenatal care, nutrition, and newborn care. Conduct regular check-ups and connect mothers with medical facilities when needed.",
    skills: ["Maternal Health", "Prenatal Care", "Newborn Care", "Health Education", "Community Outreach"],
    postedDate: "3 days ago",
  },
  {
    id: "job-4",
    title: "Community Nutrition Educator",
    company: "Healthy Living Initiative",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Hyderabad, Telangana",
    type: "Contract",
    salary: "₹22,000 per month",
    description:
      "Educate community members about proper nutrition and healthy eating habits. Conduct workshops, create educational materials, and work with families to develop sustainable healthy eating plans.",
    skills: ["Nutrition Knowledge", "Workshop Facilitation", "Community Engagement", "Health Education"],
    postedDate: "5 days ago",
  },
  {
    id: "job-5",
    title: "Mental Health Support Worker",
    company: "Mind Wellness Center",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    salary: "₹23,000 - ₹28,000 per month",
    description:
      "Provide support to individuals experiencing mental health challenges. Conduct basic assessments, offer emotional support, and connect clients with professional mental health services when needed.",
    skills: ["Mental Health Knowledge", "Empathetic Listening", "Crisis Management", "Community Resources"],
    postedDate: "1 week ago",
  },
  {
    id: "job-6",
    title: "Elderly Care Specialist",
    company: "Senior Care Services",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Pune, Maharashtra",
    type: "Part-time",
    salary: "₹18,000 - ₹22,000 per month",
    description:
      "Provide specialized care for elderly individuals in their homes. Monitor health conditions, assist with medication management, and offer companionship and support for daily activities.",
    skills: ["Geriatric Care", "Medication Management", "Patience", "First Aid", "Compassionate Care"],
    postedDate: "4 days ago",
  },
  {
    id: "job-7",
    title: "Diabetes Education Coordinator",
    company: "Diabetes Care Foundation",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Kolkata, West Bengal",
    type: "Full-time",
    salary: "₹24,000 - ₹29,000 per month",
    description:
      "Educate community members about diabetes prevention and management. Conduct regular check-ups, organize awareness programs, and provide personalized guidance for individuals with diabetes.",
    skills: ["Diabetes Knowledge", "Health Education", "Blood Sugar Monitoring", "Nutrition Guidance"],
    postedDate: "2 weeks ago",
  },
  {
    id: "job-8",
    title: "Vaccination Drive Coordinator",
    company: "Immunize India Initiative",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Ahmedabad, Gujarat",
    type: "Temporary",
    salary: "₹20,000 per month",
    description:
      "Coordinate and manage vaccination drives in rural and urban communities. Organize logistics, maintain records, educate community members about the importance of vaccinations, and ensure smooth operation of vaccination camps.",
    skills: ["Vaccination Knowledge", "Event Management", "Record Keeping", "Community Mobilization"],
    postedDate: "3 days ago",
  },
  {
    id: "job-9",
    title: "Reproductive Health Educator",
    company: "Family Planning Association",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Jaipur, Rajasthan",
    type: "Full-time",
    salary: "₹22,000 - ₹27,000 per month",
    description:
      "Educate community members about reproductive health, family planning, and sexual health. Conduct workshops, provide counseling, and connect individuals with appropriate healthcare services.",
    skills: ["Reproductive Health Knowledge", "Counseling", "Workshop Facilitation", "Sensitivity"],
    postedDate: "1 week ago",
  },
  {
    id: "job-10",
    title: "Community TB Prevention Worker",
    company: "TB Free India",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Lucknow, Uttar Pradesh",
    type: "Full-time",
    salary: "₹21,000 - ₹26,000 per month",
    description:
      "Work on tuberculosis prevention and control in high-risk communities. Conduct screenings, ensure treatment adherence, and educate community members about TB prevention and management.",
    skills: ["TB Knowledge", "Patient Follow-up", "Health Education", "Community Outreach"],
    postedDate: "5 days ago",
  },
  {
    id: "job-11",
    title: "Women's Health Advocate",
    company: "Women's Wellness Initiative",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Bhopal, Madhya Pradesh",
    type: "Part-time",
    salary: "₹18,000 - ₹22,000 per month",
    description:
      "Advocate for women's health issues in underserved communities. Provide education on women's health topics, connect women with healthcare resources, and organize awareness programs.",
    skills: ["Women's Health Knowledge", "Advocacy", "Sensitivity", "Community Engagement"],
    postedDate: "2 weeks ago",
  },
  {
    id: "job-12",
    title: "Child Health Monitor",
    company: "Child First Foundation",
    companyLogo: "/placeholder.svg?height=100&width=100",
    location: "Chandigarh, Punjab",
    type: "Full-time",
    salary: "₹23,000 - ₹28,000 per month",
    description:
      "Monitor the health and development of children in underserved communities. Conduct regular check-ups, track growth and development, and educate parents about child health and nutrition.",
    skills: ["Child Health Knowledge", "Growth Monitoring", "Parent Education", "Pediatric First Aid"],
    postedDate: "1 week ago",
  },
]

