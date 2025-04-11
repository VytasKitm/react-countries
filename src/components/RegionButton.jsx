import { React, useContext } from "react";
import { getRegionData } from "../services/getRegionData.js";
import DataContext from "../context/DataContext.jsx";

export const RegionButton = ({ region, classStyle }) => {
    const { data, setData } = useContext(DataContext);
    const regionColors = {
        Europe: "#FF5733", // Vibrant Red-Orange
        Asia: "#2980B9", // Bright Blue
        Africa: "#27AE60", // Rich Green
        Americas: "#F39C12", // Golden Yellow
        Oceania: "#1ABC9C", // Teal
        Antarctic: "#BDC3C7", // Light Gray (Icy/Cold)
        "North America": "#E74C3C", // Bright Red
        "South America": "#D35400", // Strong Orange
    };

    const writeRegionData = async () => {
        const regionData = await getRegionData(region);
        setData(regionData);
    };

    return (
        <div>
        <button
            onClick={() => writeRegionData()}
            style={{ backgroundColor: regionColors[region] }}>{region}</button>
        </div>
    );
};
