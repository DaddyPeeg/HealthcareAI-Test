export const AUTHSTORE = {
  get: () => {
    return localStorage.getItem("health-token") || "";
  },
  set: (token: string) => {
    return localStorage.setItem("health-token", token);
  },
  clear: () => {
    return localStorage.removeItem("health-token");
  },
};
