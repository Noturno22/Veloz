export function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/zentra-logo.png"
        alt="Veloz"
        className="h-[88px] w-auto sm:h-24 md:h-28 lg:h-32 object-contain transition-all duration-300 hover:scale-105 brightness-[1.2] contrast-[1.15] saturate-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:brightness-[1.3] hover:drop-shadow-[0_4px_20px_rgba(212,175,55,0.5)] dark:brightness-[1.3] dark:contrast-[1.1] dark:saturate-[1.1] dark:drop-shadow-[0_2px_14px_rgba(255,255,255,0.25)] dark:hover:brightness-[1.45] dark:hover:drop-shadow-[0_4px_28px_rgba(212,175,55,0.6)]"
      />
    </div>
  );
}
