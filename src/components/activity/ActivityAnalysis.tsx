import React from 'react';
import ActivityStats from './ActivityStats';
import ActivityTypeChart from './ActivityTypeChart';
import LocationAnalysis from './LocationAnalysis';

export default function ActivityAnalysis() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">活动分析</h1>
        <p className="text-sm text-gray-500 mt-1">分析学生课间活动情况</p>
      </div>

      <ActivityStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">活动类型分布</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>本周</option>
              <option>本月</option>
              <option>本学期</option>
            </select>
          </div>
          <ActivityTypeChart />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">场地使用分析</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>全部区域</option>
              <option>操场</option>
              <option>篮球场</option>
            </select>
          </div>
          <LocationAnalysis />
        </div>
      </div>
    </main>
  );
}