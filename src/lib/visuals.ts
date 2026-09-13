export const visuals = {
  hero: "https://images.unsplash.com/photo-1713124732236-abcfafb0bf7d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  land: "https://images.unsplash.com/photo-1781816927578-ec36210fede0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  sile: "https://images.unsplash.com/photo-1743786506552-a8679c70e3f7?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  riva: "https://images.unsplash.com/photo-1757334563235-ec7114315c54?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  agva: "https://images.unsplash.com/photo-1747046139288-71a4a9bce33d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
} as const;

export const regionVisuals: Record<string, string> = {
  beykoz: visuals.hero,
  riva: visuals.riva,
  ortacesme: visuals.hero,
  ogumce: visuals.land,
  pasamandira: visuals.land,
  sile: visuals.sile,
  omerli: visuals.land,
  arnavutkoy: visuals.land,
};
