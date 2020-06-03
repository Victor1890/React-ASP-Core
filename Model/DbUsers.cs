using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApplication.Model
{
    public class DbUsers
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "TEXT")]
        public string Email { get; set; }

        [Column(TypeName = "TEXT")]
        public string Password { get; set; }
    }
}
