import React, { useState } from "react";
import { EditHyperlinkMenu } from "../EditHyperlinkMenu/components/EditHyperlinkMenu";
import { Toolbar } from "../../SharedComponents/Toolbar/components/Toolbar";
import { ToolbarButton } from "../../SharedComponents/Toolbar/components/ToolbarButton";
import { RiExternalLinkFill, RiLinkUnlink } from "react-icons/ri";
// import rootStyles from "../../../root.module.css";

export type HyperlinkToolbarProps = {
  url: string;
  text: string;
  editHyperlink: (url: string, text: string) => void;
  deleteHyperlink: () => void;
};

/**
 * Main menu component for the hyperlink extension.
 * Renders a toolbar that appears on hyperlink hover.
 */
export const HyperlinkToolbar = (
  props: HyperlinkToolbarProps & { domRef: React.MutableRefObject<any> }
) => {
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <EditHyperlinkMenu
        ref={props.domRef}
        url={props.url}
        text={props.text}
        update={props.editHyperlink}
      />
    );
  }

  return (
    <Toolbar ref={props.domRef}>
      <ToolbarButton
        mainTooltip="Edit"
        isSelected={false}
        onClick={() => {
          // add setTimeout to let domRef delay to change
          setTimeout(() => {
            setIsEditing(true);
          });
        }}>
        Edit Link
      </ToolbarButton>
      <ToolbarButton
        mainTooltip="Open in new tab"
        isSelected={false}
        onClick={() => {
          window.open(props.url, "_blank");
        }}
        icon={RiExternalLinkFill}
      />
      <ToolbarButton
        mainTooltip="Remove link"
        isSelected={false}
        onClick={props.deleteHyperlink}
        icon={RiLinkUnlink}
      />
    </Toolbar>
  );
};
