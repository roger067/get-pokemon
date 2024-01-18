import { useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

interface AutoCompleteProps {
  name: string;
  value: string;
  suggestions: string[];
  completeMethod: (value: string) => void;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  name,
  value,
  suggestions,
  completeMethod,
  onChange,
  placeholder,
  disabled = false,
  className = '',
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef<HTMLDivElement | null>(null);

  const debounceCompleteMethod = useMemo(
    () => debounce(completeMethod, 500),
    [completeMethod]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onClick = (event: string) => {
    onChange(event);
    setShowSuggestions(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onChange(query);
    debounceCompleteMethod(query);
    setShowSuggestions(true);
  };

  return (
    <div className={`relative ${className}`} ref={inputRef}>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        autoComplete="off"
        className="w-full py-2 px-3 border border-slate-500 rounded-xl"
      />
      {showSuggestions && (
        <ul className="absolute z-10 w-full py-2 mt-1 bg-white border rounded-xl shadow-md max-h-48 overflow-y-auto">
          {!suggestions.length ? (
            <li className="p-2 text-gray-500 text-center">
              Termo não encontrado
            </li>
          ) : (
            suggestions.map((suggestion, index) => (
              <li
                key={`${suggestion}-${index}`}
                className="transition-colors py-2 px-3 cursor-pointer hover:bg-red-500 hover:text-white"
                onClick={() => onClick(suggestion)}
              >
                {suggestion}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
