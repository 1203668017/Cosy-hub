const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: 'home',
    component: () => import("pages/index.vue"),
  },
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
