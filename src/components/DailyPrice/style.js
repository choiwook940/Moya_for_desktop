import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  max-width: 790px;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  padding: 28px;
  h1 {
    color: #111111;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 8px;
  }
`;
export const Table = styled.table`
  max-width: 726px;
  width: 100%;
  text-align: end;
  margin-bottom: 3px;
  height: calc(100% - 50px);
`;
export const Row = styled.tr`
  height: 42px;
  &.title {
    color: #767676;
    font-size: 13px;
    font-weight: 500;
  }
  &.contents {
    font-size: 13px;
    height: 42px;
    &:nth-of-type(odd) {
      background: #FAFAFE;
    }
    td:nth-of-type(1) {
      color: #286f6c;
    }
    td:nth-of-type(3) {
      color: #E82B2B;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-bottom: 8px solid #E82B2B;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        top: 18px;
        left: 28px;
      }
    }
  }
`;
export const Cell = styled.td`
  width: 60px;
  vertical-align: middle;
  &.date {
    text-align: start;
  }
  &:first-of-type {
    padding-left: 15px;
  }
  &:last-of-type {
    padding-right: 15px;
  }

`;
