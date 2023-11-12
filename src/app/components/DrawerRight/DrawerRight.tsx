"use client";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import DreawerContent from "./DreawerContent/DreawerContent";
import { useMks } from "@/app/Context/MksContext";

const DrawerRight = () => {
  const {isDrawerOpen, toggleDrawer} = useMks();

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={"right"}
            open={isDrawerOpen}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
            ModalProps={{ BackdropProps: { invisible: true } }}
          >
            <DreawerContent />
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
};

export default DrawerRight;
