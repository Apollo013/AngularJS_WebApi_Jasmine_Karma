using Newtonsoft.Json;
using Refresher.WebApi.Models;
using System;

namespace Refresher.WebApi.Repository
{
    public class JsonSerialization<T> : FileBase where T : BaseEntity
    {
        public T ParseSingleEntityFile(string fileName)
        {
            try
            {
                string jsonString = base.ReadAllText(fileName);
                return JsonConvert.DeserializeObject<T>(jsonString);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void WriteSingleEntityFile(string fileName, T entity)
        {
            try
            {
                string json = JsonConvert.SerializeObject(entity);
                base.WriteAllText(fileName, json);

            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}