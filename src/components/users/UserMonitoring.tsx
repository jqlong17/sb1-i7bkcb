import React from 'react';
import RealTimeCount from './RealTimeCount';
import ClassDistribution from './ClassDistribution';
import TimelineChart from './TimelineChart';

export default function UserMonitoring() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">人数监控</h1>
        <p className="text-sm text-gray-500 mt-1">实时监控课间活动人数变化</p>
      </div>

      <RealTimeCount />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">班级分布</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>全部年级</option>
              <option>初一</option>
              <option>初二</option>
              <option>初三</option>
            </select>
          </div>
          <ClassDistribution />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">时间趋势</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
              <option>今日</option>
              <option>本周</option>
              <option>本月</option>
            </select>
          </div>
          <TimelineChart />
        </div>
      </div>
    </main>
  );
}