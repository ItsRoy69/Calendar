import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DayModal } from "../components/DayModal/DayModal"; // Update the import path accordingly
import { ModalContext } from "../context/ModalContext";
import { IDay } from "../models/IDay";

afterEach(cleanup);

describe("DayModal test", () => {
    const mockModalContextValue = {
      setModalDay: jest.fn(),
      modalDay: {
        date: new Date(),
        display: "01", // Add the missing properties
        isOutOfRange: false,
        isToday: false,
        isSelected: false,
        events: [
          {
            name: "Example Event",
            types: ["Type1", "Type2"],
            description: "Example event description",
            locations: "Location1, Location2",
          },
        ],
      } as IDay,
    };

    test("Should render the component with modal data", () => {
        render(
          <ModalContext.Provider value={mockModalContextValue}>
            <DayModal />
          </ModalContext.Provider>
        );
    
        const modalComponent = screen.getByTestId("day-modal");
        expect(modalComponent).toBeInTheDocument();
  });

  test("Should not render the component when modalDay is undefined", () => {
    const { setModalDay } = mockModalContextValue;
    render(
      <ModalContext.Provider value={{ setModalDay, modalDay: undefined }}>
        <DayModal />
      </ModalContext.Provider>
    );

    const modalComponent = screen.queryByTestId("day-modal");
    expect(modalComponent).toBeNull();
  });
});
