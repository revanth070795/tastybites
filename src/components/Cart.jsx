import React from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { sendOrderNotification } from '../services/emailService';
import OrderForm from './OrderForm';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);
  const [showOrderForm, setShowOrderForm] = React.useState(false);

  const totalAmount = state.items.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  const handleOrder = async (customerData) => {
    if (state.items.length === 0 || totalAmount === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    try {
      const orderDetails = {
        items: state.items,
        total: totalAmount,
        ...customerData,
      };

      await toast.promise(
        sendOrderNotification(orderDetails),
        {
          loading: 'Sending order...',
          success: 'Order placed successfully! Check your email for confirmation.',
          error: 'Failed to place order. Please try again.',
        }
      );

      dispatch({ type: 'CLEAR_CART' });
      setShowOrderForm(false);
      setIsOpen(false);
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors z-50"
      >
        <FaShoppingCart className="text-2xl" />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {state.items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {state.items.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-600">₹{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload: { name: item.name, quantity: Math.max(0, item.quantity - 1) },
                              })
                            }
                            className="text-gray-500 hover:text-gray-700"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch({
                                type: 'UPDATE_QUANTITY',
                                payload: { name: item.name, quantity: item.quantity + 1 },
                              })
                            }
                            className="text-gray-500 hover:text-gray-700"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: item,
                            })
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-xl">₹{totalAmount.toFixed(2)}</span>
                  </div>
                  {showOrderForm ? (
                    <OrderForm onSubmit={handleOrder} />
                  ) : (
                    <button
                      onClick={() => setShowOrderForm(true)}
                      className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Proceed to Order
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;