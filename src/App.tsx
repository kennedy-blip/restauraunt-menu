import { useState, useCallback } from 'react';
import { menuData, MenuItem } from '@/data/menuData';
import { CategoryNav } from '@/components/CategoryNav';
import { MenuItemCard } from '@/components/MenuItemCard';
import { OrderBuilder, OrderItem } from '@/components/OrderBuilder';
import { DietaryLegend } from '@/components/DietaryIcon';

export function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const handleAddToOrder = useCallback((item: MenuItem) => {
    setOrders((prev) => {
      const existing = prev.find((order) => order.item.id === item.id);
      if (existing) {
        return prev.map((order) =>
          order.item.id === item.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, []);

  const handleUpdateQuantity = useCallback((itemId: string, delta: number) => {
    setOrders((prev) => {
      return prev
        .map((order) =>
          order.item.id === itemId
            ? { ...order, quantity: order.quantity + delta }
            : order
        )
        .filter((order) => order.quantity > 0);
    });
  }, []);

  const handleClearOrder = useCallback(() => {
    setOrders([]);
  }, []);

  const getItemQuantity = (itemId: string) => {
    const order = orders.find((o) => o.item.id === itemId);
    return order?.quantity || 0;
  };

  const currentCategory = menuData.find((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-6 text-white shadow-lg lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-sm">
              🍴
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Savory Spoon</h1>
              <p className="text-sm text-orange-100 lg:text-base">Fine Dining & Casual Eats</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* Main Content */}
        <main className="flex-1 p-4 pb-24 lg:p-8 lg:pb-8">
          {/* Welcome Section */}
          <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Welcome to Our Menu</h2>
            <p className="mb-4 text-gray-600">
              Explore our carefully crafted dishes made with the freshest ingredients. 
              Look for dietary icons to find options that suit your preferences.
            </p>
            <DietaryLegend />
          </div>

          {/* Category Navigation */}
          <CategoryNav
            categories={menuData}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Category Header */}
          {currentCategory && (
            <div className="mb-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
                <span className="text-3xl">{currentCategory.icon}</span>
                {currentCategory.name}
              </h2>
              <p className="mt-1 text-gray-600">
                {currentCategory.items.length} item{currentCategory.items.length !== 1 ? 's' : ''} available
              </p>
            </div>
          )}

          {/* Menu Items Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {currentCategory?.items.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToOrder={handleAddToOrder}
                quantity={getItemQuantity(item.id)}
              />
            ))}
          </div>
        </main>

        {/* Order Builder Sidebar */}
        <aside className="hidden w-96 border-l border-gray-200 bg-white lg:block">
          <OrderBuilder
            orders={orders}
            onUpdateQuantity={handleUpdateQuantity}
            onClearOrder={handleClearOrder}
            isOpen={isOrderOpen}
            onToggle={() => setIsOrderOpen(!isOrderOpen)}
          />
        </aside>
      </div>

      {/* Mobile Order Builder */}
      <div className="lg:hidden">
        <OrderBuilder
          orders={orders}
          onUpdateQuantity={handleUpdateQuantity}
          onClearOrder={handleClearOrder}
          isOpen={isOrderOpen}
          onToggle={() => setIsOrderOpen(!isOrderOpen)}
        />
      </div>
    </div>
  );
}
