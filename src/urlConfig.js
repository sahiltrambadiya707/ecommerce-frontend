// const baseUrl = process.env.API || "https://ecommercerestserver.herokuapp.com";
const baseUrl = "https://ecommercerestserver.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
