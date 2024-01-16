import HomePage from "@/components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

const Home = () => {
  return <HomePage />;
};

export default Home;
