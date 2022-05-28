import React, { useState } from "react"
import Box from '@mui/material/Box';
import Header from "./component/Header";
import Author from "./component/Author"
import GeneGet from "./component/GeneGet"
import { Stack, TextareaAutosize } from "@mui/material";



const AuthorPage = ({ account, contract }) => {
    const [gene, setGene] = useState('')

    const authorSummit = async (data) => {
        // 開始和欲取得授權的用戶傳送訊息
        console.log("Start to communicate!")
    }

    const keySummit = async (data) => {
        // 拿到紅色私鑰，可以把拿到的加密後的綠色私鑰解開
        if (data.key) {
            let sequence = data.key;
            console.log("private key", data.key);
            setGene(sequence);

        }
    }

    
      


    return (
        <div className="container">
            <Header title='基因授權與資料' />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: 2,
                    padding: '20px',
                    margin: '50px',
                }}>
                <br />
                <Stack
                    direction="row"
                    alignItems="flex-start"
                    spacing={2}
                >
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

                        <Author onType={authorSummit} />

                    </Box>

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
                            alignItems="center"
                            spacing={1}
                        >
                            <GeneGet onType={keySummit}/>
                            <TextareaAutosize
                                style={{resize: "none", width: "600px", height: "200px"}}
                                value={gene}
                            >
                        
                            </TextareaAutosize>


                        </Stack>

                    </Box>
                </Stack>

            </Box>

        </div>
    )
}

export default AuthorPage;