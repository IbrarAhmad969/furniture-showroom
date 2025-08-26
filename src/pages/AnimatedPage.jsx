export default function AnimatedPage() {
  return (
    <div className="dark:bg-zinc-800 min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100 p-10">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-dashed border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-sm text-gray-700 dark:text-white">Spinner </p>
      </div>

      <div className="flex gap-2 ">
        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse "></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-150"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-150"></div>
       
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-white">loader </p>
    </div>
  );
}
