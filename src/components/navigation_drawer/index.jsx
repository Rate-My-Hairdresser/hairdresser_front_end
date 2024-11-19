


export default function TopAnchoredMenu() {
    
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="text">
                Text
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button variant="text">
                Favorite
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button variant="text">
                Settings
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button variant="text">
                Login
            </Button>
        </Stack>
    )
    
}