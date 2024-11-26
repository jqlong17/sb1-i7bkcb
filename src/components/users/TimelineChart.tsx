import React from 'react';

interface TimePoint {
  time: string;
  count: number;
}

const timelineData: TimePoint[] = [
  { time: '08:00', count: 0 },
  { time: '08:45', count: 820 },
  { time: '09:00', count: 0 },
  { time: '09:45', count: 835 },
  { time: '10:00', count: 0 },
  { time: '10:45', count: 842 },
  { time: '11:00', count: 0 },
  { time: '11:45', count: 847 },
];

export default function TimelineChart() {
  const maxCount = Math.max(...timelineData.map(d => d.count));

  return (
    <div className="h-[300px] flex flex-col">
      <div className="flex-1 flex items-end space-x-4">
        {timelineData.map((point, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">
              {point.count > 0 ? point.count : ''}
            </div>
            <div
              className="w-full bg-blue-500 rounded-t transition-all duration-500"
              style={{
                height: point.count ? `${(point.count / maxCount) * 100}%` : '4px',
                backgroundColor: point.count ? '#3B82F6' : '#E5E7EB'
              }}
            />
            <div className="text-xs text-gray-600 mt-2">
              {point.time}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded" />
            <span className="text-gray-600">课间活动</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-200 rounded" />
            <span className="text-gray-600">上课时间</span>
          </div>
          <span className="text-blue-600 font-medium">
            平均: 836人
          </span>
        </div>
      </div>
    </div>
  );
}