import React, { ReactNode, forwardRef } from "react";
import { createStyles, Group } from "@mantine/core";

export const Toolbar = forwardRef(
  (props: { children: ReactNode }, ref: React.Ref<any>) => {
    const { classes } = createStyles({ root: {} })(undefined, {
      name: "Toolbar",
    });

    return (
      <Group ref={ref} className={classes.root}>
        {props.children}
      </Group>
    );
  }
);
