import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CalendarCell } from "../components/Calendar/CalendarCell";
import { CalendarContext } from "../context/CalendarContext";
import { ModalContext } from "../context/ModalContext";
import { IDay } from "../models/IDay";

afterEach(cleanup);

describe("CalendarCell test", () => {
    
  const mockDay: IDay = {
    date: new Date(),
    display: "01",
    events: [],
    isToday: true,
    isOutOfRange: false,
    isSelected: false,
  };

  const setModalDay = jest.fn();

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
            code: "US",
            name: "United States",
            imgSrc: "",
          },
          selectedDate: new Date(2024, 1, 24),
          selectedHolidayType: "someHolidayType",
          setSelectedCountry: jest.fn(),
          setSelectedDate: jest.fn(),
          setSelectedHolidayType: jest.fn(),
          isYearlyView: false,
          toggleView: jest.fn(),
        }}
      >
        <ModalContext.Provider value={{ setModalDay }}>
          <CalendarCell day={mockDay} />
        </ModalContext.Provider>
      </CalendarContext.Provider>
    );

    const calendarCell = screen.getByTestId("calendar-cell");
    expect(calendarCell).toBeInTheDocument();
  });
});
