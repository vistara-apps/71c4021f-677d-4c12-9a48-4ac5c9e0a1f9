import { LucideIcon } from 'lucide-react';

interface StatDisplayProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  variant?: 'compact' | 'default';
}

export function StatDisplay({ 
  label, 
  value, 
  change, 
  icon: Icon, 
  variant = 'default' 
}: StatDisplayProps) {
  const isPositive = change.startsWith('+');
  const isNeutral = change === '0';
  
  const changeColor = isNeutral 
    ? 'text-dark-text-secondary' 
    : isPositive 
      ? 'text-green-400' 
      : 'text-red-400';

  if (variant === 'compact') {
    return (
      <div className="bg-dark-surface rounded-lg p-4 border border-dark-surface/50">
        <div className="flex items-center justify-between mb-2">
          <Icon className="w-5 h-5 text-primary" />
          {!isNeutral && (
            <span className={`text-xs font-medium ${changeColor}`}>
              {change}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-dark-foreground">{value}</p>
          <p className="text-sm text-dark-text-secondary">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-surface rounded-lg p-6 border border-dark-surface/50">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-6 h-6 text-primary" />
        {!isNeutral && (
          <span className={`text-sm font-medium ${changeColor}`}>
            {change}
          </span>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-3xl font-bold text-dark-foreground">{value}</p>
        <p className="text-dark-text-secondary">{label}</p>
      </div>
    </div>
  );
}
