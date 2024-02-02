import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TypeSelector } from "../components/TypeSelector/TypeSelector";
import { CalendarContext } from "../context/CalendarContext";
import { IDay } from "../models/IDay";

afterEach(cleanup);

describe("TypeSelector test", () => {
  test("Should handle selection and reset events", async () => {
    const setSelectedHolidayTypeMock = jest.fn();
    const datesInMonth: IDay[][] = [
      [
        {
          date: new Date(2024, 1, 1),
          events: [],
          display: "1",
          isOutOfRange: false,
          isToday: false,
          isSelected: false,
        },
        {
          date: new Date(2024, 1, 2),
          events: [],
          display: "2",
          isOutOfRange: false,
          isToday: false,
          isSelected: false,
        },
      ],
    ];
    const holidayTypes = ["Holiday1", "Holiday2", "Holiday3"];

    render(
      <CalendarContext.Provider
        value={{
          currentMonth: "February",
          currentYear: "2024",
          datesInMonth,
          holidayTypes,
          isFetchingHolidays: false,
          selectedCountry: {
            code: "US",
            name: "United States",
            imgSrc: "",
          },
          selectedDate: new Date(2024, 1, 24),
          selectedHolidayType: "someHolidayType",
          setSelectedCountry: jest.fn(),
          setSelectedDate: jest.fn(),
          setSelectedHolidayType: setSelectedHolidayTypeMock,
          isYearlyView: false,
          toggleView: jest.fn(),
        }}
      >
        <TypeSelector />
      </CalendarContext.Provider>
    );

    // Click on the button to open the dropdown
    fireEvent.click(screen.getByText("someHolidayType"));

    // Now find and click the reset button within the dropdown
    fireEvent.click(screen.getByTestId("reset-button"));
  });
});
