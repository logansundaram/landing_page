
export default function Home() {
  return (
    <div className = "bg-zinc-50 font-sans dark:bg-black">

      <div className="flex w-full justify-center items-center p-12 pt-40 pb-20">      
        <div>
          <h1 className="text-9xl text-blue-900 animate-[fadeUp_0.5s_ease-out_forwards]">
            Transparent AI Democratized.
          </h1>
          <p className="opacity-0 animate-[fadeUp_0.7s_ease-out_forwards] [animation-delay:500ms]">
            AI designed for transparency, robustness, and flexibility.            
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 p-8">
        <div className="rounded-md justify-center p-4">
          <div className="font-xl pb-2">
            <h1 className="font-bold">
              Local-First by Design
            </h1>
            <p className="text-blue-900">
              Your AI runs where your data lives.
            </p>
          </div>
          <p>
            Saturday.ai is built to operate locally by default. Models, workflows, and knowledge stay on your machine—giving you direct control over privacy, performance, and persistence. There is no forced cloud dependency, no hidden data movement, and no unnecessary latency. When connectivity is optional, reliability becomes a feature rather than a risk.
          </p>
        </div>
        <div className="rounded-md justify-center p-4">
          <div className="font-xl pb-2">
            <h1 className="font-bold">
              Agentic Workflows, Not Black Boxes
            </h1>
            <p className="text-blue-900">
              Built from explicit steps you can inspect and reason about.
            </p>
          </div>
          <p>
            Instead of relying on a single opaque agent, Saturday.ai is structured around agentic workflows composed of clear, traceable steps. Each decision, tool invocation, and state transition is explicit—making behavior understandable, debuggable, and reproducible. This architecture favors correctness and trust over unpredictability, especially as systems grow in complexity.
          </p>
        </div>
        <div className="rounded-md justify-center p-4">
          <div className="font-xl pb-2">
            <h1 className="font-bold">
              Self-Improving Capabilites
            </h1>
            <p className="text-blue-900">
              AI systems that can refine their own workflows.
            </p>
          </div>
          <p>
            Saturday.ai treats tools and workflows as first-class components. Agents can compose, evaluate, and iterate on agentic workflows built from reusable, policy-constrained building blocks. Instead of hard-coded pipelines or opaque behavior, tasks compile into explicit LangGraph workflows with defined state, tool policies, and verification steps—allowing systems to adapt and improve while remaining inspectable, reproducible, and under control.
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
          <div className="flex gap-2">
            <p className="text-5xl">
              Coming Soon.    
            </p>
            <p className="text-5xl text-blue-900">
              Summer 2026.
            </p>
          </div>
          <p>
            Sign up for updates.
          </p>
        </div>
      </div>

        
      
    </div>
  );
}
