import '../assets/css/App.css';

function DisplayInfo( {count, information} ) {
    return(
        <p className="displayInfos">{information}</p>
    );
}

export default DisplayInfo;