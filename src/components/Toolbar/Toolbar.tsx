import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { addMonths, addYears, subMonths, subYears } from "date-fns";
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { TypeSelector } from "../TypeSelector/TypeSelector";

export const Toolbar = () => {
  const { currentMonth, currentYear, selectedDate, setSelectedDate, isYearlyView, toggleView } =
    useContext(CalendarContext);

  return (
    <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:space-x-2 sm:flex-row">
      <div className="flex items-center font-sans text-xl text-slate-600 ">
        <ChevronDoubleLeftIcon
          onClick={() => setSelectedDate(subYears(selectedDate, 1))}
          className="w-3 h-3 ml-4 mr-2 text-blue-300 cursor-pointer hover:text-blue-400"
          data-testid="chevron-double-left"
        />
        <ChevronLeftIcon
          onClick={() => setSelectedDate(subMonths(selectedDate, 1))}
          className="w-5 h-5 mr-4 text-blue-300 cursor-pointer hover:text-blue-400"
          data-testid="chevron-left"
        />
        {currentMonth}, {currentYear}
        <ChevronRightIcon
          onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
          className="w-5 h-5 ml-4 text-blue-300 cursor-pointer hover:text-blue-400"
          data-testid="chevron-right"
        />
        <ChevronDoubleRightIcon
          onClick={() => setSelectedDate(addYears(selectedDate, 1))}
          className="w-3 h-3 ml-2 mr-4 text-blue-300 cursor-pointer hover:text-blue-400"
          data-testid="chevron-double-right"
        />
      </div>
      <button
        onClick={toggleView}
        className="w-40 h-10 mb-0.5 space-x-1 text-sm bg-white border rounded-md outline-none border-slate-300 focus:ring-2 ring-blue-300 ring-offset-1"
        data-testid="toggle-view-button"
      >
        {isYearlyView ? "Monthly View" : "Yearly View"}
      </button>
      <div className="flex space-x-2">
        <CountrySelector />
        <TypeSelector />
      </div>
    </div>
  );
};
