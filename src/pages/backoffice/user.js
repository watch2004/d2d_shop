import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Chip } from '@mui/material'
import { StyledDataGrid } from 'src/views/backoffice/styled'

const User = () => {
  const [Userlist, setUserlist] = useState([])

  useEffect(() => {
    axios.get('http://111.223.38.19/api/method/frappe.API.TCTM.backoffice.users.alluser').then(response => {
      // console.log('setUser:', response.data.message.Data)
      setUserlist(response.data.message.Data)
    })
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = () => {
    axios
      .get('http://111.223.38.19/api/method/frappe.API.TCTM.backoffice.users.alluser')
      .then(response => {
        setUserlist(response.data.message.Data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const handleBanClick = (account_id, member_id) => {
    // ทำสิ่งที่คุณต้องการเมื่อคลิกปุ่ม Ban
    console.log(`Ban account with ID ${account_id}`)

    axios
      .post('http://111.223.38.19/api/method/frappe.API.TCTM.backoffice.users.banuser', {
        account_id,
        user_id: member_id // ส่ง account_id ไปที่ API
      })
      .then(response => {
        console.log('UserID', response)
        fetchUserData()
        // ทำอย่างอื่นตามความต้องการ
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const handleUnbanClick = (account_id, member_id) => {
    // ทำสิ่งที่คุณต้องการเมื่อคลิกปุ่ม Unban
    console.log(`Unban account with ID ${account_id}`)

    axios
      .post('http://111.223.38.19/api/method/frappe.API.TCTM.backoffice.users.unbanuser', {
        account_id,
        user_id: member_id // ส่ง account_id ไปที่ API
      })
      .then(response => {
        console.log('UserID', response)
        fetchUserData()
        // ทำอย่างอื่นตามความต้องการ
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const handleDeleteClick = (account_id, member_id) => {
    // ทำสิ่งที่คุณต้องการเมื่อคลิกปุ่ม Delete
    console.log(`Delete account with ID ${account_id}`)
  }

  const handleUndeleteClick = (account_id, member_id) => {
    // ทำสิ่งที่คุณต้องการเมื่อคลิกปุ่ม Undelete
    console.log(`Undelete account with ID ${account_id}`)
  }

  return (
    <StyledDataGrid
      autoHeight
      rows={Userlist.map(val => ({ ...val, id: val.account_id, sub_status: val.account_status.toString() }))} // เพิ่มคุณสมบัติ id ในแต่ละแถว
      getRowId={account_id => account_id.id} // กำหนดให้ใช้คุณสมบัติ id เป็น id ของแถว
      columns={[
        { field: 'account_id', headerName: 'ID', width: 120 },
        {
          field: 'account_status',
          headerName: 'สถานะไอดี',
          width: 120,
          renderCell: params => {
            const subStatus = params.value // ค่าที่อยู่ในช่อง "สถานะไอดี"
            let chipColor = 'default'
            let chipLabel = ''

            if (subStatus === '1') {
              chipColor = 'warning'
              chipLabel = 'รอการยืนยัน'
            } else if (subStatus === '2') {
              chipColor = 'success'
              chipLabel = 'ปกติ'
            } else if (subStatus === '0') {
              chipColor = 'error'
              chipLabel = 'โดนแบน'
            }

            return <Chip label={chipLabel} color={chipColor} />
          }
        },
        { field: 'member_id', headerName: 'รหัสซัพาย', width: 80 },
        { field: 'sub_id', headerName: 'รหัสมาชิก', width: 80 },
        { field: 'user_company', headerName: 'บริษัท', width: 150 },
        { field: 'user_first_name', headerName: 'ชื่อ', width: 150 },
        { field: 'user_last_name', headerName: 'นามสกุล', width: 80 },
        { field: 'user_role', headerName: 'กลุ่ม', width: 80 },
        {
          field: 'actions',
          headerName: 'ปุ่ม',
          width: 400, // ปรับขนาดตามความต้องการ
          renderCell: params => (
            <div>
              <Button
                variant='contained'
                color='success'
                className='btn btn-info'
                style={{ marginRight: '5px' }}
                onClick={() => {
                  if (params.row.account_status !== '0') {
                    // ตรวจสอบว่าไม่ใช่ "ยืนยันแล้ว"
                    handleBanClick(params.row.account_id, params.row.member_id)
                  }
                }}
                disabled={params.row.account_status === '0'} // ปิดปุ่มถ้า account_status เป็น 0
              >
                Ban
              </Button>

              <Button
                variant='contained'
                color='success'
                className='btn btn-info'
                style={{ marginRight: '5px' }}
                onClick={() => {
                  if (params.row.account_status !== '2') {
                    // ตรวจสอบว่าไม่ใช่ "ยืนยันแล้ว"
                    handleUnbanClick(params.row.account_id, params.row.member_id)
                  }
                }}
                disabled={params.row.account_status === '1' || params.row.account_status === '2'} // ปิดปุ่มถ้า account_status เป็น 1 หรือ 2
              >
                Unban
              </Button>
              {/* <Button
                  variant='contained'
                  color='success'
                  className='btn btn-info'
                  style={{ marginRight: '5px' }}
                  onClick={() => handleDeleteClick(params.row.account_id, params.row.member_id)}
                >
                  Delete
                </Button>
                <Button
                  variant='contained'
                  color='success'
                  className='btn btn-info'
                  style={{ marginRight: '5px' }}
                  onClick={() => handleUndeleteClick(params.row.account_id, params.row.member_id)}
                >
                  Undelete
                </Button> */}
            </div>
          )
        }
      ]}
    />
  )
}

export default User
