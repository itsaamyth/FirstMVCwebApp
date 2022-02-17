namespace FirstMVCwebApp.Models
{
    public class ViewModel
    {
        public IEnumerable<Form> Form { get; set; }
        public IEnumerable<Course> Courses { get; set; }
        public IEnumerable<Stream> Stream { get; set; }

    }
}
