'use client';

import { Card } from './Card';
import { StatDisplay } from './StatDisplay';
import { PortfolioChart } from './PortfolioChart';
import { mockPortfolioSummary, mockInvestments } from '../lib/mockData';
import { TrendingUp, DollarSign, Target, Award } from 'lucide-react';

export function PortfolioOverview() {
  const summary = mockPortfolioSummary;

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatDisplay
          label="Total Invested"
          value={`$${(summary.totalInvested / 1000).toFixed(0)}K`}
          change="+12.5%"
          icon={DollarSign}
          variant="compact"
        />
        <StatDisplay
          label="Current Value"
          value={`$${(summary.currentValue / 1000).toFixed(0)}K`}
          change="+95.2%"
          icon={TrendingUp}
          variant="compact"
        />
        <StatDisplay
          label="Average IRR"
          value={`${summary.averageIRR.toFixed(1)}%`}
          change="+8.3%"
          icon={Target}
          variant="compact"
        />
        <StatDisplay
          label="Active Deals"
          value={summary.activeInvestments.toString()}
          change="0"
          icon={Award}
          variant="compact"
        />
      </div>

      {/* Portfolio Performance Chart */}
      <Card variant="default">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-dark-foreground mb-4">
            Portfolio Performance
          </h3>
          <PortfolioChart />
        </div>
      </Card>

      {/* Top Investments */}
      <Card variant="default">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-dark-foreground mb-4">
            Top Investments
          </h3>
          <div className="space-y-4">
            {mockInvestments
              .sort((a, b) => b.performanceMetrics.roi - a.performanceMetrics.roi)
              .slice(0, 3)
              .map((investment) => (
                <div
                  key={investment.investmentId}
                  className="flex items-center justify-between p-4 bg-dark-surface rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-dark-foreground">
                      {investment.companyName}
                    </h4>
                    <p className="text-sm text-dark-text-secondary">
                      Invested: ${(investment.investmentAmount / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-dark-foreground">
                      ${(investment.currentValue / 1000).toFixed(0)}K
                    </p>
                    <p className="text-sm text-green-400">
                      +{investment.performanceMetrics.roi.toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
