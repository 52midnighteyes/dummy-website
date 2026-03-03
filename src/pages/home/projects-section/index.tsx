import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section
      id="project"
      className="flex h-auto min-w-screen flex-col items-center justify-start gap-5 bg-[#1A1A1A] p-10 leading-relaxed text-white lg:px-50 lg:py-20"
    >
      {/* content wrapper */}

      <div className="flex flex-col items-center gap-10">
        <h1 className="text-[60px] font-bold">Shipped Products</h1>
        {/* card */}
        <div className="flex h-146 w-324 items-end bg-[url('/american_sauls.png')] bg-cover p-6 drop-shadow-2xl">
          <div className="flex h-3/5 w-100 flex-col items-start justify-center gap-2 bg-black p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Hypothetical Law Firm Website
            </h2>

            <p className="leading-relaxed text-gray-300">
              A conceptual website built as if I were still practicing law — designed to position a
              law firm as credible, strategic, and results-driven.
            </p>
            <Dialog>
              <DialogTrigger>
                <Button className="flex gap-4 rounded-none hover:bg-yellow-400 hover:text-black">
                  <p> View Project</p> <ArrowRight />
                </Button>
              </DialogTrigger>

              <DialogContent className="flex h-auto w-[calc(100vw-80px)] max-w-5xl flex-col items-center bg-black p-12 text-gray-200 lg:justify-center">
                <DialogTitle className="text-[24px] font-semibold lg:hidden">
                  Hypothetical Law Firm Website{" "}
                </DialogTitle>

                <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-start">
                  {/* image */}
                  <div className="w-full max-w-2xl overflow-hidden rounded-md lg:w-1/2">
                    <div className="aspect-video w-full bg-yellow-300">
                      <img
                        src="proj1.png"
                        className="h-full w-full border border-black object-cover"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div className="w-full max-w-xl flex-col gap-4 lg:flex lg:w-1/2">
                    <DialogTitle className="hidden lg:block lg:text-[24px] lg:font-semibold">
                      Hypothetical Law Firm Website{" "}
                    </DialogTitle>

                    <p className="leading-relaxed text-gray-200">
                      <span className="font-semibold text-yellow-400">Situation:</span> I needed a
                      professional website for my law firm to rebuild credibility and attract better
                      clients.<span className="font-semibold text-yellow-400">Task:</span> I had to
                      build a conversion-focused site that clearly explains my services, builds
                      trust, and drives qualified leads.{" "}
                      <span className="font-semibold text-yellow-400">Action:</span> I built a
                      responsive site with <span className="font-semibold">React</span> and{" "}
                      <span className="font-semibold">Tailwind CSS</span>, wrote persuasive copy,
                      added a validated lead form, and optimized performance—while keeping my bold
                      branding believable and professional.{" "}
                      <span className="font-semibold text-yellow-400">Result:</span> I increased
                      inquiries by <span className="font-semibold text-yellow-400">~40%</span> in 3
                      months, improved time-on-site, and repositioned my firm as strategic—not just
                      loud.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* card2 */}
        <div className="flex h-146 w-324 items-end bg-[url('/nopaper.jpg')] bg-cover p-6 drop-shadow-2xl">
          <div className="flex h-3/5 w-100 flex-col items-start justify-center gap-2 bg-black p-6">
            <h2 className="text-2xl font-semibold text-yellow-400">No Paper: A To-Do List App</h2>

            <p className="leading-relaxed text-gray-300">
              I was once a junior developer too — overwhelmed with sticky notes and scattered tasks.
              “No Paper” was built as a simple, focused productivity tool that keeps everything in
              one place.
            </p>
            <Dialog>
              <DialogTrigger>
                <Button className="flex gap-4 rounded-none hover:bg-yellow-400 hover:text-black">
                  <p> View Project</p> <ArrowRight />
                </Button>
              </DialogTrigger>

              <DialogContent className="flex h-auto w-[calc(100vw-80px)] max-w-5xl flex-col items-center bg-black p-12 text-gray-200 lg:items-center lg:justify-center">
                <DialogTitle className="text-[24px] font-semibold lg:hidden">
                  No Paper: A To-Do List App{" "}
                </DialogTitle>

                <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:justify-center">
                  {/* image */}
                  <div className="max-w-2x flex w-full overflow-hidden rounded-md lg:w-1/2">
                    <div className="flex aspect-video items-center justify-center bg-yellow-300">
                      <img
                        src="todos.jpg"
                        className="h-full w-full border border-black object-cover"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div className="w-full max-w-xl flex-col gap-4 lg:flex lg:w-1/2">
                    <DialogTitle className="hidden lg:block lg:text-[24px] lg:font-semibold">
                      No Paper: A To-Do List App{" "}
                    </DialogTitle>

                    <p className="leading-relaxed text-gray-200">
                      <span className="font-semibold text-yellow-400">Situation:</span> As a junior
                      developer, I often struggled with scattered notes and unstructured task
                      management that hurt my productivity.
                      <span className="font-semibold text-yellow-400">Task:</span> I needed to build
                      a simple, efficient tool that centralizes tasks, improves focus, and removes
                      unnecessary friction.{" "}
                      <span className="font-semibold text-yellow-400">Action:</span> I developed a
                      responsive to-do list application using{" "}
                      <span className="font-semibold">React</span> and{" "}
                      <span className="font-semibold">TypeScript</span>, implemented state
                      management for real-time updates, added task validation and filtering
                      features, and designed a clean UI with{" "}
                      <span className="font-semibold text-yellow-400">Tailwind CSS</span> to keep
                      the experience minimal and distraction-free.{" "}
                      <span className="font-semibold text-yellow-400">Result:</span> The app
                      streamlined my daily workflow, reduced task clutter, and improved execution
                      consistency—turning chaotic planning into structured productivity.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
