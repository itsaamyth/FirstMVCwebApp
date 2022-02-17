using System.ComponentModel.DataAnnotations;

namespace FirstMVCwebApp.Models
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }
        [Required]
        public string CourseName { get; set; }

        public ICollection<Form> FormData { get; set; }


    }
}
