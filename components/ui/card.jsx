export function Card({ children, className = "" }) {
    return (
      <div className={`bg-white bg-opacity-90 p-4 rounded-2xl shadow-md ${className}`}>
        {children}
      </div>
    )
  }
  