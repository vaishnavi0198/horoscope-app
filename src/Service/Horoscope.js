import React, { useState, useEffect } from "react";
import { getHoroscope } from "./api";

export default function Horoscope({ sign, timeframe }) {
  const [horoscope, setHoroscope] = useState([]);

  useEffect(() => {
    getHoroscope(sign, timeframe).then(setHoroscope); //.then(res => setSigns(res)
  }, [sign, timeframe]);
  return <div>{horoscope}</div>;
}
