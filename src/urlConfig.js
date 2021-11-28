const baseUrl = process.env.API || "https://e-commerce-store.herokuapp.com/";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};