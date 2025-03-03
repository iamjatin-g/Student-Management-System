import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import staffList from "../assets/staffData.json";

const StaffManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter staff based on search input
    const filteredStaff = staffList.filter((staff) =>
        staff.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Staff Management
            </h2>

            {/* Search Bar + Add Button */}
            <div className="flex justify-between items-center mb-4">
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search staff..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 border border-blue-500 rounded-lg"
                    />
                    <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-4 text-gray-500" />
                </div>
                <button className="ml-4 bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition">
                    <FontAwesomeIcon icon={faPlus} />
                    Add
                </button>
            </div>

            {/* Staff List Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-blue-500">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-blue-500 p-3">Staff Name</th>
                            <th className="border border-blue-500 p-3">Department</th>
                            <th className="border border-blue-500 p-3">Gender</th>
                            <th className="border border-blue-500 p-3">Contact No.</th>
                            <th className="border border-blue-500 p-3">Status</th>
                            <th className="border border-blue-500 p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStaff.length > 0 ? (
                            filteredStaff.map((staff, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-blue-500 p-3">{staff.name}</td>
                                    <td className="border border-blue-500 p-3">{staff.department}</td>
                                    <td className="border border-blue-500 p-3">{staff.gender}</td>
                                    <td className="border border-blue-500 p-3">{staff.contact}</td>
                                    <td className="border border-blue-500 p-3">{staff.status}</td>
                                    <td className="border border-blue-500 p-3">
                                        <button className="text-blue-500 hover:underline">Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border border-blue-500 p-3 text-center text-gray-500">
                                    No staff found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffManagement;
