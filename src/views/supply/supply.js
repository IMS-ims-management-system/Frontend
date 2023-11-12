import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CButton } from '@coreui/react'
import ModalBasic from '../supply/css/modalBasic.css'

const Supply = () => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  }

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  }

  const evenRowStyle = {
    backgroundColor: '#f9f9f9',
  }
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 22 },
  ]
  const showModal = () => {
    setModalOpen(true)
  }

  const [tableData, setTableData] = useState(data)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>id</th>
          <th style={cellStyle}>이름</th>
          <th style={cellStyle}>카테고리</th>
          <th style={cellStyle}>현재수량</th>
          <th style={cellStyle}>특이사항</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={row.id} style={index % 2 === 0 ? evenRowStyle : {}}>
            <td style={cellStyle}>{row.id}</td>
            <CButton color="info">{row.name}</CButton>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
            <td style={cellStyle}>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Supply
