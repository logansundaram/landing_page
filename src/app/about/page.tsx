export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main>

        <div className="grid h-150 w-full justify-center items-center grid-cols-2">      
          <h1 className="text-4xl justify-center flex text-blue-900">
            About: Saturday.ai
          </h1>
          <p className="p-8">
            We’re building AI systems that are understandable, auditable, and designed to work with you, not around you.

            In a world where AI is increasingly opaque and centralized, we believe powerful intelligence should be traceable, controllable, and locally deployable. Our work focuses on creating modular AI workflows that users can inspect, customize, and trust, whether they’re running on a laptop, workstation, or private infrastructure.
          </p>
        </div>
      
      </main>
    </div>
  );
}
