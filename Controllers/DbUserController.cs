using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApplication.Model;

namespace ReactApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DbUserController : ControllerBase
    {
        private readonly CedulaContext _context;

        public DbUserController(CedulaContext context)
        {
            _context = context;
        }

        // GET: api/DbUser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbUsers>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/DbUser/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DbUsers>> GetDbUsers(int id)
        {
            var dbUsers = await _context.Users.FindAsync(id);

            if (dbUsers == null)
            {
                return NotFound();
            }

            return dbUsers;
        }

        // PUT: api/DbUser/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDbUsers(int id, DbUsers dbUsers)
        {
            if (id != dbUsers.Id)
            {
                return BadRequest();
            }

            _context.Entry(dbUsers).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DbUsersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DbUser
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DbUsers>> PostDbUsers(DbUsers dbUsers)
        {
            _context.Users.Add(dbUsers);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDbUsers", new { id = dbUsers.Id }, dbUsers);
        }

        // DELETE: api/DbUser/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DbUsers>> DeleteDbUsers(int id)
        {
            var dbUsers = await _context.Users.FindAsync(id);
            if (dbUsers == null)
            {
                return NotFound();
            }

            _context.Users.Remove(dbUsers);
            await _context.SaveChangesAsync();

            return dbUsers;
        }

        private bool DbUsersExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
