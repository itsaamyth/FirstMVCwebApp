﻿using FirstMVCwebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstMVCwebApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Profile> Profiles { get; set; }

        public DbSet<Form> FormData { get; set; }

        public DbSet<Course> Course { get; set; }
        public DbSet<Models.Stream> Stream { get; set; }




    }
}
