'use client';

import { Card } from './Card';
import { StatDisplay } from './StatDisplay';
import { RiskChart } from './RiskChart';
import { mockPortfolioSummary, mockInvestments } from '../lib/mockData';
import { Shield, AlertTriangle, TrendingDown, PieChart } from 'lucide-react';

export function RiskAnalysis() {
  const summary = mockPortfolioSummary;
  
  // Calculate risk metrics
  const industryDiversification = {
    'AI/Tech': 40,
    'CleanTech': 30,
    'HealthTech': 30,
  };

  const stageDiversification = {
    'Seed': 33,
    'Series A': 33,
    'Pre-Seed': 34,
  };

  const riskRecommendations = [
    {
      type: 'warning',
      title: 'High Concentration Risk',
      description: 'Consider diversifying across more industries',
      action: 'Add 2-3 investments in different sectors',
    },
    {
      type: 'info',
      title: 'Stage Balance Good',
      description: 'Well balanced across investment stages',
      action: 'Maintain current allocation strategy',
    },
    {
      type: 'success',
      title: 'Strong Performance',
      description: 'Portfolio outperforming market benchmarks',
      action: 'Continue current investment thesis',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Risk Score Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatDisplay
          label="Risk Score"
          value={`${summary.riskScore.toFixed(1)}/10`}
          change="-0.3"
          icon={Shield}
          variant="compact"
        />
        <StatDisplay
          label="Volatility"
          value="24.5%"
          change="+2.1%"
          icon={TrendingDown}
          variant="compact"
        />
        <StatDisplay
          label="Concentration"
          value="High"
          change="0"
          icon={AlertTriangle}
          variant="compact"
        />
        <StatDisplay
          label="Diversification"
          value="6.2/10"
          change="+0.5"
          icon={PieChart}
          variant="compact"
        />
      </div>

      {/* Risk Distribution Chart */}
      <Card variant="default">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-dark-foreground mb-4">
            Risk Distribution
          </h3>
          <RiskChart />
        </div>
      </Card>

      {/* Industry & Stage Allocation */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card variant="default">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-dark-foreground mb-4">
              Industry Allocation
            </h3>
            <div className="space-y-3">
              {Object.entries(industryDiversification).map(([industry, percentage]) => (
                <div key={industry} className="flex items-center justify-between">
                  <span className="text-dark-foreground">{industry}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-dark-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-dark-text-secondary w-8">
                      {percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card variant="default">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-dark-foreground mb-4">
              Stage Allocation
            </h3>
            <div className="space-y-3">
              {Object.entries(stageDiversification).map(([stage, percentage]) => (
                <div key={stage} className="flex items-center justify-between">
                  <span className="text-dark-foreground">{stage}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-dark-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-dark-text-secondary w-8">
                      {percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Risk Recommendations */}
      <Card variant="default">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-dark-foreground mb-4">
            Risk Recommendations
          </h3>
          <div className="space-y-4">
            {riskRecommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-dark-surface rounded-lg"
              >
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  rec.type === 'warning' ? 'bg-yellow-400' :
                  rec.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <div className="flex-1">
                  <h4 className="font-medium text-dark-foreground mb-1">
                    {rec.title}
                  </h4>
                  <p className="text-sm text-dark-text-secondary mb-2">
                    {rec.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {rec.action}
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
