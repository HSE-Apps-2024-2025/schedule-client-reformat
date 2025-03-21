import React from "react";

import { Box } from "@chakra-ui/react";

import SettingsButton from "./settingsButton/SettingsButton";
import Logo from "./logo/Logo";

const Navbar = () => {
    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} height={"100%"} alignItems={"center"} padding={"10px"}>
            <Logo />
            <SettingsButton />
        </Box>
    );
};

export default Navbar;