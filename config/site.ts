export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Scheduler",
  description:
    "Meeting scheduling app that helps you organize your meetings and schedules.",
  // mainNav: [
  //   {
  //     title: "Home",
  //     href: "/",
  //   },
  // ],
  links: {
    createEvent: "/events?create=true",
    docs: "https://ui.shadcn.com",
  },
}
