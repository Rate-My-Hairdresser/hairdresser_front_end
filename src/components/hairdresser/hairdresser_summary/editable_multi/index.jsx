import { IconButton, Modal, Stack, TextField, Box } from "@mui/material";
import { SubText, MiniHeaderText } from "../../../../general/Text";
import CheckIcon from '@mui/icons-material/Check';
import { useReducer, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditableMultiContainer = ( { editable, cid, content, contentFunc} ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [tempContent, setTempContent] = useState("")
    const [newLine, setNewLine] = useState("")
    const [, forceUpdate] = useReducer(x => x+1, 0)

    const openEdit = () => {
        var temp = JSON.parse(JSON.stringify(content));
        setTempContent(temp);
        setIsEditing(true);
    }

    const editContent = (e, key) => {
        var temp = tempContent;
        if (e.target.value.length > 0) {
            temp[key] = e.target.value;
        } else {
            delete temp[key];
        }
        setTempContent(temp)
    }

    const newContent = (e) => {
        var temp = tempContent;
        temp[newLine] = "TBD"
        setTempContent(temp);
        forceUpdate();
    }

    const cancelContent = (e) => {
        setIsEditing(false)
        forceUpdate();
    }

    const handleClose = () => {
        forceUpdate();
    }

    return (
        <>
            <Modal
                open={isEditing}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Stack direction={"column"}>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <MiniHeaderText style={{ fontSize: '19px' }}>{cid}:</MiniHeaderText>
                            <IconButton onClick={(e) => {contentFunc(e, tempContent, setIsEditing)}}>
                                <CheckIcon />
                            </IconButton>
                            <IconButton onClick={(e) => {cancelContent(e)}}>
                                <ClearIcon />
                            </IconButton>
                        </Stack>
                        {Object.entries(tempContent).map(([key,value],index) => (
                            <TextField label={key} size="small" onChange={(e) => { editContent(e, key) }} defaultValue={value} variant="standard" />    
                        ))}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <TextField label={"New Contact to Add"} size="small" variant="standard" onChange={(e) => { setNewLine(e.target.value) }} />
                            <IconButton onClick={(e) => { newContent(e) }}>
                                <AddIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <MiniHeaderText style={{ fontSize: '19px' }}>{cid}:</MiniHeaderText>
                {editable ? <IconButton onClick={(e) => {openEdit()}}
                    ><EditIcon fontSize="small" />
                    </IconButton> : null}
            </Stack>
            {Object.entries(content).map(([key,value], index) => (
                <SubText style={{ fontSize: '19px', marginBottom: '0px', marginTop: '-2px' }}>
                    {key}: {value}
                </SubText>
            ))}
        </>
    )
}

export default EditableMultiContainer;