import * as React from 'react';

interface IProps {
  title: string;
}

export default class Cutton extends React.Component<IProps> {
  render() {
    return <div>tes,{this.props.title}</div>;
  }
}
