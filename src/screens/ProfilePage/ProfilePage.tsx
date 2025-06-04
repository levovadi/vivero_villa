import React from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ProfilePage = (): JSX.Element => {
  const navigate = useNavigate();

  const menuItems = [
    {
      section: "Account",
      items: [
        { label: "Información Personal", link: "#" },
        { label: "Metodos de Pago", link: "#" },
        { label: "Dirección de envío", link: "#" },
        { label: "Notificaciones", link: "#" },
      ],
    },
    {
      section: "Soporte",
      items: [
        { label: "Centro de Ayuda", link: "#" },
        { label: "Contactanos", link: "#" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="flex-1 text-center font-bold text-lg">Perfil</h1>
      </header>

      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="text-xl font-bold">Sonia Uc</h2>
          <p className="text-[#639154]">México, Mex</p>
        </div>

        <div className="space-y-6">
          {menuItems.map((section) => (
            <div key={section.section} className="space-y-3">
              <h3 className="text-xl font-bold">{section.section}</h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center justify-between w-full p-3 bg-[#f9f9f9] rounded-xl"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};