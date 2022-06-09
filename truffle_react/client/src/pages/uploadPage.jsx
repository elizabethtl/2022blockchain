import React from "react"
import Box from '@mui/material/Box';
import Upload from './component/Upload'
import Header from "./component/Header";
import {Encode, Decode} from "../encrypt/simple_encrypt.js"

// console.log("encode: ", Encode('456', '123'))

const UploadPage = ({ account, contract }) => {
    console.log(account)

    const uploadSummit = async (data) => {

        const encodeGene = Encode(data.gene, data.key)

        await contract.methods.update(data.id, encodeGene, account[0]).send({ from: account[0] });
        const response_gene = await contract.methods.getCT(data.id).call();
        const response_account = await contract.methods.getAddr(data.id).call();

        
        if (response_gene && response_account) {
            alert('已上傳')
            console.log("gene: ", response_gene);
            console.log("account: ", response_account);
        }

    }


    return (
        <div className="container">
            <Header title='基因上傳' />

            <Box

                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: 2,
                    padding: '20px',
                    margin: '50px',
                    // height: '50%',
                }}

                
            >
                
                <Upload onType={uploadSummit} />

            </Box>


        </div>
    )


}



export default UploadPage;