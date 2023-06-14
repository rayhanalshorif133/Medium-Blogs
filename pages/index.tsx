import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blogs</title>
      </Head>
      <Header />
      <Slider />
    </div>
  );
}
