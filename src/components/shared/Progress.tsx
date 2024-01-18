import { MAX_STAT } from '../../utils/constants';

interface ProgressProps {
  label: string;
  value: number;
}

const Progress: React.FC<ProgressProps> = ({ label, value }) => {
  const progressValue = `${(value / MAX_STAT) * 100}%`;

  return (
    <div className="flex flex-col gap-2">
      <span className="capitalize">
        {label}: <b>{value}</b>
      </span>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full"
          style={{ width: progressValue }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
