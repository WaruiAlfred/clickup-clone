import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

const Home = () => {
  return (
    <h1 className="text-3xl font-bold underline text-center text-red-500">
      Clickup clone
    </h1>
  );
};

export default Home;
