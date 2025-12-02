import React, { useEffect, useState, useRef } from "react";
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
  // {
  //   name: "Portfolio",
  //   slug: "/portfolio",
  //   children: [
  //     { name: "Eyebrow Treatments", href: "/portfolio#eyebrow-treatments" },
  //     { name: "Lip Treatments", href: "/portfolio#lip-treatments" },
  //     { name: "Eye Treatments", href: "/portfolio#eye-treatments" },
  //     { name: "Paramedic Treatments", href: "/portfolio#paramedic-treatments" },
  //     { name: "Skin Treatments", href: "/portfolio#skin-treatments" },
  //   ],
  // },
  // { name: "Reviews", href: "/reviews" },
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
  activePath: string;
  activeHash: string;
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
};

const MobileNavItem = ({ item, activePath, activeHash, openDropdown, setOpenDropdown }: MobileNavItemProps) => {
  const itemHref = item.slug ?? item.href ?? "";
  const itemPathPart = itemHref.split("#")[0];
  const itemHashPart = itemHref.split("#")[1];
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

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

  const isOpen = openDropdown === (item.slug || item.href);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX
      });
    }
  }, [isOpen]);

  if (item.children) {
    return (
      <>
        <div className="mobile-nav-item relative z-50">
          <button
            ref={buttonRef}
            onClick={(e) => {
              e.preventDefault();
              const newValue = isOpen ? null : (item.slug || item.href || "");
              setOpenDropdown(newValue);
            }}
            className={`smooth-underline hover:text-main px-2 py-1 rounded-md transition duration-150 flex items-center whitespace-nowrap ${isActive ? "active text-main" : ""
              }`}
          >
            {item.name}
            <ChevronIcon isOpen={isOpen} />
          </button>
        </div>
        {isOpen && (
          <div 
            className="mobile-dropdown fixed w-48 bg-primary rounded-xl shadow-2xl py-2 z-[9999]"
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`
            }}
          >
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                onClick={() => setOpenDropdown(null)}
                className="smooth-underline block py-2 hover:text-main px-3 rounded-lg transition duration-150 text-xs"
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <Link
      to={item.href || "/"}
      className={`smooth-underline hover:text-main px-2 py-1 rounded-md transition duration-150 whitespace-nowrap ${isActive ? "text-main active" : ""
        }`}
    >
      {item.name}
    </Link>
  );
};

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/");
  const [activeHash, setActiveHash] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname ? location.pathname : "/";
    const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
    setActivePath(normalized);
    setActiveHash(location.hash || "");
    // Đóng submenu khi route thay đổi
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  // Đóng submenu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-nav-item') && !target.closest('.mobile-dropdown')) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [openDropdown]);

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50 rounded-b-xl font-Lora overflow-visible">
      <div className="w-full mx-auto px-3 lg:px-20 xl:px-40 overflow-visible">
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
            <p className="text-lg italic font-medium">Still you but better</p>
          </div>
        </div>

        <nav className="lg:hidden w-full pb-3 relative z-50">
          <div className="flex items-baseline gap-2 text-xs font-medium overflow-x-auto" style={{ overflowY: 'visible' }}>
            {navItems.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                activePath={activePath}
                activeHash={activeHash}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;