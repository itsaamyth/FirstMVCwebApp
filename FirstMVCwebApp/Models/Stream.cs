using System.ComponentModel.DataAnnotations;

namespace FirstMVCwebApp.Models
{
    public class Stream
    {
        [Key]
        public int StreamId { get; set; }
        [Required]
        public string StreamName { get; set; }
        
        //Foreign key for Stream Defined in Form DB
        public ICollection<Form> FormData { get; set; }

    }
}
