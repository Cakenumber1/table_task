import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const filterMap = new Map([['in', 'LIKE'], ['more', '>'], ['less', '<'], ['eq', '=']]);

export async function getRows(column?: string, filter?: string, value?: string) {
  const res = await open({
    filename: './db/data.db',
    driver: sqlite3.Database,
  }).then(async (db) => {
    let sql: string;
    if (column && filter && value) {
      const f = filterMap.get(filter);
      const v = f === 'LIKE' ? `'%${value}%'` : value;
      sql = `SELECT COUNT(*) FROM testtable WHERE ${column} ${f} ${v}`;
    } else {
      sql = 'SELECT COUNT(*) FROM testtable';
    }
    const a = await db.get(sql, [], (err: any, data: any) => {
      if (err) console.log(err);
      return data;
    });
    await db.close();
    return a || 0;
  });
  const parse = res['COUNT(*)'];
  return parse || 0;
}

export async function getPage(page: string, column?: string, filter?: string, value?: string) {
  const res = await open({
    filename: './db/data.db',
    driver: sqlite3.Database,
  }).then(async (db) => {
    let sql: string;
    if (column && filter && value) {
      const f = filterMap.get(filter);
      const v = f === 'LIKE' ? `'%${value}%'` : value;
      sql = `SELECT * FROM testtable WHERE ${column} ${f} ${v}
        LIMIT 10 OFFSET ${(Number(page) - 1) * 10}`;
    } else {
      sql = `SELECT * FROM testtable LIMIT 10 OFFSET ${(Number(page) - 1) * 10}`;
    }
    const a = await db.all(sql, [], (err: any, data: any) => {
      if (err) console.log(err);
      return data;
    });
    await db.close();
    return a;
  });
  return res;
}
