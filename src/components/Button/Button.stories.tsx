import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Button, ButtonHorizontalPositionEnum, ButtonSizesEnum, ButtonTypesEnum } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "leasify/Buttons",
    component: Button,
    argTypes: {
        size: { control: { type: "select", option: ["Small", "Medium", "Large"] } },
        alignX: { control: { type: "select", option: ["Left", "Center"] } },
        onClick: { action: "click" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>
        <span>Hallo</span>
    </Button>
);

const TemplateSecondary: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>
        <span>Hallo</span>
    </Button>
);

// export const PrimaryButton = (args: any) => <PrimaryButtonDemo {...args}>test</PrimaryButtonDemo>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    size: ButtonSizesEnum.Medium,
    alignX: ButtonHorizontalPositionEnum.Center,
};

export const SecondaryButton = TemplateSecondary.bind({});
SecondaryButton.args = {
    size: ButtonSizesEnum.Medium,
    alignX: ButtonHorizontalPositionEnum.Center,
    buttonType: ButtonTypesEnum.Secondary,
};
