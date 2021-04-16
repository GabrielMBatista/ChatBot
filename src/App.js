import GlobalState from './GlobalStates/GlobalState';
import Body from './Modules/BasePage'
function App() {
  return (
      <GlobalState>
        <Body/>
      </GlobalState>
      );
}

export default App;
