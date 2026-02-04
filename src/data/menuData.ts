export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'spicy' | 'dairy-free' | 'nut-free';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  dietary: DietaryTag[];
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    icon: '🥗',
    items: [
      {
        id: 'app-1',
        name: 'Crispy Calamari',
        description: 'Lightly battered calamari rings served with marinara sauce and lemon aioli',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
        dietary: ['gluten-free'],
        popular: true
      },
      {
        id: 'app-2',
        name: 'Bruschetta Trio',
        description: 'Toasted ciabatta topped with tomato basil, mushroom truffle, and olive tapenade',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
        dietary: ['vegetarian', 'vegan']
      },
      {
        id: 'app-3',
        name: 'Spicy Buffalo Wings',
        description: 'Crispy chicken wings tossed in our signature buffalo sauce with blue cheese dip',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop',
        dietary: ['spicy', 'gluten-free'],
        popular: true
      },
      {
        id: 'app-4',
        name: 'Garden Spring Rolls',
        description: 'Fresh vegetables wrapped in rice paper with sweet chili dipping sauce',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
        dietary: ['vegan', 'gluten-free', 'dairy-free']
      }
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    icon: '🍽️',
    items: [
      {
        id: 'main-1',
        name: 'Grilled Ribeye Steak',
        description: '12oz prime ribeye with garlic herb butter, roasted potatoes, and seasonal vegetables',
        price: 38.99,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
        dietary: ['gluten-free'],
        popular: true
      },
      {
        id: 'main-2',
        name: 'Pan-Seared Salmon',
        description: 'Atlantic salmon with lemon dill sauce, quinoa pilaf, and asparagus',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
        dietary: ['gluten-free', 'dairy-free']
      },
      {
        id: 'main-3',
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        id: 'main-4',
        name: 'Thai Red Curry',
        description: 'Coconut curry with tofu, vegetables, thai basil served with jasmine rice',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
        dietary: ['vegan', 'spicy', 'gluten-free', 'dairy-free']
      },
      {
        id: 'main-5',
        name: 'Classic Burger',
        description: 'Angus beef patty with aged cheddar, lettuce, tomato, and special sauce',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        dietary: [],
        popular: true
      }
    ]
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: '🍕',
    items: [
      {
        id: 'pizza-1',
        name: 'Margherita',
        description: 'San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        dietary: ['vegetarian']
      },
      {
        id: 'pizza-2',
        name: 'Spicy Pepperoni',
        description: 'Pepperoni, jalapeños, mozzarella, and crushed red pepper flakes',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
        dietary: ['spicy'],
        popular: true
      },
      {
        id: 'pizza-3',
        name: 'Mediterranean Veggie',
        description: 'Olives, artichokes, sun-dried tomatoes, feta, and spinach',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
        dietary: ['vegetarian', 'nut-free']
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    items: [
      {
        id: 'dessert-1',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        dietary: ['vegetarian'],
        popular: true
      },
      {
        id: 'dessert-2',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
        dietary: ['vegetarian']
      },
      {
        id: 'dessert-3',
        name: 'Vegan Berry Cheesecake',
        description: 'Cashew-based cheesecake with mixed berry compote and almond crust',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
        dietary: ['vegan', 'dairy-free', 'gluten-free']
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Beverages',
    icon: '🍹',
    items: [
      {
        id: 'drink-1',
        name: 'Fresh Lemonade',
        description: 'House-made lemonade with fresh mint and a hint of honey',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop',
        dietary: ['vegan', 'gluten-free', 'dairy-free']
      },
      {
        id: 'drink-2',
        name: 'Mango Smoothie',
        description: 'Tropical mango blended with coconut milk and a splash of lime',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop',
        dietary: ['vegan', 'gluten-free', 'dairy-free']
      },
      {
        id: 'drink-3',
        name: 'Espresso Martini',
        description: 'Vodka, fresh espresso, coffee liqueur, and a touch of vanilla',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
        dietary: ['vegan', 'gluten-free', 'dairy-free']
      }
    ]
  }
];
