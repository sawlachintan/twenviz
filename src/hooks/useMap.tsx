import { useState, useEffect } from "react";
import { json } from "d3";
import { feature, mesh } from "topojson";

export const useMap = () => {
    const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        json(jsonUrl).then((topology: any) => {
            const { countries, land } = topology.objects;
            setMap({
                land: feature(topology, land),
                interiors: mesh(topology, countries, (a, b) => a !== b),
            });
        });
    }, []);

    return map;
};
