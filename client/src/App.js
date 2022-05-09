import React, { Component } from "react";
import GeneStorageContract from "./contracts/GeneStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

// pages
import IndexPage from "./pages/index";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GeneStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        GeneStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };



  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage passaccount={this.state.accounts} passcontract={this.state.contract}/>}></Route>
        </Routes>
      </Router>
      
    );
    
  }
}

export default App;
