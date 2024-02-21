import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios library

const ViewDetails = () => {
    const { id } = useParams();
    const [lawyerDetails, setLawyerDetails] = useState(null);

    useEffect(() => {
        // Fetch lawyer details when component mounts
        const fetchLawyerDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/lawyer-detail/${id}/`);
                setLawyerDetails(response.data);
            } catch (error) {
                console.error('Error fetching lawyer details:', error);
            }
        };

        fetchLawyerDetails();

        // Cleanup function to cancel the fetch request if component unmounts
        return () => {
            // Cancel the fetch request if it's still pending
        };
    }, [id]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Lawyer Details</h2>
            {lawyerDetails ? (
                <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
                    <img src={lawyerDetails.photo} alt={lawyerDetails.name} className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mx-auto md:mr-8 mb-4 md:mb-0" />
                    <div className="flex flex-col text-gray-800">
                        <p className="mb-2"><strong>Name:</strong> {lawyerDetails.name}</p>
                        <p className="mb-2"><strong>Email:</strong> {lawyerDetails.email}</p>
                        <p className="mb-2"><strong>Phone:</strong> {lawyerDetails.phone}</p>
                        <p className="mb-2"><strong>Location:</strong> {lawyerDetails.location}</p>
                        <p className="mb-2"><strong>Latitude:</strong> {lawyerDetails.lat}</p>
                        <p className="mb-2"><strong>Longitude:</strong> {lawyerDetails.lng}</p>
                        <p className="mb-2"><strong>Rating:</strong> {lawyerDetails.rating}</p>
                        <p className="mb-2"><strong>Languages:</strong> {lawyerDetails.languages.join(', ')}</p>
                        <p className="mb-2"><strong>Specialities:</strong> {lawyerDetails.specialities.join(', ')}</p>
                        {/* Add additional attributes here */}
                    </div>
                </div>
            ) : (
                <p>Loading lawyer details...</p>
            )}
        </div>
    );
};

export default ViewDetails;
