import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
 import {
        withScriptjs,
        withGoogleMap,
        GoogleMap,
        Marker
      } from "react-google-maps";
    

export default function home() {
  
      const defaultCenter = { lat: 0, lng: 0 };
      const defaultOptions = { scrollwheel: false };
      
      const RegularMap = withScriptjs(
        withGoogleMap(props => {
          return(<GoogleMap
            defaultZoom={2}
            defaultCenter={ props.defaultCenter || defaultCenter}
            defaultOptions={ defaultOptions }
            onClick={props.onClick}
          ></GoogleMap>)
        })
      );
      
      const loadingElementStyle = { height: '100%' };
      const containerElementStyle = { height: '280px' };
      const mapElementStyle = { height: '100%' };
      
    return (
      <>
        <head>
          <title>Create your match</title>
          <link href="../styles/generic.css" rel="stylesheet" />
          <script>{`var coordinades=null`}</script>
        </head>
        <Container className='bg-primary rounded' style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '5%',
            marginBottom: '5%',
            padding:'2.5%',
        }}>
            <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Victor parenti" />
            </Form.Group>
            <Form.Group controlId="game">
                <Form.Label>Game name variations (comma separated)</Form.Label>
                <Form.Control type="text" placeholder='mtg,magic the gathering,magic:the gathering,magic'/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='A quick and casual match' />
            </Form.Group>
            <Form.Group controlId="maxPlayers">
                <Form.Label>Maximum of players</Form.Label>
                <Form.Control type="number" placeholder='4' min='2'/>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="410 Bagby St, Houston, TX 77002, USA" />
            </Form.Group>
            <RegularMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhLm1bYFxZqeZqdygReGS3mC9jt2TJ0SU"
                loadingElement={<div style={ loadingElementStyle } />}
                containerElement={<div style={ containerElementStyle } />}
                mapElement={<div style={ mapElementStyle } />}
                onClick={(e)=>{coordinades={lng:e.latLng.lng(),lat:e.latLng.lat()}}}
                defaultCenter={window.Geolocation}
                />
            <Button variant="secondary" type="secondary">
            Submit
            </Button>
        </Form>
      </Container>
      </>
      
    )
}
