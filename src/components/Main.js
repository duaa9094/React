import React from 'react';
import HornedBeast from './Hornedbeast';
import Data from './Data.json';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

  listHandle = (event) => {
    
    let allHorns = Data;
    let newRender;
    let selected = parseInt(event.target.value);

    if (selected) {
      newRender = allHorns.filter((value) =>  {
        if (value.horns === selected) {
          return value;
        }

      })

    } else {

      newRender = allHorns;
    }

    this.props.updateForm(newRender);
  };





  render() {
    return (
      <div >
      
        <p>How Many Horns?</p>
        <Form.Control as="select" defaultValue="All" onChange={this.listHandle}>

          <option value="All">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Wow..</option>
        </Form.Control>

      <div >
        {this.props.Data.map((value) => {
          return (
            <div className='container2'>
            <HornedBeast
              title={value.title}
              img={value.image_url}
              keyword={value.keyword}
              description={value.description}
              horns={value.horns}
              selectedUpdate={this.props.selectedUpdate}
            />
            </div>
          )
        })}
      </div>


    </div>
  )
}
}

export default Main;