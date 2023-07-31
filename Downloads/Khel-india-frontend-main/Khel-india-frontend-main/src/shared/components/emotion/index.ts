import { css } from '@emotion/react';
import { getButtonWidth } from '../../utils/buttons-width';
import { BORDER_COLOR } from '../../constants/colors';

export const FlexStyles = {
  displayFlex: css`
    display: flex;
  `,
  displayFlexRow: css`
    flex-direction: row;
  `,
  displayFlexRowReverse: css`
    flex-direction: row-reverse;
  `,
  displayFlexColumn: css`
    flex-direction: column;
  `,
  displayFlexColumnReverse: css`
    flex-direction: column-reverse;
  `,
  displayFlexWrap: css`
    flex-wrap: wrap;
  `,
  displayFlexNoWrap: css`
    flex-wrap: nowrap;
  `,
  justifyContentCenter: css`
    justify-content: center;
  `,
  justifyContentFlexStart: css`
    justify-content: flex-start;
  `,
  justifyContentFlexEnd: css`
    justify-content: flex-end;
  `,
  justifyContentSpaceBetween: css`
    justify-content: space-between;
  `,
  justifyContentSpaceAround: css`
    justify-content: space-around;
  `,
  justifyContentEvenly: css`
    justify-content: space-evenly;
  `,
  alignItemsCenter: css`
    align-items: center;
  `,
  alignItemsFlexStart: css`
    align-items: flex-start;
  `,
  alignItemsFlexEnd: css`
    align-items: flex-end;
  `,
  alignItemsSpaceBetween: css`
    align-items: space-between;
  `,
  alignItemsSpaceAround: css`
    align-items: space-around;
  `,
  alignItemsEvenly: css`
    align-items: space-evenly;
  `
};

export const TextEllipsisStyles = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LayoutStyles = {
  fullMaxHeight: css`
    max-height: 100%;
  `,
  fullHeight: css`
    height: 100%;
  `,
  fullMaxWidth: css`
    max-width: 100%;
  `,
  fullWidth: css`
    width: 100%;
  `,
  positionRelative: css`
    position: relative;
  `
};

export const OverflowStyles = {
  overflowY: css`
    overflow-y: auto;
  `,
  overflowX: css`
    overflow-x: auto;
  `,
  hideOverflow: css`
    overflow: hidden;
  `,
  hideOverflowX: css`
    overflow-x: hidden;
  `,
  hideOverflowY: css`
    overflow-y: hidden;
  `
};

export const buttonStyles = (
  i: number,
  buttonsCount: number,
  areInnerButtons: boolean,
  mode?: 'message' | 'preview'
) => {
  return areInnerButtons
    ? css(
        `
          width: 100%;
          padding: 8px 16px;
          background: white;
          border: 0.5px solid #f4f4f9;
          border-top: 0.5px solid #e9e9ee;
          text-decoration: none;
          color: #009de2;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom-left-radius: ${buttonsCount - 1 === i ? '8px' : 0};
          border-bottom-right-radius: ${buttonsCount - 1 === i ? '8px' : 0};
        `,
        mode === 'message' &&
          `background: #d6f1e1;
            border: none;
            border-top: 0.5px solid #d8d8d8;

            `
      )
    : css`
        width: 100%;
        padding: 8px 16px;
        background: white;
        text-decoration: none;
        border-top: 0.5px solid #e9e9ee;
        margin-top: 4px;
        border-radius: 8px;
        box-shadow: 0px 1px 1px ${BORDER_COLOR};
        color: #009de2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${getButtonWidth(i, buttonsCount)};
      `;
};
