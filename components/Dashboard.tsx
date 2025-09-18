'use client';

import { useState } from 'react';
import { PortfolioOverview } from './PortfolioOverview';
import { DealFeed } from './DealFeed';
import { RiskAnalysis } from './RiskAnalysis';
import { BarChart3, Target, TrendingUp, Search } from 'lucide-react';

type TabType = 'portfolio' | 'deals' | 'risk' | 'analytics';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('portfolio');

  const tabs = [
    { id: 'portfolio' as TabType, label: 'Portfolio', icon: BarChart3 },
    { id: 'deals' as TabType, label: 'Deal Flow', icon: Search },
    { id: 'risk' as TabType, label: 'Risk Analysis', icon: Target },
    { id: 'analytics' as TabType, label: 'Analytics', icon: TrendingUp },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return <PortfolioOverview />;
      case 'deals':
        return <DealFeed />;
      case 'risk':
        return <RiskAnalysis />;
      case 'analytics':
        return <PortfolioOverview />;
      default:
        return <PortfolioOverview />;
    }
  };

  return (
    <div className="py-6 space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-surface rounded-lg p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {renderContent()}
      </div>
    </div>
  );
}
