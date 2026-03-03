import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    user: "Los Pollos Hermanos",
    testimonial:
      "We needed a clean digital rebranding after… previous ownership complications. Jimmy built a sharp, conversion-focused website that restored trust and repositioned us as a legitimate fast-food empire. Business is booming. No more headlines. Just chicken.",
    icon: "losicon.jpg",
  },
  {
    user: "Kim Wrexler",
    testimonial:
      "After stepping away from law, I needed a fresh start. Jimmy helped rebuild my professional presence online with a minimal, credible website that reflected who I am now. Structured. Strategic. Quietly powerful.",
    icon: "kimicon.webp",
  },
  {
    user: "Huell Babineaux",
    testimonial:
      "I used to do… security work. Now I’m a stand-up comedian. Jimmy built me a clean booking website. I get paid to make people laugh now. Way safer. Way better.",
    icon: "heullicon.jpg",
  },
  {
    user: "Jesse Pinkman",
    testimonial:
      "Yeah, so I grow hydroponic vegetables now. Legit business. Jimmy made me an e-commerce site that actually brings in real clients. No weird stuff. Just plants. Science, yo.",
    icon: "jesseicon.webp",
  },
];

export default function TestimonialSection() {
  return (
    <section
      id="testi"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-black p-10 leading-relaxed text-white lg:px-50 lg:py-20"
    >
      {/* content wrapper */}
      <h1 className="text-[60px] font-bold">Don’t Take My Word For It</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* jujur ini AI udah mepet waktu hehehe */}
        {testimonials.map((a) => (
          <Card key={a.user} className="border-yellow-400 bg-[#1A1A1A] text-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
                {/* avatar */}
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 lg:h-28 lg:w-28">
                  <img
                    src={a.icon}
                    alt={`${a.user} avatar`}
                    className="h-full w-full object-cover contrast-125 grayscale"
                    loading="lazy"
                  />
                </div>

                {/* text */}
                <div className="flex w-full flex-col gap-2 text-center lg:text-left">
                  <h2 className="text-lg leading-tight font-semibold text-yellow-400">{a.user}</h2>
                  <p className="text-sm leading-relaxed text-gray-300">{a.testimonial}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
