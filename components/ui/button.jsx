export default function Button({ children, type = "button", onClick, className = "", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
