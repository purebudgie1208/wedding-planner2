
import React from 'react';
import { Guest, GuestStatus } from '../types';

interface GuestManagementProps {
  guests: Guest[];
  totalInvited: number;
}

const statusClasses = {
  [GuestStatus.Confirmed]: 'bg-green-100 text-green-800',
  [GuestStatus.Pending]: 'bg-yellow-100 text-yellow-800',
  [GuestStatus.Declined]: 'bg-red-100 text-red-800',
};

const StatCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="bg-slate-50 p-4 rounded-lg text-center">
        <p className="text-3xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
    </div>
);

export const GuestManagement: React.FC<GuestManagementProps> = ({ guests, totalInvited }) => {
  const confirmedCount = guests.filter(g => g.status === GuestStatus.Confirmed).length;
  const declinedCount = guests.filter(g => g.status === GuestStatus.Declined).length;
  const pendingCount = totalInvited - confirmedCount - declinedCount;

  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Guest Management</h2>
            <div className="space-x-2">
                <button className="bg-slate-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">Import Contacts</button>
                <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">Add Guest</button>
            </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard value={totalInvited} label="Total Invited" />
            <StatCard value={confirmedCount} label="Confirmed" />
            <StatCard value={declinedCount} label="Declined" />
            <StatCard value={pendingCount} label="Pending" />
        </div>

        <div className="bg-white rounded-lg ">
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <h3 className="font-semibold">Guest List</h3>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search guests..." className="border border-gray-300 rounded-md px-3 py-1.5 text-sm w-48 focus:ring-purple-500 focus:border-purple-500" />
                    <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-purple-500 focus:border-purple-500">
                        <option>All Guests</option>
                        <option>Confirmed</option>
                        <option>Pending</option>
                        <option>Declined</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plus One</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {guests.map((guest) => (
                            <tr key={guest.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{guest.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{guest.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClasses[guest.status]}`}>
                                        {guest.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{guest.plusOne === null ? 'N/A' : guest.plusOne ? 'Yes' : 'No'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <a href="#" className="text-purple-600 hover:text-purple-900">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
             <div className="p-4 border-t border-gray-200 mt-4">
                <h3 className="font-semibold mb-2">Send Invitations</h3>
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">Send Reminders</button>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm">Send Save the Dates</button>
                    <button className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm">Export Guest List</button>
                </div>
            </div>
        </div>
    </div>
  );
};
