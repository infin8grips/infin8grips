import ImageScroller from "./ImageScroller";
import { BRAND } from "../theme";

export default function ItemModal({ item, onClose, onAdd }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-xl animate-fadeIn">
        <h2 className="text-3xl font-semibold">{item.name}</h2>
        <p className="mt-3 text-gray-600">{item.description}</p>

        <ImageScroller images={item.images} />

        <button
          onClick={() => onAdd(item)}
          className="mt-6 w-full py-3 rounded-xl text-white text-lg shadow"
          style={{ background: BRAND.primary }}
        >
          Add to Bag — ${item.price}
        </button>

        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-500 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
