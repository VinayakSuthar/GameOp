import React, { PropsWithChildren, useEffect } from "react";

interface OutsideClickProps extends PropsWithChildren {
  onOutsideClick: () => void;
}

export default function OutsideClick({
  children,
  onOutsideClick,
}: OutsideClickProps) {
  const divRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onOutsideClick]);

  return <div ref={divRef}>{children}</div>;
}
