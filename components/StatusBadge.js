// components/StatusBadge.js
export default function StatusBadge({ status }) {
  const color =
    status === "ativo" ? "bg-green-600" :
    status === "inativo" ? "bg-gray-500" :
    "bg-yellow-600";

  return (
    <span className={`text-white text-xs px-3 py-1 rounded-full ${color}`}>
      {status}
    </span>
  );
}
