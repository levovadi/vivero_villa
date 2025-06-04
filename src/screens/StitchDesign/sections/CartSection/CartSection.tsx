import { HomeIcon, ShoppingCartIcon, UserIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const CartSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: <HomeIcon size={24} />, label: "Inicio", path: "/", isActive: location.pathname === "/" },
    { icon: <PhoneIcon size={24} />, label: "Contacto", path: "/contact", isActive: location.pathname === "/contact" },
    { icon: <ShoppingCartIcon size={24} />, label: "Compras", path: "/cart", isActive: location.pathname === "/cart" },
    { icon: <UserIcon size={24} />, label: "Perfil", path: "/profile", isActive: location.pathname === "/profile" },
  ];

  return (
    <nav className="flex flex-col items-start relative self-stretch w-full">
      <div className="flex items-start gap-2 pt-2 pb-3 px-4 relative self-stretch w-full bg-[#f9f9f9] border-t border-[#eaf2e8]">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-end gap-1 flex-1 cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            <div className="inline-flex h-8 items-center justify-center">
              <div className={`text-${item.isActive ? "#11190f" : "#639154"}`}>
                {item.icon}
              </div>
            </div>
            <div className="inline-flex flex-col items-start">
              <div
                className={`mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-medium text-${
                  item.isActive ? "#11190f" : "#639154"
                } text-xs leading-[18px] whitespace-nowrap`}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative self-stretch w-full h-5 bg-[#f9f9f9]" />
    </nav>
  );
};