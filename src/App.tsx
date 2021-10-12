import { Home } from "./presentation/page";
import "./App.css";
import { ApiProvider } from "./infrastructure/service/api";
import { QueryClientProvider } from "./infrastructure/service/query";

function App() {
  return (
    <div className="App">
      <QueryClientProvider>
        <ApiProvider>
          <Home />
        </ApiProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
