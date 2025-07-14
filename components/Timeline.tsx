
import React from 'react';
import { TimelineGroup } from '../types';
import { CheckCircleIcon, ClockIcon, CalendarIcon } from './icons';

interface TimelineProps {
  timelineGroups: TimelineGroup[];
}

const statusStyles = {
    'Done': {
        icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-green-500',
        textColor: 'text-green-600',
        text: '✔ Done'
    },
    'In Progress': {
        icon: <ClockIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-yellow-500',
        textColor: 'text-yellow-600',
        text: 'In Progress'
    },
    'Upcoming': {
        icon: <CalendarIcon className="h-6 w-6 text-white" />,
        bgColor: 'bg-gray-400',
        textColor: 'text-gray-500',
        text: 'Upcoming'
    }
};

export const Timeline: React.FC<TimelineProps> = ({ timelineGroups }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Wedding Timeline</h2>
      <div className="flow-root">
        <ul className="-mb-8">
          {timelineGroups.map((group, groupIdx) => (
            <li key={group.title}>
              <div className="relative pb-8">
                {groupIdx !== timelineGroups.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ${statusStyles[group.status].bgColor}`}>
                       {statusStyles[group.status].icon}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {group.title}
                      </p>
                      <div className="mt-2 text-sm text-gray-700">
                          {group.tasks.join(', ')}
                      </div>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap">
                        <p className={statusStyles[group.status].textColor}>{statusStyles[group.status].text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
