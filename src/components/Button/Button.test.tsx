import React from "react";
import { render } from "@testing-library/react";

import { Button, ButtonHorizontalPositionEnum, ButtonSizesEnum, ButtonTypesEnum } from "./Button";

describe("Button", () => {
    test("renders the Button component", () => {
        render(
            <Button
                buttonType={ButtonTypesEnum?.Primary}
                size={ButtonSizesEnum?.Medium}
                alignX={ButtonHorizontalPositionEnum?.Left}
            >
                <span>Hello world</span>
            </Button>
        );
    });
});
