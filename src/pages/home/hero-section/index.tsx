import { Button } from "@/components/ui/button";
import TitleAnimation from "./components/typewriter";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen min-w-screen items-center justify-center bg-black p-10 leading-relaxed text-white lg:px-50 lg:py-20"
    >
      {/* content wrapper */}
      <div className="flex w-full flex-col items-center justify-center gap-15 lg:flex-row">
        {/* deskripsi */}
        <div className="flex w-120 flex-col gap-4.5 text-center md:max-w-135 lg:text-left">
          <h1 className="w-full text-4xl font-bold text-white lg:text-4xl">Jimmy “Code” McGill</h1>
          <h2 className="flex w-full items-center justify-center p-0.5 align-middle text-lg font-medium text-gray-200 lg:w-fit">
            <TitleAnimation />
          </h2>

          <p className="text-sm leading-relaxed text-gray-200 lg:text-base">
            <span className="font-semibold text-yellow-400">I'm Jimmy</span>. I used to work for
            dangerous people, bending the law until the truth felt… negotiable. Prison taught me to
            stop bending the law. So I did. I switched to tech. Became a developer. But old habits
            die hard — I still bend things. Now it’s{" "}
            <span className="font-bold text-yellow-400">Flexbox</span> with{" "}
            <span className="font-bold text-yellow-400">Tailwind</span>, and{" "}
            <span className="font-bold text-yellow-400">console.log</span> takes the stand to
            testify against the bugs. Same instincts. Different tools.
          </p>
          <blockquote className="border-l-4 border-yellow-400 pl-4 text-[18px] text-yellow-300 italic">
            “I used to bend the system. Now I bend layouts. The rules changed. The instinct didn’t.”
          </blockquote>
          {/* button cta */}
          <div className="mt-4">
            <Button className="bg-yellow-400 font-bold text-black hover:bg-gray-200 hover:text-black">
              Contact Me!
            </Button>
          </div>
        </div>
        {/* fotonya */}
        <div className="order-first h-120 shrink-0 rounded-md shadow-2xl contrast-125 grayscale lg:order-last">
          <img
            className="h-full w-full rounded-md object-cover"
            src="jimmy.jpg"
            alt="photo of jimmy mcgill"
          />
        </div>
      </div>
    </section>
  );
}
