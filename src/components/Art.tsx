import Image from "next/image";

export default function ArtGallery() {
  return (
    <section className="w-full h-screen bg-gray-50 py-10 mb-10">
      <div className="w-[80vw] mx-auto flex gap-10 p-4">

        {/* Left big image */}
        <div className="w-[40%] h-[90vh]">
          <div className="overflow-hidden rounded-3xl h-[90vh]">
            <Image
              src="/images/art-1.png"
              alt="Aboriginal Art 1"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top right image */}
        <div className="flex flex-col w-[60%] h-[90vh] gap-10 justify-between">
          <div className="overflow-hidden rounded-3xl h-1/2">
            <Image
              src="/images/art-2.png"
              alt="Aboriginal Art 2"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-3xl h-1/2">
            <Image
              src="/images/art-3.png"
              alt="Aboriginal Art 3"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
