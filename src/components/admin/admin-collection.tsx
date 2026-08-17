"use client";

import { useState } from "react";
import { AdminList, type AdminListItem } from "@/components/admin/admin-ui";
import { FilterPills, Pagination } from "@/components/site/patterns";

export type AdminCollectionItem = AdminListItem & {
  filters: readonly string[];
};

export default function AdminCollection({
  items,
  filters,
  pageSize = 3,
}: {
  items: readonly AdminCollectionItem[];
  filters: readonly string[];
  pageSize?: number;
}) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === "All" || item.filters.includes(activeFilter);
    const matchesQuery =
      normalizedQuery.length === 0 ||
      `${item.eyebrow} ${item.title} ${item.meta} ${item.status ?? ""}`
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesFilter && matchesQuery;
  });

  const pageCount = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const firstIndex = (currentPage - 1) * pageSize;
  const visibleItems = filteredItems.slice(firstIndex, firstIndex + pageSize);
  const firstResult = filteredItems.length === 0 ? 0 : firstIndex + 1;
  const lastResult = Math.min(firstIndex + pageSize, filteredItems.length);

  const resetPage = () => setPage(1);

  return (
    <section className="relative mt-7">
      <div className="flex flex-col gap-4 rounded-xl border border-(--line) bg-(--card) p-4 sm:p-5">
        <div className="flex items-center gap-3 border-b border-(--line) pb-3">
          <span aria-hidden="true" className="font-mono text-sm text-(--accent)">⌕</span>
          <label htmlFor="admin-list-search" className="sr-only">Search list</label>
          <input
            id="admin-list-search"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              resetPage();
            }}
            placeholder="Search by title, category, status or tool…"
            className="min-w-0 flex-1 bg-transparent font-mono text-[10px] text-(--ink) outline-none placeholder:text-(--muted)"
          />
          <span className="font-mono text-[8px] tracking-wider text-(--muted)">
            {filteredItems.length} FOUND
          </span>
        </div>
        <FilterPills
          items={filters}
          activeItem={activeFilter}
          onChange={(filter) => {
            setActiveFilter(filter);
            resetPage();
          }}
        />
      </div>

      <AdminList items={visibleItems} />

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[9px] text-(--muted)">
          SHOWING {firstResult}–{lastResult} OF {filteredItems.length}
        </p>
        <Pagination
          count={pageCount}
          currentPage={currentPage}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
}
