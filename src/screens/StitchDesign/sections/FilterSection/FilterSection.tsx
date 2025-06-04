import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useNavigate } from "react-router-dom";

interface FilterSectionProps {
  searchQuery: string;
  selectedFilters: {
    price: string;
    category: string;
    type: string;
    kind: string;
  };
}

export const FilterSection = ({ searchQuery, selectedFilters }: FilterSectionProps): JSX.Element => {
  const navigate = useNavigate();
  
 const plants = [
    {
      id: "fiddle-leaf-fig",
      name: "Ficus Lyrata",
      price: "$1,299 MXN",
      image: "..//depth-5--frame-0.png",
      category: "Indoor",
      type: "Non-flowering",
      kind: "Easy Care"
    },
    {
      id: "monstera-deliciosa",
      name: "Monstera Deliciosa",
      price: "$899 MXN",
      image: "..//depth-5--frame-0-1.png",
      category: "Tropical",
      type: "Non-flowering",
      kind: "Air Purifying"
    },
    {
      id: "snake-plant",
      name: "Sansevieria",
      price: "$459 MXN",
      image: "..//depth-5--frame-0-2.png",
      category: "Indoor",
      type: "Non-flowering",
      kind: "Low Light"
    },
    {
      id: "zz-plant",
      name: "Zamioculcas",
      price: "$599 MXN",
      image: "..//depth-5--frame-0-3.png",
      category: "Indoor",
      type: "Non-flowering",
      kind: "Low Light"
    },
    {
      id: "peace-lily",
      name: "Spathiphyllum",
      price: "$699 MXN",
      image: "..//depth-5--frame-0-4.png",
      category: "Indoor",
      type: "Flowering",
      kind: "Air Purifying"
    },
    {
      id: "calathea",
      name: "Calathea Ornata",
      price: "$799 MXN",
      image: "..//depth-5--frame-0-5.png",
      category: "Tropical",
      type: "Non-flowering",
      kind: "Pet Friendly"
    },
    {
      id: "pothos",
      name: "Epipremnum Aureum",
      price: "$399 MXN",
      image: "..//depth-5--frame-0-6.png",
      category: "Indoor",
      type: "Non-flowering",
      kind: "Easy Care"
    },
    {
      id: "spider-plant",
      name: "Chlorophytum",
      price: "$299 MXN",
      image: "..//depth-5--frame-0-7.png",
      category: "Indoor",
      type: "Non-flowering",
      kind: "Air Purifying"
    },
  ];

  const filteredPlants = plants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = !selectedFilters.price || 
      (selectedFilters.price === "Under $20" && parseInt(plant.price) < 500) ||
      (selectedFilters.price === "$20-$50" && parseInt(plant.price) >= 500 && parseInt(plant.price) < 1000) ||
      (selectedFilters.price === "$50-$100" && parseInt(plant.price) >= 1000 && parseInt(plant.price) < 2000) ||
      (selectedFilters.price === "Over $100" && parseInt(plant.price) >= 2000);
    const matchesCategory = !selectedFilters.category || plant.category === selectedFilters.category;
    const matchesType = !selectedFilters.type || plant.type === selectedFilters.type;
    const matchesKind = !selectedFilters.kind || plant.kind === selectedFilters.kind;

    return matchesSearch && matchesPrice && matchesCategory && matchesType && matchesKind;
  });

  return (
    <section className="p-4 w-full">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {filteredPlants.map((plant) => (
          <Card 
            key={plant.id} 
            className="border-0 shadow-none cursor-pointer"
            onClick={() => navigate(`/detail/${plant.id}`)}
          >
            <CardContent className="p-0 flex flex-col gap-3">
              <div
                className="w-full h-[231px] rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${plant.image})` }}
              />
              <div className="flex flex-col pb-3">
                <h3 className="font-medium text-[#11190f] text-base leading-6 font-['Space_Grotesk',Helvetica]">
                  {plant.name}
                </h3>
                <p className="font-normal text-[#639154] text-sm leading-[21px] font-['Space_Grotesk',Helvetica]">
                  {plant.price}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};