import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';

export abstract class TableBase<T> {
    @ViewChild(MatSort) Sort;
    @ViewChild(MatPaginator) Paginator;

    public Collection: Set<T>;
    public Headers: string[];
    public Data: MatTableDataSource<T>;
    protected CustomSortAccessor: (item: T, sortHeaderId: string) => string | number;

    constructor() {
        this.Collection = new Set<T>();
        this.Headers = [];
        this.Update();
    }

    // Methods
    public Add(item: T): void {
        this.Collection.add(item);
        this.Update();
    }

    public Clear(): void {
        this.Collection.clear();
        this.Update();
    }

    protected Update(): void {
        this.Data = new MatTableDataSource([...Array.from(this.Collection.values())]);
        this.Data.paginator = this.Paginator;
        this.Data.sort = this.Sort;

        if (this.CustomSortAccessor) {
            this.Data.sortingDataAccessor = this.CustomSortAccessor;
        }
    }
}