import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { CartSection } from "./sections/CartSection";
import { FilterSection } from "./sections/FilterSection";
import { PlantGallerySection } from "./sections/PlantGallerySection";
import { useNavigate } from "react-router-dom";

export const StitchDesign = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    price: "",
    category: "",
    type: "",
    kind: "",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col min-h-[844px] w-full bg-[#f9f9f9]">
        <header className="flex items-center justify-between p-4 pt-4 pb-2 w-full bg-[#f9f9f9]">
          <div className="w-12" />
          <div className="flex-1 text-center">
            <h1 className="font-bold text-lg text-[#11190f] font-['Space_Grotesk',Helvetica] leading-[23px]">
              Plantas
            </h1>
            <div className="flex items-center justify-center h-[200px]">
              <img src="..//logo_vivero.jpeg" alt="Descripción de la imagen" className="w-[200px] h-[200px] mx-auto"></img>
            </div>
          </div>
          <div className="w-12 flex justify-end">
            <button 
              onClick={() => navigate("/cart")}
              className="h-12 flex items-center justify-center rounded-xl"
            >
              <ShoppingCartIcon className="h-6 w-6 text-[#11190f]" />
            </button>
          </div>
        </header>

        <div className="px-4 py-3 w-full">
          <div className="flex items-center w-full h-12 rounded-xl bg-[#eaf2e8]">
            <div className="pl-4 flex items-center">
              <SearchIcon className="h-6 w-6 text-[#639154]" />
            </div>
            <Input
              className="border-0 bg-transparent h-full pl-2 pr-4 text-[#639154] font-['Space_Grotesk',Helvetica] placeholder:text-[#639154] focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Buscar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <PlantGallerySection onFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
        <FilterSection searchQuery={searchQuery} selectedFilters={selectedFilters} />
        <CartSection />
      </div>
    </div>
  );
};