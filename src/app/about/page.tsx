export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main>

        <div className="flex h-100 w-full justify-center items-center">      
        <h1 className="text-4xl">
            About
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="bg-zinc-800 text-zinc-50 rounded-md justify-center p-4">
            <h1 className="font-bold p-2 text-center">
              Your AI runs where your data lives.
            </h1>
            <p>
              Saturday.ai is built to run locally by default. Models, workflows, and knowledge stay on your machine, giving you full control over privacy, performance, and persistence. No forced cloud, no hidden data flows, and no unnecessary latency.
            </p>
          </div>
          <div className="bg-zinc-800 text-zinc-50 rounded-md justify-center p-4">
            <h1 className="font-bold p-2 text-center">
              Build tools, not black boxes.
            </h1>
            <p>
              Instead of a single opaque agent, Saturday.ai lets you compose intelligent systems from clear, reusable building blocks. Tools, workflows, and policies are explicit, inspectable, and easy to extend, so your AI adapts to how you work rather than forcing you into a rigid abstraction.
            </p>
          </div>
          <div className="bg-zinc-800 text-zinc-50 rounded-md justify-center p-4">
            <h1 className="font-bold p-2 text-center">
              Understand what your AI is doing and why.
            </h1>
            <p>
              Saturday.ai is built around explicit, traceable workflows rather than opaque agent behavior. Every step, tool call, and decision can be inspected, logged, and reasoned about, making systems easier to debug, trust, and harden for real-world use. This makes Saturday.ai suitable not just for experimentation, but for reliable, production-grade AI systems.
            </p>
          </div>
        </div>

        <div className="p-24">
          <h1 className="w-full text-center text-2xl">
            An AI agent that actually works.
          </h1>
          <p className="text-center">
            AI shouldn’t require giving up ownership of your data. Saturday.ai is a local-first AI platform designed to keep your models, workflows, and knowledge exactly where they belong, on your machine and under your control. By default, everything runs locally, preserving privacy, reducing latency, and eliminating unnecessary dependence on centralized infrastructure.

            At the same time, Saturday.ai is built to grow with you. When collaboration, shared compute, or broader deployment becomes necessary, the platform provides a seamless path to scale without forcing lock-in or compromising your principles. Whether you’re experimenting alone, building internal tools, or preparing production-ready systems, Saturday.ai adapts to your needs while keeping ownership firmly in your hands.        
          </p>
        </div>

        

        <div className="w-full h-125 justify-center flex items-center">
          <div>
            <p className="text-5xl">
              Coming Soon. Summer 2026.
            </p>
            <p>
              Sign up for updates.
            </p>
          </div>
        </div>

        <footer className="flex text-xs justify-center w-full p-8 gap-16">
          <div>
            <h1>
              Contact
            </h1>
            <p>
              Email: saturday_ai@gmail.com
            </p>
          </div>

          <div>
            <h1>
              About
            </h1>
            <p>
              Saturday.ai
            </p>
          </div>

           <div>
            <h1>
              © 2026 Saturday AI
            </h1>
            <p>
              All rights reserved
            </p>
          </div>

        </footer>
      
      </main>
    </div>
  );
}
