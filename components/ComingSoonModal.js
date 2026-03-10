export default function ComingSoonModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-xl text-center animate-fadeIn">
        <h2 className="text-3xl font-bold">Checkout Coming Soon</h2>
        <p className="mt-4 text-gray-600">
          We’re putting the finishing touches on our secure checkout system.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-xl bg-black text-white text-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
