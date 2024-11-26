import React from 'react';

interface LocationData {
  name: string;
  usage: number;
  capacity: number;
}

const locationData: LocationData[] = [
  { name: '操场跑道', usage: 285, capacity: 300 },
  { name: '篮球场', usage: 180, capacity: 200 },
  { name: '乒乓球区', usage: 85, capacity: 100 },
  { name: '休息区', usage: 120, capacity: 150 },
  { name: '器材区', usage: 90, capacity: 100 },
];

export default function LocationAnalysis() {
  return (
    <div className="space-y-4">
      {locationData.map((item, index) => {
        const percentage = (item.usage / item.capacity) * 100;
        const getColor = (percent: number) => {
          if (percent >= 90) return 'bg-red-500';
          if (percent >= 70) return 'bg-amber-500';
          return 'bg-green-500';
        };

        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">{item.name}</span>
              <span className="text-gray-500">
                {item.usage}/{item.capacity}人
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${getColor(percentage)} rounded-full transition-all duration-500`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}

      <div className="pt-4 mt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded" />
            <span className="text-gray-600">空闲</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded" />
            <span className="text-gray-600">较忙</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded" />
            <span className="text-gray-600">拥挤</span>
          </div>
        </div>
      </div>
    </div>
  );
}