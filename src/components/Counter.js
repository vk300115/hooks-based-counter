import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography  from "@mui/material/Typography";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

export const Counter = () => {
  return (
    <Box sx={{
      marginBottom: "10px",
      border: "1px solid black",
    }}>
    <Typography variant="h5" component="h2" gutterBottom sx={{
      textAlign: "center",
    }}>
        Counter: 0
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs: "column", sm: "row" },
        justifyContent: "space-evenly",
      }}>
      <Button 
      variant="contained" 
      color="warning" 
      sx={{ margin: "10px" }}
      startIcon={<RemoveCircleOutlineIcon/>}>
        Decrement</Button>
      <Button 
      variant="contained" 
      color="error" 
      sx={{ margin: "10px" }}
     >
        Reset</Button>
      <Button 
      variant="contained" 
      color="success" 
      sx={{ margin: "10px" }}
      startIcon={<AddCircleOutlineTwoToneIcon/>}>
        Increment</Button>
    </Box>
    </Box>
  );
};