using System.Threading.Tasks;
using GoGoYumApi.Models.Entities;

namespace GoGoYumApi.Data.Contracts{
    public interface IUoW{
        object GetDBContext();
        void Commit();
        Task CommitAsync();
        void Dispose();
    }
}