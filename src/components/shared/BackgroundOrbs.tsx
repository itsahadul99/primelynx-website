export default function BackgroundOrbs() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
    >
      <div className="orb orb-anim-1 w-[420px] h-[420px] md:w-[600px] md:h-[600px] bg-primary/10 top-[-100px] right-[-100px]" />
      <div className="orb orb-anim-2 w-[480px] h-[480px] md:w-[700px] md:h-[700px] bg-secondary/10 bottom-[-200px] left-[-200px]" />
      <div className="orb orb-anim-3 hidden md:block w-[500px] h-[500px] bg-indigo-500/5 top-[40%] left-[20%]" />
    </div>
  );
}
