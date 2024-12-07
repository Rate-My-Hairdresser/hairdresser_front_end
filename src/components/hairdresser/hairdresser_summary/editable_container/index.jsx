import { Box, IconButton, Modal, Stack, TextField } from "@mui/material";
import { SubText, MiniHeaderText } from "../../../../general/Text";
import CheckIcon from '@mui/icons-material/Check';
import { useReducer, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
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

const EditableContainer = ( { editable, cid, clabel, cvalue, content, setContent, contentError, contentFunc} ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [, forceUpdate] = useReducer(x => x+1, 0)
    
    const handleClose = () => {
        setContent(content)
        forceUpdate()
    }

    return (
        <>
            <Modal
                open={isEditing}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Stack direction={"column"}>
                        <TextField id={cid} label={clabel} size="small" onChange={(event) => { setContent(event.target.value) }} error={contentError} defaultValue={content} multiline={true} />
                        <IconButton onClick={(e) => {contentFunc(e, setIsEditing)}} size="small">
                            <CheckIcon /> Confirm
                        </IconButton>
                        <IconButton onClick={(e) => {setIsEditing(false)}} size="small">
                            <ClearIcon /> Cancel
                        </IconButton>
                    </Stack>
                </Box>
            </Modal>
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

export default EditableContainer;