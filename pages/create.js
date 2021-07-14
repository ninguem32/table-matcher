/* eslint-disable @next/next/no-css-tags */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleMapReact from 'google-map-react';

export default function home() {
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
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyAhLm1bYFxZqeZqdygReGS3mC9jt2TJ0SU'}}
                defaultCenter={ {
                  lat: 0,
                  lng: 0
                }}
                onClick={(e)=>{console.log(e)}}
                defaultZoom={2}
              />
            </div>
            <Button variant="secondary" type="secondary">
            Submit
            </Button>
        </Form>
      </Container>
      </>
      
    )
}