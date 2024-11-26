import React from 'react';

interface ActivityType {
  type: string;
  count: number;
  color: string;
}

const activityData: ActivityType[] = [
  { type: '跑步', count: 320, color: '#3B82F6' },
  { type: '篮球', count: 280, color: '#10B981' },
  { type: '散步', count: 180, color: '#F59E0B' },
  { type: '跳绳', count: 120, color: '#6366F1' },
  { type: '其他', count: 100, color: '#EC4899' },
];

export default function ActivityTypeChart() {
  const total = activityData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="relative">
      <div className="flex justify-center">
        <svg className="w-64 h-64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="8"
            className="transform scale-[4] origin-center translate-x-4 translate-y-4"
          />
          {activityData.map((item, index) => {
            const percentage = (item.count / total) * 100;
            const offset = activityData
              .slice(0, index)
              .reduce((sum, prev) => sum + (prev.count / total) * 100, 0);
            return (
              <circle
                key={index}
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke={item.color}
                strokeWidth="8"
                strokeDasharray={`${percentage} 100`}
                strokeDashoffset={-offset}
                className="transform scale-[4] origin-center translate-x-4 translate-y-4"
                style={{ transition: 'all 0.5s ease-out' }}
              />
            );
          })}
        </svg>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {activityData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">
              {item.type} ({Math.round((item.count / total) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}