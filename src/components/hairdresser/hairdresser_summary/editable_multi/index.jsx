import { IconButton, Stack, TextField } from "@mui/material";
import { SubText, MiniHeaderText } from "../../../../general/Text";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';

const EditableMultiContainer = ( { editable, cid, clabel, content, setContent, contentError, contentFunc} ) => {
    const [isEditing, setIsEditing] = useState(false)

    if (isEditing) {
        setContent(content)
        return (
            <Stack direction={"row"}>
                <TextField id={cid} label={clabel} size="small" onChange={(event) => { setContent(event.target.value) }} error={contentError} defaultValue={content} multiline={true} />
                <IconButton onClick={(e) => {contentFunc(e, setIsEditing)}}>
                    <CheckIcon />
                </IconButton>
            </Stack>
        )
    } else {
        return (
            <>
                <MiniHeaderText style={{ fontSize: '19px' }}>{cid}:</MiniHeaderText>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <SubText style={{ fontSize: '19px', marginBottom: '8px', marginTop: '-2px' }}>{content}</SubText>
                    {editable ? <IconButton onClick={(e) => {setIsEditing(true)}}   
                        ><EditIcon fontSize="small" />
                        </IconButton> : null}
                </Stack>
            </>
        )
    }
}

export default EditableMultiContainer;