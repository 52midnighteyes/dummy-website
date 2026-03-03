import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function ContactMe() {
  return (
    <section
      id="contactme"
      className="h-au flex min-w-screen flex-col items-center justify-center gap-5 bg-[#1A1A1A] p-10 leading-relaxed text-white lg:px-50 lg:py-20"
    >
      <div className="w-full max-w-xl space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold text-white">
            Let’s <span className="text-yellow-400">Make It Disappear</span>
          </h2>
          <p className="text-sm text-gray-400">Pixels or problems — I handle both. </p>
        </div>

        <Card className="border border-yellow-400/10 bg-black shadow-xl">
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-white">
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="border-none bg-[#1D232A] text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-white">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="border-none bg-[#1D232A] text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="min-h-36 border-none bg-[#1D232A] text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <Button className="w-full bg-yellow-400 font-medium text-black hover:bg-yellow-300">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
