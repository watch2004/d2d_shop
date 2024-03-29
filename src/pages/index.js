// ** React Imports
import { React } from 'react'

// ** Next Import
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** Material UI Imports
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  TextField,
  Typography
} from '@mui/material'

// ** custom components
import Billboard from 'src/views/homepage/Billboard'
import NameMarket from 'src/views/homepage/NameMarket'
import ShowProducts from 'src/views/homepage/ShowProducts'
import ShowProducts2 from 'src/views/homepage/ShowProducts2'

// ** Utils Imports
import { withAuth } from '../@core/utils/AuthCheck'

const Dashboard = () => {
  return (
    <Container maxWidth='xl'>
      {/* ---------- Billboard ---------- */}
      <Billboard />
      {/* ---------- Category ---------- */}
      <NameMarket />
      {/* ---------- Show Products ---------- */}
      <ShowProducts />
      {/* ---------- Show Products2 ---------- */}
      <ShowProducts2 />
    </Container>
  )
}

export default withAuth(Dashboard)
