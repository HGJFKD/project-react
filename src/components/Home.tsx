
import { Link } from 'react-router-dom'

function Home() {

    return (
        <>
            <button><Link to={"/Trips"}>Trips</Link></button>
            <button><Link to={"/UserLogin"}>Login</Link></button>
            <button><Link to={"/userRegistration"}>Registration</Link></button>
        </>
    );
}

export default Home;

