
import React, { useState, useMemo } from 'react';

// Customer Dashboard Imports
import { Header } from './components/Header';
import { DashboardStats } from './components/DashboardStats';
import { Navigation } from './components/Navigation';
import { Overview } from './components/Overview';
import { VendorManagement } from './components/VendorManagement';
import { GuestManagement } from './components/GuestManagement';
import { BudgetTracker } from './components/BudgetTracker';
import { Timeline } from './components/Timeline';
import { Checklist } from './components/Checklist';
import { 
  GUESTS_DATA, VENDORS_DATA, CHECKLIST_DATA, TIMELINE_DATA, TABS, RECENT_ACTIVITY_DATA, UPCOMING_TASKS_DATA,
  VENDOR_TABS, VENDOR_STATS, VENDOR_OVERVIEW_ACTIVITY, VENDOR_UPCOMING_EVENTS, VENDOR_BOOKING_REQUESTS, VENDOR_CONVERSATIONS, VENDOR_PORTFOLIO, VENDOR_ANALYTICS_DATA
} from './constants';
import { Tab, VendorStatus, Page, VendorTab } from './types';

// Icon Imports
import { 
  SparklesIcon, VenueIcon, PhotographyIcon, CateringIcon, MusicNoteIcon, CheckCircleIcon, UsersIcon,
  CalendarIcon as CalendarIconSolid, ChatBubbleLeftRightIcon, BriefcaseIcon, ChartPieIcon, ArrowTrendingUpIcon, ClockIcon, StarIcon, BanknotesIcon
} from './components/icons';

// =================================================================================================
// HELPERS & SHARED COMPONENTS
// =================================================================================================

const StatCard = ({ icon, title, value, subValue }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-100 rounded-lg">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
      {subValue && <p className="text-xs text-green-600">{subValue}</p>}
    </div>
  </div>
);


// =================================================================================================
// LANDING PAGE
// =================================================================================================
const LandingHeader = ({ onNavigate }) => (
  <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
        <SparklesIcon className="w-8 h-8 text-purple-600"/>
        <span className="text-2xl font-bold text-gray-800">DreamWedding</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#services" className="text-gray-600 hover:text-purple-600 font-medium">Services</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 font-medium">How It Works</a>
        <a href="#reviews" className="text-gray-600 hover:text-purple-600 font-medium">Reviews</a>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onNavigate('customer')} className="bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors">Get Started</button>
        <button onClick={() => onNavigate('vendor')} className="bg-white text-purple-600 border border-purple-200 font-semibold py-2 px-5 rounded-lg hover:bg-purple-50 transition-colors">Vendor Login</button>
      </div>
    </nav>
  </header>
);

const LandingPage = ({ onNavigate }) => {
  const categories = [
    { title: 'Venues', description: 'Beautiful locations for your special day', icon: <VenueIcon className="w-12 h-12 text-pink-500" />, bgColor: 'bg-pink-50' },
    { title: 'Photography', description: 'Capture every precious moment', icon: <PhotographyIcon className="w-12 h-12 text-gray-500" />, bgColor: 'bg-gray-100' },
    { title: 'Catering', description: 'Delicious food for your guests', icon: <CateringIcon className="w-12 h-12 text-green-500" />, bgColor: 'bg-green-50' },
    { title: 'Music & DJ', description: 'Perfect soundtrack for your celebration', icon: <MusicNoteIcon className="w-12 h-12 text-purple-500" />, bgColor: 'bg-purple-50' },
  ];

  const howItWorksSteps = [
    { number: '1', title: 'Browse & Compare', description: 'Explore hundreds of verified vendors with reviews, photos, and pricing' },
    { number: '2', title: 'Book & Plan', description: 'Connect with vendors, manage bookings, and track your wedding progress' },
    { number: '3', title: 'Celebrate', description: 'Enjoy your perfect wedding day with everything organized seamlessly' },
  ];

  const testimonials = [
    { name: 'Sarah & John', date: 'Married June 2024', avatar: 'SJ', avatarColor: 'bg-purple-500', review: '"DreamWedding made planning our wedding so easy! We found amazing vendors and stayed within budget."' },
    { name: 'Michael & Lisa', date: 'Married August 2024', avatar: 'ML', avatarColor: 'bg-blue-500', review: '"The vendor quality is outstanding. Our photographer and venue were absolutely perfect!"' },
    { name: 'David & Maria', date: 'Married September 2024', avatar: 'DM', avatarColor: 'bg-green-500', review: '"From guest management to budget tracking, everything was in one place. Highly recommend!"' },
  ];

  return (
    <div className="bg-white font-sans">
      <LandingHeader onNavigate={onNavigate} />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-50 to-indigo-100 py-20 sm:py-32 overflow-hidden">
            <div className="absolute top-10 -left-10 w-48 h-48 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-10 -right-10 w-48 h-48 bg-pink-200 rounded-full opacity-50 blur-xl"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 tracking-tight">Your Dream Wedding Awaits</h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">Connect with the perfect vendors and plan your magical day effortlessly</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button onClick={() => onNavigate('customer')} className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                        Start Planning ❤️
                    </button>
                    <button onClick={() => onNavigate('vendor')} className="bg-transparent text-gray-700 font-semibold py-3 px-8 rounded-full border-2 border-purple-200 hover:bg-white hover:border-purple-300 transition-colors">
                        Join as Vendor 🚀
                    </button>
                </div>
            </div>
        </section>
        
        {/* Everything You Need Section */}
        <section id="services" className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Everything You Need for Your Perfect Day</h2>
              <p className="mt-4 text-lg text-gray-600">From venues to photographers, we've got you covered</p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map(cat => (
                <div key={cat.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                  <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${cat.bgColor}`}>{cat.icon}</div>
                  <h3 className="mt-6 text-xl font-bold text-gray-800">{cat.title}</h3>
                  <p className="mt-2 text-gray-600">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 sm:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                    <p className="mt-4 text-lg text-gray-600">Simple steps to your dream wedding</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {howItWorksSteps.map(step => (
                        <div key={step.number} className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center bg-purple-600 text-white font-bold text-3xl rounded-full">
                                {step.number}
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-800">{step.title}</h3>
                            <p className="mt-2 text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Happy Couples Section */}
        <section id="reviews" className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Happy Couples</h2>
                    <p className="mt-4 text-lg text-gray-600">See what our couples are saying</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map(t => (
                        <div key={t.name} className="bg-slate-50 p-8 rounded-xl shadow-sm">
                            <div className="flex items-center text-yellow-400 space-x-1">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="mt-4 text-gray-700 italic">{t.review}</p>
                            <div className="mt-6 flex items-center">
                                <div className={`w-12 h-12 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold`}>{t.avatar}</div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-800">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Ready to Start Planning?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-purple-200">Join thousands of couples who found their perfect wedding vendors</p>
                <button onClick={() => onNavigate('customer')} className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-purple-600 bg-white hover:bg-purple-50 sm:w-auto">
                    Get Started Today
                </button>
            </div>
        </section>
      </main>
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <SparklesIcon className="w-10 h-10 text-purple-400 mx-auto" />
          <p className="mt-4 text-gray-400">DreamWedding &copy; {new Date().getFullYear()}. Your magical day starts here.</p>
        </div>
      </footer>
    </div>
  );
};


// =================================================================================================
// VENDOR DASHBOARD
// =================================================================================================

const VendorHeader = ({ onNavigate }) => (
  <header className="bg-white shadow-sm">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
          <SparklesIcon className="w-8 h-8 text-purple-600"/>
          <span className="text-2xl font-bold text-gray-800">DreamWedding</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-700">Royal Palace Banquets</p>
          </div>
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">RP</div>
          </div>
          <button onClick={() => onNavigate('landing')} className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
        </div>
      </div>
    </div>
  </header>
);

const VendorDashboardOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
            <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-3">
                {VENDOR_OVERVIEW_ACTIVITY.map(act => (
                    <div key={act.id} className={`p-4 rounded-lg flex items-center space-x-4 ${act.type === 'booking' ? 'bg-green-50' : 'bg-blue-50'}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${act.type === 'booking' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                           {act.type === 'booking' ? <CheckCircleIcon className="w-6 h-6"/> : <ChatBubbleLeftRightIcon className="w-6 h-6"/>}
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-gray-800">{act.title}</p>
                            <p className="text-xs text-gray-500">{act.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h3 className="font-semibold text-gray-800 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
                {VENDOR_UPCOMING_EVENTS.map(evt => (
                    <div key={evt.id} className="bg-white border border-gray-200 p-4 rounded-lg flex justify-between items-center">
                        <div>
                           <p className="font-semibold text-sm text-gray-800">{evt.title}</p>
                           <p className="text-xs text-gray-500">{evt.date}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${evt.type === 'event' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                            {evt.type === 'event' ? 'Confirmed' : 'Meeting'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
const VendorBookingManagement = () => (
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Management</h3>
        <div className="space-y-4">
            {VENDOR_BOOKING_REQUESTS.map(req => (
                <div key={req.id} className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold text-gray-800">{req.coupleName}</p>
                            <p className="text-sm text-gray-600">Wedding Date: {req.date} &bull; Guest Count: {req.guestCount} &bull; Budget: ${req.budget.toLocaleString()}</p>
                        </div>
                        <span className="text-sm text-orange-600 font-semibold">{req.timestamp}</span>
                    </div>
                    <div className="mt-4 flex space-x-2">
                        <button className="bg-green-500 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-green-600">Accept</button>
                        <button className="bg-red-500 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-red-600">Decline</button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-gray-300">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
const VendorClientCommunication = () => (
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Client Communication</h3>
        {VENDOR_CONVERSATIONS.map(conv => (
            <div key={conv.id} className="bg-white border border-gray-200 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{conv.clientName}</p>
                <p className="text-sm text-gray-500 mb-4">Wedding: {conv.weddingDate}</p>
                <div className="space-y-4">
                    {conv.messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.from === 'vendor' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${msg.from === 'vendor' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                <p className="text-sm">{msg.message}</p>
                                <p className={`text-xs mt-1 ${msg.from === 'vendor' ? 'text-purple-200' : 'text-gray-500'}`}>{msg.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);
const VendorCalendar = () => (
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Calendar & Availability</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">June 2024</h4>
            </div>
            <div className="grid grid-cols-7 text-center text-sm text-gray-500">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="py-2">{day}</div>)}
            </div>
             <div className="grid grid-cols-7 text-center text-sm">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className={`py-4 border-t border-gray-200 ${[14, 15, 22].includes(i) ? 'bg-purple-100 font-bold text-purple-700 rounded-lg' : ''}`}>{i+1}</div>
                ))}
            </div>
        </div>
    </div>
);
const VendorPortfolioManagement = () => (
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Portfolio Management</h3>
        <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <p className="font-semibold text-gray-700">{VENDOR_PORTFOLIO.name}</p>
            <p className="text-3xl font-bold text-gray-900 my-2">${VENDOR_PORTFOLIO.price.toLocaleString()}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
                {VENDOR_PORTFOLIO.features.map((feat, i) => <li key={i}>{feat}</li>)}
            </ul>
            <button className="mt-6 w-full bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300">Edit Package</button>
        </div>
    </div>
);
const VendorBusinessAnalytics = () => (
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Business Analytics</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Revenue Trends</h4>
            <div className="h-64 flex items-end justify-around bg-slate-50 p-4 rounded-lg">
                {VENDOR_ANALYTICS_DATA.map(d => (
                    <div key={d.month} className="text-center">
                        <div className="w-12 bg-purple-300 rounded-t-md hover:bg-purple-400 transition-colors" style={{height: `${d.revenue/100}px`}}></div>
                        <p className="text-xs mt-1 text-gray-500">{d.month}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const VendorDashboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<VendorTab>('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return <VendorDashboardOverview />;
      case 'Bookings': return <VendorBookingManagement />;
      case 'Clients': return <VendorClientCommunication />;
      case 'Calendar': return <VendorCalendar />;
      case 'Portfolio': return <VendorPortfolioManagement />;
      case 'Analytics': return <VendorBusinessAnalytics />;
      default: return <VendorDashboardOverview />;
    }
  };

  const statIcons = {
    'Total Bookings': <BriefcaseIcon className="w-6 h-6 text-blue-500"/>,
    'Pending Requests': <ClockIcon className="w-6 h-6 text-orange-500"/>,
    'Average Rating': <StarIcon className="w-6 h-6 text-yellow-500"/>,
    'Revenue (YTD)': <BanknotesIcon className="w-6 h-6 text-green-500"/>,
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      <VendorHeader onNavigate={onNavigate} />
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-white">Vendor Dashboard</h1>
              <p className="text-purple-200 mt-1">Welcome back! You have 3 new booking requests ✨</p>
            </div>
            <div className="bg-white/20 text-white p-4 rounded-lg mt-4 sm:mt-0">
              <p className="text-sm">This Month's Revenue</p>
              <p className="text-3xl font-bold">$12,450</p>
              <p className="text-xs text-green-300 font-bold">+23% from last month</p>
            </div>
          </div>
        </div>
      </div>

      <main className="p-4 sm:p-6 lg:p-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {VENDOR_STATS.map(stat => <StatCard key={stat.title} icon={statIcons[stat.title]} {...stat} />)}
        </div>
        
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <nav className="flex space-x-2" aria-label="Tabs">
            {VENDOR_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${ activeTab === tab ? 'bg-purple-600 text-white' : 'text-gray-500 hover:bg-gray-100' } px-4 py-2.5 font-medium text-sm rounded-md transition-colors duration-200`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};


// =================================================================================================
// CUSTOMER DASHBOARD
// =================================================================================================

const CustomerDashboard: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  const dashboardData = useMemo(() => {
    const totalBudget = 45000;
    const spentSoFar = VENDORS_DATA.reduce((acc, vendor) => acc + vendor.cost, 0);
    const confirmedGuests = GUESTS_DATA.filter(g => g.status === 'Confirmed').length;
    const totalGuests = 180;
    const vendorsBooked = VENDORS_DATA.filter(v => v.status !== VendorStatus.Needed).length;
    const totalVendors = VENDORS_DATA.length;
    const planningProgress = Math.round((CHECKLIST_DATA.filter(t => t.completed).length / CHECKLIST_DATA.length) * 100);

    return {
      totalBudget,
      spentSoFar,
      confirmedGuests,
      totalGuests,
      vendorsBooked,
      totalVendors,
      planningProgress,
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview activities={RECENT_ACTIVITY_DATA} tasks={UPCOMING_TASKS_DATA} />;
      case 'Book Vendors':
        return <VendorManagement vendors={VENDORS_DATA} />;
      case 'Guest Management':
        return <GuestManagement guests={GUESTS_DATA} totalInvited={dashboardData.totalGuests} />;
      case 'Budget Tracker':
        return <BudgetTracker vendors={VENDORS_DATA} totalBudget={dashboardData.totalBudget} />;
      case 'Timeline':
        return <Timeline timelineGroups={TIMELINE_DATA} />;
      case 'Checklist':
        return <Checklist initialItems={CHECKLIST_DATA} />;
      default:
        return <Overview activities={RECENT_ACTIVITY_DATA} tasks={UPCOMING_TASKS_DATA} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      <Header 
        weddingDate="June 15, 2024" 
        daysToGo={127} 
        progress={dashboardData.planningProgress} 
        onLogout={() => onNavigate('landing')}
      />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <DashboardStats 
          totalBudget={dashboardData.totalBudget}
          spentSoFar={dashboardData.spentSoFar}
          confirmedGuests={dashboardData.confirmedGuests}
          totalGuests={dashboardData.totalGuests}
          vendorsBooked={dashboardData.vendorsBooked}
          totalVendors={dashboardData.totalVendors}
        />
        <div className="mt-8">
          <Navigation tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};


// =================================================================================================
// MAIN APP ROUTER
// =================================================================================================

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('landing');

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case 'landing':
        return <LandingPage onNavigate={navigate} />;
      case 'customer':
        return <CustomerDashboard onNavigate={navigate} />;
      case 'vendor':
        return <VendorDashboard onNavigate={navigate} />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return <>{renderPage()}</>;
};

export default App;
