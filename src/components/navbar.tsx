import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const section = [
  { title: "home" },
  { title: "skill" },
  { title: "porto" },
  { title: "contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState<Boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <section
      className={
        "sticky top-0 z-50 flex inset-x-0 h-21 w-screen px-14 items-center text-[#0e0e0e] transition-colors duration-300 " +
        (scrolled ? "bg-[#f5f5f5]" : "bg-transparent")
      }
    >
      {/* conten wrapper */}
      <div className="bg-red-400 h-11 flex justify-between items-center w-full">
        {/* title */}
        <div>SAUL "CODE" MAN</div>
        <div className="flex justify-between w-80">
          {section.map((a) => (
            <div className=" flex leading-relaxed bg-orange-400 h-9 w-full items-center justify-center">
              <p className="font-bold items-center justify-center flex">
                {a.title.toUpperCase()}{" "}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Button className="text-[#f5f5f5] h-full w-25 rounded-none">
            lets talk
          </Button>
        </div>
      </div>
    </section>
  );
}
