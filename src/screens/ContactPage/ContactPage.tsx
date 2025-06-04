import React from "react";
import { ArrowLeft, MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ContactPage = (): JSX.Element => {
  const navigate = useNavigate();

  const contactInfo = {
    address: "1234 Avenida principal, Estado de México, Progreso Industrial",
    hours: "Lunes-Viernes: 9am-5pm, Sábado: 10am-4pm",
    phone: "(555) 123-4567",
    email: "info@viverovilla.com"
  };

  const handleAction = (type: string) => {
    switch (type) {
      case 'address':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`, '_blank');
        break;
      case 'phone':
        window.location.href = `tel:${contactInfo.phone}`;
        break;
      case 'email':
        window.location.href = `mailto:${contactInfo.email}`;
        break;
      case 'instagram':
        window.open('https://instagram.com/greenleafnursery', '_blank');
        break;
      case 'facebook':
        window.open('https://facebook.com/greenleafnursery', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/greenleafnursery', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com/@germinandoideastv?si=xj4t8U5PbmjCtk8I', '_blank')
    }
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
        <h1 className="flex-1 text-center font-bold text-lg">Contacto</h1>
      </header>

      <div className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
          <div className="space-y-4">
            <button
              onClick={() => handleAction('address')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-[#639154]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Dirección</h3>
                <p className="text-[#639154]">{contactInfo.address}</p>
              </div>
            </button>

            <div className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl">
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Clock className="h-6 w-6 text-[#639154]" />
              </div>
              <div>
                <h3 className="font-bold">Horas</h3>
                <p className="text-[#639154]">{contactInfo.hours}</p>
              </div>
            </div>

            <button
              onClick={() => handleAction('phone')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Phone className="h-6 w-6 text-[#639154]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Telefono</h3>
                <p className="text-[#639154]">{contactInfo.phone}</p>
              </div>
            </button>

            <button
              onClick={() => handleAction('email')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Mail className="h-6 w-6 text-[#639154]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold">Correo</h3>
                <p className="text-[#639154]">{contactInfo.email}</p>
              </div>
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <div className="space-y-4">
            <button
              onClick={() => handleAction('instagram')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Instagram className="h-6 w-6 text-[#639154]" />
              </div>
              <span className="font-bold">Instagram</span>
            </button>

            <button
              onClick={() => handleAction('facebook')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Facebook className="h-6 w-6 text-[#639154]" />
              </div>
              <span className="font-bold">Facebook</span>
            </button>

            <button
              onClick={() => handleAction('twitter')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Twitter className="h-6 w-6 text-[#639154]" />
              </div>
              <span className="font-bold">Twitter</span>
            </button>

            <button
              onClick={() => handleAction('youtube')}
              className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-xl w-full"
            >
              <div className="bg-[#eaf2e8] p-3 rounded-xl">
                <Youtube className="h-6 w-6 text-[#639154]" />
              </div>
              <span className="font-bold">Youtube</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};