import './App.css';
import Product from './components/product';
import Navbar from './components/navbar';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{
      background: "linear-gradient(0deg, #020408 0%, #0F1D41 100%)"
    }}>
      <Navbar />
      <Product />
    </Box>
  );
}

export default App;
