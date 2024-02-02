import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CalendarContext } from "../context/CalendarContext";
import { CountrySelector } from "../components/CountrySelector/CountrySelector";

afterEach(cleanup);

describe("CountrySelector test", () => {
  const mockContextValue = {
    currentMonth: "February",
    currentYear: "2024",
    datesInMonth: [[]],
    holidayTypes: ["none"],
    isFetchingHolidays: false,
    selectedCountry: {
      code: "US",
      name: "United States",
      imgSrc: "mock-image-url",
    },
    selectedDate: new Date(),
    selectedHolidayType: "someHolidayType",
    setSelectedCountry: jest.fn(),
    setSelectedDate: jest.fn(),
    setSelectedHolidayType: jest.fn(),
    isYearlyView: false,
    toggleView: jest.fn(),
  };

  test("Should render the component", () => {
    render(
      <CalendarContext.Provider value={mockContextValue}>
        <CountrySelector />
      </CalendarContext.Provider>
    );

    const countrySelector = screen.getByTestId("country-selector");
    expect(countrySelector).toBeInTheDocument();
  });

  test("Should update input value on change", () => {
    render(
      <CalendarContext.Provider value={mockContextValue}>
        <CountrySelector />
      </CalendarContext.Provider>
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Canada" } });

    expect((inputElement as HTMLInputElement).value).toBe("Canada");
  });
});
