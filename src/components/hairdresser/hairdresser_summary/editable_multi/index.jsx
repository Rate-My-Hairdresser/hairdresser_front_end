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
    justifyContent: 'space-between',
    width: 230,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '1.5rem',
    p: 4,
};

const EditableMultiContainer = ( { editable, cid, content, contentFunc} ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [tempContent, setTempContent] = useState("")
    const [newLine, setNewLine] = useState("")
    const [lineContent, setLineContent] = useState("")
    const [, forceUpdate] = useReducer(x => x+1, 0)

    const openEdit = () => {
        var temp = JSON.parse(JSON.stringify(content));
        setTempContent(temp);
        setIsEditing(true);
    }

    const editContent = (e, key) => {
        if (e.target.value.length > 0) {
            var temp = tempContent;
            temp[key] = e.target.value;
            setTempContent(temp)
        }
    }

    const deleteContent = (e, key) => {
        var temp = tempContent;
        delete temp[key];
        setTempContent(temp);
        forceUpdate();
    }

    const newContent = (e) => {
        var temp = tempContent;
        temp[newLine] = lineContent;
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
                        {Object.entries(tempContent).map(([key,value],index) => (
                            <Stack direction={"row"} justifyContent={"space-between"}>
                                <TextField label={key} size="small" onChange={(e) => { editContent(e, key) }} defaultValue={value} variant="outlined" />
                                <IconButton onClick={(e) => { deleteContent(e, key) }}>
                                    <ClearIcon />
                                </IconButton>
                            </Stack>
                        ))}
                        <TextField label={"Contact Type"} size="small" variant="standard" onChange={(e) => { setNewLine(e.target.value) }} />
                        <Stack direction={"row"} justifyContent={"space-between"} paddingBottom={"1rem"}>
                            <TextField label={"Contact Description"} size="small" variant="standard" onChange={(e) => { setLineContent(e.target.value) }} />
                            <IconButton onClick={(e) => { newContent(e) }}>
                                <AddIcon />
                            </IconButton>
                        </Stack>
                        <IconButton onClick={(e) => {contentFunc(e, tempContent, setIsEditing)}} size="small">
                            <CheckIcon /> Confirm
                        </IconButton>
                        <IconButton onClick={(e) => {cancelContent(e)}} size="small">
                            <ClearIcon /> Cancel
                        </IconButton>
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