import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ayushSystemColors = {
  'Ayurveda': 'bg-green-600',
  'Unani': 'bg-blue-600', 
  'Siddha': 'bg-purple-600',
  'Homeopathy': 'bg-orange-600'
};

const PlantInfo = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plants');
        setPlants(response.data);
        setFilteredPlants(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching plants:', error);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  const filterPlantsBySystem = (system) => {
    setSelectedSystem(system);
    const filtered = system 
      ? plants.filter(plant => plant.ayushSystem === system)
      : plants;
    setFilteredPlants(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl font-semibold text-gray-700">Loading Plants...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 my-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Ayush System Plant Catalog .
        </h1>

        {/* Ayush System Filter Buttons */}
<div className="flex justify-center space-x-4 mb-12">
  {Object.keys(ayushSystemColors).map((system) => (
    <button
      key={system}
      onClick={() => filterPlantsBySystem(system)}
      className={`
        ${ayushSystemColors[system]} 
        text-white 
        px-6 
        py-3 
        rounded-lg 
        font-semibold 
        transform 
        transition-all 
        hover:scale-105 
        ${selectedSystem === system ? 'ring-4 ring-white' : ''}
      `}
    >
      {system}
    </button>
  ))}
  {selectedSystem && (
    <button
      onClick={() => filterPlantsBySystem(null)}
      className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Clear Filter
    </button>
  )}
  <button
    onClick={() => window.location.href = '/addplant'}
    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transform transition-all hover:scale-105"
  >
    Add Plant
  </button>
</div>



        {/* Plant Grid */}
        {filteredPlants.length === 0 ? (
          <div className="text-center text-2xl text-gray-600">
            No plants found for the selected Ayush System
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant) => (
              <div 
                key={plant._id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={plant.modelPath} 
                    alt={plant.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {plant.name}
                  </h2>
                  <p className="text-sm text-gray-600 italic mb-4">
                    {plant.scientificName}
                  </p>
                  <div className="flex items-center mb-4">
                    <span 
                      className={`
                        ${ayushSystemColors[plant.ayushSystem]} 
                        text-white 
                        px-3 
                        py-1 
                        rounded-full 
                        text-xs 
                        font-semibold
                      `}
                    >
                      {plant.ayushSystem}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {plant.description}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Medical Uses
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {plant.medicalUses.slice(0, 3).map((use, index) => (
                        <li key={index} className="text-sm">{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantInfo;