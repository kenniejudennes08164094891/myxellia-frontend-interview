import { useState } from "react";
const CalendarModal = ({ isOpen, onClose }: any) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day: string) => day.toUpperCase())

    // Function to get the number of days in the current month
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    // Function to get the first day of the current month (0 for Sunday, 1 for Monday, etc.)
    const getStartDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    // Function to handle navigation to the previous month
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    // Function to handle navigation to the next month
    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Generate an array of day numbers for the current month
    const renderDays = () => {
        const days = [];
        const daysInMonth = getDaysInMonth(currentDate);
        const startDay = getStartDayOfMonth(currentDate);

        // Add placeholder "empty" days for the leading spaces
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 w-10 md:h-12 md:w-12"></div>);
        }

        // Add the actual days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();

            days.push(
                <div
                    key={`day-${i}`}
                    className={`
            flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-200
            md:h-12 md:w-12
            ${isToday ? 'bg-blue-600 font-bold text-white' : 'hover:bg-gray-700'}
            ${isToday ? 'shadow-lg' : 'hover:scale-105'}
          `}
                >
                    {i}
                </div>
            );
        }
        return days;
    };

    return (
        // Conditional rendering based on isOpen state
        <div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Modal Overlay (Clicking this closes the modal) */}
                    <div
                        className="absolute inset-0 bg-transparent bg-opacity-50 transition-opacity duration-300"
                        onClick={onClose}
                    ></div>

                    {/* Modal Content Panel */}
                    <div
                        className={`
              w-full max-w-sm overflow-y-auto bg-[#0D0D0D] p-6 shadow-xl transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              md:max-w-md
              lg:max-w-lg
            `}
                    >
                        <div className="flex items-center justify-between text-white">
                            {/* Left side: Calender text */}
                            <span className="flex items-center gap-2 text-lg font-medium">
                                <svg
                                    className="w-6 h-6 text-white dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                                    />
                                </svg>
                                Calender
                            </span>


                            {/* Right side: Close button */}
                            <button
                                onClick={onClose}
                                className="text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                            >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

                            </button>
                        </div>


                        {/* calendar body */}
                        <div className="w-full max-w-sm rounded-lg bg-[#0D0D0D] p-6 shadow-xl md:max-w-md lg:max-w-lg">
                            {/* Calendar Header */}
                            <div className="mb-4 flex items-center justify-between">
                                <button
                                    onClick={goToPreviousMonth}
                                    className="rounded-full p-2 text-[#98A2B3] transition-colors duration-200 hover:bg-gray-700"
                                >
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clipRule="evenodd" />
                                    </svg>

                                </button>
                                <h2 className="text-xl text-white font-semibold">
                                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                    {/* November 2023 */}
                                </h2>
                                <button
                                    onClick={goToNextMonth}
                                    className="rounded-full p-2 text-white transition-colors duration-200 hover:bg-gray-700"
                                >
                                    <svg className="w-6 h-6 text-[#98A2B3] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd" />
                                    </svg>

                                </button>
                            </div>

                            {/* Days of the Week */}
                            <div className="mb-2 grid grid-cols-7 text-center text-xs text-[#969696]">
                                {daysOfWeek.map((day) => (
                                    <small key={day} className="text-[0.625rem]">
                                        {day}
                                    </small>
                                ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1 text-center text-[#969696] text-[0.625rem]">
                                {renderDays()}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarModal;