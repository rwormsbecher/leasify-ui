import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ILink, NavbarComponent } from "./Navbar";
import { RiFoldersLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import { withRouter } from "storybook-addon-react-router-v6";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default {
    title: "leasify/Navbar",
    component: NavbarComponent,
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = (args) => {
    return (
        <>
            <BrowserRouter>
                <NavbarComponent {...args} />
                <Routes>
                    <Route path="/" element={<p>/ is rendered</p>} />
                    <Route path="/help" element={<p>/help is rendered</p>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export const Navbar = Template.bind({});
Navbar.args = {
    links: [
        { text: "Overzicht", icon: <RiFoldersLine />, to: "/" },
        { text: "Hulp nodig?", icon: <MdOutlineLiveHelp />, to: "/help" },
    ],
};
