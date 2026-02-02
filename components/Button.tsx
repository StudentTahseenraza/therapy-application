import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  withArrow?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  withArrow = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 font-medium rounded-full transition-all duration-300 group';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-accent text-white hover:bg-opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const buttonContent = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default Button;