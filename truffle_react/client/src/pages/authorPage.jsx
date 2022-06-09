import React, { useState } from "react"
import Box from '@mui/material/Box';
import Header from "./component/Header";
import Author from "./component/Author"
import GeneGet from "./component/GeneGet"
import { Stack, TextareaAutosize } from "@mui/material";
import {Encode, Decode} from "../encrypt/simple_encrypt.js"



const AuthorPage = ({ account, contract }) => {
    const [gene, setGene] = useState('')

    const authorSummit = async (data) => {
        // 開始和欲取得授權的用戶傳送訊息
        console.log("Start to communicate!")
        window.location.href = "../msg_home";
    }

    const keySummit = async (data) => {
        // 拿到紅色私鑰，可以把拿到的加密後的綠色私鑰解開
        const response_gene = await contract.methods.getCT(data.id).call();
        
        if(!response_gene) { alert("Locus不存在，請重新輸入!"); return; }

        const decodeGene = Decode(response_gene, data.key)
        
        if (decodeGene) {
            console.log("decodeGene: ", decodeGene);
            setGene(decodeGene);

        }
    }

    
      


    return (
        <div className="container">
            <Header title='基因授權與資料' />
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
                }}>
                <br />
                
                    {/* <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // m: 3,
                            borderRadius: '12px',
                            boxShadow: 2,
                            margin: '50px',
                            padding: '20px',
                            backgroundColor: 'white'
                        }}
                    >

                        <Author onType={authorSummit} />

                    </Box> */}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // m: 3,
                            borderRadius: '12px',
                            boxShadow: 2,
                            margin: '50px',
                            padding: '20px',
                            backgroundColor: 'white'
                        }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="start"
                            spacing={2}
                        >
                            <GeneGet onType={keySummit}/>
                            <TextareaAutosize
                                style={{resize: "none", width: "600px", height: "200px"}}
                                // style={{resize: "none"}}
                                value={gene}
                            >
                        
                            </TextareaAutosize>


                        </Stack>

                    </Box>

            </Box>

        </div>
    )
}

export default AuthorPage;