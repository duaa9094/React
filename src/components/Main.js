import React from 'react';
import HornedBeast from './Hornedbeast';

class Main extends React.Component {
  render() {
    return (
      this.props.Data.map((item) => {
        return (
          <div className = 'container2'>
            <HornedBeast
              title={item.title}
              img={item.image_url}
              keyword={item.keyword}
              description={item.description}
              horns={item.horns}
              selectedUpdate={this.props.selectedUpdate}
            />
          </div>
        )
      })
    )
  }
}
export default Main;