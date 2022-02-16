using System.ComponentModel.DataAnnotations;

namespace FirstMVCwebApp.Models
{
    public class Courses
    {
        [Key]
        public int CourseId { get; set; }
        [Required]
        public string CourseName { get; set; }
        
    }
}
