using Core.Entities;
using Core.Interfaces;
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
    }
}
