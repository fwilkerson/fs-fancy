import axios from 'axios';
import React from 'react';

import Version from '../components/Version';

class App extends React.Component {
  state = {
    version: this.props.store.version
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api');
      this.setState({ version: data.version });
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return <Version version={this.state.version} />;
  }
}

export default App;
