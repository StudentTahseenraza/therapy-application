// Therapist information from the PDF
export const therapistInfo = {
  name: 'Dr. Maya Reynolds, PsyD',
  title: 'Licensed Clinical Psychologist',
  location: 'Santa Monica, California',
  address: '123th Street 45 W, Santa Monica, CA 90401',
  phone: '(555) 555-5555',
  email: 'contact@drmayareynolds.com',
  specialties: ['Anxiety & Panic', 'Trauma Recovery', 'Professional Burnout'],
  approaches: ['Cognitive Behavioral Therapy (CBT)', 'EMDR', 'Mindfulness Practices', 'Body-Oriented Techniques'],
  description: `I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.`,
  officeDescription: `My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.`,
};

// Services/Specialties data
export const services = [
  {
    id: 'anxiety',
    title: 'Anxiety & Panic',
    description:
      'Help with constant worry, panic attacks, and feeling emotionally on edge. Many clients appear functional externally while struggling internally with tension and anticipation.',
    icon: '🧠',
    image: '/images/services/anxiety.png',
  },
  {
    id: 'trauma',
    title: 'Trauma Recovery',
    description:
      'Specialized support for single-incident trauma and complex patterns from childhood or relationships. Emphasis on safety, stabilization, and paced healing.',
    icon: '🕊️',
    image: '/images/services/trauma.png',
  },
  {
    id: 'burnout',
    title: 'Professional Burnout',
    description:
      'Support for entrepreneurs, creatives, and professionals feeling disconnected after years of pushing through stress. Focus on sustainable living and working.',
    icon: '⚖️',
    image: '/images/services/burnout.png',
  },
];


// FAQ Data
export const faqs = [
  {
    id: 'insurance',
    title: 'Do you take insurance?',
    content: 'I am an out-of-network provider, which means I do not bill insurance directly. However, I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. Many of my clients receive partial reimbursement through their out-of-network benefits.',
  },
  {
    id: 'rates',
    title: 'What are your rates?',
    content: 'My standard fee for a 50-minute individual therapy session is $225. I offer a limited number of reduced-fee slots based on availability and financial need. During our initial consultation, we can discuss fees and any available options.',
  },
  {
    id: 'openings',
    title: 'Do you have any openings?',
    content: 'I typically maintain a waitlist for new clients. However, availability changes regularly. The best way to check current openings is to schedule a free 15-minute consultation call through my contact page.',
  },
  {
    id: 'modality',
    title: 'Do you offer in-person or telehealth sessions?',
    content: 'I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. Many clients choose a hybrid approach based on their needs and schedule.',
  },
  {
    id: 'specialties',
    title: 'What types of clients do you work with?',
    content: 'I specialize in working with adults who are navigating anxiety, trauma recovery, and professional burnout. Many of my clients are high-achieving professionals, entrepreneurs, and creatives who are looking to build more sustainable, fulfilling lives while managing the pressures of their careers.',
  },
];

// Professional Background
export const professionalBackground = [
  {
    id: 'education',
    title: 'Education',
    content: 'PsyD in Clinical Psychology from an APA-accredited program. Extensive training in evidence-based therapies including CBT, EMDR, and mindfulness-based approaches.',
  },
  {
    id: 'licensure',
    title: 'Licensure',
    content: 'Licensed Clinical Psychologist in the State of California (License # PSYXXXXX). I maintain active memberships in professional organizations and engage in regular continuing education.',
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: 'EMDR (Eye Movement Desensitization and Reprocessing) Certified Therapist. Additional training in trauma-informed care, mindfulness-based stress reduction, and somatic experiencing.',
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: '1',
    slug: 'understanding-anxiety-in-high-achieving-adults',
    title: 'Understanding Anxiety in High-Achieving Adults',
    excerpt:
      'Exploring why successful professionals often experience anxiety and practical strategies for managing it.',
    date: 'March 11, 2024',
    readTime: '5 min read',
    category: 'Anxiety',
    image: '/images/blog/blog1.png',
  },
  {
    id: '2',
    slug: 'trauma-recovery-beyond-survival-mode',
    title: 'Trauma Recovery: Beyond Survival Mode',
    excerpt:
      'How to move from simply surviving to thriving after traumatic experiences.',
    date: 'February 28, 2024',
    readTime: '7 min read',
    category: 'Trauma',
    image: '/images/blog/blog2.png',
  },
  {
    id: '3',
    slug: 'recognizing-burnout-before-it-takes-over',
    title: 'Recognizing Burnout Before It Takes Over',
    excerpt:
      'Early warning signs of professional burnout and preventative strategies.',
    date: 'February 15, 2024',
    readTime: '6 min read',
    category: 'Burnout',
    image: '/images/blog/blog3.png',
  },
  {
    id: '4',
    slug: 'the-power-of-mindfulness-in-daily-life',
    title: 'The Power of Mindfulness in Daily Life',
    excerpt:
      'Simple mindfulness practices that can transform your relationship with stress.',
    date: 'January 30, 2024',
    readTime: '4 min read',
    category: 'Mindfulness',
    image: '/images/blog/blog4.png',
  },
];
