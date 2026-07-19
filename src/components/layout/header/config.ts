export const NAV_ITEMS = [
  { key: "home", pathname: "/" },
  { key: "work", pathname: "/", hash: "work" },
  { key: "skills", pathname: "/", hash: "skills" },
  { key: "about", pathname: "/", hash: "about" },
  { key: "contact", pathname: "/", hash: "contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

export function getNavHref(item: NavItem) {
  if ("hash" in item && item.hash) {
    return { pathname: item.pathname, hash: item.hash } as const;
  }
  return item.pathname;
}
