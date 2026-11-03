import KineticGrid from "@/components/ui/kinetic-grid";
import { Search } from "lucide-react";

export default function Default() {
  return (
    <KineticGrid globalColor="blackBlueRed">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400">
          Campus Lost & Found Portal
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Find what you lost. <br />
          <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Return what you found.
          </span>
        </h1>
        <p className="mt-4 max-w-lg text-base text-slate-300">
          Move your cursor to warp the electric blue grid. Click anywhere to send crimson red ripples.
        </p>

        {/* Search Bar Integration */}
        <div className="mt-8 flex w-full max-w-xl items-center rounded-full border-2 border-blue-600/50 bg-[#090d16] px-4 py-2 shadow-2xl shadow-blue-900/30">
          <Search className="mr-3 h-5 w-5 text-red-500" />
          <input
            type="text"
            placeholder="Search lost or found items (e.g., AirPods, laptop charger, ID card)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 outline-none"
          />
          <button className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-2 text-xs font-bold text-white shadow-md shadow-red-600/40 hover:from-red-500 hover:to-red-400">
            Search
          </button>
        </div>
      </div>
    </KineticGrid>
  );
}
