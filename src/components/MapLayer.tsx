import { geoEqualEarth, geoPath } from "d3";
import { memo } from "react";


const projection = geoEqualEarth().center([50, 15]);
const path = geoPath(projection);

type MapProps = {
    map: {
        land: any;
        interiors: any;
    };
};

export const MapLayer = memo(({ map: { land, interiors } }: MapProps) => {
    console.log("render map");
    return (
        <>
            <g className="marks">
                <path
                    className="sphere"
                    d={path({ type: "Sphere" }) as string}
                    style={{ fill: "none" }}
                />
                {land.features.map((feature: any) => {
                    return (
                        <path
                            key={feature}
                            className="land"
                            d={path(feature) as string}
                            style={{ fill: "#434343" }}
                        />
                    );
                })}
                <path
                    className="interiors"
                    style={{ stroke: "#aaaaaa", fill: "none" }}
                    d={path(interiors) as string}
                />
            </g>
        </>
    );
});
