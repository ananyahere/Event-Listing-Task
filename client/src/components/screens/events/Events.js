import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Events() {

  const [APIdata, setAPIdata] = useState([])

  useEffect(async () => {
    const response = await fetch("/events", {
      method: "GET",
      headers: {
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    })
    const data = await response.json()
    setAPIdata(data)
  }, [])

  return (
    <>
    <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>TITLE</TableCell>
              <TableCell align='center'>DESC</TableCell>
              <TableCell align='center'>DURATION(HRS)</TableCell>
              <TableCell align='center'>CAPACITY</TableCell>
              <TableCell align='center'>DOOR TIME</TableCell>
              <TableCell align='center'>END TIME</TableCell>
              <TableCell align='center'>LOCATION</TableCell>
              <TableCell align='center'>EVENT STATUS</TableCell>
              <TableCell align='center'>FREE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIdata.map(data => (
              <TableRow
              key={data._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}              
              >
                <TableCell align="center">{data.title}</TableCell>
                <TableCell align="center">{data.description}</TableCell>
                <TableCell align="center">{data.duration}</TableCell>
                <TableCell align="center">{data.maximumAttendeeCapacity}</TableCell>
                <TableCell align="center">{data.doorTime}</TableCell>
                <TableCell align="center">{data.endTime}</TableCell>
                <TableCell align="center">{data.location}</TableCell>
                <TableCell align="center">{data.eventStatus}</TableCell>
                <TableCell align="center">{data.isAccessibleForFree}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}

export default Events