import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGraduate,
    faChalkboardTeacher,
    faSchool,
    faFileInvoiceDollar,
    faBus,
    faBox,
    faFileAlt,
    faBookOpen,
    faCalendarAlt,
    faBell,
    faShareAlt,
    faSignOutAlt,
    faUserCircle,
    faChevronRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import StudentForm from "./StudentForm";
import StaffManagement from "./StaffManagement";

const Dashboard = () => {
    const [selectedForm, setSelectedForm] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isStaffDropdownOpen, setIsStaffDropdownOpen] = useState(false);

    const sections = [
        { name: "Student Management", icon: faUserGraduate, form: <StudentForm /> },
        {
            name: "Staff Management",
            icon: faChalkboardTeacher,
            form: <StaffManagement />,
            isDropdown: true,
            subElements: [
                "Staff List",
                "Staff Registration",
                "Attendance Management",
                "Leave Management",
                "Timetable Allocation",
                "Roles & Permissions",
                "Announcements",
            ],
        },
        { name: "Classroom Management", icon: faSchool, form: null },
        { name: "Academic Management", icon: faBookOpen, form: null },
        { name: "Fees Management", icon: faFileInvoiceDollar, form: null },
        { name: "Exam Management", icon: faFileAlt, form: null },
        { name: "Event Management", icon: faCalendarAlt, form: null },
        { name: "Transport Management", icon: faBus, form: null },
        { name: "Inventory Management", icon: faBox, form: null },
    ];

    const handleSelection = (index, form) => {
        setSelectedForm(form);
        setSelectedIndex(index);
        setIsStaffDropdownOpen(false); // Close dropdown when navigating
    };

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevents main click event
        setIsStaffDropdownOpen(!isStaffDropdownOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="w-full bg-blue-600 shadow-md p-4 flex justify-between items-center">
                <h1 className="text-blue-600 cursor-default select-none">SSPD SMS</h1>
                <div className="flex gap-8">
                    <FontAwesomeIcon icon={faBell} className="text-3xl text-white hover:text-blue-100 cursor-pointer" />
                    <FontAwesomeIcon icon={faShareAlt} className="text-3xl text-white hover:text-blue-100 cursor-pointer" />
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-3xl text-white hover:text-blue-100 cursor-pointer" />
                    <FontAwesomeIcon icon={faUserCircle} className="text-4xl text-white hover:text-blue-100 cursor-pointer" />
                </div>
            </nav>

            {/* Main Content */}
            <div className="p-6 flex flex-col lg:flex-row">
                {/* Left Section - Names */}
                <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6">
                    <h1
                        className="text-4xl font-extrabold text-blue-600 mb-6 text-center cursor-pointer hover:text-blue-800 transition duration-300"
                        onClick={() => {
                            setSelectedForm(null);
                            setSelectedIndex(null);
                            setIsStaffDropdownOpen(false);
                        }}
                    >
                        SSPD SMS
                    </h1>
                    <div className="flex flex-col gap-4 w-full">
                        {sections.map((item, index) => (
                            <div key={index} className="w-full">
                                <div className="flex items-center w-full">
                                    {/* Main Section Button (Opens Page) */}
                                    <button
                                        onClick={() => handleSelection(index, item.form)}
                                        className={`p-4 w-full rounded-lg shadow-md flex items-center gap-5 transition-all duration-300 ${selectedIndex === index ? "bg-blue-700 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
                                            }`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="text-lg" />
                                        <span className="text-base font-medium">{item.name}</span>
                                    </button>

                                    {/* Arrow Button (Always Visible for Consistency) */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (item.isDropdown) setIsStaffDropdownOpen(!isStaffDropdownOpen);
                                        }}
                                        className="p-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-all duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={item.isDropdown && isStaffDropdownOpen ? faChevronDown : faChevronRight}
                                            className="text-lg"
                                        />
                                    </button>
                                </div>

                                {/* Staff Management Dropdown */}
                                {item.isDropdown && isStaffDropdownOpen && (
                                    <div className="ml-6 mt-2 flex flex-col gap-2 border-l-4 border-blue-500 pl-4 transition-all duration-300">
                                        {item.subElements.map((subItem, subIndex) => (
                                            <button
                                                key={subIndex}
                                                className="p-3 w-full rounded-lg bg-blue-100 text-blue-900 hover:bg-blue-300 hover:text-blue-800 transition-all duration-300 text-left"
                                            >
                                                {subItem}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Dashboard & Forms */}
                <div className="w-full lg:w-3/4 bg-white shadow-md rounded-lg p-6 mt-6 md:mt-0 flex flex-col items-center justify-center">
                    {selectedForm ? (
                        <div className="w-full">{selectedForm}</div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Dashboard</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                                {sections.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelection(index, item.form)}
                                        className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-md w-36 sm:w-44 lg:w-52 h-36 sm:h-44 lg:h-52 hover:scale-105 transition-transform"
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="text-6xl sm:text-7xl lg:text-8xl text-gray-700" />
                                        <p className="mt-4 text-sm sm:text-base lg:text-lg font-semibold">{item.name}</p>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
