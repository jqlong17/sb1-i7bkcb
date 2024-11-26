import React from 'react';

interface HeatPoint {
  x: number;
  y: number;
  value: number;
  label?: string;
}

const mockData: HeatPoint[] = [
  // 操场跑道区域
  { x: 30, y: 20, value: 0.8, label: '跑步区' },
  { x: 70, y: 20, value: 0.7 },
  { x: 30, y: 80, value: 0.6 },
  { x: 70, y: 80, value: 0.7 },
  
  // 篮球场区域
  { x: 20, y: 50, value: 0.9, label: '篮球场' },
  { x: 25, y: 45, value: 0.8 },
  { x: 15, y: 55, value: 0.7 },
  
  // 休息区
  { x: 80, y: 50, value: 0.5, label: '休息区' },
  { x: 85, y: 45, value: 0.4 },
  { x: 75, y: 55, value: 0.6 },
  
  // 其他活动区域
  { x: 50, y: 50, value: 0.3 },
  { x: 40, y: 60, value: 0.4 },
  { x: 60, y: 40, value: 0.5 },
];

export default function ActivityHeatmap() {
  return (
    <div className="relative w-full h-full bg-[#E8F4E8] rounded-lg overflow-hidden">
      {/* 操场跑道轮廓 */}
      <div className="absolute inset-[10%] border-[3px] border-[#FFA07A]/30 rounded-full"></div>
      
      {/* 热力点 */}
      {mockData.map((point, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
        >
          {/* 热力散点 */}
          <div
            className="relative"
            style={{
              width: '60px',
              height: '60px',
              background: `radial-gradient(circle, rgba(255,0,0,${point.value}) 0%, rgba(255,0,0,0) 70%)`
            }}
          >
            {point.label && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 px-2 py-1 rounded text-xs text-gray-600 whitespace-nowrap">
                {point.label}
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* 图例 */}
      <div className="absolute bottom-2 right-2 bg-white/90 rounded-lg p-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded" style={{background: 'rgba(255,0,0,0.2)'}}></div>
            <div className="w-3 h-3 rounded" style={{background: 'rgba(255,0,0,0.4)'}}></div>
            <div className="w-3 h-3 rounded" style={{background: 'rgba(255,0,0,0.6)'}}></div>
            <div className="w-3 h-3 rounded" style={{background: 'rgba(255,0,0,0.8)'}}></div>
          </div>
          <span className="text-gray-600">人流密度</span>
        </div>
      </div>

      {/* 实时数据 */}
      <div className="absolute top-2 left-2 bg-white/90 rounded-lg p-2 space-y-1">
        <div className="text-xs font-medium text-gray-800">实时数据</div>
        <div className="text-xs text-gray-600">总人数: 187人</div>
        <div className="text-xs text-gray-600">活动区域: 4个</div>
      </div>
    </div>
  );
}