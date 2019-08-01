import {storiesOf} from "@storybook/react";
import Button from "./index";
import React from "react";

storiesOf('Button', module)
    .add('default button', () => (
        <div>
            <Button type={'primary'}>Primary</Button>
            <Button type={'default'}>Default</Button>
            <Button type={'danger'}>Danger</Button>
            <Button disabled>Disabled</Button>
            <Button loading> xxx </Button>
        </div>
    ));
