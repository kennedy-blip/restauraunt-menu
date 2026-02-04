import { MenuItem } from '@/data/menuData';
import { DietaryIcon } from './DietaryIcon';
import { cn } from '@/utils/cn';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToOrder: (item: MenuItem) => void;
  quantity?: number;
}

export function MenuItemCard({ item, onAddToOrder, quantity = 0 }: MenuItemCardProps) {
  return (
    <div className={cn(
      "group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl",
      quantity > 0 && "ring-2 ring-orange-500"
    )}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.popular && (
          <div className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
            ⭐ Popular
          </div>
        )}
        {quantity > 0 && (
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-lg">
            {quantity}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Dietary Tags */}
        {item.dietary.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {item.dietary.map((tag) => (
              <DietaryIcon key={tag} tag={tag} size="sm" />
            ))}
          </div>
        )}

        {/* Title and Price */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
          <span className="shrink-0 text-lg font-bold text-orange-600">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-2">
          {item.description}
        </p>

        {/* Add Button */}
        <button
          onClick={() => onAddToOrder(item)}
          className="mt-auto w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-orange-600 hover:to-red-600 hover:shadow-lg active:scale-[0.98]"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}
