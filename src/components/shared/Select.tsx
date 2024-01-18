import { useEffect, useRef, useState } from 'react';

interface SelectProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  items: { id: string; value: string }[];
}

const Select: React.FC<SelectProps> = ({
  value,
  placeholder,
  onChange,
  items,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const isDropdownOpen = showDropdown && items.length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickItem = (value: string) => {
    onChange(value);
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={buttonRef}>
      <button
        type="button"
        className={`px-4 py-2 border rounded-xl text-left cursor-pointer min-w-48 h-[42px] bg-white text-slate-700 border-slate-500 ${
          value ? 'font-bold' : ''
        }`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {value || placeholder}
      </button>
      {isDropdownOpen && (
        <ul
          className="absolute z-10 w-full py-2 mt-1 bg-white border rounded-xl shadow-md max-h-48 overflow-y-auto"
          role="listbox"
        >
          {items.map((item) => (
            <li
              className="transition-colors py-2 px-3 cursor-pointer hover:bg-red-500 hover:text-white"
              key={item.id}
              onClick={() => handleClickItem(item.value)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
      {value && (
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 py-1 px-2 bg-red-500 text-white font-bold text-xs rounded-full"
          onClick={() => handleClickItem('')}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Select;
