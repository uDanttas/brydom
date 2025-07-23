// components/Title.js
export default function Title({ children }) {
  return (
    <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
      {children}
    </h2>
  );
}
