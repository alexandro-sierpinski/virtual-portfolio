export interface ILanguages {
    [key: string]: {
        introTyping: { text: string };
        navBar: { [key: string]: string };
        about: { title: string; text: string };
        experience: { title: string; companies: { [key: string]: any } };
        inBuilding: { text: string };
        
    },    
}

export const Languages: ILanguages = {
    "pt-BR": {
        "introTyping": {
            "text": "  Olá Mundo!... Bem-vindo ao meu Portfólio Virtual",
        },
        "navBar": {
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            experience: "Experiência",
            education: "Educação",
            resume: "Currículo",
        },
        "about":{
            "title": "Sobre Mim",
            "text": "__Olá! Sou um desenvolvedor Full Stack apaixonado por tecnologia e por criar soluções que impactam " +
            "positivamente a vida das pessoas. Com experiência em diversas tecnologias e frameworks, tenho a " +
            "capacidade de atuar tanto no front-end quanto no back-end, garantindo a entrega de projetos robustos, " +
            "escaláveis e de alta qualidade. " +
            "Ao longo da minha trajetória, adquiri conhecimentos sólidos em uma variedade de ferramentas e " +
            "linguagens, organizadas por área de atuação: \n" +
            "_Front-end: \n" +
            "____React, JavaScript, CSS, Electron (para desenvolvimento de aplicações desktop). \n" +
            "_Back-end: \n" +
            "____Node.js, Python (Django), Java (Spring Boot), APIs REST. \n" +
            "_Banco de Dados: \n" +
            "____PostgreSQL, MongoDB, Firebird. \n" +
            "_Frameworks e Bibliotecas: \n" +
            "____Spring Boot, Django, Hibernate. \n" +
            "_Testes: \n" +
            "____JUnit. \n" +
            "_Outras Tecnologias: \n" +
            "____Delphi (para desenvolvimento de aplicações desktop). \n" +            
            "_Essa diversidade de habilidades me permite adaptar-me a diferentes necessidades e desafios, desde a " +
            "criação de interfaces modernas e responsivas até a construção de sistemas complexos e integrados. " +
            "Acredito na importância de escrever código limpo, bem estruturado e testável, e sempre busco aprender e " +
            "me atualizar sobre as melhores práticas e tendências do mercado. Além disso, valorizo o trabalho em " +
            "equipe e a comunicação clara, pois acredito que são fundamentais para o sucesso de qualquer projeto. " +
            "Se você está procurando um desenvolvedor versátil, comprometido e com um amplo leque de " +
            "habilidades, vamos conversar! Estou sempre aberto a novos desafios e oportunidades para contribuir com " +
            "projetos inovadores."
            
        },
        "experience": {
            "title": "Minha Experiência",
            "companies": {
                "consisaTI":{
                    "textTyping":
                    "__nome: Consisa Sistemas \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: fevereiro de 2019 - março de 2022 \n" +
                    "_cargo: TI de infra e redes \n" +
                    "_palavras-chave: [Infra, Redes, Cloud, bluepex] \n" +
                    "_descricao-cargo: Fazia manutenção e suporte de infra e redes. Logo após um tempo, \n" +
                        "foi migrado para cloud, onde ajudava a configurar e manter o ambiente.",
                    "name": "Consisa Sistemas",
                    "duration": "fevereiro de 2019 - março de 2022",
                    "keyCompany": "consisaTI",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "consisaDevelopment": {
                    "textTyping":
                    "__nome: Consisa Sistemas \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: março de 2022 - novembro de 2024 \n" +
                    "_cargo: Desenvolvedor Full Stack \n" +
                    "_palavras-chave: [delphi, Firebird, ERP, PAF-ECF, faturamento, transporte] \n" +
                    "_descricao-cargo: Desenvolvimento de sistema ERP contábil, onde meu foco era mais no modulo de faturamento, \n" +
                        "e modulo transporte e por um tempo fiquei no PAF-ECF. A principal linguagem era delphi, e o banco de dados \n" +
                        "era o Firebird.",
                    "name": "Consisa Sistemas",
                    "duration": "março de 2022 - novembro de 2024",
                    "keyCompany": "consisaDevelopment",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "parseint": {
                    "textTyping":
                    "__nome: Parseint \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: janeiro de 2024 - outubro de 2024 \n" +
                    "_cargo: Desenvolvedor Full Stack \n" +
                    "_palavras-chave: [Java, React, Javascript, Material-UI, PostgreSQL, MongoDB, JUnit, Hibernate, Electron] \n" +
                    "_descricao-cargo: Desenvolvimento de sistema PDV online e Gerencial para varejo online. \n" +
                        "A principal linguagem era Java, usavamos o framework React com Material UI. \n" +
                        "O banco de dados era o PostgreSQL, mas também era usado o MongoDB para algumas coisas. \n" +
                        "Para teste unitário era usado o JUnit. O ORM era o Hibernate. Também usei Electron para \n" +
                        "criar um app local para fazer o gerenciamento de catracas para restaurantes.",
                    "name": "Parseint",
                    "duration": "janeiro de 2024 - outubro de 2024",
                    "keyCompany": "parseint",
                    "logo": "https://parseint.com.br/static/media/logo.c9067a5541d1ff26d8e6.png"
                },
                "consisaTI2":{
                    "textTyping":
                    "__nome: Consisa Sistemas \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: fevereiro de 2019 - março de 2022 \n" +
                    "_cargo: TI de infra e redes \n" +
                    "_palavras-chave: [Infra, Redes, Cloud, bluepex] \n" +
                    "_descricao-cargo: Fazia manutenção e suporte de infra e redes. Logo após um tempo, \n" +
                        "foi migrado para cloud, onde ajudava a configurar e manter o ambiente.",
                    "name": "Consisa Sistemas",
                    "duration": "fevereiro de 2019 - março de 2022",
                    "keyCompany": "consisaTI",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "consisaDevelopment2": {
                    "textTyping":
                    "__nome: Consisa Sistemas \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: março de 2022 - novembro de 2024 \n" +
                    "_cargo: Desenvolvedor Full Stack \n" +
                    "_palavras-chave: [delphi, Firebird, ERP, PAF-ECF, faturamento, transporte] \n" +
                    "_descricao-cargo: Desenvolvimento de sistema ERP contábil, onde meu foco era mais no modulo de faturamento, \n" +
                        "e modulo transporte e por um tempo fiquei no PAF-ECF. A principal linguagem era delphi, e o banco de dados \n" +
                        "era o Firebird.",
                    "name": "Consisa Sistemas",
                    "duration": "março de 2022 - novembro de 2024",
                    "keyCompany": "consisaDevelopment",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "parseint2": {
                    "textTyping":
                    "__nome: Parseint \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: janeiro de 2024 - outubro de 2024 \n" +
                    "_cargo: Desenvolvedor Full Stack \n" +
                    "_palavras-chave: [Java, React, Javascript, Material-UI, PostgreSQL, MongoDB, JUnit, Hibernate, Electron] \n" +
                    "_descricao-cargo: Desenvolvimento de sistema PDV online e Gerencial para varejo online. \n" +
                        "A principal linguagem era Java, usavamos o framework React com Material UI. \n" +
                        "O banco de dados era o PostgreSQL, mas também era usado o MongoDB para algumas coisas. \n" +
                        "Para teste unitário era usado o JUnit. O ORM era o Hibernate. Também usei Electron para \n" +
                        "criar um app local para fazer o gerenciamento de catracas para restaurantes.",
                    "name": "Parseint",
                    "duration": "janeiro de 2024 - outubro de 2024",
                    "keyCompany": "parseint",
                    "logo": "https://parseint.com.br/static/media/logo.c9067a5541d1ff26d8e6.png"
                },
            },
        },
        "inBuilding": {
            "text": "  Este portfólio ainda está em construção, mas já é possível navegar entre as páginas.",
        },
    },
    "en-US": {
        "introTyping": {
            "text": "  Hello World!... Welcome to my Virtual Portfolio",
        },
        "navBar": {
            "about": "About",
            "skills": "Skills",
            "projects": "Projects",
            "experience": "Experience",
            "education": "Education",
            "resume": "Resume",
        },  
        "about": {
            "title": "About Me",
            "text": "__Hello! I'm a Full Stack developer passionate about technology and creating solutions that " +
            "impact positively on people's lives. With experience in various technologies and frameworks, I have " +
            "the ability to work on both front-end and back-end, ensuring the delivery of robust, scalable " +
            "and high-quality projects. " +
            "Throughout my journey, I have acquired solid knowledge in a variety of tools and " +
            "technologies organized by area of activity: \n" +
            "_Front-end: \n" +
            "____React, JavaScript, CSS, Electron (for desktop application development). \n" +
            "_Back-end: \n" +
            "____Node.js, Python (Django), Java (Spring Boot), REST APIs. \n" +
            "_Database: \n" +
            "____PostgreSQL, MongoDB, Firebird. \n" +
            "_Frameworks and Libraries: \n" +
            "____Spring Boot, Django, Hibernate. \n" +
            "_Testing: \n" +
            "____JUnit. \n" +
            "_Other Technologies: \n" +
            "____Delphi (for desktop application development). \n" +
            "_This diversity of skills allows me to adapt to different needs and challenges, from creating" +
            "modern and responsive interfaces to building complex and integrated systems." +
            "I believe in the importance of writing clean, well-structured, and testable code, and I always seek to" +
            "learn and update myself about the best practices and trends in the market." +
            "In addition, I value teamwork and clear communication, as I believe they are essential for the" +
            "success of any project." +
            "If you are looking for a versatile, committed, and with a wide range of" +
            "skills, let's talk! I am always open to new challenges and opportunities to contribute to" +
            "innovative projects."
        },
        "experience": {
            "title": "My Experience",
            "companies": {
                "consisaTI": {
                    "textTyping":
                    "__name: Consisa Sistemas \n" +
                    "_location: Francisco Beltrão - PR \n" +
                    "_duration: february 2019 - march 2022 \n" +
                    "_position: TI of infra and networks \n" +
                    "_keyWords: [Infra, Redes, Cloud, bluepex] \n" +
                    "_description-cargo: Did maintenance and support of infra and networks. After a while, \n" +
                        "I was moved to cloud, where I helped configure and maintain the environment.",
                    "name": "Consisa Sistemas",
                    "duration": "february 2019 - march 2022",
                    "keyCompany": "consisaTI",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "consisaDevelopment": {
                    "textTyping":
                    "__name: Consisa Sistemas \n" +
                    "_location: Francisco Beltrão - PR \n" +
                    "_duration: march 2022 - november 2024 \n" +
                    "_position: Full Stack Developer \n" +
                    "_keyWords: [delphi, Firebird, ERP, PAF-ECF, faturamento, transporte] \n" +
                    "_description-cargo: Development of accounting ERP system, where my focus was more on billing module, \n" +
                        "transport module and for a while I was in PAF-ECF. The main language was delphi, and the database \n" +
                        "was Firebird.",
                    "name": "Consisa Sistemas",
                    "duration": "march 2022 - november 2024",
                    "keyCompany": "consisaDevelopment",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },

                "parseint": {
                    "textTyping":
                    "__name: Parseint \n" +
                    "_location: Francisco Beltrão - PR \n" +
                    "_duration: january 2024 - october 2024 \n" +
                    "_position: Full Stack Developer \n" +
                    "_keyWords: [Java, React, Javascript, Material-UI, PostgreSQL, MongoDB, JUnit, Hibernate, Electron] \n" +
                    "_description-cargo: Development of online PDV and Gerencial for online retail. \n" +
                        "The main language was Java, we used the React framework with Material UI. \n" +
                        "The database was PostgreSQL, but also MongoDB was used for some things. \n" +
                        "For unit testing, JUnit was used. The ORM was Hibernate. I also used Electron to \n" +
                        "create a local app to manage restaurant access control.",
                    "name": "Parseint",
                    "duration": "january 2024 - october 2024",
                    "keyCompany": "parseint",
                    "logo": "https://parseint.com.br/static/media/logo.c9067a5541d1ff26d8e6.png"
                },
                "consisaTI2":{
                    "textTyping":
                    "__nome: Consisa Sistemas \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: fevereiro de 2019 - março de 2022 \n" +
                    "_cargo: TI de infra e redes \n" +
                    "_palavras-chave: [Infra, Redes, Cloud, bluepex] \n" +
                    "_descricao-cargo: Fazia manutenção e suporte de infra e redes. Logo após um tempo, \n" +
                        "foi migrado para cloud, onde ajudava a configurar e manter o ambiente.",
                    "name": "Consisa Sistemas",
                    "duration": "fevereiro de 2019 - março de 2022",
                    "keyCompany": "consisaTI",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "consisaDevelopment2": {
                    "textTyping":
                    "__nome: Consisa Sistemas \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: março de 2022 - novembro de 2024 \n" +
                    "_cargo: Desenvolvedor Full Stack \n" +
                    "_palavras-chave: [delphi, Firebird, ERP, PAF-ECF, faturamento, transporte] \n" +
                    "_descricao-cargo: Desenvolvimento de sistema ERP contábil, onde meu foco era mais no modulo de faturamento, \n" +
                        "e modulo transporte e por um tempo fiquei no PAF-ECF. A principal linguagem era delphi, e o banco de dados \n" +
                        "era o Firebird.",
                    "name": "Consisa Sistemas",
                    "duration": "março de 2022 - novembro de 2024",
                    "keyCompany": "consisaDevelopment",
                    "logo": "https://images2.imgbox.com/b1/50/nDqnu3l8_o.png"
                },
                "parseint2": {
                    "textTyping":
                    "__nome: Parseint \n" +
                    "_localizacao: Francisco Beltrão - PR \n" +
                    "_duracao: janeiro de 2024 - outubro de 2024 \n" +
                    "_cargo: Desenvolvedor Full Stack \n" +
                    "_palavras-chave: [Java, React, Javascript, Material-UI, PostgreSQL, MongoDB, JUnit, Hibernate, Electron] \n" +
                    "_descricao-cargo: Desenvolvimento de sistema PDV online e Gerencial para varejo online. \n" +
                        "A principal linguagem era Java, usavamos o framework React com Material UI. \n" +
                        "O banco de dados era o PostgreSQL, mas também era usado o MongoDB para algumas coisas. \n" +
                        "Para teste unitário era usado o JUnit. O ORM era o Hibernate. Também usei Electron para \n" +
                        "criar um app local para fazer o gerenciamento de catracas para restaurantes.",
                    "name": "Parseint",
                    "duration": "janeiro de 2024 - outubro de 2024",
                    "keyCompany": "parseint",
                    "logo": "https://parseint.com.br/static/media/logo.c9067a5541d1ff26d8e6.png"
                },
            },
        },
        "inBuilding": {
            "text": "  This portfolio is still under construction, but it is already possible to navigate between pages.",
        },
    },
}