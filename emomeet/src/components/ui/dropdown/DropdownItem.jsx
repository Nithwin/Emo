import { Link } from "react-router-dom"; // Correct import

export const DropdownItem = ({
  tag = "button",
  to,
  onClick,
  onItemClick,
  baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  className = "",
  children,
}) => {
  const combinedClasses = `${baseClassName} ${className}`.trim();

  const handleClick = (event) => {
    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick(event); // Call onClick if provided
    if (onItemClick) onItemClick(); // Call onItemClick if provided
  };

  if (tag === "a" && to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  if (tag === "button") {
    return (
      <button onClick={handleClick} className={combinedClasses}>
        {children}
      </button>
    );
  }

  // Default case for invalid tags
  return (
    <div className={combinedClasses} onClick={handleClick}>
      {children}
    </div>
  );
};