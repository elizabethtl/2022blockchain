import React, { useState } from "react"
import Box from '@mui/material/Box';
import { Button, Snackbar, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Header from "./component/Header";
import Author from "./component/Author"
import GeneGet from "./component/GeneGet"
import { Stack, TextareaAutosize } from "@mui/material";
import { Encode, Decode } from "../encrypt/simple_encrypt.js"
import BootstrapButton from "./style/color_button";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CssTextField from "./style/color_textfield";



const AuthorPage = ({ account, contract }) => {
    const [gene, setGene] = useState('')
    const [snackbar, setSnackbar] = useState('')
    const [open, setOpen] = React.useState(false);



    const keySummit = async (data) => {
        // 拿到紅色私鑰，可以把拿到的加密後的綠色私鑰解開
        const response_gene = await contract.methods.getCT(data.id).call();

        if (!response_gene) { alert("Locus不存在，請重新輸入!"); return; }

        const decodeGene = Decode(response_gene, data.key)

        if (decodeGene) {
            console.log("decodeGene: ", decodeGene);
            setGene(decodeGene);

        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(gene);
        setSnackbar(true);
    }

    const handleClose = () => {
        setOpen(false);
    };


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));




    return (
        <div className="container">
            <Header title='基因授權與資料' />



            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // m: 3,
                    borderRadius: '12px',
                    boxShadow: 2,
                    margin: '50px',
                    padding: '20px',
                    // maxWidth: '500px',
                    backgroundColor: 'white'
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    <GeneGet onType={keySummit} />

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'end',
                            // '& > :not(style)': {
                            //     m: 1,
                            //     width: 128,
                            //     height: 128,
                            // },
                        }}
                    >
                        {/* <TextareaAutosize
                            style={{ resize: "none", minWidth: "400px", minHeight: "200px" }}
                            value={gene}
                            inputProps={
                                { readOnly: true, }
                            }
                        >
                        </TextareaAutosize> */}

                        <CssTextField
                            style={{ minWidth: "400px", minHeight: "200px" }}
                            value={gene}
                            inputProps={
                                { readOnly: true, }
                            }
                            multiline
                            rows={8}
                        >
                            <Button onClick={copyToClipboard}><ContentCopyIcon /></Button>

                        </CssTextField>

                        <Button onClick={copyToClipboard}><ContentCopyIcon /></Button>

                        <Snackbar
                            open={snackbar}
                            autoHideDuration={3000}
                            onClose={handleClose}
                            message="已複製基因序列"
                        />

                    </Box>



                </Stack>

            </Box>



        </div>
    )
}

export default AuthorPage;