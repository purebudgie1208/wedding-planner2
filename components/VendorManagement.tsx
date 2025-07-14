
import React from 'react';
import { Vendor, VendorStatus } from '../types';
import { VenueIcon, PhotographyIcon, CateringIcon, MusicNoteIcon, CakeIcon } from './icons';

interface VendorManagementProps {
  vendors: Vendor[];
}

const categoryIcons: { [key: string]: React.ReactNode } = {
    'Venue': <VenueIcon className="h-6 w-6 text-pink-600" />,
    'Photography': <PhotographyIcon className="h-6 w-6 text-indigo-600" />,
    'Catering': <CateringIcon className="h-6 w-6 text-yellow-600" />,
    'Entertainment': <MusicNoteIcon className="h-8 w-8 text-red-500" />,
    'Food': <CakeIcon className="h-8 w-8 text-pink-500" />,
};

const VendorCard: React.FC<{vendor: Vendor}> = ({ vendor }) => {
    const statusClasses = {
        [VendorStatus.Confirmed]: 'border-green-300 bg-green-50 text-green-700',
        [VendorStatus.Pending]: 'border-yellow-300 bg-yellow-50 text-yellow-700',
    }
    const isPending = vendor.status === VendorStatus.Pending;
    return (
        <div className={`p-4 rounded-lg border ${isPending ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-200'}`}>
            <div className="flex justify-between items-start">
                {categoryIcons[vendor.category]}
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${statusClasses[vendor.status]}`}>
                    {vendor.status.toUpperCase()}
                </span>
            </div>
            <div className="mt-3">
                <p className="font-bold text-gray-800">{vendor.name}</p>
                <p className="text-sm text-gray-500">{vendor.category}</p>
                <p className="text-lg font-bold text-gray-900 mt-2">${vendor.cost.toLocaleString()}</p>
            </div>
            <button className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold text-sm transition-colors ${isPending ? 'bg-yellow-400 hover:bg-yellow-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-gray-700'}`}>
                {isPending ? 'Follow Up' : 'Contact Vendor'}
            </button>
        </div>
    );
}

const NeededVendorCard: React.FC<{vendor: Vendor}> = ({ vendor }) => (
    <div className="bg-pink-50 text-center p-6 rounded-lg border-2 border-dashed border-pink-200">
        <div className="flex justify-center mb-3">
            {categoryIcons[vendor.category]}
        </div>
        <p className="font-semibold text-gray-700">{vendor.category}</p>
        <button className="mt-4 bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors">
            Find {vendor.category === 'Food' ? 'Baker' : 'DJ'}
        </button>
    </div>
);

export const VendorManagement: React.FC<VendorManagementProps> = ({ vendors }) => {
  const bookedVendors = vendors.filter(v => v.status !== VendorStatus.Needed);
  const neededVendors = vendors.filter(v => v.status === VendorStatus.Needed);

  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Vendor Management</h2>
            <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">Browse New Vendors</button>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Booked Vendors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {bookedVendors.map(vendor => <VendorCard key={vendor.id} vendor={vendor} />)}
            </div>
        </div>

        {neededVendors.length > 0 && (
             <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Services Still Needed</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {neededVendors.map(vendor => <NeededVendorCard key={vendor.id} vendor={vendor} />)}
                </div>
            </div>
        )}
    </div>
  );
};
