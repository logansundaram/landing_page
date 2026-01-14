import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">


      <header className="flex w-full place-content-between">
        <div>
          <h1 className="p-8">
            Saturday.ai
          </h1>
        </div>
        <div className="gap-5 flex p-8">
          <h1>
            About
          </h1>
          <h1>
            Contact
          </h1>
        </div>
      </header>

      <main>

        <div className="flex h-100 w-full justify-center items-center">
          <h1 className="text-4xl">
            Transparent AI democratized.
          </h1>
        </div>


        <p className="p-8">
          AI shouldn’t require giving up ownership of your data. Saturday.ai is a local-first AI platform designed to keep your models, workflows, and knowledge exactly where they belong, on your machine and under your control. By default, everything runs locally, preserving privacy, reducing latency, and eliminating unnecessary dependence on centralized infrastructure.

          At the same time, Saturday.ai is built to grow with you. When collaboration, shared compute, or broader deployment becomes necessary, the platform provides a seamless path to scale without forcing lock-in or compromising your principles. Whether you’re experimenting alone, building internal tools, or preparing production-ready systems, Saturday.ai adapts to your needs while keeping ownership firmly in your hands.        
        </p>

        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="bg-stone-200 rounded-md flex justify-center p-4">
            <p>
              Saturday.ai is built to run locally by default. Models, workflows, and knowledge stay on your machine, giving you full control over privacy, performance, and persistence. No forced cloud, no hidden data flows, and no unnecessary latency.
            </p>
          </div>
          <div className="bg-stone-200 rounded-md flex justify-center p-4">
            <p>
              Instead of a single opaque agent, Saturday.ai lets you compose intelligent systems from clear, reusable building blocks. Tools, workflows, and policies are explicit, inspectable, and easy to extend, so your AI adapts to how you work rather than forcing you into a rigid abstraction.
            </p>
          </div>
          <div className="bg-stone-200 rounded-md flex justify-center p-4">
            <p>
              Saturday.ai grows with you. Begin experimenting on a single machine, then expand to shared compute, collaboration, or production deployment when it makes sense. Scaling never requires surrendering ownership or locking into a centralized platform.
            </p>
          </div>

        </div>
      
      </main>
    </div>
  );
}
