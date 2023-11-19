import React, { useState } from 'react'
import axios from 'axios' // Import Axios
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormCheck,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilAddressBook,
  cilUserPlus,
  cilPeople,
  cilPhone,
  cilCalendar,
  cilLockLocked,
  cilMap,
} from '@coreui/icons'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [studentId, setStudentId] = useState('')
  const [selectedGrade, setSelectedGrade] = useState('')
  const [gender, setGender] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [birth, setBirth] = useState('')
  const [address, setAddress] = useState('')

  const gradeOptions = [
    '학사 1년차',
    '학사 2년차',
    '학사 3년차',
    '학사 4년차',
    '석사 과정',
    '박사 과정',
  ]
  const handleCreateAccount = async () => {
    const userData = {
      role: 'USER',
      name,
      email,
      password,
      studentid: studentId,
      grade: selectedGrade,
      gender,
      phone: phoneNumber,
      birth,
      address,
    }

    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        mode: 'cors',
      })
      if (response.ok) {
        console.log(response.ok)
      } else {
        console.error('로그인 실패')
      }
    } catch (error) {
      console.error('오류 발생:', error)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="이름"
                      autoComplete="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilAddressBook} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="비밀번호"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="비밀번호 재입력"
                      autoComplete="new-password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUserPlus} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="학번"
                      autoComplete="student-id"
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUserPlus} />
                    </CInputGroupText>
                    <div className="d-flex align-items-center justify-content-center w-50">
                      <CDropdown>
                        <CDropdownToggle color="light" caret>
                          {selectedGrade || '학년을 선택하세요'}
                        </CDropdownToggle>
                        <CDropdownMenu>
                          {gradeOptions.map((option) => (
                            <CDropdownItem key={option} onClick={() => setSelectedGrade(option)}>
                              {option}
                            </CDropdownItem>
                          ))}
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPeople} />
                    </CInputGroupText>
                    <div className="mx-5 d-flex align-items-center justify-content-center w-50">
                      <CFormCheck
                        type="checkbox"
                        id="maleCheckbox"
                        label="Male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                      />
                      <div className="mx-5" /> {/* Add margin between checkboxes */}
                      <CFormCheck
                        type="checkbox"
                        id="femaleCheckbox"
                        label="Female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                      />
                    </div>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="휴대폰 번호(-없이)"
                      autoComplete="phone-number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCalendar} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="생년월일(ex 000224)"
                      autoComplete="birth"
                      onChange={(e) => setBirth(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilMap} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="주소"
                      autoComplete="address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handleCreateAccount}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
