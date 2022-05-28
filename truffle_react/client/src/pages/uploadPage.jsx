import React from "react"
import Box from '@mui/material/Box';
import Upload from './component/Upload'
import Header from "./component/Header";


const UploadPage = ({ account, contract }) => {
    console.log(account)

    const uploadSummit = async (data) => {
        await contract.methods.update(data.id, data.gene, account[0]).send({ from: account[0] });
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
                    m: 3,
                    maxWidth: 1000,
                    minWidth: 1000,
                    maxHeight: 400,
                    minHeight: 400,
                    borderRadius: '12px',
                    boxShadow: 2,
                    margin: '50px',
                    padding: '10px',
                    backgroundColor: 'white'
                }}
            >
                <br />
                <Upload onType={uploadSummit} />

            </Box>


        </div>
    )


}



export default UploadPage;