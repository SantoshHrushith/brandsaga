import Image from "next/image";
interface ColorCardProps {
  title: string;
  hex: string;
  description: string;
  rgb: { r: number; g: number; b: number };
  cmyk: { c: number; m: number; y: number; k: number };
  bg: string;
  textColor?: string;
}

const ColorCard = ({ title, hex, description, rgb, cmyk, bg, textColor = "text-white" }: ColorCardProps) => {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col justify-between shadow-lg w-full sm:w-[280px] md:w-[320px] h-[420px] ${textColor}`}
      style={{ backgroundColor: bg }}
    >
      {/* Top Content */}
      <div>
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        <p className="font-medium">{hex}</p>
        <p className="mt-2 text-sm opacity-90 leading-relaxed">{description}</p>
      </div>

      {/* Bottom Content */}
      <div className="flex justify-between text-sm mt-6">
        <div>
          <p>R: {rgb.r}</p>
          <p>G: {rgb.g}</p>
          <p>B: {rgb.b}</p>
        </div>
        <div>
          <p>C: {cmyk.c}</p>
          <p>M: {cmyk.m}</p>
          <p>Y: {cmyk.y}</p>
          <p>K: {cmyk.k}</p>
        </div>
      </div>
    </div>
  );
};

export default function S2() {
  return (
    <>
      <section className="w-full bg-black text-white py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Colors Pallets</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <ColorCard
            title="Blue Whale"
            hex="#01203F"
            description="A deep, rich blue symbolizing trust, sophistication, and premium quality."
            rgb={{ r: 1, g: 32, b: 63 }}
            cmyk={{ c: 99, m: 84, y: 44, k: 53 }}
            bg="#01203F"
          />

          <ColorCard
            title="Deep sea"
            hex="#01814E"
            description="A bold green representing balance, sustainability, and a connection to nature."
            rgb={{ r: 1, g: 129, b: 78 }}
            cmyk={{ c: 88, m: 25, y: 88, k: 11 }}
            bg="#01814E"
          />

          <ColorCard
            title="Slime Green"
            hex="#D9E74C"
            description="A vibrant, energetic shade reflecting freshness, innovation, and modern living."
            rgb={{ r: 216, g: 231, b: 76 }}
            cmyk={{ c: 19, m: 0, y: 84, k: 0 }}
            bg="#D9E74C"
            textColor="text-black"
          />
        </div>

      </section>
      <ColorRatio />
      <PackingSection />
      <Packing />
      <Imaginary />
      <ProductShowcase />
    </>
  );
}


function ColorRatio() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* 60% - Primary */}
        <div className="relative bg-[#01203F] rounded-2xl flex items-center justify-center h-[300px] md:h-[400px]">
          {/* Number Image */}
          <img
            src="/images/60.png" // replace with your "60" image
            alt="60%"
            className="absolute inset-0 w-full h-full object-contain opacity-100"
          />
          {/* Text */}
          <p className="absolute bottom-4 text-white text-sm md:text-base px-4 text-center">
            Primary color, used as the dominant brand color
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* 30% - Secondary */}
          <div className="relative bg-[#01814E] rounded-2xl flex items-center justify-center h-[180px] md:h-[190px]">
            <img
              src="/images/30.png" // replace with your "30" image
              alt="30%"
              className="absolute inset-0 w-full h-full object-contain opacity-100"
            />
            <p className="absolute left-4 text-white text-sm md:text-base w-[70%]">
              Secondary color, adding contrast and freshness
            </p>
          </div>

          {/* 10% - Accent */}
          <div className="relative bg-[#D9E74C] rounded-2xl flex items-center justify-center h-[180px] md:h-[190px]">
            <img
              src="/images/10.png" // replace with your "10" image
              alt="10%"
              className="absolute inset-0 w-full h-full object-contain opacity-100"
            />
            <p className="absolute right-4 text-black text-sm md:text-base w-[70%] text-right">
              Accent color, used for highlights and emphasis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackingSection() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#01203F] overflow-hidden px-4 py-16">
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white font-poppins">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Packaging</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
            The Saga brand pattern is inspired by Australian native art, particularly the dot painting technique traditionally used by Indigenous Australian artists. This pattern serves as a visual bridge between Saga’s Australian roots and its presence in Pakistan, where the name "Saga" is also linked to "saggar" meaning ocean or vastness in Urdu.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            The pattern of Saga is inspired by Australian Aboriginal art. This art form is made up of intricate shapes, symbols, and flowing lines, with dots being the main elements. These dots hold deep cultural significance, telling stories of heritage, nature, and community. They come together to form unique patterns that reflect traditions, journeys, and connections, making each design meaningful and visually striking.
          </p>
        </div>
        {/* Right Image */}

      </div>
      <div className="absolute bottom-0 right-0 md:mt-0">
        <Image
          src="/images/pattern-1.png" // Place your right-side image here
          alt="Pattern Circles"
          width={700}
          height={700}
          className="object-contain opacity-50"
          priority
        />
      </div>
    </section>
  );
}

function Packing() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      <img
        src="/images/packing.png"
        alt="Tangled to sleek"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] object-contain z-0"
      />
    </div>
  )
}

function Imaginary() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      <img
        src="/images/pattern-horizontal.png"
        alt="Tangled to sleek"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] object-contain z-0"
      />
      <div className="text-white text-6xl font-[600]"><h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">Imaginary Style</h1>
      </div>
    </div>
  )
}

function ProductShowcase() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <img src="https://eubiq.b-cdn.net/saga/Hero%20shot.png" alt="Product hanging" className="rounded-xl object-cover w-full h-[420px]" />
          <img src="https://eubiq.b-cdn.net/saga/Hero%20shot.png" alt="Product floating" className="rounded-xl object-cover w-full h-[280px]" />
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          <img src="https://eubiq.b-cdn.net/saga/S91_WaterDroplets%20(On%20water%20surface).png" alt="Desk setup with sockets" className="rounded-xl object-cover w-full h-[280px]" />
          <img src="https://eubiq.b-cdn.net/saga/01.png" alt="Wall-mounted sockets" className="rounded-xl object-cover w-full h-[420px]" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <img src="https://eubiq.b-cdn.net/saga/R1000%20Conference%20%20Top%20View.png" alt="Lab setup" className="rounded-xl object-cover w-full h-[350px]" />
          <img src="https://eubiq.b-cdn.net/saga/Website%20(Powertrack)%20Preview%20(1)-262.png" alt="Laptop setup with sockets" className="rounded-xl object-cover w-full h-[350px]" />
        </div>

      </div>
    </section>
  );
}
