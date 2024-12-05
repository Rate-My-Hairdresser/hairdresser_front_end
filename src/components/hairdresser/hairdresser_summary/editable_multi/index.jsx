import { IconButton, Stack, TextField } from "@mui/material";
import { SubText, MiniHeaderText } from "../../../../general/Text";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const EditableMultiContainer = ( { editable, cid, content, contentFunc} ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [tempContent, setTempContent] = useState(content)
    const [newLine, setNewLine] = useState("")

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
        setIsEditing(false);
        setIsEditing(true);
    }

    const cancelContent = (e) => {
        setTempContent(content)
        setIsEditing(false)
    }

    if (isEditing) {
        return (
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
        )
    } else {
        return (
            <>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <MiniHeaderText style={{ fontSize: '19px' }}>{cid}:</MiniHeaderText>
                    {editable ? <IconButton onClick={(e) => {setIsEditing(true)}}
                        ><EditIcon fontSize="small" />
                        </IconButton> : null}
                </Stack>
                {Object.entries(tempContent).map(([key,value], index) => (
                    <SubText key={key} style={{ fontSize: '19px', marginBottom: '0px', marginTop: '-2px' }}>
                        {key}: {value}
                    </SubText>
                ))}
            </>
        )
    }
}

export default EditableMultiContainer;