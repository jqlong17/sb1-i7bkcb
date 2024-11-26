import React from 'react';
import { Activity, ArrowDown, ArrowUp, Heart, Target, Users } from 'lucide-react';

const stats = [
  {
    label: '活动参与人数',
    value: '756',
    change: '+8.2%',
    changeType: 'increase',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    label: '平均活动时长',
    value: '12.5分钟',
    change: '+1.3%',
    changeType: 'increase',
    icon: Activity,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    label: '运动强度',
    value: '中等',
    change: '-2.1%',
    changeType: 'decrease',
    icon: Heart,
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    label: '达标率',
    value: '89.2%',
    change: '+3.5%',
    changeType: 'increase',
    icon: Target,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function ActivityStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className={`text-2xl font-semibold mt-1 ${stat.color}`}>
                {stat.value}
              </p>
            </div>
            <div className={`h-12 w-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
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
  );
}