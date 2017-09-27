import React from 'react';

import { get } from '../fetcher';
import Version from '../components/Version';

class App extends React.Component {
  state = {
    version: this.props.initialData || ''
  };

  async componentDidMount() {
    const { version } = await get('/api');
    this.setState({ version });
  }

  render() {
    return <Version version={this.state.version} />;
  }
}

export default App;
