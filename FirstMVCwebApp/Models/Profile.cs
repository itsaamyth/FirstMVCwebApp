using System.ComponentModel.DataAnnotations;

namespace FirstMVCwebApp.Models
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name  { get; set; }
        [Required]
        public int Phone  { get; set; }
        [Required]
        public string Email { get; set; }
        public int Age { get; set; }
        public int Gender { get; set; }
        public string Address { get; set; }


    }
}
