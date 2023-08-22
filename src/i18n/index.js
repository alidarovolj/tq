import {createI18n} from "vue-i18n";

const messages = {
    ru: {
        header: {
            links: {
                services: "Услуги",
                about: "О компании",
                price: "Цены",
                contacts: "Контакты",
                login: "Войти",
                register: "Зарегистрироваться",
                admin: "Админ. панель"
            },
        },
        login: {
            header: "Войти на сайт",
            email: {
                placeholder: "Введите e-mail",
                name: "E-mail",
            },
            password: {
                placeholder: "Введите пароль",
                name: "Пароль",
            },
            button: "Войти",
            login_alias:
                "Если вы все еще не зарегистрированы, то перейдите по данной ссылке",
        },
        registration: {
            header: "Регистрация",
            name: {
                placeholder: "Введите имя",
                name: "Имя",
            },
            lastname: {
                placeholder: "Введите фамилию",
                name: "Фамилия",
            },
            patro: {
                placeholder: "Введите отчество",
                name: "Отчество",
            },
            phone: {
                placeholder: "Введите телефон",
                name: "Телефон",
            },
            email: {
                placeholder: "Введите e-mail",
                name: "E-mail",
            },
            password: {
                placeholder: "Введите пароль",
                name: "Пароль",
            },
            confirm_password: {
                placeholder: "Подтвердите пароль",
                name: "Подтверждение пароля",
            },
            button: "Зарегистрироваться",
            login_alias: "Если вы уже имеете аккаунт, то перейдите на страницу входа",
        },
        mainPage: {
            hero: {
                header: "Автоматизация бизнес-процессов компаний в ",
                city: "Алматы",
                paragraph:
                    "Разработка сайтов любой сложности исходя из Ваших потребностей",
                input: "Введите то, что вас интересует...",
                form: {
                    header:
                        "Оставьте информацию о себе, мы перезвоним вам чтобы узнать детали",
                    name: "Имя и фамилия",
                    email: "Email",
                    button: "Оставить заявку",
                    agreement:
                        "Отправляя заявку, вы принимаете условия договора оферты и даете согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности",
                    errors: {
                        name: "Введите любое значение",
                        email: "Введите корректный email",
                        phone: "Введите любое значение",
                    },
                },
            },
            about: {
                header: "Немного о нашей компании",
                paragraph:
                    "У нас есть все необходимое для запуска и развития вашего бизнеса",
                firstBlock:
                    "Технологии что мы используем для разработки сайтов наших клиентов",
                secondBlock: "Результаты поиска наших сайтов",
            },
            steps: {
                header: "Этапы создания сайта",
                paragraph:
                    "У нас есть все необходимое для запуска и развития вашего бизнеса",
                first: {
                    heading: "Сбор информации",
                    paragraph: "Знакомство со сферой деятельности и обсуждение пожеланий",
                },
                second: {
                    heading: "Техническое задание",
                    paragraph:
                        "Разработка технического задания. Описание ключевых моментов",
                },
                third: {
                    heading: "Проектирование",
                    paragraph:
                        "Подготовка и проектирование. Составление плана будущего проекта",
                },
                fourth: {
                    heading: "Дизайн",
                    paragraph:
                        "Разработка, согласование и утверждение персонального дизайна",
                },
                fifth: {
                    heading: "Верстка",
                    paragraph:
                        "Индивидуальная адаптивная верстка (создание сайта) с чистым кодом",
                },
                sixth: {
                    heading: "Кодирование",
                    paragraph:
                        "Программирование сайта, подключение необходимых скриптов и модулей",
                },
                seventh: {
                    heading: "Адинисративная панель",
                    paragraph:
                        "Интеграция сайта с системой управления. Подключение админ панели",
                },
                eighth: {
                    heading: "Наполнение",
                    paragraph:
                        "Наполнение сайта информацией. Создание разделов и подразделов",
                },
                ninth: {
                    heading: "Оптимизация",
                    paragraph:
                        "Поисковая оптимизация под ключевые запросы. Составление заголовков и описания",
                },
                tenth: {
                    heading: "Запуск сайта",
                    paragraph:
                        "Сдача сайта в эксплуатацию клиенту. Анализ и прием выполненных работ",
                },
                eleven: {
                    heading: "Продвижение",
                    paragraph:
                        "Выбор аудитории для продвижения. Раскрутка и контекстная реклама",
                },
                twelve: {
                    heading: "Поддержка",
                    paragraph:
                        "Мониторинг сайта, поддержка, обновление и дополнение информации",
                },
            },
        },
    },
    en: {
        header: {
            links: {
                services: "Services",
                about: "About",
                price: "Price",
                contacts: "Contacts",
                login: "Login",
                register: "Register",
                admin: "Admin panel"
            },
        },
        login: {
            header: "Sign in",
            email: {
                placeholder: "Enter e-mail",
                name: "E-mail",
            },
            password: {
                placeholder: "Enter password",
                name: "Password",
            },
            button: "Log in",
            login_alias: "If you are still not registered, please follow this link.",
        },
        registration: {
            header: "Registration",
            name: {
                placeholder: "Enter your name",
                name: "Name",
            },
            lastname: {
                placeholder: "Enter last name",
                name: "Lastname",
            },
            patro: {
                placeholder: "Enter middle name",
                name: "Patronymic",
            },
            phone: {
                placeholder: "Enter phone",
                name: "Phone",
            },
            email: {
                placeholder: "Enter e-mail",
                name: "E-mail",
            },
            password: {
                placeholder: "Enter password",
                name: "Password",
            },
            confirm_password: {
                placeholder: "Confirm the password",
                name: "Password confirmation",
            },
            button: "Register",
            login_alias: "If you already have an account, then go to the login page",
        },
        mainPage: {
            hero: {
                header: "Automation of business processes of companies in",
                city: "Almaty",
                paragraph: "Website development of any complexity based on your needs",
                input: "Enter what interests you...",
                form: {
                    header:
                        "Leave information about yourself, we will call you back to find out the details",
                    name: "First and last name",
                    email: "Email",
                    button: "Submit your application",
                    agreement:
                        "By submitting an application, you accept the terms of the offer agreement and agree to the processing of your personal data in accordance with the privacy policy",
                    errors: {
                        name: "Please enter any value",
                        email: "Please enter a valid email",
                        phone: "Please enter any value",
                    },
                },
            },
            about: {
                header: "A little about our company",
                paragraph:
                    "We have everything you need to start and grow your business",
                firstBlock: "Technologies that we use to develop our clients' websites",
                secondBlock: "Search results for our sites",
            },
            steps: {
                header: "Stages of creating a site",
                paragraph:
                    "We have everything you need to start and grow your business",
                first: {
                    heading: "Collection of information",
                    paragraph:
                        "Acquaintance with the field of activity and discussion of wishes",
                },
                second: {
                    heading: "Technical task",
                    paragraph:
                        "Development of technical specifications. Description of key points",
                },
                third: {
                    heading: "Projection",
                    paragraph:
                        "Preparation and design. Drawing up a plan for a future project",
                },
                fourth: {
                    heading: "Design",
                    paragraph: "Development, approval and approval of personal design",
                },
                fifth: {
                    heading: "Layout",
                    paragraph:
                        "Individual adaptive layout (website creation) with clean code",
                },
                sixth: {
                    heading: "Coding",
                    paragraph:
                        "Website programming, connection of necessary scripts and modules",
                },
                seventh: {
                    heading: "Admin Panel",
                    paragraph:
                        "Site integration with the management system. Connecting the admin panel",
                },
                eighth: {
                    heading: "Filing",
                    paragraph:
                        "Filling the site with information. Creating sections and subsections",
                },
                ninth: {
                    heading: "Optimization",
                    paragraph:
                        "Search engine optimization for key queries. Writing titles and descriptions",
                },
                tenth: {
                    heading: "Launch of the project",
                    paragraph:
                        "Commissioning of the site to the client. Analysis and acceptance of work performed",
                },
                eleven: {
                    heading: "Promotion",
                    paragraph:
                        "Choosing an audience for promotion. Promotion and contextual advertising",
                },
                twelve: {
                    heading: "Support",
                    paragraph:
                        "Site monitoring, support, updating and supplementing information",
                },
            },
        },
    },
    kz: {
        header: {
            links: {
                services: "Қызметтер",
                about: "Компания жайлы",
                price: "Бағалар",
                contacts: "Контактілер",
                login: "Кіру",
                register: "Тіркелу",
                admin: "Әкімші панелі"
            },
        },
        login: {
            header: "Сайтқа кіру",
            email: {
                placeholder: "Электрондық поштаны енгізіңіз",
                name: "E-mail",
            },
            password: {
                placeholder: "Құпия сөзді еңгізіңіз",
                name: "Құпия сөз",
            },
            button: "Кіру үшін",
            login_alias: "Егер сіз әлі тіркелмеген болсаңыз, мына сілтемеге өтіңіз.",
        },
        registration: {
            header: "Тіркеу",
            name: {
                placeholder: "Атыңызды енгізіңіз",
                name: "Аты",
            },
            lastname: {
                placeholder: "Фамилияны енгізіңіз",
                name: "Тегі",
            },
            patro: {
                placeholder: "Әкесінің атын енгізіңіз",
                name: "Тегі",
            },
            phone: {
                placeholder: "Телефонды енгізіңіз",
                name: "Телефон",
            },
            email: {
                placeholder: "Электрондық поштаны енгізіңіз",
                name: "E-mail",
            },
            password: {
                placeholder: "Құпия сөзді еңгізіңіз",
                name: "Құпия сөз",
            },
            confirm_password: {
                placeholder: "Құпия сөзді растаңыз",
                name: "Құпиясөзді растау",
            },
            button: "Тіркелу",
            login_alias: "Егер сізде тіркелгіңіз бар болса, кіру бетіне өтіңіз",
        },
        mainPage: {
            hero: {
                header: "қаласындағы компаниялардың бизнес-процестерін автоматтандыру",
                city: "Алматы",
                paragraph:
                    "Сіздің қажеттіліктеріңізге негізделген кез келген күрделіліктегі веб-сайтты әзірлеу",
                input: "Сізді қызықтыратын нәрсені енгізіңіз...",
                form: {
                    header:
                        "Өзіңіз туралы ақпарат қалдырыңыз, егжей-тегжейлі білу үшін сізге қайта қоңырау шаламыз",
                    name: "Аты-жөні",
                    email: "Email",
                    button: "Өтінішіңізді жіберіңіз",
                    agreement:
                        "Өтінім беру арқылы сіз ұсыныс келісімінің шарттарын қабылдайсыз және жеке деректеріңізді құпиялылық саясатына сәйкес өңдеуге келісесіз.",
                    errors: {
                        name: "Кез келген мәнді енгізіңіз",
                        email: "Жарамды электрондық поштаны енгізіңіз",
                        phone: "Кез келген мәнді енгізіңіз",
                    },
                },
            },
            about: {
                header: "Біздің компания туралы аздап",
                paragraph:
                    "Бізде сіздің бизнесіңізді бастау және дамыту үшін қажет нәрсенің бәрі бар",
                firstBlock:
                    "Клиенттердің веб-сайттарын әзірлеу үшін қолданатын технологиялар",
                secondBlock: "Біздің сайттар үшін іздеу нәтижелері",
            },
            steps: {
                header: "Сайтты құру кезеңдері",
                paragraph:
                    "Бізде сіздің бизнесіңізді бастау және дамыту үшін қажет нәрсенің бәрі бар",
                first: {
                    heading: "Ақпарат жинау",
                    paragraph: "Қызмет саласымен танысу және тілектерді талқылау",
                },
                second: {
                    heading: "Техникалық тапсырма",
                    paragraph:
                        "Техникалық шарттарды әзірлеу. Негізгі нүктелердің сипаттамасы",
                },
                third: {
                    heading: "Жұмыс дизайны",
                    paragraph: "Дайындау және жобалау. Болашақ жобаның жоспарын құру",
                },
                fourth: {
                    heading: "ДИЗАЙН",
                    paragraph: "Жеке дизайнды әзірлеу, бекіту және бекіту",
                },
                fifth: {
                    heading: "Сайттың орналасуы",
                    paragraph: "Таза кодпен жеке адаптивті орналасу (веб-сайт жасау).",
                },
                sixth: {
                    heading: "Кодтау",
                    paragraph:
                        "Веб-сайтты бағдарламалау, қажетті сценарийлер мен модульдерді қосу",
                },
                seventh: {
                    heading: "Әкімшілік панель",
                    paragraph: "Сайтты басқару жүйесімен біріктіру. Әкімші панелін қосу",
                },
                eighth: {
                    heading: "Толтыру",
                    paragraph:
                        "Сайтты ақпаратпен толтыру. Бөлімдер мен бөлімшелерді құру",
                },
                ninth: {
                    heading: "Оңтайландыру",
                    paragraph:
                        "Негізгі сұраулар үшін іздеу жүйесін оңтайландыру. Тақырыптар мен сипаттамаларды жазу",
                },
                tenth: {
                    heading: "Жобаның іске қосылуы",
                    paragraph:
                        "Сайтты клиентке тапсыру. Орындалған жұмыстарды талдау және қабылдау",
                },
                eleven: {
                    heading: "Науқан",
                    paragraph:
                        "Жарнамалау үшін аудиторияны таңдау. Жарнама және контекстік жарнама",
                },
                twelve: {
                    heading: "Қолдау",
                    paragraph: "Сайтты бақылау, қолдау, ақпаратты жаңарту және толықтыру",
                },
            },
        },
    },
};

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages,
});
