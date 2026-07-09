"use client";

import { useEffect, useMemo, useState } from "react";
import { benefits, categoryFilters, type Category } from "@/lib/data";

export function BenefitsExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "todos">("todos");
  const [selectedBusiness, setSelectedBusiness] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSelectedBusiness(params.get("business") ?? "");
  }, []);

  const visibleBenefits = useMemo(() => {
    return benefits.filter((benefit) => selectedCategory === "todos" || benefit.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="filter-row" aria-label="Filtros de beneficios">
        {categoryFilters.map((filter) => (
          <button
            className={`filter-button ${selectedCategory === filter.id ? "is-active" : ""}`}
            key={filter.id}
            type="button"
            onClick={() => setSelectedCategory(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid grid-2">
        {visibleBenefits.map((benefit) => (
          <article className={`card ${selectedBusiness === benefit.businessId ? "is-selected" : ""}`} key={benefit.id}>
            <p className="eyebrow">{benefit.categoryLabel}</p>
            <h3>{benefit.business}</h3>
            <p className="meta">{benefit.offer}</p>
            <p className="meta">{benefit.validUntil}</p>
            <p className="meta">{benefit.address}</p>
            <div className="hero-actions">
              <a className="button button-secondary" href={`/mapa?business=${benefit.businessId}`}>Ver en el mapa</a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
