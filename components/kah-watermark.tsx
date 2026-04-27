export function KahWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2147483647] opacity-[0.085] mix-blend-soft-light"
    >
      <div className="kah-watermark-pattern h-full w-full" />
    </div>
  );
}
