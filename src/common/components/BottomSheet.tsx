"use client";

import { ReactNode } from "react";
import { BottomSheet as BottomSheetComponent } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";

type BottomSheetProps = {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
};

const BottomSheet = ({
  title,
  children,
  isOpen,
  onClose,
}: BottomSheetProps) => {
  return (
    <BottomSheetComponent
      open={isOpen}
      onDismiss={() => onClose(false)}
      header={<div className="py-1">{title}</div>}
      className="bg-black"
    >
      <>{children}</>
    </BottomSheetComponent>
  );
};

export default BottomSheet;
