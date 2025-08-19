import Image from "next/image";

export default function LogoIconInfo() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-8 py-16">
      {/* Left: Text */}
      <div className="md:w-1/2 w-full font-[200] max-w-xl mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-[600] text-blue mb-8">Logo Icon</h1>
        <p className="text-blue text-xl mb-6">
          This clear space prevents clutter and keeps the logo Icon easily visible, free from interference by other elements such as text or artwork.
        </p>
        <p className="text-[#01203F] text-xl mb-6">
          The <span className="font-[600]"><em>&quot; </em>logo icon<em>&quot;</em></span> sets the spacing standard. It will be flipped vertically on the sides and horizontally on the top and bottom. This keeps the logo clear and noticeable, preventing it from blending into other design elements.
        </p>
        <p className="text-[#01203F] text-xl mb-6">
          Our logo icon is mainly used on three colors: Maastricht Blue, Maximum Green Yellow, and Philippine Green.
        </p>
        <ul className="text-[#01203F] text-xl list-disc pl-6 mb-6">
          <li>When placing the logo icon on these colors, use it in white or black for the best visibility.</li>
          <li>On a black background, always use the white logo.</li>
          <li>On a white background, the logo can be used in Maastricht Blue.</li>
        </ul>
      </div>
      {/* Right: Logo Icon */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <Image
          src="/images/logo-blue.png" // Replace with your actual logo icon path
          alt="Logo Icon"
          width={700}
          height={700}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
