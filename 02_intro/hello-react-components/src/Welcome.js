

const Welcome = (props) => {
    console.log(`props`, props);
    return <h2>Welcome { props.customerName } !</h2>
}

export default Welcome;