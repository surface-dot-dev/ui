/** Defines the structure of a data table column */
export type DataTableColumnType = {
  /**
   * Name and unique identifier for the column, used as key to
   * access row values
   */
  name: string;

  /**
   * Optional value representing the data type of the column.
   */
  type?: string;
};

/**
 * Represents a single row of data in the table.
 * A flexible object type where keys correspond to
 * column names and values can be of any type
 */
export type DataTableRowType = Record<string, any>;

/**
 * Properties passed to header cell render functions for
 * customizing table headers
 */
export type DataTableHeaderCellType = {
  /**
   * Column definition containing name and type
   */
  column: DataTableColumnType;

  /**
   * Zero-based index of the column in the table
   */
  columnIndex: number;
};

/**
 * Properties passed to data cell render functions for
 * rendering individual table cells
 */
export type DataTableDataCellType = {
  /**
   * Column definition containing name and type
   */
  column: DataTableColumnType;

  /**
   * Zero-based index of the column in the table
   */
  columnIndex: number;

  /**
   * Complete row data object containing all column values
   */
  row: DataTableRowType;

  /**
   * Zero-based index of the row in the table
   */
  rowIndex: number;

  /**
   * The specific value for this cell
   * (equivalent to row[column.name])
   */
  value: any;
};
