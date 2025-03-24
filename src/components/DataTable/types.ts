import { Dict } from '../../types';

export type DataTableColumnType = {
  name: string;
  type?: string;
};

export type DataTableRowType = Dict;

export type DataTableHeaderCellType = {
  column: DataTableColumnType;
  columnIndex: number;
};

export type DataTableDataCellType = {
  column: DataTableColumnType;
  columnIndex: number;
  row: DataTableRowType;
  rowIndex: number;
  value: any;
};
