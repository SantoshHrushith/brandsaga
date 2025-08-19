"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ArtGallery from "./Art";
import LogoIconInfo from "./LogoIconInfo";

export default function S1() {

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobileOrTablet(window.innerWidth < 1024);
    //     };
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    return (
        <div className="font-poppins bg-white">
            {/* === Hero Section === */}
            <div className="relative w-full h-screen overflow-hidden">

                <img
                    src="/images/s1.png"
                    alt="Tangled to sleek"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
            </div>
            <Introduction />
            <MissionVisionValues />
            <StrategicCultural />
            <SagaLogoSet />
            <LogoIconInfo />
            <SagaLogoExplained />
            <LogoCards />
            <PatternSection />
            <ArtGallery />
            <div className="relative w-full h-screen overflow-hidden">

                <img
                    src="/images/bg-2.png"
                    alt="Tangled to sleek"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
            </div>
            <CoreStructurePattern1 />
            <CoreStructurePattern2 />

            <CoreStructurePattern3 />
        </div>
    )
}

function Introduction() {
    return (
        <section className="w-full h-screen bg-white py-16 px-6 flex flex-col items-start justify-center min-h-[60vh]">
            <div className="w-[85%] mx-auto">

                <h1 className="text-4xl md:text-6xl font-[500] text-blue mb-20">Introduction</h1>
                <div className="max-w-[90%] text-blue text-lg md:text-xl space-y-6">
                    <p>
                        SAGA is an Australian origin company with strong Australian leadership, built on a foundation of engineering excellence and strategic vision. With the acquisition of an Indian company, SAGA deepens its connection to Australia&apos;s engineering precision and India&apos;s adaptability, redefining how people interact with technology in their everyday lives.
                    </p>
                    <p>
                        Our journey began in Australasia, where we identified a need for flexible, safe, and intelligent solutions that enhance modern living. From pioneering cutting-edge power track systems to integrated smart home solutions, we have always been driven by a vision of progress and innovation.
                    </p>
                    <p>
                        Today, SAGA operates across Australasia, Asia, the Middle East, and the Americas, delivering smart, user-centric ecosystems to homes and workplaces worldwide. More than just a technology company, SAGA is shaping the future of smart living—with Australasian innovation at its core.
                    </p>
                </div>
            </div>
        </section>
    );
}

function MissionVisionValues() {
    return (
        <div className="w-full h-[90vh] bg-blue py-16 px-4 flex flex-col items-center justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center">
                {/* Mission */}
                <div className="flex flex-col items-center">
                    <img
                        src="/images/1.png" // Place your mission icon image in public folder
                        alt="Mission Icon"
                        className="w-32 h-32 mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-[500] text-white mb-6">Mission</h2>
                    <p className="text-white text-lg text-left font-light">
                        To innovate and deliver adaptable, high quality solutions that enhance daily life across the globe, today and tomorrow.
                    </p>
                </div>
                {/* Vision */}
                <div className="flex flex-col items-center">
                    <img
                        src="/images/2.png" // Place your vision icon image in public folder
                        alt="Vision Icon"
                        className="w-32 h-32 mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-[500] text-white mb-6">Vision</h2>
                    <p className="text-white text-lg font-light">
                        Pioneering a future where technology seamlessly integrates into every aspect of life, making homes and workplaces smarter, safer, and more sustainable.
                    </p>
                </div>
                {/* Core Values */}
                <div className="flex flex-col items-center">
                    <img
                        src="/images/3.png" // Place your core values icon image in public folder
                        alt="Core Values Icon"
                        className="w-32 h-32 mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-[500] text-white mb-6">Core values</h2>
                    <p className="text-white text-lg text-left font-light">
                        We believe in innovation and creativity, combining Australian precision with Indian practicality to develop smart and efficient products that make everyday life easier.
                    </p>
                </div>
            </div>
        </div>
    );
}

function StrategicCultural() {
    return (
        <section className="w-full h-[90vh] bg-white py-16 px-4 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-center">
                {/* Strategic Positioning */}
                <div className="flex flex-col items-center">
                    <img
                        src="images/4.png" // Place your strategic icon image in public folder
                        alt="Strategic Positioning Icon"
                        className="w-36 h-32 mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-[600] text-blue mb-6 leading-tight">
                        Strategic<br />Positioning
                    </h2>
                    <p className="text-blue text-lg font-light text-left max-w-md mx-auto">
                        SAGA distinguishes itself through smart adaptability products that evolve with user needs, from modular power tracks to tomorrow’s connected ecosystems. By prioritising affordability without sacrificing quality, we bridge emerging and developed markets. Our roadmap to lighting and smart appliances reflects a holistic vision.
                    </p>
                </div>
                {/* Cultural Thread */}
                <div className="flex flex-col items-center">
                    <img
                        src="/images/5.png" // Place your cultural icon image in public folder
                        alt="Cultural Thread Icon"
                        className="w-32 h-32 mb-6"
                    />
                    <h2 className="text-3xl md:text-4xl font-[600] text-blue mb-6 leading-tight">
                        Cultural<br />Thread
                    </h2>
                    <p className="text-blue text-lg font-light text-left max-w-md mx-auto">
                        Rooted in India’s entrepreneurial ethos and Australia’s innovative legacy, SAGA embodies a global citizen—nimble, inclusive, and forward thinking. We’re not just selling products we’re crafting a saga of progress, one innovation at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}


function SagaLogoSet() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-black min-h-screen py-12 px-4">
            {/* Left: Blue logo */}
            <div className="rounded-3xl overflow-hidden bg-blue flex items-center justify-center w-full md:w-1/2 aspect-square max-w-2xl">
                <Image
                    src="https://eubiq.b-cdn.net/saga/sagatext-caption.png"
                    alt="SAGA Blue Logo"
                    width={600}
                    height={600}
                    className="object-contain w-3/4 h-auto"
                    priority
                />
            </div>
            {/* Right: Yellow and Green logos */}
            <div className="flex flex-col gap-8 w-full md:w-1/2 max-w-2xl">
                <div className="rounded-3xl overflow-hidden bg-yellow flex items-center justify-center aspect-[2/1]">
                    <Image
                        src="https://eubiq.b-cdn.net/saga/sagatext-caption.png"
                        alt="SAGA Yellow Logo"
                        width={600}
                        height={300}
                        className="object-contain w-3/4 h-auto"
                        priority
                    />
                </div>
                <div className="rounded-3xl overflow-hidden bg-green flex items-center justify-center aspect-[2/1]">
                    <Image
                        src="https://eubiq.b-cdn.net/saga/sagatext-caption.png"
                        alt="SAGA Green Logo"
                        width={600}
                        height={300}
                        className="object-contain w-3/4 h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}


function SagaLogoExplained() {
    return (
        <section className="w-full bg-blue flex flex-col items-center justify-center py-16 px-4 min-h-[90vh] relative overflow-hidden">
            {/* Background image tilted 45deg with opacity-10 */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
                <Image
                    src="https://eubiq.b-cdn.net/saga/logo-icon-.png" // Change to your desired image path
                    alt="Background Logo Icon"
                    width={4000}
                    height={4000}
                    className="object-cover opacity-5 rotate-135"
                    priority
                />
            </div>
            <div className="flex flex-col md:flex-col items-center justify-center gap-12 w-full max-w-[80%] relative z-10">
                {/* Left: Logo and icons row */}
                <div className="flex flex-col gap-8 items-center w-full ">
                    <div className="flex flex-row items-center justify-center md:w-1/2">
                        {/* SAGA wordmark */}
                        <div className="-ms-20 mr-10">
                            <Image
                                src="/images/s-highligh.png"
                                alt="SAGA Wordmark"
                                width={200}
                                height={200}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-white text-2xl font-light">+</span>
                        {/* Bolder S */}
                        <div className="mx-10">
                            <Image
                                src="/images/s-bold.png"
                                alt="Bolder S"
                                width={100}
                                height={100}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-white text-2xl font-light">+</span>
                        {/* Key Product */}
                        <div className="ms-20">
                            <Image
                                src="/images/soc.png"
                                alt="Key Product"
                                width={100}
                                height={100}
                                className="object-contain rounded-full"
                                priority
                            />
                        </div>
                    </div>
                    {/* Move label text below image row */}
                    <div className="flex flex-row items-center justify-between md:w-[50vw] gap-5 mt-8 px-2">
                        <span className="text-white text-base md:text-lg font-light text-center flex-1">
                            “S” FROM THE WORDMARK
                        </span>
                        <span className="text-white text-base md:text-lg font-light text-center flex-1">
                            BOLDER S FROM<br /> LOGO TYPO
                        </span>
                        <span className="text-white text-base md:text-lg font-light text-center flex-1">
                            KEY PRODUCT
                        </span>
                    </div>
                </div>
                {/* Right: Description */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 mt-10 md:mt-0">
                    <p className="text-white text-lg md:text-2xl font-light text-center max-w-xl">
                        The icon is a stylized ‘S’, taken from the brand name Saga, and designed to appear bold and modern.
                    </p>
                </div>
            </div>
        </section>
    );
}

function LogoCards() {
    return (
        <section className="w-full flex  h-[80vh] md:h-screen flex-row items-center justify-center gap-20 p-6">
            {/* Card 1 */}
            <div className="flex items-center justify-center w-40 h-60 md:w-[25vw] md:h-[70vh] rounded-4xl bg-[#001f3f]">
                <Image
                    src="https://eubiq.b-cdn.net/saga/logo-icon-.png"
                    alt="SAGA Green Logo"
                    width={200}
                    height={200}
                    className="object-contain w-1/2 h-auto"
                    priority
                />
            </div>

            {/* Card 2 */}
            <div className="flex items-center justify-center w-40 h-60 md:w-[25vw] md:h-[70vh] rounded-4xl bg-yellow">
                <Image
                    src="/images/logo-black.png"
                    alt="SAGA Green Logo"
                    width={400}
                    height={300}
                    className="object-contain w-1/2 h-auto"
                    priority
                />
            </div>

            {/* Card 3 */}
            <div className="flex items-center justify-center w-40 h-60 md:w-[25vw] md:h-[70vh] rounded-4xl bg-green">
                <Image
                    src="https://eubiq.b-cdn.net/saga/logo-icon-.png"
                    alt="SAGA Green Logo"
                    width={400}
                    height={300}
                    className="object-contain w-1/2 h-auto"
                    priority
                />
            </div>
        </section>
    );
}

function PatternSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-blue overflow-hidden px-4 py-16">
            {/* Background pattern image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/bg.png" // Place your background pattern image here
                    alt="Saga Pattern Background"
                    fill
                    className="object-cover object-right opacity-5"
                    priority
                />
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[90vw] mx-auto">
                {/* Text Section */}
                <div className="w-full md:w-[44vw] text-white font-poppins">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Pattern</h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
                        The Saga brand pattern is inspired by Australian native art, particularly the dot painting technique traditionally used by Indigenous Australian artists. This pattern serves as a visual bridge between Saga&apos;s Australian roots and its presence in Pakistan, where the name &quot;Saga&quot; is also linked to &quot;saggar&quot; meaning ocean or vastness in Urdu.
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
                    width={800}
                    height={800}
                    className="object-fill"
                    priority
                />
            </div>
        </section>
    );
}

function CoreStructurePattern1() {
    return (
        <section className="relative w-full min-h-screen items-center justify-center bg-[#F7F8FA] overflow-hidden px-4 py-16">
            <h2 className="text-4xl md:text-6xl font-[500] text-blue ms-20">Pattern</h2>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full  mx-auto">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-start ms-20">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <span className="inline-block w-2 h-42 bg-blue mr-4 "></span>
                            <div>

                                <h3 className="text-3xl md:text-4xl font-[500] text-blue mb-4">Core Structure</h3>
                                <p className="text-blue text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                    The middle dot represents Saga the center of everything. It symbolizes innovation, stability, and leadership, acting as the core force driving progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                <div className="w-full md:w-1/2 flex mt-10 md:mt-0">
                    <Image
                        src="/images/p-1.png" // Place your right-side image here
                        alt="Core Structure Pattern"
                        width={600}
                        height={600}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
function CoreStructurePattern2() {
    return (
        <section className="relative w-full min-h-screen items-center justify-center bg-[#F7F8FA] overflow-hidden px-4 py-16">
            <h2 className="text-4xl md:text-6xl font-[500] text-blue ms-20">Pattern</h2>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full  mx-auto">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-start ms-20">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <span className="inline-block w-2 h-42 bg-blue mr-4 "></span>
                            <div>

                                <h3 className="text-3xl md:text-4xl font-[500] text-blue mb-4">Core Structure</h3>
                                <p className="text-blue text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                    Surrounding it are expanding circles of
                                    impact, influence, and connectivity,
                                    illustrating how Saga&apos;s technology
                                    seamlessly integrates into daily life,
                                    creating a ripple effect of
                                    transformation and efficiency.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                <div className="w-full md:w-1/2 flex mt-10 md:mt-0">
                    <Image
                        src="/images/p-2.png" // Place your right-side image here
                        alt="Core Structure Pattern"
                        width={600}
                        height={600}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
function CoreStructurePattern3() {
    return (
        <section className="relative w-full min-h-screen items-center justify-center bg-[#F7F8FA] overflow-hidden px-4 py-16 mb-10">
            <h2 className="text-4xl md:text-6xl font-[500] text-blue ms-20">Pattern</h2>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full  mx-auto">
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-start ms-20">
                    <div className="flex flex-col mb-4 max-w-xl text-xl">
                        <h3 className="text-3xl md:text-4xl font-[500] text-blue mb-4">Core Structure</h3>

                        <p className="text-gray-700 mb-6">
                            The three circular lines at the end symbolize Saga&apos;s core pillars
                            <span className="font-semibold"> Innovation, Quality,</span> and
                            <span className="font-semibold"> Connectivity</span>.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-[#001f3f]">Innovation :</h4>
                                <p className="text-gray-700">
                                    Representing continuous evolution, these lines show how Saga
                                    embraces cutting edge technology and modern design to enhance
                                    everyday living.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#001f3f]">Quality:</h4>
                                <p className="text-gray-700">
                                    A mark of reliability and craftsmanship, ensuring every product
                                    meets the highest standards.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#001f3f]">Connectivity:</h4>
                                <p className="text-gray-700">
                                    Depicting how Saga seamlessly integrates into homes and offices,
                                    fostering a connected and efficient lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                <div className="w-full md:w-1/2 flex mt-10 md:mt-0">
                    <Image
                        src="/images/p-3.png" // Place your right-side image here
                        alt="Core Structure Pattern"
                        width={600}
                        height={600}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

function CoreStructure() {
    return (
        <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 bg-gray-50">
            {/* Left Text */}
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#001f3f] mb-4">
                    Pattern
                </h3>

                <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-4">
                    Core Structure
                </h2>

                <p className="text-gray-700 mb-6">
                    The three circular lines at the end symbolize Saga&apos;s core pillars
                    <span className="font-semibold"> Innovation, Quality,</span> and
                    <span className="font-semibold"> Connectivity</span>.
                </p>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-[#001f3f]">Innovation :</h4>
                        <p className="text-gray-700">
                            Representing continuous evolution, these lines show how Saga
                            embraces cutting edge technology and modern design to enhance
                            everyday living.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#001f3f]">Quality:</h4>
                        <p className="text-gray-700">
                            A mark of reliability and craftsmanship, ensuring every product
                            meets the highest standards.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#001f3f]">Connectivity:</h4>
                        <p className="text-gray-700">
                            Depicting how Saga seamlessly integrates into homes and offices,
                            fostering a connected and efficient lifestyle.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Graphic */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/images/p-3.png" // replace with your image path
                    alt="Core Structure"
                    className="max-w-[320px] md:max-w-[400px] w-full h-auto"
                />
            </div>
        </section>
    );
}
