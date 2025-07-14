
import React from 'react';
import { Activity, UpcomingTask } from '../types';
import { CheckCircleIcon, CreditCardIcon, MailIcon, CameraIcon } from './icons';

interface OverviewProps {
    activities: Activity[];
    tasks: UpcomingTask[];
}

const activityStyles = {
    success: { bg: 'bg-green-50', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
    warning: { bg: 'bg-yellow-50', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
    info: { bg: 'bg-blue-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
};

const priorityStyles = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Low: 'bg-blue-100 text-blue-700',
};

const iconMap: { [key: string]: React.ReactNode } = {
    Camera: <CameraIcon className="h-5 w-5" />,
    Mail: <MailIcon className="h-5 w-5" />,
    CreditCard: <CreditCardIcon className="h-5 w-5" />,
};

export const Overview: React.FC<OverviewProps> = ({ activities, tasks }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {activities.map(activity => {
                        const styles = activityStyles[activity.type];
                        return (
                            <div key={activity.id} className={`p-4 rounded-lg flex items-start space-x-4 ${styles.bg}`}>
                                <div className={`p-2 rounded-full ${styles.iconBg} ${styles.iconColor}`}>
                                    {iconMap[activity.icon]}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">{activity.title}</p>
                                    <p className="text-sm text-gray-600">{activity.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Upcoming Tasks */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
                <div className="space-y-3">
                    {tasks.map(task => (
                        <div key={task.id} className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-center">
                            <p className="font-medium text-gray-700">{task.title}</p>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${priorityStyles[task.priority]}`}>
                                {task.priority} Priority
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
