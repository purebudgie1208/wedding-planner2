import React from 'react';
import { SparklesIcon } from './icons';

interface HeaderProps {
  weddingDate: string;
  daysToGo: number;
  progress: number;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ weddingDate, daysToGo, progress, onLogout }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onLogout}>
            <SparklesIcon className="w-8 h-8 text-purple-600"/>
            <span className="text-2xl font-bold text-gray-800">DreamWedding</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-700">Welcome, Sarah & John!</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                SJ
              </div>
            </div>
            <button onClick={onLogout} className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Your Wedding Dashboard</h1>
                    <p className="text-purple-200 mt-1">Wedding Date: {weddingDate}. {daysToGo} days to go! 🚀</p>
                </div>
                <div className="mt-4 sm:mt-0 w-full sm:w-64">
                    <div className="flex justify-between text-white text-sm">
                        <span>Planning Progress</span>
                        <span>{progress}% Complete</span>
                    </div>
                    <div className="bg-purple-400 rounded-full h-2.5 mt-1">
                        <div className="bg-white rounded-full h-2.5" style={{width: `${progress}%`}}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};