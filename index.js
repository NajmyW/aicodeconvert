const axios = require("axios");
const CryptoJS = require("crypto-js");

const language = [
  "ActiveMQ", "ALL Program", "Android Code", "Angular", "Arduino", "Assembly Language",
  "Automatic detection", "Bash", "Binary Code", "C", "C#", "C++", "Chrome Extension",
  "Clojure", "COBOL", "CoffeeScript", "CSS", "Dart", "Decimal Code", "Django",
  "Docker", "Ehcache", "Elixir", "ELK Stack", "Esp 32", "Esp 8266", "FlinkSql",
  "Fortran", "Git", "GitLab CI", "Go", "Google Cloud", "Groovy", "Haskell",
  "Hex Code", "HTML", "HTML JS CSS", "Java", "JavaScript", "Jenkins", "JSX",
  "Julia", "JWT", "Kafka", "Kotlin", "Kubernetes", "Linux", "Lisp", "Lua",
  "MarkDown", "Matlab", "Memcached", "MongoDB", "MoonScript", "Morse Code",
  "MQL5", "MySQL", "Natural Language", "Next.js", "Node.js", "NoSQL",
  "Objective-C", "Pascal", "Perl", "PHP", "Pine Script", "PL/SQL",
  "PostgreSQL", "Powershell", "Pseudo Code", "Python", "R", "RabbitMQ",
  "Racket", "React", "Redis", "Regular expression", "RocketMQ", "Ruby",
  "Ruby on Rails", "Rust", "SAS", "Scala", "Selenium", "Shell", "Shiro",
  "Splunk", "Spring", "Spring Cloud", "Spring Security", "SpringBoot",
  "SQL", "SVN", "Swift", "SwiftUI", "Tailwind", "Three.js", "Travis CI",
  "TSX", "TypeScript", "VBA", "Visual Basic .NET", "Vue"
];

const opts = [
  "convert", "debug", "ask", "optimize", "explain"
];

const naturaLanguage = [
  "Deutsch", "English", "Español", "Français",
  "Italiano", "Português", "Русский", "فارسی",
  "বাংলা"
];

const AICode = async (
  inputLanguage = "Natural Language",
  outputLanguage = "ALL Program",
  inputCode,
  option = "convert",
  outputNaturalLanguage = "English"
) => {
  const plainText = Math.random().toString(36).substring(7);
  const secret = CryptoJS.AES.encrypt(plainText, "RGtG61ad77FJbkc5vgfd9c6d1fa11omd5lhlethooFrt4eu3B8cWbP1JmuuoSbs3ATlbkJ7Mae143b1ad77debdca1d1338a4909e6e3eb08ca54bf61fe4f689acRGtG6RGtG61ad77FJbkc5vgfd9c6d1fa11omd5lhlethooFrt4eu3B8cWbP1JmuuoSbs3ATlbkJ7Mae143b1ad77debdca1d1338a4909e6e3eb08ca54bf61fe4f689acRGtG6FJbkc5vgfd9c6d1fa11omd5lhlethooFrt4eu3B8cWbP1JmuuoSbs3ATlbkJ7Mae143bdebdca1d1338a4909e6e3eb08ca54bf61fe4f689acFJbkc5vgfd9c6d1fa11omd5lhlethooFrt4eu3B8cWbP1JmuuoSbs3ATlbkJ7Mae143bdebdca1d1338a4909e6e3eb08ca54bf61fe4f689ac").toString();
  const random = plainText;

  const data = {
    inputLanguage,
    outputLanguage,
    inputCode,
    option,
    outputNaturalLanguage,
    secret,
    random
  };

  try {
    const { data: res } = await axios.post('https://aicodeconvert.com/api/translate', data, {
      headers: {
        'authority': 'aicodeconvert.com',
        'accept': '/',
        'content-type': 'application/json',
        'user-agent': 'Postify/1.0.0'
      }
    });
    return res;
  } catch (error) {
    return error.message
  }
};
// AICode("Natural Language", "ALL Program", "Hello world", "convert", "English").then(a => console.log(a)).catch(error => console.error(error));
module.exports = { AICode }
