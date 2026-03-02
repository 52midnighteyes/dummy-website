import { TypeAnimation } from "react-type-animation";

export default function TitleAnimation() {
  const sequence: (string | number)[] = [
    "I Am Your Full-Stack Web Developer",
    1200,
    "I Am Your Problem Solver",
    1200,
    "I Am Your Missing Piece",
    1200,
  ];

  return (
    <TypeAnimation
      key={sequence.join("|")}
      sequence={sequence}
      speed={20}
      repeat={Infinity}
      wrapper="div"
      className="w-full text-center leading-relaxed lg:text-left"
    />
  );
}
