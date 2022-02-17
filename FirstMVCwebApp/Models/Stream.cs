using System.ComponentModel.DataAnnotations;

namespace FirstMVCwebApp.Models
{
    public class Stream
    {
        [Key]
        public int StreamId { get; set; }
        [Required]
        public string StreamName { get; set; }
        public ICollection<Form> FormData { get; set; }

    }
}
