// Styled Row
export interface IStyledRow {
  $hideBorder: boolean | undefined;
}

// Datablock Item
export interface IDataBlockItem {
  label: string;
  jsx: React.ReactElement | undefined;
  value: string | undefined;
}

// Datablock
export interface IProps {
  items: Array<IDataBlockItem>;
}
