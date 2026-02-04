import { DietaryTag } from '@/data/menuData';
import { cn } from '@/utils/cn';

interface DietaryIconProps {
  tag: DietaryTag;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

const dietaryConfig: Record<DietaryTag, { icon: string; label: string; color: string; bg: string }> = {
  'vegetarian': {
    icon: '🥬',
    label: 'Vegetarian',
    color: 'text-green-700',
    bg: 'bg-green-100'
  },
  'vegan': {
    icon: '🌱',
    label: 'Vegan',
    color: 'text-emerald-700',
    bg: 'bg-emerald-100'
  },
  'gluten-free': {
    icon: '🌾',
    label: 'Gluten-Free',
    color: 'text-amber-700',
    bg: 'bg-amber-100'
  },
  'spicy': {
    icon: '🌶️',
    label: 'Spicy',
    color: 'text-red-700',
    bg: 'bg-red-100'
  },
  'dairy-free': {
    icon: '🥛',
    label: 'Dairy-Free',
    color: 'text-blue-700',
    bg: 'bg-blue-100'
  },
  'nut-free': {
    icon: '🥜',
    label: 'Nut-Free',
    color: 'text-orange-700',
    bg: 'bg-orange-100'
  }
};

export function DietaryIcon({ tag, showLabel = false, size = 'sm' }: DietaryIconProps) {
  const config = dietaryConfig[tag];
  
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium',
        config.bg,
        config.color,
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
      title={config.label}
    >
      <span>{config.icon}</span>
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}

export function DietaryLegend() {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(dietaryConfig).map(([key, config]) => (
        <span
          key={key}
          className={cn(
            'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium',
            config.bg,
            config.color
          )}
        >
          <span>{config.icon}</span>
          <span>{config.label}</span>
        </span>
      ))}
    </div>
  );
}
