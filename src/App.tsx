import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserMonitoring from './components/users/UserMonitoring';
import ActivityAnalysis from './components/activity/ActivityAnalysis';
import SafetyMonitoring from './components/safety/SafetyMonitoring';
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'users' && <UserMonitoring />}
        {currentPage === 'activity' && <ActivityAnalysis />}
        {currentPage === 'safety' && <SafetyMonitoring />}
      </div>
    </div>
  );
}

export default App;