export const mainRoutes = {
  home: { name: "Home", url: "/" },
  about: { name: "About", url: "/about" },
  cabins: { name: "Cabins", url: "/cabins" },
  account: { name: "Guest area", url: "/account" },
} as const;

export const accountPageRoutes = {
  home: { name: "Home", url: "/account" },
  reservations: { name: "Reservations", url: "/account/reservations" },
  guestProfile: { name: "Guest profile", url: "/account/profile" },
} as const;
