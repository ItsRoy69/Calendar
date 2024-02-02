import { QueryClient, QueryClientProvider } from "react-query";
import { DayModal } from "./components/DayModal/DayModal";
import { Calendar } from "./components/Calendar/Calendar";
import { Header } from "./components/Header/Header";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { CalendarProvider } from "./context/CalendarContext";
import { ModalProvider } from "./context/ModalContext";
import "./app.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div data-testid="app">
      <QueryClientProvider client={queryClient}>
        <CalendarProvider>
          <ModalProvider>
            <DayModal />
            <div className="flex flex-col items-center min-h-screen p-4 space-y-2 md:p-8 lg:p-0 bg-red-300">
              <Header />
              <div className="flex flex-col w-full p-2 space-y-4 bg-gray-100 rounded-lg shadow-2xl shadow-slate-400 max-w-7xl sm:p-4 md:p-6 lg:p-8">
                <Toolbar />
                <Calendar />
              </div>
            </div>
          </ModalProvider>
        </CalendarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
