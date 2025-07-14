
export enum GuestStatus {
  Confirmed = 'Confirmed',
  Pending = 'Pending',
  Declined = 'Declined',
}

export interface Guest {
  id: number;
  name: string;
  email: string;
  status: GuestStatus;
  plusOne: boolean | null;
}

export enum VendorStatus {
  Confirmed = 'Confirmed',
  Pending = 'Pending',
  Needed = 'Needed',
}

export interface Vendor {
  id: number;
  name: string;
  category: string;
  status: VendorStatus;
  cost: number;
  budget?: number;
  contactPerson?: string;
}

export interface ChecklistItem {
  id: number;
  title: string;
  category: string;
  completed: boolean;
}

export interface TimelineGroup {
  title: string;
  status: 'Done' | 'In Progress' | 'Upcoming';
  tasks: string[];
}

export type Tab = 'Overview' | 'Book Vendors' | 'Guest Management' | 'Budget Tracker' | 'Timeline' | 'Checklist';

export interface Activity {
    id: number;
    icon: string;
    title: string;
    description: string;
    type: 'success' | 'warning' | 'info';
}

export interface UpcomingTask {
    id: number;
    title: string;
    priority: 'High' | 'Medium' | 'Low';
}

// App-wide types
export type Page = 'landing' | 'customer' | 'vendor';

// Vendor Dashboard Types
export type VendorTab = 'Overview' | 'Bookings' | 'Clients' | 'Calendar' | 'Portfolio' | 'Analytics';

export interface VendorStat {
    title: string;
    value: string;
    subValue: string;
}

export interface VendorActivity {
    id: number;
    type: 'booking' | 'message';
    title: string;
    description: string;
}

export interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    type: 'meeting' | 'event';
}

export interface BookingRequest {
    id: number;
    coupleName: string;
    date: string;
    guestCount: number;
    budget: number;
    timestamp: string;
}

export interface ClientMessage {
    id: number;
    from: 'client' | 'vendor';
    message: string;
    timestamp: string;
}

export interface ClientConversation {
    id: number;
    clientName: string;
    weddingDate: string;
    messages: ClientMessage[];
}

export interface PortfolioPackage {
    id: number;
    name: string;
    price: number;
    features: string[];
}

export interface AnalyticsData {
    month: string;
    revenue: number;
}
