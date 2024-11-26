import React from 'react';

interface ClassData {
  name: string;
  count: number;
  total: number;
}

const classData: ClassData[] = [
  { name: '初一(1)班', count: 42, total: 45 },
  { name: '初一(2)班', count: 43, total: 46 },
  { name: '初一(3)班', count: 41, total: 44 },
  { name: '初一(4)班', count: 40, total: 45 },
  { name: '初一(5)班', count: 44, total: 46 },
  { name: '初一(6)班', count: 42, total: 45 },
];

export default function ClassDistribution() {
  return (
    <div className="space-y-4">
      {classData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700">{item.name}</span>
            <span className="text-gray-500">
              {item.count}/{item.total}人
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${(item.count / item.total) * 100}%` }}
            />
          </div>
        </div>
      ))}

      <div className="pt-4 mt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded" />
            <span className="text-gray-600">已参与</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-100 rounded" />
            <span className="text-gray-600">未参与</span>
          </div>
          <span className="text-blue-600 font-medium">
            总参与率: 92.4%
          </span>
        </div>
      </div>
    </div>
  );
}