export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-clinic", label: "Clinic" },
  { to: "/about-doctor", label: "OurDoctor" },
  {
    label: "Services",
    isServices: true,
    children: [
      { to: "/services#root-canal", label: "Root Canal Treatment" },
      { to: "/services#dental-implants", label: "Dental Implants" },
      { to: "/services#smile-makeover", label: "Smile Designing" },
      { to: "/services#braces-aligners", label: "Orthodontics" },
      { to: "/services#wisdom-tooth-removal", label: "Wisdom Tooth Removal" },
      { to: "/services#tooth-extraction", label: "Painless Extraction" },
    ],
  },
  {
    label: "For Patients",
    children: [
      { to: "/gallery", label: "Gallery" },
      { to: "/testimonials", label: "Reviews" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  { to: "/contact", label: "Contact" },
];
