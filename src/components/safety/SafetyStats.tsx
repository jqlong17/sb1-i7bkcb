import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';

const stats = [
  {
    label: '当前安全状态',
    value: '正常',
    icon: CheckCircle,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    label: '实时监控人数',
    value: '847',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    label: '今日警报次数',
    value: '3',
    icon: AlertTriangle,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    label: '平均响应时间',
    value: '45秒',
    icon: Clock,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function SafetyStats() {
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
        </div>
      ))}
    </div>
  );
}