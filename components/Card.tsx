interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const baseClasses = 'bg-dark-surface rounded-lg border border-dark-surface/50';
  const variantClasses = {
    default: '',
    elevated: 'shadow-card',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
