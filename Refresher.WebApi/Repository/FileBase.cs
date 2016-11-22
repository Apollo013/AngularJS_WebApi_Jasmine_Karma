using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Refresher.WebApi.Repository
{
    public abstract class FileBase
    {
        /// <summary>
        /// Reads a string of characters from file
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns></returns>
        protected string ReadAllText(string fileName)
        {
            if (string.IsNullOrWhiteSpace(fileName))
            {
                throw new NullReferenceException("No File Name Specified");
            }

            string json = string.Empty;

            try
            {
                json = File.ReadAllText(fileName);
            }
            catch (FileNotFoundException ex)
            {
                throw new FileNotFoundException(ex.Message);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return json;
        }

        /// <summary>
        /// Writes a string of characters to file
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="json"></param>
        protected void WriteAllText(string fileName, string json)
        {
            if (string.IsNullOrWhiteSpace(fileName))
            {
                throw new NullReferenceException("No File Name Specified");
            }

            if (string.IsNullOrWhiteSpace(json))
            {
                throw new NullReferenceException("No Json Specified");
            }

            try
            {
                File.WriteAllText(fileName, json);
            }
            catch (FileNotFoundException ex)
            {
                throw new FileNotFoundException(ex.Message);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<string> GetFiles(string path)
        {
            if (Directory.Exists(path))
            {
                return Directory.GetFiles(path).ToList();

            }
            return null;
        }
    }
}