import React from 'react';
import { ArrowDown, ArrowUp, Clock, Target, Users, UserCheck } from 'lucide-react';

const stats = [
  {
    label: '当前活动人数',
    value: '847',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    label: '按时下课率',
    value: '94.2%',
    change: '+2.1%',
    changeType: 'increase',
    icon: Clock,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    label: '活动参与率',
    value: '89.5%',
    change: '+5.3%',
    changeType: 'increase',
    icon: UserCheck,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    label: '目标达成率',
    value: '92.8%',
    change: '-1.2%',
    changeType: 'decrease',
    icon: Target,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function RealTimeCount() {
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