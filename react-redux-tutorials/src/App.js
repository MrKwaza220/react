import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from './state/action-creators/index';
import './App.css';

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreator, dispatch)


  return (
    <div className="App">
      {account}
      <button onClick={() => depositMoney}>Deposit</button>
      <button onClick={() => withdrawMoney}>withdraw</button>
    </div>
  );
}

export default App;
