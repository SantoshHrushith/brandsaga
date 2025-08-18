import Image from "next/image";

export default function ArtGallery() {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        
        {/* Left big image */}
        <div className="col-span-1 md:col-span-1 row-span-2">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/art-1.png"
              alt="Aboriginal Art 1"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top right image */}
        <div className="col-span-1">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/art-2.png"
              alt="Aboriginal Art 2"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom right image */}
        <div className="col-span-1">
          <div className="overflow-hidden rounded-3xl">
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
