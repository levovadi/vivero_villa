import { ChevronDownIcon, XIcon, FilterXIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
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
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      const button = buttonRefs.current[filterType];
      if (button) {
        const rect = button.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calcular posición del dropdown
        setDropdownPosition({
          top: rect.bottom + scrollTop + 8, // 8px de margen
          left: rect.left,
        });
      }
      setActiveFilter(filterType);
    }
  };

  const handleOptionClick = (filterType: string, option: string) => {
    onFilterChange(filterType, option);
    setActiveFilter(null);
  };

  const handleRemoveFilter = (filterType: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onFilterChange(filterType, "");
  };

  const handleClearAllFilters = () => {
    Object.keys(filterOptions).forEach(filterType => {
      onFilterChange(filterType, "");
    });
  };

  const hasActiveFilters = Object.values(selectedFilters).some(filter => filter !== "");
  const activeFiltersCount = Object.values(selectedFilters).filter(filter => filter !== "").length;

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !Object.values(buttonRefs.current).some(
          (button) => button && button.contains(event.target as Node)
        )
      ) {
        setActiveFilter(null);
      }
    };

    if (activeFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeFilter]);

  // Cerrar dropdown al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeFilter) {
        setActiveFilter(null);
      }
    };

    if (activeFilter) {
      window.addEventListener("scroll", handleScroll, true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [activeFilter]);

  return (
    <>
      <section className="flex flex-col gap-3 p-3 w-full">
        {/* Filtros principales */}
        <div className="flex items-start gap-3 overflow-x-auto">
          {Object.keys(filterOptions).map((filterType) => (
            <div key={filterType} className="relative">
              <Button
                ref={(el) => (buttonRefs.current[filterType] = el)}
                variant="outline"
                className={`h-8 flex items-center justify-center gap-2 px-4 py-0 ${
                  selectedFilters[filterType as keyof typeof selectedFilters]
                    ? "bg-[#d9e8d6] border-[#7fb069]"
                    : "bg-[#eaf2e8]"
                } rounded-xl border-none hover:bg-[#d9e8d6] transition-colors duration-200`}
                onClick={() => handleFilterClick(filterType)}
              >
                <span className="font-medium text-[#11190f] text-sm font-['Space_Grotesk',Helvetica]">
                  {filterLabels[filterType as keyof typeof filterLabels]}
                  {selectedFilters[filterType as keyof typeof selectedFilters] && (
                    <span className="ml-1 text-xs opacity-75">
                      • {selectedFilters[filterType as keyof typeof selectedFilters]}
                    </span>
                  )}
                </span>
                
                {selectedFilters[filterType as keyof typeof selectedFilters] ? (
                  <XIcon 
                    className="h-4 w-4 text-[#11190f] hover:text-red-600 transition-colors duration-200" 
                    onClick={(e) => handleRemoveFilter(filterType, e)}
                  />
                ) : (
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-[#11190f] transition-transform duration-200 ${
                      activeFilter === filterType ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </Button>
            </div>
          ))}
          
          {/* Botón para limpiar todos los filtros */}
          {hasActiveFilters && (
            <Button
              variant="outline"
              className="h-8 flex items-center justify-center gap-2 px-3 py-0 bg-red-50 hover:bg-red-100 rounded-xl border-red-200 transition-colors duration-200"
              onClick={handleClearAllFilters}
            >
              <FilterXIcon className="h-4 w-4 text-red-600" />
              <span className="font-medium text-red-600 text-sm">
                Limpiar ({activeFiltersCount})
              </span>
            </Button>
          )}
        </div>

        {/* Filtros activos como chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-600 font-medium self-center">Filtros activos:</span>
            {Object.entries(selectedFilters).map(([filterType, value]) => 
              value && (
                <div
                  key={`${filterType}-${value}`}
                  className="flex items-center gap-1 bg-[#7fb069] text-white px-2 py-1 rounded-full text-xs font-medium"
                >
                  <span>{filterLabels[filterType as keyof typeof filterLabels]}: {value}</span>
                  <button
                    onClick={() => onFilterChange(filterType, "")}
                    className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </section>

      {/* Dropdown Portal - Se renderiza fuera del flujo normal */}
      {activeFilter && (
        <div
          ref={dropdownRef}
          className="fixed w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-[9999] animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
          }}
        >
          <div className="py-2">
            {filterOptions[activeFilter as keyof typeof filterOptions].map((option, index) => (
              <button
                key={option}
                className={`w-full text-left px-4 py-2 hover:bg-[#eaf2e8] text-sm transition-colors duration-150 ${
                  index === 0 ? 'rounded-t-xl' : ''
                } ${
                  index === filterOptions[activeFilter as keyof typeof filterOptions].length - 1 ? 'rounded-b-xl' : ''
                } ${
                  selectedFilters[activeFilter as keyof typeof selectedFilters] === option
                    ? 'bg-[#d9e8d6] font-medium text-[#7fb069]'
                    : ''
                }`}
                onClick={() => handleOptionClick(activeFilter, option)}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedFilters[activeFilter as keyof typeof selectedFilters] === option && (
                    <div className="w-2 h-2 bg-[#7fb069] rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};