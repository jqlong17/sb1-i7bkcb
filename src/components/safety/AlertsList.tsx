import React from 'react';
import { AlertTriangle, CheckCircle, Clock, MapPin } from 'lucide-react';

interface Alert {
  id: number;
  type: 'warning' | 'danger';
  message: string;
  location: string;
  time: string;
  status: 'pending' | 'processing' | 'resolved';
}

const alerts: Alert[] = [
  {
    id: 1,
    type: 'danger',
    message: '跑道拐角处检测到摔倒事件',
    location: '操场东南角',
    time: '2分钟前',
    status: 'processing',
  },
  {
    id: 2,
    type: 'warning',
    message: '篮球场人员密度过高',
    location: '篮球场',
    time: '5分钟前',
    status: 'pending',
  },
  {
    id: 3,
    type: 'warning',
    message: '器材区域存在安全隐患',
    location: '器材区',
    time: '15分钟前',
    status: 'resolved',
  },
];

const statusStyles = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  processing: 'bg-blue-50 text-blue-700 border-blue-200',
  resolved: 'bg-green-50 text-green-700 border-green-200',
};

const statusText = {
  pending: '待处理',
  processing: '处理中',
  resolved: '已解决',
};

export default function AlertsList() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">实时警报</h3>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5">
          <option>全部警报</option>
          <option>未处理</option>
          <option>已解决</option>
        </select>
      </div>

      <div className="flex-1 space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className={alert.type === 'danger' ? 'text-red-500' : 'text-amber-500'}>
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full border ${
                      statusStyles[alert.status]
                    }`}
                  >
                    {statusText[alert.status]}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {alert.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          查看更多警报 →
        </button>
      </div>
    </div>
  );
}