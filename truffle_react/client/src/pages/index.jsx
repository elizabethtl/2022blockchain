import React from "react";
import Box from '@mui/material/Box';
import Upload from './component/upload';

const IndexPage = (props) => {
  const [value, setValue] = React.useState(0);
  const accounts = props.passaccount;
  const contract = props.passcontract;

  const runExample = async (accounts, contract) => {
    console.log("accounts");
    console.log(accounts);


    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    setValue(response);
  };

  const uploadGene = async (data) => {
    console.log("upload gene");

    // upload acc, gene to contract
    await contract.methods.update(data.id, data.gene, accounts[0]).send({ from: accounts[0] });
    const response_gene = await contract.methods.getCT(data.id).call();
    const response_addr = await contract.methods.getAddr(data.id).call();
    if(response_gene && response_addr){
      alert('已上傳');
      console.log("gene", response_gene);
      console.log("addr", response_addr);
    }
  }



  return (

    <div>

      <button
        onClick={() => runExample(accounts, contract)}>
      </button>
      <p>index page</p>
      <div>The storedddd value is: {value}</div>


      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 500
      }}>
        <h3>i am a box</h3>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '12px',
          boxShadow: 2,
          margin: '5px',
          padding: '10px'
        }}>
          <h4>i am the inner box</h4>
          <Upload onUpload={uploadGene}/>
        </Box>
      </Box>
    </div>
  );
}

export default IndexPage;