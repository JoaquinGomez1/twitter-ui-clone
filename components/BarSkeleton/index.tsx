interface BarSkeletonProps {
  className?: string;
}

export default function index({ className }: BarSkeletonProps) {
  return (
    <div className={"w-100 h-4 bg-gray-700 rounded-sm " + className}></div>
  );
}
