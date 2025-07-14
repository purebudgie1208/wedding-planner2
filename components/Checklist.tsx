
import React, { useState, useMemo } from 'react';
import { ChecklistItem } from '../types';

interface ChecklistProps {
  initialItems: ChecklistItem[];
}

const ChecklistItemComponent: React.FC<{ item: ChecklistItem; isChecked: boolean; onToggle: () => void; }> = ({ item, isChecked, onToggle }) => (
    <div className="flex items-center">
        <input
            id={`checklist-${item.id}`}
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
            checked={isChecked}
            onChange={onToggle}
        />
        <label htmlFor={`checklist-${item.id}`} className={`ml-3 text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-gray-700'} cursor-pointer`}>
            {item.title}
        </label>
    </div>
);


export const Checklist: React.FC<ChecklistProps> = ({ initialItems }) => {
  const [items, setItems] = useState<ChecklistItem[]>(initialItems);

  const handleToggle = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  
  const groupedItems = useMemo(() => {
    return items.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {} as Record<string, ChecklistItem[]>);
  }, [items]);

  const categories = ['6 Months Before', '4 Months Before', '3 Months Before', '2 Months Before'];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Wedding Checklist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {categories.map(category => (
            <div key={category}>
                <h3 className="text-base font-semibold text-gray-600 mb-4">{category}</h3>
                <div className="space-y-4">
                    {(groupedItems[category] || []).map(item => (
                       <ChecklistItemComponent 
                            key={item.id}
                            item={item}
                            isChecked={item.completed}
                            onToggle={() => handleToggle(item.id)}
                       />
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
