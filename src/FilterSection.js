import React, { useState } from 'react';


const FilterSection = () => {
    // List of wilayas (administrative divisions) of Algeria
    const wilayas = [
        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
        "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger (Algiers)",
        "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine",
        "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj",
        "Boumerdès", "El Taref", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza",
        "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"
    ];

    // List of legal specialities
    const legalSpecialities = [
        "Droit administratif", "Droit Affaires", "Droit civil", "Droit commercial", "Droit de l'immobilier",
        "Droit de la consommation", "Droit de la propriété intellectuelle", "Droit de la santé", "Droit des contrats",
        "Droit des entreprises", "Droit des étrangers", "Droit des sociétés", "droit douanier", "Droit du travail",
        "Droit familial", "Droit foncier", "Droit maritime", "Droit pénal", "Droit routier", "Droit social",
        "Droits de l'homme"
    ];

    const [selectedSpecialities, setSelectedSpecialities] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSpecialityChange = (event) => {
        const target = event.target;
        const value = target.value;
        if (target.checked) {
            setSelectedSpecialities([...selectedSpecialities, value]);
        } else {
            setSelectedSpecialities(selectedSpecialities.filter(speciality => speciality !== value));
        }
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            setSelectedSpecialities([...selectedSpecialities, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleTagRemove = (speciality) => {
        setSelectedSpecialities(selectedSpecialities.filter(item => item !== speciality));
    };

    return (
        <div className="relative top-0 left-0 right-0 flex items-center justify-center z-8">
          <div className="flex items-center justify-center relative " >
          
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 rounded-md relative z-10 bg-white bg-opacity-80">
                
            <div className="mt-4 space-y-4">
    <label htmlFor="nameInput" className="sr-only">the name of lawyer</label>
    <input
        id="nameInput"
        type="text"
        placeholder="the name of lawyer"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    />
    {/* Filter by Wilaya */}
    <select
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    >
        <option value="">select the province</option>
        {/* Map through the wilayas array to create options */}
        {wilayas.map((wilaya, index) => (
            <option key={index} value={wilaya}>{wilaya}</option>
        ))}
    </select>
    {/* Filter by Legal Speciality */}
    <div>
        {legalSpecialities.map((speciality, index) => (
            <label key={index} className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value={speciality}
                    onChange={handleSpecialityChange}
                    checked={selectedSpecialities.includes(speciality)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded border border-gray-300 focus:ring focus:ring-blue-400"
                />
                <span className="ml-2 text-sm">{speciality}</span>
            </label>
        ))}
    </div>
    {/* Selected Specialities */}
    {/* <div className="space-y-2">
        {selectedSpecialities.map((speciality, index) => (
            <div key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full flex items-center">
                <span>{speciality}</span>
                <button onClick={() => handleTagRemove(speciality)} className="ml-1 focus:outline-none">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 1.414L10 11.414l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 12 6.293 9.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        ))}
    </div> */}
    {/* Filter by Language */}
    <select
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
    >
        <option value="">select the language</option>
        <option value="french">French</option>
        <option value="arabic">Arabic</option>
        <option value="english">English</option>
    </select>
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400">
        Search
    </button>
</div>

            </div>
            </div>
        </div>
    );
};

export default FilterSection;
