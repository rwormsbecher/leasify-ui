import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { generalTheme } from "../../themes/generalTheme";
import { screenSize } from "../../themes/global";

export enum ButtonTypesEnum {
    Primary = "Primary",
    Secondary = "Secondary",
}

export enum ButtonSizesEnum {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

export enum ButtonHorizontalPositionEnum {
    Left = "Left",
    Center = "Center",
}

interface IButtonProps {
    buttonType: ButtonTypesEnum;
    size: ButtonSizesEnum;
    alignX: ButtonHorizontalPositionEnum;
    children: JSX.Element;
}

const LeasifyButton = styled.button<IButtonProps>`
    padding: 4px 64px;
    display: flex;
    background-color: ${(p: any) => (p.theme as any).primaryColor500};
    color: white;
    outline: none;
    border: none;
    font-size: 1rem;
    width: 100%;

    @media ${screenSize.tablet} {
        width: initial;
    }

    /* Button type styles  */
    ${({ buttonType }: any) =>
        buttonType === ButtonTypesEnum.Primary &&
        css`
            background: ${(p: any) => (p.theme as any).primaryColor500};
        `}

    ${({ buttonType }: any) =>
        buttonType === ButtonTypesEnum.Secondary &&
        css`
            background: ${(p: any) => (p.theme as any).secondaryColor500};
            color: ${(p: any) => (p.theme as any).secondaryTextcolor};
        `}


    /* Button sizes styles */ 
    ${({ size }: any) =>
        size === ButtonSizesEnum.Small &&
        css`
            padding: 0.25rem 0.5rem;
        `}

    ${({ size }: any) =>
        size === ButtonSizesEnum.Medium &&
        css`
            padding: 0.5rem 1rem;
        `}

    ${({ size }: any) =>
        size === ButtonSizesEnum.Large &&
        css`
            padding: 0.75rem 1.5rem;
        `}

    /* Button horizontal alignment styles */ 
    ${({ alignX }: any) =>
        alignX === ButtonHorizontalPositionEnum.Left &&
        css`
            justify-content: flex-start;
        `}

    ${({ alignX }: any) =>
        alignX === ButtonHorizontalPositionEnum.Center &&
        css`
            justify-content: center;
        `}
`;

export const Button: React.FC<IButtonProps> = ({
    buttonType = ButtonTypesEnum.Primary,
    size = ButtonSizesEnum.Medium,
    alignX = ButtonHorizontalPositionEnum.Left,
    children,
    ...props
}) => {
    return (
        <ThemeProvider theme={generalTheme}>
            <LeasifyButton alignX={alignX} size={size} buttonType={buttonType} {...props}>
                {children}
            </LeasifyButton>
        </ThemeProvider>
    );
};
