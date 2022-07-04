import React from "react";

interface Props {
    message: string;
}

export const ErrorPage = (props: Props) => (
  <h1>props.message</h1>
);
