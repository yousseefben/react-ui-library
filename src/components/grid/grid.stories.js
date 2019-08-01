import {storiesOf} from "@storybook/react";
import React from "react";
import Row from "./Row";
import Col from "./Col";

storiesOf('Grid', module)
    .add('default Grid', () => (
        <div>
            <Row>
                <Col width={12} left={5}>
                    A
                </Col>
                <Col width={5}>
                    B
                </Col>
                <Col>
                    L
                </Col>
                <Row>
                    <Col width={5}>
                        C
                    </Col>
                    <Col width={5}>
                        D
                    </Col>
                </Row>
            </Row>
        </div>
    ));
