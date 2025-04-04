export interface Course {
  id: string
  title: string
  description: string
  videoUrl: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  instructor: string
  tags: string[]
}

export const courseData: Course[] = [
  {
    id: "course-1",
    title: "Basic Caregiving Skills",
    description:
      "Learn the fundamentals of caregiving and community health best practices. This course covers patient communication, basic health monitoring, and safety protocols.",
    videoUrl: "https://www.youtube.com/embed/39GFOf4x1m8",
    duration: "1h 15m",
    level: "Beginner",
    instructor: "Dr. Priya Sharma",
    tags: ["Caregiving", "Fundamentals", "Patient Care"],
  },
  {
    id: "course-2",
    title: "Maternal Health Essentials",
    description:
      "Comprehensive training on maternal health care, covering prenatal care, postnatal support, and newborn care essentials for community health workers.",
    videoUrl: "https://www.youtube.com/embed/EKgGKaAXzRI",
    duration: "2h 30m",
    level: "Intermediate",
    instructor: "Dr. Anita Desai",
    tags: ["Maternal Health", "Prenatal Care", "Postnatal Care"],
  },
  {
    id: "course-3",
    title: "Diabetes Management in Communities",
    description:
      "Learn how to support patients with diabetes through monitoring, education, and lifestyle guidance. Includes practical demonstrations of blood sugar testing.",
    videoUrl: "https://www.youtube.com/embed/wZAjVQWbMlE",
    duration: "1h 45m",
    level: "Intermediate",
    instructor: "Dr. Rajiv Kumar",
    tags: ["Diabetes", "Chronic Disease", "Patient Education"],
  },
  {
    id: "course-4",
    title: "Mental Health First Aid",
    description:
      "Essential training for recognizing and providing initial support for mental health issues in community settings. Learn to identify signs of distress and make appropriate referrals.",
    videoUrl: "https://www.youtube.com/embed/BDplCFY0vAY",
    duration: "2h 10m",
    level: "Beginner",
    instructor: "Dr. Meera Patel",
    tags: ["Mental Health", "First Aid", "Crisis Support"],
  },
  {
    id: "course-5",
    title: "Elderly Care Specialist Training",
    description:
      "Comprehensive course on caring for elderly patients, covering mobility assistance, medication management, and addressing common age-related health concerns.",
    videoUrl: "https://www.youtube.com/embed/oX6IcSYdQ-E",
    duration: "3h 20m",
    level: "Advanced",
    instructor: "Dr. Sanjay Gupta",
    tags: ["Elderly Care", "Geriatrics", "Medication Management"],
  },
  {
    id: "course-6",
    title: "Nutrition Education for Health Workers",
    description:
      "Learn how to provide effective nutrition guidance for different age groups and health conditions. Includes practical meal planning and dietary recommendations.",
    videoUrl: "https://www.youtube.com/embed/fqhYBTg73fw",
    duration: "1h 50m",
    level: "Intermediate",
    instructor: "Dr. Lakshmi Iyer",
    tags: ["Nutrition", "Diet Planning", "Health Education"],
  },
  {
    id: "course-7",
    title: "Communicable Disease Prevention",
    description:
      "Essential training on preventing the spread of communicable diseases in community settings. Learn about vaccination advocacy, hygiene practices, and community education.",
    videoUrl: "https://www.youtube.com/embed/kC47Pfm86Xw",
    duration: "2h 05m",
    level: "Beginner",
    instructor: "Dr. Vikram Singh",
    tags: ["Disease Prevention", "Vaccination", "Community Health"],
  },
  {
    id: "course-8",
    title: "Advanced First Aid for Community Health Workers",
    description:
      "Comprehensive first aid training specifically designed for community health workers. Covers emergency response, wound care, CPR, and when to seek additional medical help.",
    videoUrl: "https://www.youtube.com/embed/WqR2S3CyboQ",
    duration: "2h 40m",
    level: "Advanced",
    instructor: "Dr. Neha Reddy",
    tags: ["First Aid", "Emergency Response", "CPR"],
  },
]

