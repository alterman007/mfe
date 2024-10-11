import { mount } from "marketing/App";
import React, { useRef, useEffect } from "react";

export default function MarketingApp() {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  });
  return <div ref={ref}></div>;
}
