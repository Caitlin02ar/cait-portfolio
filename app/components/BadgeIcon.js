export default function BadgeIcon({ icon: Icon, label }) {
  return (
    <span className="flex items-center border rounded-md px-3 py-1 gap-2 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
      {Icon}
      {label}
    </span>
  );
}
