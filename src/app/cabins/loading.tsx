import SpinnerMini from "@/components/ui/SpinnerMini";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <SpinnerMini />
      <p className="text-xl text-primary-200">Loading Cabin Data...</p>
    </div>
  );
}
