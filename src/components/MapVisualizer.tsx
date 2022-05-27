import { MapLayer } from "./MapLayer";
import { useMap } from "../hooks/useMap";

export const MapVisualizer = () => {
    const map = useMap();

    return (
        <>
            {map && (
                <svg height={"100%"} width="100%">
                    <MapLayer map={map} />
                </svg>
            )}
        </>
    );
};
