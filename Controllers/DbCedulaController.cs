using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApplication.Model;

namespace ReactApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DbCedulaController : ControllerBase
    {
        
        private readonly CedulaContext _context;

        public DbCedulaController(CedulaContext context)
        {
            _context = context;
        }

        // GET: api/DbCedula
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbCedula>>> GetCedulas()
        {
            return await _context.Cedulas.ToListAsync();
        }

        // GET: api/DbCedula/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DbCedula>> GetDbCedula(int id)
        {
            var dbCedula = await _context.Cedulas.FindAsync(id);

            if (dbCedula == null)
            {
                return NotFound();
            }

            return dbCedula;
        }

        // PUT: api/DbCedula/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDbCedula(int id, DbCedula dbCedula)
        {
            if(id != dbCedula.Id)
            {
                return BadRequest();
            }

            _context.Entry(dbCedula).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DbCedulaExists(id))
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

        // POST: api/DbCedula
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status415UnsupportedMediaType)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<DbCedula>> PostDbCedula([FromBody]DbCedula dbCedula)
        {
            var todoItem = new DbCedula
            {
                Cedula = dbCedula.Cedula,
                Nombre = dbCedula.Nombre,
                Apellido = dbCedula.Apellido,
                Email = dbCedula.Email,
                Tel = dbCedula.Tel,
                FechaNacimiento = dbCedula.FechaNacimiento,
                LugarNacimiento = dbCedula.LugarNacimiento
            };
            _context.Cedulas.Add(todoItem);
            await _context.SaveChangesAsync();


            if (ModelState.IsValid)
                BadRequest();

            return CreatedAtAction(nameof(GetDbCedula), new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/DbCedula/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DbCedula>> DeleteDbCedula(int id)
        {
            var dbCedula = await _context.Cedulas.FindAsync(id);
            if (dbCedula == null)
            {
                return NotFound();
            }

            _context.Cedulas.Remove(dbCedula);
            await _context.SaveChangesAsync();

            return dbCedula;
        }

        private bool DbCedulaExists(int id)
        {
            return _context.Cedulas.Any(e => e.Id == id);
        }
    }
}
