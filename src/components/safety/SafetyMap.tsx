import React from 'react';
import { MapPin } from 'lucide-react';

interface SafetyPoint {
  x: number;
  y: number;
  status: 'normal' | 'warning' | 'danger';
  label: string;
}

const safetyPoints: SafetyPoint[] = [
  { x: 20, y: 30, status: 'normal', label: '操场北区' },
  { x: 70, y: 25, status: 'warning', label: '篮球场' },
  { x: 40, y: 60, status: 'normal', label: '休息区' },
  { x: 85, y: 70, status: 'normal', label: '器材区' },
  { x: 30, y: 80, status: 'danger', label: '跑道拐角' },
];

const statusColors = {
  normal: 'bg-green-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
};

export default function SafetyMap() {
  return (
    <div className="relative aspect-[4/3] bg-[#E8F4E8] rounded-lg overflow-hidden">
      {/* 校园区域轮廓 */}
      <div className="absolute inset-[10%] border-2 border-gray-300/30 rounded-lg"></div>
      
      {/* 安全监控点 */}
      {safetyPoints.map((point, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
        >
          <div className={`w-4 h-4 ${statusColors[point.status]} rounded-full animate-pulse`}>
            <div className={`absolute -inset-1 ${statusColors[point.status]} rounded-full animate-ping opacity-20`}></div>
          </div>
          
          {/* 标签 */}
          <div className="absolute left-1/2 top-full mt-1 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap">
              {point.label}
            </div>
          </div>
        </div>
      ))}
      
      {/* 图例 */}
      <div className="absolute bottom-2 right-2 bg-white/90 rounded-lg p-2 text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>正常</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span>警告</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>危险</span>
          </div>
        </div>
      </div>
    </div>
  );
}