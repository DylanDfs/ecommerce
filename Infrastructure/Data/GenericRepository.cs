﻿using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly StoreContext _contexte;

        public GenericRepository(StoreContext contexte)
        {
            _contexte = contexte;
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _contexte.Set<T>().FindAsync(id); 
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _contexte.Set<T>().ToListAsync();
        }

        public async Task<T> GetEntityWithSpec(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        private IQueryable<T> ApplySpecification(ISpecification<T> spec)
        {
            return SpecificationEvaluator<T>.GetQuery(_contexte.Set<T>().AsQueryable(), spec);
        }
    }
}
