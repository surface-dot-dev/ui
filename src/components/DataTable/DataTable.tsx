import styled from 'styled-components';
import { TableVirtuoso } from 'react-virtuoso';
import { useCallback } from 'react';
import {
  DataTableColumnType,
  DataTableRowType,
  DataTableHeaderCellType,
  DataTableDataCellType,
} from './types';

export type DataTableProps = {
  columns: DataTableColumnType[];
  rows: DataTableRowType[];
  numFixedColumns?: number;
  renderHeaderCell?: (props: DataTableHeaderCellType) => React.ReactNode;
  renderDataCell?: (props: DataTableDataCellType) => React.ReactNode;
  context?: string;
};

const ctx = 'a table of data';

export const DataTable = ({
  columns,
  rows,
  numFixedColumns = 0,
  renderHeaderCell,
  renderDataCell,
  context = ctx,
}: DataTableProps) => {
  const renderHeaderRow = useCallback(() => {
    return (
      <tr data-context="column headers">
        {columns.map((column, columnIndex) => {
          const headerCellProps = { column, columnIndex };
          return (
            <StyledTableHeaderCell
              key={uniqueColKey(columnIndex, column)}
              $isSticky={columnIndex < numFixedColumns}
            >
              {renderHeaderCell ? renderHeaderCell(headerCellProps) : <span>{column.name}</span>}
            </StyledTableHeaderCell>
          );
        })}
      </tr>
    );
  }, [columns, numFixedColumns, renderHeaderCell]);

  const renderDataRow = useCallback(
    (rowIndex: number, row: DataTableRowType) => {
      return (
        <>
          {columns.map((column, columnIndex) => {
            const value = row[column.name];
            const dataCellProps = { column, columnIndex, row, rowIndex, value };
            return (
              <StyledTableDataCell
                key={uniqueColKey(columnIndex, column)}
                $isSticky={columnIndex < numFixedColumns}
              >
                {renderDataCell ? renderDataCell(dataCellProps) : <span>{value}</span>}
              </StyledTableDataCell>
            );
          })}
        </>
      );
    },
    [columns, numFixedColumns, renderDataCell]
  );

  return (
    <StyledTableVirtuoso
      data={rows}
      fixedHeaderContent={renderHeaderRow}
      itemContent={(rowIndex, row) => renderDataRow(rowIndex, row as DataTableRowType)}
      components={{
        Table: (props) => <table {...props} data-context={context} />,
        TableRow: (props) => <tr {...props} data-context="row" />,
      }}
    />
  );
};

// ========================
// Helper Functions
// ========================

const uniqueColKey = (index: number, column: DataTableColumnType) => [index, column.name].join('-');

// ========================
// Styled Components
// ========================

const StyledTableVirtuoso = styled(TableVirtuoso)`
  height: 100%;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTableHeaderCell = styled.th<{ $isSticky: boolean }>`
  position: ${(props) => (props.$isSticky ? 'sticky' : 'static')};
  left: 0;
  z-index: ${(props) => (props.$isSticky ? 1 : 'auto')};
  width: 150px;
  height: 50px;
  background: white;
`;

const StyledTableDataCell = styled.td<{ $isSticky: boolean }>`
  position: ${(props) => (props.$isSticky ? 'sticky' : 'static')};
  left: 0;
  z-index: ${(props) => (props.$isSticky ? 1 : 'auto')};
  width: 150px;
  height: 50px;
  background: white;
`;
