import React from 'react';
import { BarChart3 } from 'lucide-react';

interface ChartData {
  range: string;
  count: number;
  percentage: number;
}

const mockData: ChartData[] = [
  { range: '0-10%', count: 2, percentage: 1 },
  { range: '10-20%', count: 5, percentage: 2.5 },
  { range: '20-30%', count: 8, percentage: 4 },
  { range: '30-40%', count: 15, percentage: 7.5 },
  { range: '40-50%', count: 25, percentage: 12.5 },
  { range: '50-60%', count: 35, percentage: 17.5 },
  { range: '60-70%', count: 45, percentage: 22.5 },
  { range: '70-80%', count: 35, percentage: 17.5 },
  { range: '80-90%', count: 20, percentage: 10 },
  { range: '90-100%', count: 10, percentage: 5 },
];

export default function AchievementChart() {
  const maxCount = Math.max(...mockData.map(d => d.count));

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">15分钟达成率分布</h3>
          <p className="text-sm text-gray-500 mt-1">各区间学校数量统计</p>
        </div>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
          <option>本月</option>
          <option>上月</option>
          <option>本学期</option>
        </select>
      </div>

      <div className="flex-1 flex items-end space-x-2">
        {mockData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-1">{item.count}所</div>
            <div
              className="w-full bg-blue-500 rounded-t"
              style={{
                height: `${(item.count / maxCount) * 100}%`,
                minHeight: '4px',
                backgroundColor: item.percentage >= 15 ? '#3B82F6' : '#93C5FD'
              }}
            />
            <div className="text-xs text-gray-600 mt-1 transform -rotate-45 origin-top-left">
              {item.range}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded" />
            <span className="text-gray-600">达标学校</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-300 rounded" />
            <span className="text-gray-600">未达标学校</span>
          </div>
          <div className="text-blue-600 font-medium">
            平均达成率: 68.5%
          </div>
        </div>
      </div>
    </div>
  );
}