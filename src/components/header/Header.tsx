import React, { useEffect, useState } from "react";
import FadeInScale from "../animations/FadeInScale.js";
import { useLocation, Link } from "react-router-dom";
import logoBg from '../../assets/images/logoBg.png';
type NavItemChild = {
  name: string;
  href: string;
};

type NavItem = {
  name?: string;
  href?: string;
  slug?: string;
  children?: NavItemChild[];
};

const navItems: NavItem[] = [
  { name: "About", href: "/about" },
  {
    name: "Treatments",
    slug: "/treatments",
    children: [
      { name: "Eyebrow Treatments", href: "/treatments#eyebrow-treatments" },
      { name: "Lip Treatments", href: "/treatments#lip-treatments" },
      { name: "Eye Treatments", href: "/treatments#eye-treatments" },
      { name: "Cosmetic Treatments", href: "/treatments#cosmetic-treatments" },
      { name: "Facials", href: "/treatments#facials" },
      { name: "Injectables", href: "/treatments#injectables" },
      { name: "Beauty Services", href: "/treatments#beauty-services" },
    ],
  },
  {
    name: "Portfolio",
    slug: "/portfolio",
    children: [
      { name: "Eyebrow Treatments", href: "/portfolio#eyebrow-treatments" },
      { name: "Lip Treatments", href: "/portfolio#lip-treatments" },
      { name: "Eye Treatments", href: "/portfolio#eye-treatments" },
      { name: "Paramedic Treatments", href: "/portfolio#paramedic-treatments" },
      { name: "Skin Treatments", href: "/portfolio#skin-treatments" },
    ],
  },
  { name: "Reviews", href: "/reviews" },
  { name: "Gift Cards", href: "/giftcards" },
  { name: "T&C", href: "/terms-and-conditions" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

type ChevronIconProps = {
  isOpen: boolean;
};

const ChevronIcon = ({ isOpen }: ChevronIconProps) => (
  <svg
    className={`ml-1 h-4 w-4 transform transition duration-150 ${isOpen ? "rotate-180" : ""
      }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

type DesktopNavItemProps = {
  item: NavItem;
  activePath: string;
  activeHash: string;
};

function normalizePath(p: string | null | undefined): string {
  if (!p) return "";
  const noHash = p.split("#")[0];
  const withLeading = noHash?.startsWith("/") ? noHash : `/${noHash}`;
  return withLeading === "/" ? "/" : withLeading.replace(/\/+$/, "");
}

const DesktopNavItem = ({ item, activePath, activeHash }: DesktopNavItemProps) => {
  const itemHref = item.slug ?? item.href ?? "";
  const itemPathPart = itemHref.split("#")[0];
  const itemHashPart = itemHref.split("#")[1];

  const parentPath = normalizePath(itemPathPart || "");
  const parentHash = itemHref.includes("#") ? `#${itemHashPart ?? ""}` : "";

  const isHashOnly =
    (item.href && item.href.trim().startsWith("#")) ||
    (item.href && !item.slug && item.href.includes("#") && (!item.href.split("#")[0] || item.href.split("#")[0] === "/"));

  let isActive = false;

  if (item.children) {
    const isParentPathMatch = parentPath === activePath;
    const isChildRouteActive = item.children.some(child =>
      normalizePath(child.href.split("#")[0]) === activePath
    );

    isActive = isParentPathMatch || isChildRouteActive;

  } else if (isHashOnly) {
    if (parentHash) {
      isActive = parentHash === activeHash;
    }
  } else {
    if (parentPath) {
      isActive = parentPath === activePath;
    } else {
      isActive = activePath === "/";
    }
  }

  if (item.children) {
    return (
      <div className="group relative">
        <FadeInScale>
          <Link
            to={item.slug || "/"}
            className={`smooth-underline hover:text-main px-3 py-2 rounded-md transition duration-150 flex items-center ${isActive ? "active text-main" : ""
              }`}
          >
            {item.name}
            <ChevronIcon isOpen={false} />
          </Link>
        </FadeInScale>

        <div className="hidden group-hover:block absolute left-0 top-full">
          <div className="px-4 mt-6 w-56 bg-primary rounded-xl shadow-2xl py-2 z-20 transition duration-300 origin-top scale-y-0 group-hover:scale-y-100">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                className="smooth-underline block py-2 hover:text-main px-2 rounded-lg transition duration-150"
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <FadeInScale>
      <Link
        to={item.href || "/"}
        className={`smooth-underline hover:text-main px-3 py-2 rounded-md transition duration-150 ${isActive ? "text-main active" : ""
          }`}
      >
        {item.name}
      </Link>
    </FadeInScale>
  );
};

type MobileNavItemProps = {
  item: NavItem;
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  closeMobileMenu: () => void;
};

const MobileNavItem = ({
  item,
  openDropdown,
  setOpenDropdown,
  closeMobileMenu,
}: MobileNavItemProps) => {
  const isOpen = openDropdown === item.slug;

  if (item.children) {
    return (
      <div key={item.name}>
        <button
          onClick={() => setOpenDropdown(isOpen ? null : item.slug ?? null)}
          className="flex justify-between items-center w-full text-left hover:text-main px-3 py-2 rounded-md transition duration-150"
        >
          {item.name}
          <ChevronIcon isOpen={isOpen} />
        </button>

        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          {item.children.map((child) => (
            <Link
              key={child.name}
              to={child.href}
              className="smooth-underline block hover:bg-gray-100 hover:text-main pl-8 pr-3 py-2 text-sm transition duration-150"
              onClick={closeMobileMenu}
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      key={item.name}
      to={item.href || "/"}
      className="smooth-underline block hover:bg-gray-100 hover:text-main px-3 py-2 rounded-md transition duration-150"
      onClick={closeMobileMenu}
    >
      {item.name}
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const [activePath, setActivePath] = useState("/");
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const path = location.pathname ? location.pathname : "/";
    const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
    setActivePath(normalized);
    setActiveHash(location.hash || "");
  }, [location.pathname, location.hash]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setOpenDropdown(null);
  };

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50 rounded-b-xl font-Lora">
      <div className="w-full mx-auto px-3 lg:px-20 xl:px-40">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="block w-24 lg:w-32">
              <FadeInScale>
                <img
                  className="h-auto w-full rounded-lg"
                  src={logoBg}
                  alt="Elle Logo"
                />
              </FadeInScale>
            </Link>
          </div>

          <nav className="hidden lg:block">
            <div className="flex items-baseline gap-5 text-base font-medium">
              {navItems.map((item) => (
                <DesktopNavItem
                  key={item.name}
                  item={item}
                  activePath={activePath}
                  activeHash={activeHash}
                />
              ))}
            </div>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-main transition duration-150"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden bg-light absolute top-full left-0 w-full z-50 overflow-hidden transition-all duration-500 ease-out transform ${mobileMenuOpen
            ? "opacity-100 translate-y-0 max-h-screen h-screen"
            : "opacity-0 max-h-0 h-0"
          }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 text-sm font-medium h-full">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.name}
              item={item}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;