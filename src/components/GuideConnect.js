import React from 'react';

const GuideConnect = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-2xl border border-orange-100">
            <div className="bg-orange-50 p-8 rounded-xl">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-orange-600">Our Guide</h2>
                    <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                        We are honored to have <strong>Archana Mulay</strong>, a professional psychological counsellor, as our expert guide. Her dedication to mental health and well-being empowers our mission to provide accessible support for those managing OCD.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Educational Qualifications</h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-medium text-gray-800">Degrees:</h4>
                                <ul className="list-disc list-inside pl-4 text-gray-700">
                                    <li>Psychology</li>
                                    <li>Mass Communication and Journalism</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-medium text-gray-800">Post Graduation:</h4>
                                <p className="pl-4 text-gray-700">Master in Social Work (M.S.W.)</p>
                            </div>
                            
                            <div>
                                <h4 className="font-medium text-gray-800">Additional Certifications:</h4>
                                <p className="pl-4 text-gray-700">Diploma in Counselling, Mindfulness, and Bach Flower Therapy</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-100 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Contact Details</h3>
                        <div className="space-y-3">
                            <p><strong className="text-gray-800">Contact Number:</strong> <span className="text-gray-700">+91 9823787214</span></p>
                            <p><strong className="text-gray-800">Email:</strong> <span className="text-gray-700">archanamulay5@gmail.com</span></p>
                            {/* <p><strong className="text-gray-800">Website:</strong> <span className="text-gray-700">sanvad.com</span></p> */}
                            <p>
                                <strong className="text-gray-800">Address: </strong> 
                                <span className="text-gray-700">Flat no. 3, Near Hotel Apartment, Opp. Bank Garden, Rajmahal Vachanaly Road, Near Ganpati Mandir, Vishrambag, Sangli.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideConnect;