using System.Text.Json.Serialization;
using Postgrest.Attributes;
using Postgrest.Models;

namespace backend.Models
{
    [Table("users")]
    public class Users : BaseModel
    {
        [PrimaryKey("user_id", false)]
        public Guid id { get; set; }

        [Column("name")]
        public string name { get; set; }

        [Column("email")]
        public string email { get; set; }

        [Column("password")]
        public string password { get; set; }

        [Column("register_date")]
        public DateTime registerDate { get; set; }
    }
}