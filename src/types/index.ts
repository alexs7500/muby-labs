export type ServiceCategory = 'web' | 'inventory' | 'pos';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  gradient: string;
  accentColor: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  iconName: string;
  statLabel: string;
  statValue: string;
}

export interface CloudArchitectureBlock {
  title: string;
  subtitle: string;
  description: string;
  supabaseFeature: string;
  benefits: string[];
  codeSnippet: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  selectedService: string;
  estimatedBudget: string;
  projectDetails: string;
}
