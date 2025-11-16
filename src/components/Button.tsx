import React from 'react';

interface ButtonProps {
    text: string;
    textColor?: string;
    variant?: 'blue' | 'pink' | 'yellow' | 'green' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'responsive';
    onClick?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    backgroundColor?: string;
    rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    text,
    textColor,
    variant = 'blue',
    size = 'md',
    onClick,
    disabled = false,
    fullWidth = false,
    backgroundColor,
    rounded = 'md',
    type = 'button'
}) => {
    const roundedClasses = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
    };

    const baseClasses = `
        relative 
        group
        font-semibold 
        ${roundedClasses[rounded]} 
        transition-all 
        duration-200 
        ease-in-out
        transform
        hover:-translate-y-0.5
        hover:shadow-lg
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        disabled:opacity-60 
        disabled:cursor-not-allowed
        disabled:hover:translate-y-0
        disabled:hover:shadow-sm
        cursor-pointer
        active:translate-y-0
        active:scale-[0.98]
    `;

    const sizeClasses = {
        sm: "px-5 py-2.5 text-sm min-h-[44px]",
        md: "px-7 py-3 text-base min-h-[44px]",
        lg: "px-9 py-3.5 text-lg min-h-[48px]",
        responsive: "px-5 py-2.5 text-sm md:px-7 md:py-3 md:text-base lg:px-9 lg:py-3.5 lg:text-lg min-h-[44px] md:min-h-[48px]"
    };

    const variantClasses = {
        blue: `
            bg-[var(--color-logo-blue)]
            hover:bg-[#2e7ba0]
            text-white 
            shadow-sm
            hover:shadow-md
            focus:ring-[#3a8db5]/50
        `,
        pink: `
            bg-[var(--color-logo-pink)]
            hover:bg-[#c85a7f]
            text-white 
            shadow-sm
            hover:shadow-md
            focus:ring-[#d66e92]/50
        `,
        yellow: `
            bg-[var(--color-logo-yellow)]
            hover:bg-[#d6991f]
            text-white
            shadow-sm
            hover:shadow-md
            focus:ring-[#e8a82f]/50
        `,
        green: `
            bg-[var(--color-logo-green)]
            hover:bg-[#8fa03f]
            text-white 
            shadow-sm
            hover:shadow-md
            focus:ring-[#9fb04f]/50
        `,
        outline: `
            bg-transparent
            border-2 
            border-[#46a0c8] 
            !text-[#46a0c8]
            !hover:bg-transparent
            hover:text-white
            shadow-sm
            focus:ring-[#46a0c8]/50
        `
    };

    const defaultTextColor = 'text-white';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${backgroundColor ? '' : variantClasses[variant]}
                ${textColor || defaultTextColor}
                ${fullWidth ? 'w-full' : ''}
            `}
            {...(backgroundColor && { style: { backgroundColor } })}
        >
            {/* Subtle shine effect on hover */}
            <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%]" />
            </span>

            <span className="relative flex items-center justify-center gap-2 transition-transform duration-200 group-hover:scale-[1.02]">
                {text}
            </span>
        </button>
    );
};

export default Button;
