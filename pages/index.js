import { useState } from "react";
import NavBar from "../components/NavBar";
import ItemModal from "../components/ItemModal";
import ComingSoonModal from "../components/ComingSoonModal";
import { BRAND } from "../theme";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // EDIT PRODUCTS HERE
  const items = [
    {
      id: "grip1",
      name: "Infin8 Grip",
      price: 29.99,
      description: "Premium grip engineered for elite performance.",
      images: [
        "/images/grip1a.jpg",
        "/images/grip1b.jpg",
        "/images/grip1c.jpg"
      ]
    }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setSelected(null);
  };

  const checkout = () => {
    setShowComingSoon(true);
  };

  return (
    <div>
      <NavBar />

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Elevate Your Grip.
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Premium performance grips designed for athletes who demand more.
        </p>
      </section>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-6"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.images[0]}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>

      {/* FLOATING CHECKOUT */}
      {cart.length > 0 && (
        <button
          onClick={checkout}
          className="fixed bottom-6 right-6 px-8 py-4 rounded-full text-white text-lg shadow-xl"
          style={{ background: BRAND.primary }}
        >
          Checkout ({cart.length})
        </button>
      )}

      <ItemModal
        item={selected}
        onClose={() => setSelected(null)}
        onAdd={addToCart}
      />

      {showComingSoon && (
        <ComingSoonModal onClose={() => setShowComingSoon(false)} />
      )}
    </div>
  );
}
