export interface User {
  userId: string;
  walletAddress: string;
  email?: string;
  preferences: UserPreferences;
  subscriptionTier: 'free' | 'pro' | 'premium';
}

export interface UserPreferences {
  riskTolerance: 'low' | 'medium' | 'high';
  preferredIndustries: string[];
  investmentStage: string[];
  minInvestmentAmount: number;
  maxInvestmentAmount: number;
}

export interface Investment {
  investmentId: string;
  userId: string;
  companyName: string;
  dealSource: string;
  investmentAmount: number;
  valuation: number;
  dateInvested: string;
  currentValue: number;
  performanceMetrics: PerformanceMetrics;
  status: 'active' | 'exited' | 'written-off';
}

export interface PerformanceMetrics {
  roi: number;
  irr: number;
  multiple: number;
  unrealizedGain: number;
  realizedGain: number;
}

export interface DealFlow {
  dealFlowId: string;
  sourcedBy: 'ai' | 'manual' | 'network';
  companyName: string;
  description: string;
  sourceInfo: string;
  score: number;
  status: 'new' | 'reviewing' | 'interested' | 'passed' | 'invested';
  dateSourced: string;
  industry: string;
  stage: string;
  fundingRound: string;
  teamSize: number;
  traction: TractionMetrics;
}

export interface TractionMetrics {
  revenue: number;
  growth: number;
  customers: number;
  marketSize: number;
}

export interface PortfolioSummary {
  totalInvested: number;
  currentValue: number;
  totalROI: number;
  averageIRR: number;
  activeInvestments: number;
  exitedInvestments: number;
  topPerformer: Investment;
  riskScore: number;
}

export interface DealScore {
  overall: number;
  team: number;
  market: number;
  product: number;
  traction: number;
  financials: number;
}
