
import { Guest, GuestStatus, Vendor, VendorStatus, ChecklistItem, TimelineGroup, Tab, Activity, UpcomingTask, VendorTab, VendorStat, VendorActivity, UpcomingEvent, BookingRequest, ClientConversation, PortfolioPackage, AnalyticsData } from './types';

// CUSTOMER DASHBOARD CONSTANTS
export const TABS: Tab[] = ['Overview', 'Book Vendors', 'Guest Management', 'Budget Tracker', 'Timeline', 'Checklist'];

export const GUESTS_DATA: Guest[] = [
  { id: 1, name: 'Emma Johnson', email: 'emma@email.com', status: GuestStatus.Confirmed, plusOne: true },
  { id: 2, name: 'Michael Smith', email: 'michael@email.com', status: GuestStatus.Pending, plusOne: false },
  { id: 3, name: 'Lisa Brown', email: 'lisa@email.com', status: GuestStatus.Declined, plusOne: null },
  { id: 4, name: 'David Wilson', email: 'david@email.com', status: GuestStatus.Confirmed, plusOne: false },
  { id: 5, name: 'Jessica Taylor', email: 'jessica@email.com', status: GuestStatus.Pending, plusOne: true },
  { id: 6, name: 'Chris Martinez', email: 'chris@email.com', status: GuestStatus.Confirmed, plusOne: true },
];

export const VENDORS_DATA: Vendor[] = [
  { id: 1, name: 'Royal Palace Banquets', category: 'Venue', status: VendorStatus.Confirmed, cost: 15000, budget: 18000 },
  { id: 2, name: 'Moments Photography', category: 'Photography', status: VendorStatus.Confirmed, cost: 3500, budget: 4000 },
  { id: 3, name: 'Gourmet Catering Co.', category: 'Catering', status: VendorStatus.Pending, cost: 8000, budget: 12000 },
  { id: 4, name: 'Elegant Bouquets', category: 'Florist', status: VendorStatus.Confirmed, cost: 2000, budget: 2500 },
  { id: 5, 'name': 'DJ/Music', 'category': 'Entertainment', 'status': VendorStatus.Needed, cost: 0, budget: 1500},
  { id: 6, 'name': 'Wedding Cake', 'category': 'Food', 'status': VendorStatus.Needed, cost: 0, budget: 500 },
  { id: 7, name: 'Premium Transport', category: 'Transportation', status: VendorStatus.Confirmed, cost: 1000, budget: 1000},
  { id: 8, name: 'City Hall', category: 'Marriage License', status: VendorStatus.Confirmed, cost: 100, budget: 100},
];

export const CHECKLIST_DATA: ChecklistItem[] = [
    { id: 1, category: '6 Months Before', title: 'Set wedding budget', completed: true },
    { id: 2, category: '6 Months Before', title: 'Book wedding venue', completed: true },
    { id: 3, category: '6 Months Before', title: 'Hire photographer', completed: true },
    { id: 4, category: '6 Months Before', title: 'Create guest list', completed: false },
    { id: 5, category: '4 Months Before', title: 'Book caterer', completed: true },
    { id: 6, category: '4 Months Before', title: 'Send save the dates', completed: false },
    { id: 7, category: '4 Months Before', title: 'Order wedding invitations', completed: false },
    { id: 8, category: '4 Months Before', title: 'Book florist', completed: true },
    { id: 9, 'category': '3 Months Before', 'title': 'Book DJ/Band', completed: false },
    { id: 10, category: '3 Months Before', title: 'Order wedding cake', completed: false },
    { id: 11, category: '3 Months Before', title: 'Book transportation', completed: true },
    { id: 12, category: '3 Months Before', title: 'Plan honeymoon', completed: false },
    { id: 13, category: '2 Months Before', title: 'Send wedding invitations', completed: false },
    { id: 14, category: '2 Months Before', title: 'Final dress fitting', completed: false },
    { id: 15, category: '2 Months Before', title: 'Apply for marriage license', completed: true },
    { id: 16, category: '2 Months Before', title: 'Confirm all vendors', completed: false },
];

export const TIMELINE_DATA: TimelineGroup[] = [
    { title: '6 Months Before (Completed)', status: 'Done', tasks: ['Set budget', 'book venue', 'hire photographer'] },
    { title: '4 Months Before (In Progress)', status: 'In Progress', tasks: ['Book caterer', 'send save the dates', 'order invitations'] },
    { title: '3 Months Before', status: 'Upcoming', tasks: ['Book DJ', 'order wedding cake', 'finalize guest list'] },
    { title: '2 Months Before', status: 'Upcoming', tasks: ['Send invitations', 'book transportation', 'final dress fitting'] }
];

export const RECENT_ACTIVITY_DATA: Activity[] = [
    { id: 1, icon: 'Camera', title: 'Photographer Confirmed', description: 'Moments Photography accepted your booking', type: 'success' },
    { id: 2, icon: 'Mail', title: 'Invitations Sent', description: '180 digital invitations delivered', type: 'info' },
    { id: 3, icon: 'CreditCard', title: 'Payment Due', description: 'Venue deposit due in 5 days', type: 'warning' },
];

export const UPCOMING_TASKS_DATA: UpcomingTask[] = [
    { id: 1, title: 'Book DJ/Music', priority: 'High' },
    { id: 2, title: 'Finalize Menu', priority: 'Medium' },
    { id: 3, title: 'Order Wedding Cake', priority: 'Medium' },
    { id: 4, title: 'Send Save the Dates', priority: 'Low' },
];


// VENDOR DASHBOARD CONSTANTS

export const VENDOR_TABS: VendorTab[] = ['Overview', 'Bookings', 'Clients', 'Calendar', 'Portfolio', 'Analytics'];

export const VENDOR_STATS: VendorStat[] = [
    { title: 'Total Bookings', value: '24', subValue: '+3 this week' },
    { title: 'Pending Requests', value: '3', subValue: 'Needs attention' },
    { title: 'Average Rating', value: '4.9', subValue: 'Based on 47 reviews' },
    { title: 'Revenue (YTD)', value: '$89,250', subValue: '+18% vs last year' },
];

export const VENDOR_OVERVIEW_ACTIVITY: VendorActivity[] = [
    { id: 1, type: 'booking', title: 'New Booking Confirmed', description: 'Sarah & John - June 15, 2024' },
    { id: 2, type: 'message', title: 'New Message', description: 'Emma Johnson asking about availability' },
];

export const VENDOR_UPCOMING_EVENTS: UpcomingEvent[] = [
    { id: 1, title: 'Sarah & John Wedding', date: 'June 15, 2024 • 6:00 PM', type: 'event' },
    { id: 2, title: 'Client Meeting', date: 'Tomorrow • 2:00 PM', type: 'meeting' },
];

export const VENDOR_BOOKING_REQUESTS: BookingRequest[] = [
    { id: 1, coupleName: 'Emma & Robert Johnson', date: 'August 12, 2024', guestCount: 150, budget: 18000, timestamp: '2 days ago' }
];

export const VENDOR_CONVERSATIONS: ClientConversation[] = [
    {
        id: 1, clientName: 'Sarah & John Smith', weddingDate: 'June 15, 2024',
        messages: [
            { id: 1, from: 'client', message: 'Hi! We\'re so excited about our wedding venue. Can you confirm the final headcount deadline?', timestamp: '3h ago' },
            { id: 2, from: 'vendor', message: 'Hi Sarah! The final headcount is due 2 weeks before your wedding date. So that would be June 1st.', timestamp: '2h ago' },
        ]
    }
];

export const VENDOR_PORTFOLIO: PortfolioPackage = {
    id: 1, name: 'Basic Package', price: 8000,
    features: ['6-hour venue rental', 'Basic decorations', 'Tables and chairs', 'Sound system']
};

export const VENDOR_ANALYTICS_DATA: AnalyticsData[] = [
    { month: 'Jan', revenue: 6500 }, { month: 'Feb', revenue: 9000 }, { month: 'Mar', revenue: 11200 },
    { month: 'Apr', revenue: 8800 }, { month: 'May', revenue: 14500 }, { month: 'Jun', revenue: 12450 }
];
