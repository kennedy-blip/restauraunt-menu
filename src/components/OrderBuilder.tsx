import { MenuItem } from '@/data/menuData';
import { cn } from '@/utils/cn';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface OrderBuilderProps {
  orders: OrderItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearOrder: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function OrderBuilder({ orders, onUpdateQuantity, onClearOrder, isOpen, onToggle }: OrderBuilderProps) {
  const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);
  const subtotal = orders.reduce((sum, order) => sum + order.item.price * order.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl transition-all lg:hidden",
          totalItems > 0 && "animate-bounce"
        )}
      >
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-orange-600 shadow">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Order Panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 lg:static lg:z-0 lg:translate-x-0 lg:shadow-none",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <div>
              <h2 className="text-lg font-bold">Your Order</h2>
              <p className="text-sm text-orange-100">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="rounded-lg p-2 text-white/80 hover:bg-white/20 hover:text-white lg:hidden"
          >
            ✕
          </button>
        </div>

        {/* Order Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {orders.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="mb-4 text-6xl">🍽️</span>
              <h3 className="mb-2 text-lg font-semibold text-gray-700">Your order is empty</h3>
              <p className="text-sm text-gray-500">Browse our menu and add delicious items!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.item.id}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                >
                  <img
                    src={order.item.image}
                    alt={order.item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">{order.item.name}</h4>
                    <p className="text-sm font-medium text-orange-600">
                      ${(order.item.price * order.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(order.item.id, -1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-red-100 hover:text-red-600"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-semibold">{order.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(order.item.id, 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-green-100 hover:text-green-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals */}
        {orders.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-2 text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="mb-2 w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-orange-600 hover:to-red-600 hover:shadow-xl active:scale-[0.98]">
              Place Order
            </button>
            <button
              onClick={onClearOrder}
              className="w-full rounded-xl border border-gray-300 bg-white py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
            >
              Clear Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
