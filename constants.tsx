
import { FAQItem, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Sewer Smell Pro",
  phone: "(844) 340-6413",
  address: "100 Dickson St, Fayetteville, AR 72701",
  email: "rick@sewersmellpro.com"
};

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    neighborhood: "Wilson Park",
    text: "We’ve lived in our 1920s bungalow for years and always had a 'ghost smell.' These guys found a cracked vent in the attic within 20 minutes of starting the smoke test."
  },
  {
    name: "James T.",
    neighborhood: "Mount Sequoyah",
    text: "Professional, local, and didn't try to upsell me a whole new sewer line. Just a simple wax ring fix."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Will the smoke make my house smell like a campfire?",
    answer: "Not at all! The diagnostic smoke we use is odorless and non-toxic. It’s more like a heavy mist. It clears out in minutes once we open a few windows, leaving no residue on your furniture or walls."
  },
  {
    question: "I only smell it when the wind blows from the North. Is that normal?",
    answer: "In Fayetteville, that's actually very common. Wind direction affects the pressure on your roof's vent stacks. If you have a small crack in a pipe inside a wall, that pressure change forces the smell into your living room."
  },
  {
    question: "Is this just for old houses on Dickson Street?",
    answer: "We love our historic homes, but new construction in West Fayetteville has issues too—often from poor venting or 'settling' that cracks plastic PVC joints. If it smells, we can find it, regardless of the home's age."
  },
  {
    question: "How long does a 'Tracing Session' take?",
    answer: "Most of the time, we’re in and out in under 90 minutes. We spend the first 20 minutes just walking the house and 'sniffing' with sensors before we even bring out the smoke machine."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "The Smoke Test",
    description: "Our signature move. We fill the lines with a safe mist that 'shows' us the holes. It’s the only way to be 100% sure where that gas is coming from.",
    icon: "fa-cloud"
  },
  {
    title: "Sniffer Sessions",
    description: "We use handheld electronic sensors to find hydrogen sulfide 'hotspots' behind your cabinets and walls without cutting any drywall.",
    icon: "fa-nose-gatherer"
  },
  {
    title: "Vent & Trap Health Check",
    description: "Sometimes it's just a dry floor drain or a bird's nest in your roof vent. We check the simple stuff first to save you money.",
    icon: "fa-house-medical"
  }
];
