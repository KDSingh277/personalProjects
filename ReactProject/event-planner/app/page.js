import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
    <Navbar />
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Event Planner</h1>
      <p className="mt-4 text-lg text-gray-700">Plan your perfect event with us!</p>
    </div>
  </main>
  );
}
