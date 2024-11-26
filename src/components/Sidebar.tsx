import React from 'react';
import { Activity, BarChart3, Calendar, Clock, Layout, Settings, Shield, Users } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', icon: Layout, label: '总览' },
  { id: 'users', icon: Users, label: '人数监控' },
  { id: 'activity', icon: Activity, label: '活动分析' },
  { id: 'safety', icon: Shield, label: '安全监控' },
  { id: 'time', icon: Calendar, label: '时间管理' },
  { id: 'reports', icon: BarChart3, label: '数据报告' },
  { id: 'settings', icon: Settings, label: '系统设置' },
];

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Clock className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">AI监控系统</span>
        </div>
      </div>
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg text-left ${
              currentPage === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900">需要帮助？</h3>
          <p className="text-xs text-blue-700 mt-1">查看使用指南或联系技术支持</p>
        </div>
      </div>
    </div>
  );
}