interface ToggleButtonProps {
  className?: string;
  onLabel: string;
  offLabel: string;
  checked: boolean;
  onChange: (event: { value: boolean }) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  className = '',
  onLabel,
  offLabel,
  checked,
  onChange,
}) => {
  return (
    <button
      type="button"
      className={`transition-colors inline-flex items-center px-4 py-2 border rounded-xl cursor-pointer h-[42px] focus:outline-none ${
        checked
          ? 'bg-slate-500 text-white'
          : 'bg-white text-slate-700 border-slate-500'
      } ${className}`}
      onClick={() => onChange({ value: !checked })}
    >
      <span className="text-center w-full">{checked ? onLabel : offLabel}</span>
    </button>
  );
};

export default ToggleButton;
