import Link from 'next/link';
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[60vh] text-center px-4">
      <h1 className="text-7xl font-extrabold text-[#2D4059] mb-4">404</h1>
      <h2 className="text-3xl font-bold text-[#2D4059] dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
        Oops! It looks like the page you are looking for has been moved, deleted, or never existed in the first place.
      </p>
      <Link href="/">
        <Button
          color="primary"
          size="lg"
          className="bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center"
        >
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}