import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define language type
type Language = 'en' | 'da';

// Define translation structure
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Create the context
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object with all text
const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.team': 'Team',
    'nav.instagram': 'Instagram',
    'nav.facebook': 'Facebook',
    'nav.linkedin': 'LinkedIn',
    'nav.switchLight': 'Switch to Light Mode',
    'nav.switchDark': 'Switch to Dark Mode',
    
    // Theme Toggle (used in Navbar theme button)
    'switchLight': 'Switch to Light Mode',
    'switchDark': 'Switch to Dark Mode',
    
    // Home Page
    'home.secure': 'Secure',
    'home.automated': 'Automated',
    'home.global': 'Global',
    'home.title': 'Restaurant operations software that works.',
    'home.description': 'Trusted by 500+ restaurants worldwide',
    'home.getStarted': 'Get Started',
    'home.trendTitle': 'Always trending on innovation',
    'home.trendDesc': 'Stay ahead with cutting-edge AI insights and predictive analytics',
    'home.talkTitle': 'Talk to our team',
    'home.talkDesc': 'Connect with our hospitality experts',
    'home.connect': 'Connect with us',
    
    // About Page
    'about.header': 'About prosysIT',
    'about.title': 'Where Innovation Meets Hospitality',
    'about.description': 'We\'re building the future of restaurant operations software with a focus on simplicity, reliability, and customer success.',
    'about.mission': 'Our Mission',
    'about.missionDesc': 'To empower restaurants of all sizes with technology that simplifies operations, reduces costs, and enhances customer experience.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'A world where restaurant owners focus on hospitality, not paperwork.',
    'about.values': 'Our Values',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'We constantly push boundaries to deliver cutting-edge solutions.',
    'about.reliability': 'Reliability',
    'about.reliabilityDesc': 'Your business runs 24/7, so does our platform.',
    'about.customerFirst': 'Customer First',
    'about.customerFirstDesc': 'Every feature is built with your success in mind.',
    'about.legacy': 'Our Legacy',
    'about.titleAlt': 'Hospitality Meets',
    'about.titleEnd': 'Innovation',
    'about.engineers': 'Engineers',
    'about.valuesDesc': 'Built on trust, driven by passion, focused on excellence.',
    
    // Services Page
    'services.title': 'Our Solutions',
    'services.description': 'Comprehensive tools designed for modern restaurants',
    'services.pos': 'Point of Sale',
    'services.posDesc': 'Fast, intuitive POS system designed for high-volume restaurants',
    'services.kds': 'Kitchen Display System',
    'services.kdsDesc': 'Real-time order management for kitchen efficiency',
    'services.hotel': 'Hotel Management',
    'services.hotelDesc': 'Complete property management for hospitality venues',
    'services.customStacks': 'Custom Technology Stacks',
    'services.buildWith': 'Build with what you need',
    'services.learnMore': 'Learn More',
    'services.mobileOrdering': 'Mobile Ordering',
    'services.mobileDesc': 'Seamless ordering experience for your customers',
    'services.dataAnalytics': 'Data Analytics',
    'services.ready': 'Ready to Transform?',
    'services.readyDesc': 'Start your digital transformation journey today',
    'services.getQuote': 'Get Quote',
    
    // Projects Page
    'projects.caseStudy': 'CASE STUDY',
    'projects.integration': 'INTEGRATION',
    'projects.grandBistro': 'Grand Bistro Dubai',
    'projects.grandDesc': 'Increased table turnover by 40% with intelligent reservation system',
    'projects.skyline': 'Skyline Restaurant Group',
    'projects.skylineDesc': 'Unified operations across 25 locations with real-time analytics',
    'projects.metrics': 'METRICS THAT MATTER',
    'projects.latency': 'Average Interface Latency',
    'projects.uptime': 'Platform Uptime SLA',
    'projects.testimonial': '"prosysIT didn\'t just give us software; they gave us our time back to focus on the art of service."',
    'projects.testimonyName': 'Marcus Chen',
    'projects.testimonyRole': 'Operations Director, Bistro Group',
    
    // Team Page
    'team.header': 'Meet the Team',
    'team.title': 'Hospitality Experts',
    'team.titleAlt': 'Technology Visionaries',
    'team.description': 'A team of passionate professionals dedicated to revolutionizing restaurant operations.',
    'team.alexRole': 'CEO & Founder',
    'team.alexDesc': 'Former CTO at hospitality tech startup, 15+ years in software development',
    'team.sarahRole': 'Head of Product',
    'team.sarahDesc': 'Designed solutions for 200+ restaurants, former product manager at major QSR chain',
    'team.jamalRole': 'Lead Engineer',
    'team.jamalDesc': 'Built scalable systems for high-traffic applications, passionate about performance',
    'team.emilyRole': 'Customer Success',
    'team.emilyDesc': 'Ensures every client succeeds, average response time under 2 hours',
    'team.davidRole': 'Business Development',
    'team.davidDesc': 'Relationships with 500+ restaurant networks across EMEA region',
    
    // Privacy Page
    'privacy.header': 'Privacy Policy',
    'privacy.title': 'How We Protect Your Data',
    'privacy.dataArchitecture': 'Data Architecture',
    'privacy.dataPoint1': 'All data encrypted end-to-end with military-grade AES-256',
    'privacy.dataPoint2': 'GDPR compliant data storage in EU data centers',
    'privacy.dataPoint3': 'Regular security audits by third-party penetration testers',
    'privacy.aiEthics': 'AI Ethics & Transparency',
    'privacy.aiDesc': 'Our AI systems are designed with transparency and fairness in mind.',
    'privacy.humanRights': 'We respect human rights and privacy in every decision we make.',
    'privacy.lastUpdated': 'Last updated on February 2026',
    'privacy.point1': 'All data encrypted end-to-end with military-grade AES-256',
    'privacy.point2': 'GDPR compliant data storage in EU data centers',
    'privacy.point3': 'Regular security audits by third-party penetration testers',
    'privacy.humanRight': 'Human Rights & Privacy First',
    
    // Terms Page
    'terms.header': 'Terms of Service',
    'terms.title': 'Terms & Conditions',
    'terms.licenseTitle': 'License Grant',
    'terms.licenseDesc': 'We grant you a non-exclusive, non-transferable license to use prosysIT services for your business operations.',
    'terms.uptimeTitle': 'Uptime Guarantee',
    'terms.uptimeDesc': 'We commit to 99.99% uptime SLA. Downtime credits applied automatically for any breaches.',
    'terms.billingTitle': 'Billing & Payments',
    'terms.billingDesc': 'Billing is monthly or annually. Cancellation anytime with 30 days notice.',
    'terms.supportTitle': '24/7 Support',
    'terms.supportDesc': 'Our team is available 24/7 to help you succeed with prosysIT.',
    'terms.subtitle': 'Our commitment to your success',
    'terms.license': 'License Grant',
    'terms.uptime': 'Uptime Guarantee',
    'terms.billing': 'Billing & Payments',
    'terms.support': '24/7 Support',
    
    // Bottom Section
    'bottom.deployments': 'Deployments',
    'bottom.expertise': 'Years of Expertise',
    'bottom.aiStream': 'AI-Powered Insights',
    
    // Footer
    'footer.copyright': '© 2024 prosysIT. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  da: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.about': 'Om Os',
    'nav.services': 'Tjenester',
    'nav.projects': 'Projekter',
    'nav.team': 'Team',
    'nav.instagram': 'Instagram',
    'nav.facebook': 'Facebook',
    'nav.switchLight': 'Skift til lysmodus',
    'nav.switchDark': 'Skift til mørk tilstand',
    
    // Theme Toggle (used in Navbar theme button)
    'switchLight': 'Skift til lysmodus',
    'switchDark': 'Skift til mørk tilstand',
    
    // Home Page
    'home.secure': 'Sikker',
    'home.automated': 'Automatiseret',
    'home.global': 'Global',
    'home.title': 'Restaurantdriftssoftware, der fungerer.',
    'home.description': 'Betroet af 500+ restauranter verden over',
    'home.getStarted': 'Kom i gang',
    'home.trendTitle': 'Altid trending inden for innovation',
    'home.trendDesc': 'Bliv forude med banebrydende AI-indsigter og forudsigelig analyse',
    'home.talkTitle': 'Tal med vores team',
    'home.talkDesc': 'Forbind med vores hospitality-eksperter',
    'home.connect': 'Forbind med os',
    
    // About Page
    'about.header': 'Om prosysIT',
    'about.title': 'Hvor Innovation Møder Hospitality',
    'about.description': 'Vi bygger fremtiden inden for restaurantdriftssoftware med fokus på enkelhed, pålidelighed og kundesucces.',
    'about.mission': 'Vores Mission',
    'about.missionDesc': 'At give restauranter af alle størrelser en teknologi, der forenkler operationer, reducerer omkostninger og forbedrer kundeoplevelsen.',
    'about.vision': 'Vores Vision',
    'about.visionDesc': 'En verden hvor restaurantejere fokuserer på hospitality, ikke papirarbejde.',
    'about.values': 'Vores Værdier',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Vi skubber konstant grænserne for at levere banebrydende løsninger.',
    'about.reliability': 'Pålidelighed',
    'about.reliabilityDesc': 'Din forretning kører 24/7, det gør vores platform også.',
    'about.customerFirst': 'Kunde Først',
    'about.customerFirstDesc': 'Hver funktion er bygget med din succes for øje.',
    'about.legacy': 'Vores Arv',
    'about.titleAlt': 'Hospitality Møder',
    'about.titleEnd': 'Innovation',
    'about.engineers': 'Ingeniører',
    'about.valuesDesc': 'Bygget på tillid, drevet af passion, fokuseret på excellence.',
    
    // Services Page
    'services.title': 'Vores Løsninger',
    'services.description': 'Omfattende værktøjer designet til moderne restauranter',
    'services.pos': 'Kassesystem',
    'services.posDesc': 'Hurtigt, intuitivt kassesystem designet til højvolumen restauranter',
    'services.kds': 'Køkkendisplaysystem',
    'services.kdsDesc': 'Realtidsordrestyring for køkkeneffektivitet',
    'services.hotel': 'Hotelstyring',
    'services.hotelDesc': 'Komplet ejendomsstyring for hospitality-lokaler',
    'services.customStacks': 'Brugerdefinerede Teknologistakke',
    'services.buildWith': 'Byg med det du har brug for',
    'services.learnMore': 'Lær Mere',
    'services.mobileOrdering': 'Mobilbestilling',
    'services.mobileDesc': 'Problemfri bestillingsoplevelse for dine kunder',
    'services.dataAnalytics': 'Dataanalyse',
    'services.ready': 'Klar til at transformere?',
    'services.readyDesc': 'Start din digitale transformationsrejse i dag',
    'services.getQuote': 'Få tilbud',
    
    // Projects Page
    'projects.caseStudy': 'CASESTUDIE',
    'projects.integration': 'INTEGRATION',
    'projects.grandBistro': 'Grand Bistro Dubai',
    'projects.grandDesc': 'Øget bornomsætning med 40% med intelligent reservationssystem',
    'projects.skyline': 'Skyline Restaurant Group',
    'projects.skylineDesc': 'Enhedede operationer på tværs af 25 lokationer med realtidsanalyser',
    'projects.metrics': 'MÅLINGER DER BETYDER NOGET',
    'projects.latency': 'Gennemsnitlig Grænsefladehastighed',
    'projects.uptime': 'Platform Oppetid SLA',
    'projects.testimonial': '"prosysIT gav os ikke bare software; de gav os vores tid tilbage til at fokusere på servicekunden."',
    'projects.testimonyName': 'Marcus Chen',
    'projects.testimonyRole': 'Driftschef, Bistro Group',
    
    // Team Page
    'team.header': 'Møt Teamet',
    'team.title': 'Hospitality Eksperter',
    'team.titleAlt': 'Teknologi Visionærer',
    'team.description': 'Et team af passionerede fagfolk dedikeret til at revolutionere restaurantdrift.',
    'team.alexRole': 'CEO & Grundlægger',
    'team.alexDesc': 'Tidligere CTO på hospitality tech startup, 15+ år inden for softwareudvikling',
    'team.sarahRole': 'Produktchef',
    'team.sarahDesc': 'Designede løsninger til 200+ restauranter, tidligere produktchef hos større QSR-kæde',
    'team.jamalRole': 'Ledende Ingeniør',
    'team.jamalDesc': 'Byggede skalerbare systemer til højtrafik applikationer, passioneret omkring performance',
    'team.emilyRole': 'Kundesucces',
    'team.emilyDesc': 'Sikrer hver klient succeeds, gennemsnitlig responstid under 2 timer',
    'team.davidRole': 'Forretningsudvikling',
    'team.davidDesc': 'Forhold til 500+ restaurant netværk på tværs af EMEA region',
    
    // Privacy Page
    'privacy.header': 'Privatlivspolitik',
    'privacy.title': 'Hvordan Vi Beskytter Dine Data',
    'privacy.dataArchitecture': 'Data Arkitektur',
    'privacy.dataPoint1': 'Alle data krypteret ende-til-ende med militærklasse AES-256',
    'privacy.dataPoint2': 'GDPR-kompatibel datalagring i EU datacentre',
    'privacy.dataPoint3': 'Regelmæssige sikkerhedsrevision af tredjeparts penetrationstestere',
    'privacy.aiEthics': 'AI Etik & Transparens',
    'privacy.aiDesc': 'Vores AI-systemer er designet med transparens og retfærdighed i tankerne.',
    'privacy.humanRights': 'Vi respekterer menneskerettigheder og privatlivspolitik i hver beslutning vi træffer.',
    'privacy.lastUpdated': 'Senest opdateret februar 2026',
    'privacy.point1': 'Alle data krypteret ende-til-ende med militærklasse AES-256',
    'privacy.point2': 'GDPR-kompatibel datalagring i EU datacentre',
    'privacy.point3': 'Regelmæssige sikkerhedsrevision af tredjeparts penetrationstestere',
    'privacy.humanRight': 'Menneskerettigheder & Privatlivspolitik Først',
    
    // Terms Page
    'terms.header': 'Servicevilkår',
    'terms.title': 'Vilkår & Betingelser',
    'terms.licenseTitle': 'Licenstildeling',
    'terms.licenseDesc': 'Vi giver dig en ikke-eksklusiv, ikke-overdragelig licens til at bruge prosysIT services til din forretningsdrift.',
    'terms.uptimeTitle': 'Oppetidsgaranti',
    'terms.uptimeDesc': 'Vi forpligter os til 99.99% oppetids SLA. Nedetidskreditter anvendes automatisk for eventuelle overtrædelser.',
    'terms.billingTitle': 'Fakturering & Betalinger',
    'terms.billingDesc': 'Fakturering er månedlig eller årligt. Annullering når som helst med 30 dages varsel.',
    'terms.supportTitle': '24/7 Support',
    'terms.supportDesc': 'Vores team er tilgængelig 24/7 for at hjælpe dig med at lykkes med prosysIT.',
    'terms.subtitle': 'Vores forpligtelse til din succes',
    'terms.license': 'Licenstildeling',
    'terms.uptime': 'Oppetidsgaranti',
    'terms.billing': 'Fakturering & Betalinger',
    'terms.support': '24/7 Support',
    
    // Bottom Section
    'bottom.deployments': 'Indsættelser',
    'bottom.expertise': 'År med Ekspertise',
    'bottom.aiStream': 'AI-drevne Indsigter',
    
    // Footer
    'footer.copyright': '© 2024 prosysIT. Alle rettigheder forbeholdt.',
    'footer.privacy': 'Privatlivspolitik',
    'footer.terms': 'Servicevilkår',
  },
};

// Language Provider Component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'da' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
