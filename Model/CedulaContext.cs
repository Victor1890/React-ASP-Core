using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApplication.Model
{
    public class CedulaContext : DbContext
    {
        //public CedulaContext(DbContextOptions<CedulaContext> options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder { DataSource = "./DbCedula.db" };
            var connectionString = connectionStringBuilder.ToString();
            var connection = new SqliteConnection(connectionString);

            optionsBuilder.UseSqlite(connection);
        }

        public DbSet<DbCedula> Cedulas { get; set; }
        public DbSet<DbUsers> Users { get; set; }
    }
}
