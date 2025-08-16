export interface NavItem {
  label: string;
  href: string;
  subItems?: {
    label: string;
    href: string;
  }[];
}

export const navItems: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "원장소개", href: "/doctors" },
  { label: "의원소개", href: "/introduction" },
  {
    label: "닥터스토리",
    href: "/webtoons",
    subItems: [
      { label: "마약왕편", href: "/webtoons/drug-king" },
      { label: "농침/약침편", href: "/webtoons/acupuncture" },
    ],
  },
];
