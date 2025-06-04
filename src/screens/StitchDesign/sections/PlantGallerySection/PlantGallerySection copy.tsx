import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface PlantGallerySectionProps {
  onFilterChange: (filterType: string, value: string) => void;
  selectedFilters: {
    price: string;
    category: string;
    type: string;
    kind: string;
  };
}

export const PlantGallerySection = ({
  onFilterChange,
  selectedFilters,
}: PlantGallerySectionProps): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterOptions = {
    price: ["Menos de $500", "$500-$1000", "$1000-$2000", "Más de $2000"],
    category: ["Interior", "Exterior", "Suculentas", "Tropical"],
    type: ["Con Flores", "Sin Flores", "Aéreas", "Cactus"],
    kind: ["Fácil Cuidado", "Pet Friendly", "Poca Luz", "Purificadoras"],
  };

  const filterLabels = {
    price: "Precio",
    category: "Categoría",
    type: "Tipo",
    kind: "Clase",
  };

  const handleFilterClick = (filterType: string) => {
    if (activeFilter === filterType) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterType);
    }
  };

  return (
    <section className="flex flex-col gap-3 p-3 w-full">
      <div className="flex items-start gap-3 overflow-x-auto">
        {Object.keys(filterOptions).map((filterType) => (
          <div key={filterType} className="relative">
            <Button
              variant="outline"
              className={`h-8 flex items-center justify-center gap-2 px-4 py-0 ${
                selectedFilters[filterType as keyof typeof selectedFilters]
                  ? "bg-[#d9e8d6]"
                  : "bg-[#eaf2e8]"
              } rounded-xl border-none hover:bg-[#d9e8d6]`}
              onClick={() => handleFilterClick(filterType)}
            >
              <span className="font-medium text-[#11190f] text-sm font-['Space_Grotesk',Helvetica]">
                {filterLabels[filterType as keyof typeof filterLabels]}
              </span>
              <ChevronDownIcon className="h-5 w-5 text-[#11190f]" />
            </Button>
            
            {activeFilter === filterType && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50">
                {filterOptions[filterType as keyof typeof filterOptions].map((option) => (
                  <button
                    key={option}
                    className="w-full text-left px-4 py-2 hover:bg-[#eaf2e8] text-sm"
                    onClick={() => {
                      onFilterChange(filterType, option);
                      setActiveFilter(null);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};