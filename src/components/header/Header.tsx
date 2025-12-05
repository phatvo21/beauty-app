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
  { name: "Videos", href: "/videos" },
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
};

const MobileNavItem = ({ item, activePath, activeHash }: MobileNavItemProps) => {
  const itemHref = item.slug ?? item.href ?? "";
  const itemPathPart = itemHref.split("#")[0];
  const parentPath = normalizePath(itemPathPart || "");
  
  let isActive = false;
  if (item.children) {
    const isParentPathMatch = parentPath === activePath;
    const isChildRouteActive = item.children.some(child =>
      normalizePath(child.href.split("#")[0]) === activePath
    );
    isActive = isParentPathMatch || isChildRouteActive;
  } else {
    if (parentPath) {
      isActive = parentPath === activePath;
    } else {
      isActive = activePath === "/";
    }
  }

  if (item.children) {
    return (
      <Link
        to={item.slug || "/"}
        className={`smooth-underline hover:text-main px-2 py-1 rounded-md transition duration-150 ${
          isActive ? "text-main active" : ""
        }`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <Link
      to={item.href || "/"}
      className={`smooth-underline hover:text-main py-1 rounded-md transition duration-150 ${
        isActive ? "text-main active" : ""
      }`}
    >
      {item.name}
    </Link>
  );
};

type MobileMenuProps = {
  navItems: NavItem[];
  activePath: string;
  activeHash: string;
};

const MobileMenu = ({ navItems, activePath, activeHash }: MobileMenuProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Tự động mở submenu nếu đang ở trang đó
  useEffect(() => {
    const activeItem = navItems.find((item) => {
      if (!item.children) return false;
      const itemHref = item.slug ?? item.href ?? "";
      const itemPathPart = itemHref.split("#")[0];
      const parentPath = normalizePath(itemPathPart || "");
      const isParentPathMatch = parentPath === activePath;
      const isChildRouteActive = item.children.some(child =>
        normalizePath(child.href.split("#")[0]) === activePath
      );
      return isParentPathMatch || isChildRouteActive;
    });

    if (activeItem?.name) {
      setOpenSubmenu(activeItem.name);
    }
  }, [activePath, navItems]);

  const toggleSubmenu = (itemName: string | undefined) => {
    if (openSubmenu === itemName) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(itemName || null);
    }
  };

  return (
    <div>
      {/* Main Menu */}
      <nav className="overflow-x-auto">
        <div className="flex items-center justify-between text-sm font-medium whitespace-nowrap">
          {navItems.map((item) => {
            const itemHref = item.slug ?? item.href ?? "";
            const itemPathPart = itemHref.split("#")[0];
            const parentPath = normalizePath(itemPathPart || "");
            
            let isActive = false;
            if (item.children) {
              const isParentPathMatch = parentPath === activePath;
              const isChildRouteActive = item.children.some(child =>
                normalizePath(child.href.split("#")[0]) === activePath
              );
              isActive = isParentPathMatch || isChildRouteActive;
            } else {
              if (parentPath) {
                isActive = parentPath === activePath;
              } else {
                isActive = activePath === "/";
              }
            }

            if (item.children) {
              return (
                <button
                  key={item.name}
                  onClick={() => toggleSubmenu(item.name)}
                  className={`smooth-underline hover:text-main px-2 py-1 rounded-md transition duration-150 flex items-center gap-1 ${
                    isActive ? "text-main active" : ""
                  }`}
                >
                  {item.name}
                  <ChevronIcon isOpen={openSubmenu === item.name} />
                </button>
              );
            }

            return (
              <MobileNavItem
                key={item.name}
                item={item}
                activePath={activePath}
                activeHash={activeHash}
              />
            );
          })}
        </div>
      </nav>

      {/* Submenu - hiển thị ngang bên dưới main menu giống desktop */}
      {openSubmenu && (
        <nav className="absolute bg-primary w-full mt-2 overflow-x-auto -mx-3 px-3">
          <div className="flex flex-col gap-2 text-sm font-medium whitespace-nowrap">
            {navItems
              .find(item => item.name === openSubmenu)
              ?.children?.map((child) => {
                const childPathPart = child.href.split("#")[0];
                const childPath = normalizePath(childPathPart || "");
                const childHash = child.href.split("#")[1] ? `#${child.href.split("#")[1]}` : "";
                const childIsActive = childPath === activePath || (childHash && childHash === activeHash);
                
                return (
                  <Link
                    key={child.name}
                    to={child.href}
                    onClick={() => setOpenSubmenu(null)}
                    className={`hover:text-main px-2 py-1 rounded-md transition duration-150 ${
                      childIsActive ? "text-main active" : ""
                    }`}
                  >
                    {child.name}
                  </Link>
                );
              })}
          </div>
        </nav>
      )}
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/");
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const path = location.pathname ? location.pathname : "/";
    const normalized = path === "/" ? "/" : path.replace(/\/+$/, "");
    setActivePath(normalized);
    setActiveHash(location.hash || "");
  }, [location.pathname, location.hash]);

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50 rounded-b-xl font-Lora overflow-visible">
      <div className="w-full mx-auto px-3 lg:px-20 xl:px-40 overflow-visible">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center h-24">
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

          <nav>
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
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden pb-2">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="block w-20 lg:w-24">
                <FadeInScale>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={logoBg}
                    alt="Elle Logo"
                  />
                </FadeInScale>
              </Link>
            </div>
            <div>
              <p className="text-lg italic font-medium text-[#bf9c6b]">Still you but better</p>
            </div>
          </div>
          
          {/* Mobile Horizontal Menu */}
          <MobileMenu navItems={navItems} activePath={activePath} activeHash={activeHash} />
        </div>
      </div>
    </header>
  );
};

export default Header;