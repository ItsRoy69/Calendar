import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Calendar } from "../components/Calendar/Calendar";
import { CalendarContext } from "../context/CalendarContext";
import { IDay } from "../models/IDay";

afterEach(cleanup);

describe("Calendar test", () => {
  test("Should render the component", () => {
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

    render(
      <CalendarContext.Provider
        value={{
          currentMonth: "February",
          currentYear: "2024",
          datesInMonth,
          holidayTypes: ["none"],
          isFetchingHolidays: false,
          selectedCountry: {
            code: "US", name: "United States",
            imgSrc: ""
          },
          selectedDate: new Date(2024, 1, 24),
          selectedHolidayType: "someHolidayType",
          setSelectedCountry: jest.fn(),
          setSelectedDate: jest.fn(),
          setSelectedHolidayType: jest.fn(),
        }}
      >
        <Calendar />
      </CalendarContext.Provider>
    );

    const calendarComponent = screen.getByTestId("calendar-component");
    expect(calendarComponent).toBeInTheDocument();
  });
});
