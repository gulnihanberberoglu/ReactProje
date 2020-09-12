import styled, {StyledComponentBase} from "styled-components";
import Grid from "@material-ui/core/Grid";
import React from "react";

export const WeatherCardContainer: StyledComponentBase<any, any> = styled(
    ({ className, children, ...props }) => (<Grid className={className} item xs={2} {...props}>{children}</Grid>)
)`
    border: 1px solid darkcyan;
    padding: 10px;
    height: 300px;
    overflow: hidden;
`;

export const WeatherDateField: StyledComponentBase<'div', any> = styled.div`
    padding-bottom: 10px;
    color: #lightcoral;
    font-weight: bold;
    font-size: 13px;
    color:#E7512F;
`;

export const WeatherIconField: StyledComponentBase<'div', any> = styled.div`
    height: 130px;
`;

export const WeatherIconSpanField: StyledComponentBase<'div', any> = styled.div`
    display: block;
    height: 120px;
    border: 1px solid darkcyan;
`;
