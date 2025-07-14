
import React from 'react';
import { WalletIcon, PiggyBankIcon, ChartBarIcon, UsersIcon, CheckCircleIconSimple } from './icons';

interface DashboardStatsProps {
  totalBudget: number;
  spentSoFar: number;
  confirmedGuests: number;
  totalGuests: number;
  vendorsBooked: number;
  totalVendors: number;
}

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | React.ReactNode;
    valueColor?: string;
    check?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, valueColor = 'text-gray-800', check = false }) => (
    <div className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center">
            <div className="p-3 rounded-lg bg-slate-100">
              {icon}
            </div>
            <div className="ml-4">
                <p className="text-sm text-gray-500">{title}</p>
                <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
            </div>
        </div>
        {check && (
             <div className="bg-green-100 p-2 rounded-full">
                <CheckCircleIconSimple className="w-6 h-6 text-green-600" />
            </div>
        )}
    </div>
);


export const DashboardStats: React.FC<DashboardStatsProps> = ({ totalBudget, spentSoFar, confirmedGuests, totalGuests, vendorsBooked, totalVendors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard 
            icon={<WalletIcon className="w-7 h-7 text-yellow-500" />}
            title="Total Budget"
            value={`$${totalBudget.toLocaleString()}`}
        />
        <StatCard 
            icon={<PiggyBankIcon className="w-7 h-7 text-pink-500" />}
            title="Spent So Far"
            value={`$${spentSoFar.toLocaleString()}`}
            valueColor="text-pink-600"
        />
        <StatCard 
            icon={<UsersIcon className="w-7 h-7 text-blue-500" />}
            title="Confirmed Guests"
            value={<>{confirmedGuests}<span className="text-base text-gray-500 font-medium">/{totalGuests}</span></>}
        />
        <StatCard 
            icon={<ChartBarIcon className="w-7 h-7 text-green-500" />}
            title="Vendors Booked"
            value={<>{vendorsBooked}<span className="text-base text-gray-500 font-medium">/{totalVendors}</span></>}
            check
        />
    </div>
  );
};
