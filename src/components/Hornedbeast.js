import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
            
        }
    }
    incrumentNum = () => {

        this.setState({ number: this.state.number+1 });
            
        this.update();
    }
    update = () => {

        this.props.selectedUpdate(this.props.title);
    }
    render() {
        return (
            <div style={{ width: 'auto', margin: '30px'}}>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img} height='250em' alt={this.props.keyword} onClick={this.incrumentNum} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text><p>{this.props.description}</p>
                        <p>💓{this.state.number}</p>
                    </Card.Text>
                </Card.Body>
              
            </Card>
            </div>
        )
    }
}
export default HornedBeast;