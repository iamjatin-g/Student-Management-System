import React from "react";

const StudentForm = () => {
    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Student Management</h2>

            <form className="space-y-8">
                {/* Student Details */}
                <div>
                    <h3 className="bg-blue-500 text-white p-3 rounded-full w-max px-6 mb-4">
                        Student Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="border p-3 rounded" />
                        <input type="text" placeholder="Last Name" className="border p-3 rounded" />
                        <input type="date" placeholder="Date of Birth" className="border p-3 rounded" />
                        <select className="border p-3 rounded">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                {/* Parent/Guardian Details */}
                <div>
                    <h3 className="bg-blue-500 text-white p-3 rounded-full w-max px-6 mb-4">
                        Parent/Guardian Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Father's Name" className="border p-3 rounded" />
                        <input type="text" placeholder="Mother's Name" className="border p-3 rounded" />
                        <input type="text" placeholder="Guardian's Name (if applicable)" className="border p-3 rounded" />
                        <input type="text" placeholder="Guardian Contact Number" className="border p-3 rounded" />
                    </div>
                </div>

                {/* Address Information */}
                <div>
                    <h3 className="bg-blue-500 text-white p-3 rounded-full w-max px-6 mb-4">
                        Address Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Street Address" className="border p-3 rounded" />
                        <input type="text" placeholder="City" className="border p-3 rounded" />
                        <input type="text" placeholder="State" className="border p-3 rounded" />
                        <input type="text" placeholder="Zip Code" className="border p-3 rounded" />
                    </div>
                </div>

                {/* Admission Details */}
                <div>
                    <h3 className="bg-blue-500 text-white p-3 rounded-full w-max px-6 mb-4">
                        Admission Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Previous School Name" className="border p-3 rounded" />
                        <input type="text" placeholder="Admission Grade" className="border p-3 rounded" />
                        <input type="text" placeholder="Roll Number (if assigned)" className="border p-3 rounded" />
                    </div>
                </div>

                {/* Travelling Facility */}
                <div>
                    <h3 className="bg-blue-500 text-white p-3 rounded-full w-max px-6 mb-4">
                        Travelling Facility
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="border p-3 rounded">
                            <option>Does the student require transportation?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <input type="text" placeholder="Bus Route (if applicable)" className="border p-3 rounded" />
                    </div>
                </div>

                {/* Declaration */}
                <div>
                    <h3 className="bg-blue-500 text-white p-3 rounded-full w-max px-6 mb-4">
                        Declaration
                    </h3>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-5 h-5" />
                        <label className="text-gray-700">
                            I hereby declare that the information provided is true and correct.
                        </label>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500 transition">
                        ← Back
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
                        Next →
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;
