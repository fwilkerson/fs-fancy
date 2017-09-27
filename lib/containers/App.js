import axios from 'axios';
import React from 'react';

import Version from '../components/Version';

class App extends React.Component {
  state = {
    version: this.props.store.version
  };

  async componentDidMount() {
    const { data } = await axios.get('/api');
    this.setState({ version: data.version });
  }

  render() {
    return <Version version={this.state.version} />;
  }
}

export default App;
