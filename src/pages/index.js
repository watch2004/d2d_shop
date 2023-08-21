// pages/index.js
import React from 'react'
import { Grid, Box, TablePagination, TextField } from '@mui/material'
import ProductCard from '../views/Home/card'
import ProductImageCard from '../views/Home/category'
import { useState } from 'react'
// import productsData from '../../dummy/productsdummy';

const productsPreview = [
  {
    name: 'พระกายแก้ว',
    description: 'เป็นตัวประหลาดสักอย่างนี้ละ',
    price: 100,
    image: '../../../img/2023-08-18 090802.png' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'นาริฬาหยุดเวลา',
    description: 'ไม่รู้ไม่ชี้',
    price: 200,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'พระกายแก้ว',
    description: 'เป็นตัวประหลาดสักอย่างนี้ละ',
    price: 100,
    image: '../../../img/2023-08-18 090802.png' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'นาริฬาหยุดเวลา',
    description: 'ไม่รู้ไม่ชี้',
    price: 200,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  }
]
const productsData = [
  {
    name: 'พระกายแก้ว',
    description: 'เป็นตัวประหลาดสักอย่างนี้ละ',
    price: 100,
    image: '../../../img/2023-08-18 090802.png' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'นาริฬาหยุดเวลา',
    description: 'ไม่รู้ไม่ชี้',
    price: 200,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 3',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
  {
    name: 'ชิ้นที่ 4',
    description: 'ไม่รู้ไม่ชี้',
    price: 500,
    image: '/images/product2.jpg' // ตั้งค่า path รูปภาพ
  },
]

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(12)

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setCurrentPage(0)
  }

  const startIndex = currentPage * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const visibleProducts = productsData.slice(startIndex, endIndex)

  return (
    <div className='container'>
      <div className='container'>
        <h1 className='title'> Category </h1>
        <div className='card-list'>
          <Grid container spacing={6} justifyContent='flex-end'>
            {productsPreview.map((product, index) => (
              <Grid item xs={12} sm={6} md={5} lg={3} key={index}>
                <ProductImageCard name={product.name} image={product.image} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Box>
        <hr />
      </Box>
      <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="ช่องที่ 1" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="ช่องที่ 2" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="ช่องที่ 3" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="ช่องที่ 4" variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </Box>
      <h1 className='title'> ร้านค้าออนไลน์ </h1>
      <TablePagination
        rowsPerPageOptions={[8, 16, 24]} // ตัวเลือกจำนวนแถวต่อหน้า
        component='div'
        count={productsData.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <div className='card-list'>
        <Grid container spacing={6}>
          {visibleProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            </Grid>
          ))}
        </Grid>
        <TablePagination
        rowsPerPageOptions={[8, 16, 24]} // ตัวเลือกจำนวนแถวต่อหน้า
        component='div'
        count={productsData.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </div>
  )
}

export default Home
