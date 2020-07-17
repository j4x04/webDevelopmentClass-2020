Test.propTypes = {
    sampleProps: propTypes.number
};

Test.defaultprops = { 
    sampleProps:1 
};



class q extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {sampleProps} = this.props;
      return <h2>{this.props.sampleProps}</h2>;
    }
}






export default testcomponent;