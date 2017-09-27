import React from 'react';

import Version from '../components/Version';

class App extends React.Component {
  state = {
    version: ''
  };

  async componentDidMount() {
    const resp = await fetch('/api');
    const data = await resp.json();
    this.setState({ version: data.version });
  }

  render() {
    return <Version version={this.state.version} />;
  }
}

export default App;
