import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../index.css'

const Loader = () => {
	return (
		<>
			<Container className="d-flex justify-content-center py-xxl-5">
				<Row>
					<Col md={2} className="py-xxl-5">
						<Image
							alt=""
							src="/images/loader.gif"
							width={'250px'}
							className=" my-xxl-5"
						/>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Loader
