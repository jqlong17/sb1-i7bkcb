import React from 'react';
import { AlertTriangle, CheckCircle, Clock, MapPin, Shield, Users } from 'lucide-react';
import SafetyMap from './SafetyMap';
import AlertsList from './AlertsList';
import SafetyStats from './SafetyStats';

export default function SafetyMonitoring() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">安全监控</h1>
        <p className="text-sm text-gray-500 mt-1">实时监控校园安全状况</p>
      </div>

      <SafetyStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">校园安全地图</h3>
            <div className="flex gap-2">
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
                <option>全部区域</option>
                <option>操场</option>
                <option>教学楼</option>
                <option>食堂</option>
              </select>
            </div>
          </div>
          <SafetyMap />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <AlertsList />
        </div>
      </div>
    </main>
  );
}