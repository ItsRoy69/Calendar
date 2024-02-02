import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { CalendarContext } from "../context/CalendarContext";
import { IDay } from "../models/IDay";

afterEach(cleanup);

describe("Toolbar test", () => {
  test("Should handle click events on navigation buttons", async () => {
    const setSelectedDateMock = jest.fn();
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
          setSelectedDate: setSelectedDateMock,
          setSelectedHolidayType: jest.fn(),
          isYearlyView: false,
          toggleView: jest.fn(),
        }}
      >
        <Toolbar />
      </CalendarContext.Provider>
    );

    await waitFor(() => {
      const leftDoubleChevron = screen.getByTestId("chevron-double-left");
      const leftChevron = screen.getByTestId("chevron-left");
      const rightChevron = screen.getByTestId("chevron-right");
      const rightDoubleChevron = screen.getByTestId("chevron-double-right");

      fireEvent.click(leftDoubleChevron);
      fireEvent.click(leftChevron);
      fireEvent.click(rightChevron);
      fireEvent.click(rightDoubleChevron);
    });

    expect(setSelectedDateMock).toHaveBeenCalledTimes(4);
  });
});
