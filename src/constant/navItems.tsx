export interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    {
        name: "SEARCH",
        href: "/",
    },
    {
        name: "WEBSITE",
        href: "https://girmantech.com/",
    },
    {
        name: "LINKEDIN",
        href: "/contact",
    },
    {
        name: "CONTACT",
        href: "mailto:contact@girmantech.com",
    },
];

export default navItems;