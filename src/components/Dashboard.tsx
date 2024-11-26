import React from 'react';
import { Activity, ArrowDown, ArrowUp, Users } from 'lucide-react';
import ActivityHeatmap from './ActivityHeatmap';
import AchievementChart from './AchievementChart';

const stats = [
  {
    label: '当前课间人数',
    value: '847',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
  },
  {
    label: '活动参与率',
    value: '92%',
    change: '+4.2%',
    changeType: 'increase',
    icon: Activity,
  },
  {
    label: '15分钟达成率',
    value: '68.5%',
    change: '+5.3%',
    changeType: 'increase',
    icon: Users,
  },
];

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === 'increase' ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ml-1 ${
                  stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs 上周</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">操场活动热力图</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>操场</option>
              <option>教学楼</option>
              <option>食堂</option>
            </select>
          </div>
          <div className="aspect-[4/3] bg-gray-50 rounded-lg relative">
            <ActivityHeatmap />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="h-full">
            <AchievementChart />
          </div>
        </div>
      </div>
    </main>
  );
}