import React from 'react';

/**
 * Reusable SectionHeading component with editorial typography and gold accent line.
 */
export const SectionHeading = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignment[align] || alignment.center} ${className}`}>
      {subtitle && (
        <span className="text-gold-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-sans mb-2">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-text-primary mb-4 leading-tight">
          {title}
        </h2>
      )}
      <div className="w-12 h-[1px] bg-gold-champagne/40 mb-4" />
      {description && (
        <p className="text-text-muted text-sm md:text-base max-w-2xl font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
