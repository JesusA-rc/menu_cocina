import { useLocation } from "react-router-dom";

const IsActiveLink = (place) => {
    const location = useLocation();
    const [path, fragment] = place.split("#");

    const isPathActive = location.pathname === path;

    const isFragmentActive = 
        fragment ? 
        window.location.hash.slice(1) === fragment : 
        !window.location.hash;

    return isPathActive && isFragmentActive ;
};

export default IsActiveLink;