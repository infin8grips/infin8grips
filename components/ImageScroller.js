export default function ImageScroller({ images }) {
  return (
    <div className="flex overflow-x-auto space-x-4 snap-x mt-4 pb-2">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-72 h-72 object-cover rounded-xl shadow snap-center"
        />
      ))}
    </div>
  );
}
