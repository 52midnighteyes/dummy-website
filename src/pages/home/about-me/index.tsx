import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const data = [
  { title: "Projects Finished", total: 2 },
  { title: "Years of Experience", total: 0.4 },
  { title: "Awards Won", total: 49 },
];

const experiences = [
  {
    period: "2017 - 2018",
    title: "Mail Boy",
    company: "Hamlin, Hamlin & McGill",
    description:
      "Delivered mail, dodged lawsuits, and overheard enough legal drama to last a lifetime. Humble beginnings — but it sparked the hustle.",
  },
  {
    period: "2018 - 2024",
    title: "Criminal Lawyer",
    company: "Self-Employed",
    description:
      "Represented clients in tough situations — from courtroom chaos to legal loopholes. Always had a way with words… and loopholes.",
  },
  {
    period: "2025 - Present",
    title: "Full-Stack Web Developer",
    company: "Independent",
    description:
      "Now writing code instead of briefs. Building full-stack apps with React, Next.js, Node.js, and PostgreSQL — clean, sharp, and legally solid.",
  },
];

const techStack: string[] = ["react", "express", "postgresql", "typescript", "nodeJs"];

export default function AboutMeSection() {
  return (
    <section
      id="aboutme"
      className="flex min-h-dvh w-full flex-col items-center justify-center gap-5 bg-[#1A1A1A] p-10 leading-relaxed text-white lg:px-50 lg:py-20"
    >
      {/* content wrapper */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-15 lg:flex-row-reverse">
        {/* text */}
        <div className="lg flex w-120 flex-col items-center gap-4.5 text-center md:max-w-135 lg:items-start lg:text-left">
          <h1 className="text-[60px] font-bold">About Me</h1>

          <p className="text-sm leading-relaxed text-gray-200 lg:text-base">
            <span className="font-bold text-yellow-400">You probably knew me as Saul Goodman</span>
            <span className="text-yellow-400/80"> — </span>a criminal lawyer who worked with the
            worst clients imaginable and lived to tell the story.{" "}
            <span className="font-semibold text-yellow-400">Different life now.</span> I build
            websites. I survived a{" "}
            <span className="font-semibold text-yellow-400">
              4-month coding bootcamp at Purwadhika
            </span>
            . Pressure?{" "}
            <span className="font-semibold text-yellow-400">
              I’ve solved problems with a gun on the table.
            </span>{" "}
            Broken websites don’t scare me. Clean code matters—I used to clean messes far harder to
            explain. Brittle logic, unreadable components, intern code held together by hope and VS
            Code autocomplete? <span className="font-semibold text-yellow-400">I’ll fix it.</span>
          </p>
          {/* data projek */}
          <div className="mt-1 flex justify-center gap-x-5 lg:justify-start">
            {data.map((a) => (
              <div
                key={a.title}
                className="flex flex-col items-center justify-center gap-1 lg:items-start"
              >
                <div className="relative text-center text-[28px] leading-none font-bold sm:text-[34px]">
                  <span>{a.total}</span>
                  <span className="absolute top-0 -right-4 text-[#C92629]">+</span>
                </div>
                <span className="text-[14px] leading-tight font-semibold sm:text-[16px]">
                  {a.title}
                </span>
              </div>
            ))}
          </div>

          {/* badge */}

          <div className="flex justify-center gap-2 lg:justify-start">
            {techStack.map((a) => (
              <Badge className="bg-amber-400 text-black">{a}</Badge>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="h-120 w-160 shrink-0 rounded-md shadow-2xl grayscale">
          <img src="aboutmejimmy.webp" alt="" className="h-full w-full rounded-md object-cover" />
        </div>
      </div>
      {/* experineces */}
      <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
        {experiences.map((a) => (
          <Card className="w-full max-w-xl border border-yellow-400/10 bg-black text-gray-200">
            <div className="flex flex-col gap-2 p-6">
              <p className="text-sm text-gray-400">{a.period}</p>

              <h1 className="text-2xl font-bold text-yellow-400">{a.title}</h1>

              <h2 className="text-sm font-semibold text-gray-200">{a.company}</h2>

              <p className="text-sm leading-relaxed text-gray-200/90">{a.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
