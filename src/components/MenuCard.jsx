import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';

const menuItems = [
  {
    category: "Starters",
    items: [
      {
        name: "Bruschetta",
        price: "8.99",
        description: "Grilled bread with tomatoes, garlic, and fresh basil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Calamari Fritti",
        price: "12.99",
        description: "Crispy fried squid with marinara sauce and lemon wedges",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Caprese Salad",
        price: "10.99",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      }
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Grilled Salmon",
        price: "24.99",
        description: "Fresh Atlantic salmon with lemon butter sauce and asparagus",
        image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Beef Tenderloin",
        price: "29.99",
        description: "Premium cut with red wine reduction and truffle mashed potatoes",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Lobster Risotto",
        price: "32.99",
        description: "Creamy Arborio rice with butter-poached lobster and parmesan",
        image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Truffle Pasta",
        price: "26.99",
        description: "Homemade fettuccine with black truffle and wild mushrooms",
        image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        price: "8.99",
        description: "Classic Italian coffee-flavored dessert with mascarpone",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Chocolate Lava Cake",
        price: "9.99",
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      },
      {
        name: "Crème Brûlée",
        price: "8.99",
        description: "Classic French vanilla custard with caramelized sugar top",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      }
    ]
  }
];

const MenuCard = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        {menuItems.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-amber-600 text-center">{category.category}</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="absolute bottom-4 right-4 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors opacity-100 group-hover:opacity-100"
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                      <span className="text-lg font-bold text-amber-600">${item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;