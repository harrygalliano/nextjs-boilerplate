'use client';

import { faker } from '@faker-js/faker';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';


import styles from './availability.module.css';

const generateMondays = (startDate: string, numberOfMondays: number): string[] => {
  const mondays: string[] = [];
  const date = new Date(startDate);
  const twoWeeks = 14;

  for (let i = 0; i < numberOfMondays; i++) {
    mondays.push(date.toLocaleDateString());
    date.setDate(date.getDate() + twoWeeks);
  }

  return mondays;
};

const NUMBER_OF_MONDAYS = 54;
const START_DATE = '2/12/2024';
const COLUMNS_PER_PAGE = 8;

type RowData = {
  Formats: string;
  Status: string;
  id: number;
  [key: string]: string | number;
};

const formats = ['Adshel Live', 'Billboard Live', 'Storm'];
const statuses = ['Available', 'Reserved', 'Booked'];
const numberTwo = 2;

const generateMockData = (formatList: string[], statusList: string[], columns: string[]): RowData[] => {
  const rows: RowData[] = [];
  let idCounter = 1;

  formatList.forEach((format) => {
    statusList.forEach((status) => {
      const row: RowData = {
        Formats: format,
        Status: status,
        id: idCounter++,
      };

      columns.slice(numberTwo).forEach((column) => {
        row[column] = `${faker.number.int({ max: 100, min: 0 })}%`;
      });

      rows.push(row);
    });
  });

  return rows;
};

const Page: React.FC = () => {
  const allColumns: string[] = ['Formats', 'Status', ...generateMondays(START_DATE, NUMBER_OF_MONDAYS)];
  const [currentPage, setCurrentPage] = useState<number>(0);

  const paginatedColumns: string[] = [
    allColumns[0]!,
    allColumns[1]!,
    ...allColumns.slice(
      numberTwo + currentPage * COLUMNS_PER_PAGE,
      numberTwo + currentPage * COLUMNS_PER_PAGE + COLUMNS_PER_PAGE,
    ),
  ];

  const rows: RowData[] = generateMockData(formats, statuses, allColumns);

  const totalPages: number = Math.ceil((allColumns.length - numberTwo) / COLUMNS_PER_PAGE);

  const columns: GridColDef[] = paginatedColumns.map((column) => ({
    field: column || '',
    flex: 1,
    headerName: column || '',
    renderCell: (params: GridRenderCellParams) => {
      const isFormatColumn = column === 'Formats';
      const isPercentage = typeof params.value === 'string' && params.value.endsWith('%');

      if (isFormatColumn) {
        const currentRowIndex = rows.findIndex((row) => row.id === params.row.id);
        const previousRowFormat = rows[currentRowIndex - 1]?.Formats;
        const isFirstOccurrence = params.row?.Formats !== previousRowFormat;

        if (isFirstOccurrence) {
          const rowSpanCount = 3;

          return (
            <div
              className={styles.formatCell}
              style={{
                alignItems: 'center',

                display: 'flex',
                gridRow: `span ${rowSpanCount}`,
              }}
            >
              {params.value}
            </div>
          );
        }
        return null;
      }

      return <span className={isPercentage ? styles.percentageCell : ''}>{params.value}</span>;
    },
    type: 'string',
  }));

  return (
    <>
      <Box className={styles.fullContainer}>
        <h3>Home / Availability checker</h3>
        <br />
        <h1>Availability checker</h1>

        <Box className={styles.dataGridContainer}>
          <div className={styles.paginationControls}>
            <Button
              variant="outlined"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              color="primary"
              sx={{ borderColor: '#000434', color: '#000434' }}
            >
              <ChevronLeftIcon sx={{ color: '#000434', padding: '0px' }} />
            </Button>
            <Button
              variant="outlined"
              disabled={currentPage >= totalPages - 1}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              color="primary"
              sx={{ borderColor: '#000434', color: '#000434' }}
            >
              <ChevronRightIcon sx={{ color: '#000434' }} />
            </Button>
          </div>

          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnFilter
            disableColumnMenu
            disableColumnSorting
            rowHeight={34}
          />
        </Box>
      </Box>
    </>
  );
};

export default Page;