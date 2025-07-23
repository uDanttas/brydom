// components/WarningBox.js
export default function WarningBox({ children }) {
  return (
    <div className="bg-yellow-300 text-black px-4 py-3 rounded-xl shadow-md mb-4 text-sm">
      ⚠️ {children}
    </div>
  );
}
