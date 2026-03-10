import { BRAND } from "../theme";

export default function NavBar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-2xl font-bold tracking-tight">{BRAND.name}</h1>

      <button className="px-4 py-2 bg-black text-white rounded-full shadow hover:opacity-80 transition">
        Shop
      </button>
    </nav>
  );
}
