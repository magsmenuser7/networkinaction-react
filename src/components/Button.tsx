import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'filled' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  to,
  href,
  variant = 'filled',
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'h-[52px] px-8 font-semibold text-sm tracking-wide transition-all duration-200 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    filled:
      'bg-nia-orange text-nia-white hover:shadow-[3px_3px_0_0_#E87722] border-2 border-nia-orange',
    ghost:
      'bg-transparent text-nia-black border-2 border-nia-black hover:border-nia-orange hover:text-nia-orange hover:shadow-[3px_3px_0_0_#E87722]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        <motion.span whileHover={{ scale: disabled ? 1 : 1.02 }}>
          {children}
        </motion.span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <motion.span whileHover={{ scale: disabled ? 1 : 1.02 }}>
          {children}
        </motion.span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      <motion.span whileHover={{ scale: disabled ? 1 : 1.02 }}>
        {children}
      </motion.span>
    </button>
  );
}
