import React from 'react';
//import Container from 'react-bootstrap'
//import Row from 'react-bootstrap'
//import Col from 'react-bootstrap'
//import Jumbotron from 'react-bootstrap'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import moment from 'moment';
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types';
export default class JobDescription extends React.Component {
    render() {
        const {jobTitle,companyName,postTime,description,link} = this.props;
        const centering = {textAlign: "center"};
        return (
            <Container style={centering}>
                <Jumbotron>
                    <h1 style={centering}>{jobTitle}</h1>
                    <h2 style={centering}>{companyName}</h2>
                    <h4 style={centering}>{moment(postTime).fromNow()}</h4>
                    <p>{description}</p>
                    <Button variant="primary" >
                        <a href={link} target="_blank" style={{
                            color: "white"
                        }}>Apply</a>
                    </Button>
                </Jumbotron>
            </Container>
        )

    }
}

JobDescription.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    postTime: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };