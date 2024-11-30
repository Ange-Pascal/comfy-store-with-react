import { FeaturedProducts, Hero } from "../components";
// import { customFetch } from "../utils"; 
import { customFetch } from "../utils";

const url = "/products?featured=true";
// FONCTION LOADER POUR RECUPERER LES DONNEES
export const loader = async () => {
  const response = await customFetch(url); 
  const products = response.data.data
  return {products}
}
const Landing = () => {
  return (
    <>
      <Hero /> 
      <FeaturedProducts/>
    </>
  );
};

export default Landing;
