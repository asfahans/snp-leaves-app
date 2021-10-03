import React from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
//
import FormContainer from '../components/FormContainer'

const ApplyLeaveScreen = () => {
  return (
    <div>
      <FormContainer>
        <h4 className='mb-3'>Apply Leave</h4>
        <Form>
          <Form.Group controlId='summary'>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type='text'
              autoComplete='off'
              placeholder='Summary'
              // value={summary}
              // className={message.summary && `is-invalid`}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <ReactQuill
              modules={ApplyLeaveScreen.modules}
              formats={ApplyLeaveScreen.formats}
              // value={String(description)}
              // onChange={handleDescription}
              // className={message.description && `is-invalid`}
            />
          </Form.Group>

          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default ApplyLeaveScreen
