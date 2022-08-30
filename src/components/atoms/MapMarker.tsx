import { Image } from "react-native";
import { AnimatedRegion, LatLng, MapEvent, Marker } from "react-native-maps";

const MapMarker = (props: { coordinate: LatLng}) => {
    return (
        <Marker
            coordinate={props.coordinate}
            image={require('../../assets/map-icons/cat-marker.png')}
        >
            {/* <Image source={require('../../assets/map-icons/cat-2.png')} /> */}
        </Marker>
    )
}

export default MapMarker;