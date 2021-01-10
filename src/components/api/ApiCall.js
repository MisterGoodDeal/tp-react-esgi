import React, { useEffect, useState } from "react";

export default function ApiCall({ setData, children }) {
  useEffect(async () => {
    const response = await fetch(children);
    const data = await response.json();
    setData(data);
  }, []);

  return <></>;
}
