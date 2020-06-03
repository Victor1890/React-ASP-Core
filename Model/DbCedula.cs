using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApplication.Model
{
    public class DbCedula
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "BIGINT")]
        public long Cedula { get; set; }

        [Column(TypeName = "TEXT")]
        public string Nombre { get; set; }

        [Column(TypeName ="TEXT")]
        public string Apellido { get; set; }

        [Column(TypeName ="TEXT")]
        public string FechaNacimiento { get; set; }

        [Column(TypeName ="TEXT")]
        public string LugarNacimiento { get; set; }

        [Column(TypeName = "TEXT")]
        public string Email { get; set; }

        [Column(TypeName = "BIGINT")]
        public long Tel { get; set; }
    }
}
