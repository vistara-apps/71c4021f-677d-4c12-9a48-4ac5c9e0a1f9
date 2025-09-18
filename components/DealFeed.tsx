'use client';

import { useState } from 'react';
import { Card } from './Card';
import { mockDeals, mockDealScores } from '../lib/mockData';
import { DealFlow } from '../lib/types';
import { Star, TrendingUp, Users, DollarSign, Filter } from 'lucide-react';

export function DealFeed() {
  const [selectedDeal, setSelectedDeal] = useState<DealFlow | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewing' | 'interested'>('all');

  const filteredDeals = mockDeals.filter(deal => 
    filter === 'all' || deal.status === filter
  );

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-400';
    if (score >= 8) return 'text-blue-400';
    if (score >= 7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400';
      case 'reviewing': return 'bg-yellow-500/20 text-yellow-400';
      case 'interested': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-dark-foreground">AI Deal Sourcing</h2>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-dark-text-secondary" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="bg-dark-surface text-dark-foreground border border-dark-surface rounded-md px-3 py-1 text-sm"
          >
            <option value="all">All Deals</option>
            <option value="new">New</option>
            <option value="reviewing">Reviewing</option>
            <option value="interested">Interested</option>
          </select>
        </div>
      </div>

      {/* Deal Cards */}
      <div className="grid gap-4">
        {filteredDeals.map((deal) => {
          const dealScore = mockDealScores[deal.dealFlowId];
          return (
            <Card key={deal.dealFlowId} variant="default">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-dark-foreground">
                        {deal.companyName}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deal.status)}`}>
                        {deal.status}
                      </span>
                    </div>
                    <p className="text-dark-text-secondary text-sm mb-3">
                      {deal.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-dark-text-secondary">
                      <span className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{deal.stage}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{deal.teamSize} team</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>${(deal.traction.revenue / 1000).toFixed(0)}K revenue</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className={`text-lg font-bold ${getScoreColor(deal.score)}`}>
                        {deal.score.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-xs text-dark-text-secondary">AI Score</p>
                  </div>
                </div>

                {/* Score Breakdown */}
                {dealScore && (
                  <div className="border-t border-dark-surface pt-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-dark-text-secondary">Team</p>
                        <p className="font-semibold text-dark-foreground">{dealScore.team}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-dark-text-secondary">Market</p>
                        <p className="font-semibold text-dark-foreground">{dealScore.market}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-dark-text-secondary">Traction</p>
                        <p className="font-semibold text-dark-foreground">{dealScore.traction}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4">
                  <button className="flex-1 bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                    View Details
                  </button>
                  <button className="flex-1 bg-dark-surface text-dark-foreground py-2 px-4 rounded-md text-sm font-medium hover:bg-dark-surface/80 transition-colors duration-200">
                    Save Deal
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
