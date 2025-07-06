export const navRoutes = {
    company: [
      { name: "About", href: "/about" },
      { name: "Why us", href: "/why-verity" },
      { name: "Case Study", href: "/case-studies/1" },
      // { name: "Blogs", href: "/blogs" },
    ],
    product: [{ name: "Product", href: "/product" }],
    solutionsFor: [
      { name: "Pain Management", href: "/pain-management-solution" },
      { name: "Physiotherapy", href: "/physiotherapists" },
    ],
    partnerWithUs: [{ name: "Partner with us", href: "/partner" }],
  };

  export type navRoutesType = typeof navRoutes;