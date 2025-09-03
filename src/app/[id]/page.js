"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();
  const match = pathname.startsWith("/user/") ? pathname.split("/")[2] : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        <span className="text-green-500 text-8xl">
          {pathname} 
          </span>
        Not Found ❌</h1>
      
      {match ? (
        <p className="text-lg text-gray-700 mb-4">
          Sorry, the user <b>{match}</b> does not exist.
        </p>
      ) : (
        <p className="text-lg text-gray-700 mb-4">
          The page <b>{pathname}</b> does not exist.
        </p>
      )}

      <Link href="/pages/signin" className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
  Go to Sign In
</Link>

    </div>
  );
}
