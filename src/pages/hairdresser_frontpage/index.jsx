import {Button, Grid2, Typography, TextField} from "@mui/material";
import HairDresserSignInBtn from "../../components/hairdresser_login/SignInButton";
import {useState} from "react";

export default function HairdresserFrontPage() {
    const [filterOn, setFilterOn] = useState(false);
    const [query, setQuery] = useState("");
    const [searchOn, setSearchOn] = useState(false);

    const handleFilter = () => {
        if (filterOn) {
            setFilterOn(false);
        } else {
            setFilterOn(true);
        }
    }
    const handleSearch = () => {
        setSearchOn(true);
    }

    return (
        <Grid2 container spacing={2} rowSpacing={5} margin={7} columns={16}>
            {/*This is line 1*/}
            <Grid2 size={2}>
            </Grid2>
            <Grid2 size={8}>
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{ width: '100%', fontSize: 'clamp(3rem, 10vw, 2.15rem)' }}
                >
                    Rate My Hairdresser
                </Typography>
            </Grid2>
            <Grid2 size={4}>
                <HairDresserSignInBtn/>
            </Grid2>
            <Grid2 size={2}>
            </Grid2>

            {/*This is line 2*/}
            <Grid2 size={3}>
            </Grid2>
            <Grid2 size={1}>
                <Button
                    type={"button"}
                    size={"large"}
                    fullWidth
                    variant={"contained"}
                    onClick={handleFilter}
                >
                    Filter
                </Button>
            </Grid2>
            <Grid2 size={4}>
                <TextField
                    name="query"
                    placeholder="search..."
                    type="query"
                    id="query"
                    autoComplete="search"
                    fullWidth
                    variant="outlined"
                    color={'primary'}
                />
            </Grid2>
            <Grid2 size={1}>
                <Button
                    type={"button"}
                    fullWidth
                    size={"large"}
                    variant={"contained"}
                    onClick={handleFilter}
                >
                    Search
                </Button>
            </Grid2>
            <Grid2 size={2}>
            </Grid2>
        </Grid2>
    )
}