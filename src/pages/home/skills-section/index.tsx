import { Card } from "@/components/ui/card";

const skillData = [
  {
    title: "Front End",
    description:
      "I dress pixels like courtroom arguments: clean, persuasive, and impossible to ignore. Every layout is intentional, every interaction calculated. Responsive UI, sharp UX, and animations that feel deliberate — not decorative. No sloppy edges, no visual lies.",
    icon: "layout-template.svg",
  },
  {
    title: "Back End",
    description:
      "I run the back room like a cartel ledger: tight, organized, and nobody gets in without permission. Structured APIs, solid authentication, efficient queries, and databases that don’t crumble under pressure. Everything traceable, scalable, and built to survive chaos.",
    icon: "server.svg",
  },
  {
    title: "Tools",
    description:
      "My briefcase is packed and ready: TypeScript for precision, Git for control, Postgres and Prisma for structure, testing for confidence. I automate what slows me down and optimize what matters. Same hustle, cleaner execution.",
    icon: "wrench.svg",
  },
];
export default function SkillsSection() {
  return (
    <section
      id="skill"
      className="flex h-auto w-full flex-col items-center justify-center gap-5 bg-black p-10 leading-relaxed text-white lg:px-50 lg:py-20"
    >
      {/* content wrapper */}
      <div className="flex flex-col gap-15 lg:flex-row">
        {/* desc and head */}
        <div className="flex flex-col">
          <h1 className="text-[21px] text-gray-500">s k i l l s</h1>
          <p className="text-[35px]">
            I don’t just build websites — I cook them. Heisenberg-level precision, blue-crystal
            clean.
          </p>
        </div>
        {/* skills box */}
        <div className="flex w-full flex-col items-center gap-6">
          {skillData.map((a) => (
            <Card className="flex h-full max-h-79 w-full flex-row items-start bg-[#1A1A1A] p-9 text-white">
              <img src={a.icon} alt={a.icon + " icon"} className="aspect-square w-10 invert" />
              <div className="flex flex-col justify-start">
                <h1 className="relative -top-2 text-[20px] font-semibold text-yellow-400 uppercase">
                  {a.title}
                </h1>
                <p className="text-gray-200">{a.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
