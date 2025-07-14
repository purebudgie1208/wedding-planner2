
import React from 'react';
import { Vendor, VendorStatus } from '../types';
import { VenueIcon, CateringIcon, PhotographyIcon } from './icons';

interface BudgetTrackerProps {
  vendors: Vendor[];
  totalBudget: number;
}

const categoryIcons: { [key: string]: React.ReactNode } = {
    'Venue': <VenueIcon className="h-6 w-6 text-purple-600" />,
    'Catering': <CateringIcon className="h-6 w-6 text-blue-600" />,
    'Photography': <PhotographyIcon className="h-6 w-6 text-pink-600" />,
}

const BudgetCard: React.FC<{title: string, amount: number, subtitle?: string, colorClass?: string}> = ({title, amount, subtitle, colorClass = "text-gray-900"}) => (
    <div className="bg-slate-50 p-6 rounded-lg">
        <p className="text-sm text-gray-500">{title}</p>
        <p className={`text-3xl font-bold mt-1 ${colorClass}`}>${amount.toLocaleString()}</p>
        {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
    </div>
);

export const BudgetTracker: React.FC<BudgetTrackerProps> = ({ vendors, totalBudget }) => {
  const amountSpent = vendors.reduce((acc, v) => acc + v.cost, 0);
  const remaining = totalBudget - amountSpent;
  const spentPercentage = Math.round((amountSpent / totalBudget) * 100);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Budget Tracker</h2>
        <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
            Add Expense
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <BudgetCard title="Total Budget" amount={totalBudget} />
        <BudgetCard title="Amount Spent" amount={amountSpent} subtitle={`${spentPercentage}% of budget`} colorClass="text-pink-600"/>
        <BudgetCard title="Remaining" amount={remaining} subtitle={`${100 - spentPercentage}% remaining`} colorClass="text-green-600"/>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Breakdown by Category</h3>
        <div className="space-y-4">
            {vendors.filter(v => v.status !== VendorStatus.Needed).map(vendor => {
                const budget = vendor.budget || vendor.cost;
                const percentage = budget > 0 ? Math.round((vendor.cost / budget) * 100) : 0;
                return (
                    <div key={vendor.id} className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="p-2 bg-slate-100 rounded-md">
                                    {categoryIcons[vendor.category] || <VenueIcon className="h-6 w-6 text-gray-500"/>}
                                </div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-800">{vendor.category}</p>
                                    <p className="text-sm text-gray-500">{vendor.name}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-800">${vendor.cost.toLocaleString()}</p>
                                <p className="text-sm text-gray-500">Budget: ${budget.toLocaleString()}</p>
                            </div>
                        </div>
                        {budget > 0 && (
                            <div className="mt-3">
                                <div className="bg-gray-200 rounded-full h-1.5">
                                    <div 
                                        className="bg-purple-500 h-1.5 rounded-full"
                                        style={{width: `${percentage > 100 ? 100 : percentage}%`}}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};
