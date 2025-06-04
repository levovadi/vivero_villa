import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  image: string;
}

export const CartPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Monstera Deliciosa",
      quantity: 1,
      image: "/depth-5--frame-0-1.png",
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      quantity: 1,
      image: "/depth-5--frame-0.png",
    },
    {
      id: 3,
      name: "Snake Plant",
      quantity: 1,
      image: "/depth-5--frame-0-2.png",
    },
    {
      id: 4,
      name: "ZZ Plant",
      quantity: 1,
      image: "/depth-5--frame-0-3.png",
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="flex-1 text-center font-bold text-lg">Carrito de Compras</h1>
      </header>

      <div className="flex-1 p-4">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-[#f9f9f9] p-3 rounded-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-[#11190f]">{item.name}</h3>
                <p className="text-[#639154]">1</p>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-xl p-2">
                <button
                  onClick={() => updateQuantity(item.id, false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, true)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <Button className="w-full bg-[#639154] hover:bg-[#4a7340] text-white font-medium py-6">
          Confirmar
        </Button>
        <Button
          variant="outline"
          className="w-full bg-[#eaf2e8] border-none hover:bg-[#d9e8d6] text-[#11190f] font-medium py-6"
          onClick={() => navigate("/")}
        >
          Continuar Comprando
        </Button>
      </div>
    </div>
  );
};