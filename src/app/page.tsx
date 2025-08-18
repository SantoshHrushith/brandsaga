import Header from "@/components/Header";
import S1 from "@/components/S1";
import S2 from "@/components/S2";
import Section1 from "@/components/Section1";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="section1-parent">
        <Section1 />
      </div>
      <S1 />
      <S2 />
    </div>
  );
}
