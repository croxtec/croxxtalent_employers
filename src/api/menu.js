const menu = [
  {
    id: 1,
    title: "Menu Item",
    icon: "ic:outline-dashboard",
    url: "/",
    parent: "dashboard",
  },

  {
    id: 3,
    title: "Menu-Sub Menu",
    icon: "material-symbols:calendar-view-day-outline-rounded",
    hasChildren: true,
    parent: "event-logs",
    children: [
      {
        id: 1,
        title: "Sub Menu 1",
        icon: "mdi:user-circle-outline",
        url: "/user-logs",
        parent: "event-logs",
        subItem: "user-logs",
      },
      {
        id: 2,
        title: "Sub Menu 2",
        icon: "ph:chalkboard-teacher",
        url: "/trainer-logs",
        parent: "event-logs",
        subItem: "trainer-logs",
      },
      {
        id: 3,
        title: "Sub Menu 3",
        icon: "tabler:affiliate",
        url: "/affiliate-logs",
        parent: "event-logs",
        subItem: "affiliate-logs",
      },
    ],
  },

  {
    id: 5,
    title: "Menu-Sub Menu",
    icon: "fluent:content-view-24-regular",
    hasChildren: true,
    parent: "management",
    children: [
      {
        id: 1,
        title: "Sub Menu 1",
        icon: "mdi:user-circle-outline",
        url: "/all-users",
        subItem: "all-users",
      },
      {
        id: 2,
        title: "Sub Menu 2",
        icon: "clarity:administrator-line",
        url: "/all-admins",
        subItem: "all-admins",
      },
      {
        id: 3,
        title: "Sub Menu 3",
        icon: "ph:chalkboard-teacher",
        url: "/trainer-activities",
        subItem: "trainer-activities",
      },
      {
        id: 4,
        title: "Sub Menu 4",
        icon: "ic:baseline-percentage",
        url: "/website-percentage",
        subItem: "website-percentage",
      },
    ],
  },

  {
    id: 6,
    title: "Menu Item",
    icon: "nimbus:stats",
    url: "/reports-and-stats",
    hasChildren: false,
    parent: "reports-and-stats",
  },

  {
    id: 7,
    title: "Logout",
    icon: "material-symbols:logout-rounded",
    url: "/logout",
    hasChildren: false,
  },
];

export default menu;
