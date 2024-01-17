import { Button } from "@/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

const Home = () => {
  return (
    <Button variant="destructive" className="m-10">
      Clickup
    </Button>
  );
};

export default Home;
