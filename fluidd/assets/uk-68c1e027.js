var e={app:{bedmesh:{label:{box_scale:"Масштаб коробки",flat_surface:"Показати базову площину",mesh_matrix:"Сітчаста матриця",probed_matrix:"Зондована матриця",profile_name:"Ім'я профілю",remove_profile:"Видалити профіль %{name} ",scale:"Масштаб кольорів",wireframe:"Каркасна сітка"},msg:{hint:"Якщо зберігати не як %{name}, ви також можете вибрати - видалити профіль %{name}",not_found:"Не знайдено існуючих сіток столу.",not_loaded:"Сітка не завантажена"},tooltip:{calibrate:"Почати нове калібрування, буде збережено як профіль 'default'",delete:"Видалити профіль. Це призведе до ПЕРЕЗАВАНТАЖЕННЯ вашого принтеру",load:"Завантажити профіль",save:"Зберегти калібрований профіль в printer.cfg. Це призведе до ПЕРЕЗАВАНТАЖЕННЯ вашого принтеру"}},chart:{label:{current:"Поточне значення",item:"Елемент",off:"Діаграма увімк.",on:"Діаграма вимк.",power:"Потужність",target:"Ціль"},tooltip:{help:"Утримуйте Shift для збільшення.<br />Клікніть на елемент, щоб змінити його видимість на графіку.<br />Клікніть на потужність, щоб змінити видимість шкали на графіку."}},console:{label:{auto_scroll:"Автопрокрутка",hide_temp_waits:"Приховати тимчасові очікування"},placeholder:{command:"'tab' для автозаповнення, 'help' для списку команд 'стрілки↑ і ↓' історія команд"}},endpoint:{error:{cant_connect:"Щось пішло не так fluidd не може підключитися. Ви впевнені, що це правильний адрес?",cors_error:"Заблоковано політикою CORS",cors_note:'Це може означати, що ви повинні змінити вашу конфігурацію для moonraker. Будь-ласка перегляньте документацію налаштування декількох принтерів <a href="%{url}" target="_blank">тут</a>'},hint:{add_printer:"Наприклад, http://fluiddpi.local"},msg:{trouble:'Виникли проблеми? Перейдіть <a href="%{url}" target="_blank">сюди</a> для отримання додаткової інформації.'},tooltip:{endpoint_examples:"Введіть API URL. <br />Наприклад:<br /><blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"Немає контакту",triggered:"Є контакт"},msg:{subtitle:"Оновіть статус кінцевиків за допомого кнопки оновити"}},file_system:{filters:{label:{print_start_time:"Відфільтрувати надруковане",print_start_time_desc:"Відфільтрувати вже надруковані деталі."}},label:{dir_name:"Ім'я каталогу",disk_usage:"Використаний дисковий простір",downloaded:"Завантажене",file_name:"Ім'я файлу",transfer_rate:"Швидкість передачі даних",uploaded:"Завантажено"},msg:{confirm:"Ви впевнені? Це видалить всі файли і каталоги всередині.",not_found:"Файли не знайдені",processing:"Обробка"},overlay:{label:"<strong>Перетягніть</strong> файл сюди"},title:{add_dir:"Додати каталог",add_file:"Додати файл",download_file:"Отримання файлу",rename_dir:"Перейменувати папку",rename_file:"Перейменувати файл",upload_file:"Завантаження файлу | Завантаження файлів"},tooltip:{low_on_space:"Мало місця на диску"}},gcode:{btn:{load_current_file:"Завантажити поточний файл"},label:{current_layer_height:"Поточна висота шару",follow_progress:"Слідкувати за прогресом",layer:"Шар",layers:"Шари",parsed:"Проаналізовано",show_extrusions:"Показувати екструзію",show_moves:"Показувати переміщення",show_next_layer:"Показувати наступний шар",show_previous_layer:"Показувати попередній шар",show_retractions:"Показувати відкат"},msg:{confirm:'Розмір файлу "%{filename}" є %{size}, це може бути ресурсоємним процесом для вашої системи. Ви впевнені?'}},general:{btn:{add:"Додати",add_dir:"Додати каталог",add_file:"Додати файл",add_printer:"Додати принтер",adjust_layout:"Налаштувати макет панелі приладів",all:"Всі",calibrate:"Калібрування",cancel:"Відмінити",clear_profile:"Очистити профіль",close:"Закрити",config_reference:"Приклади конфігурацій",download:"Завантажити",edit:"Редагувати",exit_layout:"Вийти з режиму редагування макету",extrude:"Вичавити",heaters_off:"Нагрівачі ВИМК.",load_all:"Завантажити все",more_information:"Більше інформації",pause:"Пауза",preheat:"Переднагрів",presets:"Шаблон",preview_gcode:"Переглянути Gcode",quad_gantry_level:"QGL",reboot:"Перезавантаження",remove:"Видалити",remove_all:"Видалити все",rename:"Перейменувати",reprint:"Друкувати ще раз",reset_file:"Скинути файл",reset_layout:"Скинути макет панелі приладів",restart_firmware:"Перезавантажити прошивку",restart_service_klipper:"Перезавантажити Klipper",restart_service_moonraker:"Перезавантажити Moonraker",resume:"Продовжити",retract:"Відкат",save:"Зберегти",save_as:"Зберегти як",save_restart:"Зберегти і перезавантажити",send:"Відправити",shutdown:"Вимкнути",socket_refresh:"Примусово оновити",upload:"Завантажити",upload_print:"Завантажити і друкувати",view:"Вигляд"},error:{app_setup_link:'Вимоги для встановлення Fluidd можна переглянути <a target="_blank" href="%{url}">тут.</a>',app_warnings_found:"Знайдено попередження у %{appName}.",components_config:'Конфігурація для плагінів Moonraker можна переглянути <a target="_blank" href="%{url}">тут.</a>',failed_components:"Moonraker не зміг запустити деякі плагіни. Будь-ласка перевірте логи, оновіть конфігурацію і перезавантажте moonraker."},label:{accel_to_decel:"Прискорення і сповільнення",acceleration:"Прискорення",add_camera:"Додати камеру",add_preset:"Додати шаблон",api_url:"API URL",category:"Категорія",clear_all:"Очистити все",confirm:"Підтвердити",disabled_while_printing:"Вимкнено під час друку",edit_camera:"Редагувати камеру",edit_preset:"Редагувати шаблон",extrude_length:"Довжина екструзії",extrude_speed:"Швидкість екструзії",flow:"Потік",free:"вільно",high:"Вище",host:"Хост",layout:"Макет панелі приладів",longest_job:"Найдовший друк",low:"Нижче",name:"Ім'я",no_notifications:"Немає сповіщень",off:"Вимкнути",power:"Живлення",printers:"Принтери",progress:"Прогрес",requested_speed:"Запит швидкості",retract_length:"Довжина відкату",retract_speed:"Швидкість відкату",save_as:"Зберегти як",services:"Сервіси",speed:"Швидкість",sqv:"Швидкість проходження кута",total_filament:"Всього використано філаменту",total_filament_avg:"Середнє на друк",total_jobs:"Всього завдань друку",total_print_time:"Загальний час друку",total_print_time_avg:"Середній час друку",total_time:"Загальний час",total_time_avg:"Середній час",uncategorized:"Без категорії",unretract_speed:"Швидкість втягування",used:"використано",variance:"Розбіжність",velocity:"Швидкість",visible:"Видимий",z_offset:"Зміщення Z"},simple_form:{error:{arrayofnums:"Тільки цифри",exists:"Вже існує",invalid_url:"Недійсна URL-адреса",max:"Max %{max}",min:"Min %{min}",min_or_0:"Min %{min} або 0",required:"Вимагається"},msg:{confirm:"Ви впевнені?",confirm_reboot_host:"Ви впевнені? Це перезавантажить вашу хост-систему.",confirm_shutdown_host:"Ви впевнені? Це вимкне вашу хост-систему."}},table:{header:{actions:"Дії",end_time:"Завершено",estimated_time:"Очікуваний час",filament:"Філамент",filament_used:"Використано філаменту",filament_weight_total:"Вага філаменту",first_layer_bed_temp:"Температура столу на першому шарі",first_layer_extr_temp:"Температура сопла на першому шарі",first_layer_height:"Висота першого шару",height:"Висота",last_printed:"Востаннє надруковано",layer_height:"Висота шару",modified:"Модифіковано",name:"І'мя",print_duration:"Тривалість друку",size:"Розмір",slicer:"Слайсер",slicer_version:"Версія слайсеру",start_time:"Час початку",status:"Статус",total_duration:"Загальна тривалість"}},title:{add_printer:"Додати принтер",bedmesh:"Сітка столу",bedmesh_controls:"Керування сіткою столу",camera:"Камера | Камери",config_files:"Файли конфігурації",configure:"Система",console:"Консоль",endstops:"Кінцевики",fans_outputs:"Вентилятори і Виходи",gcode_preview:"Перегляд Gcode",history:"Історія завдань",home:"Панель керування",jobs:"Завдання",limits:"Ліміти принтера",macros:"Макроси",retract:"Відкат через прошивку",runout_sensors:"Давач закінчення пластику",settings:"Налаштування",stats:"Статистика принтеру",temperature:"Температури",tool:"Інструмент",tune:"Тонке налаштування"},tooltip:{estop:"Аварійна зупинка",reload_klipper:"Перезавантажує налаштування klipper",reload_restart_klipper:"Перезавантажує налаштування klipper і перезавантажує MCU",restart_klipper:"Перезавантажує сервіс klipper"}},history:{msg:{}},printer:{state:{busy:"Зайняти",complete:"Готово",idle:"Чекає завдання",loading:"Завантаження",paused:"Пауза",printing:"Йде друк",ready:"Готовий",standby:"Режим очікування"}},setting:{btn:{add_camera:"Додати камеру",add_thermal_preset:"Додати шаблон",reset:"Скинути",select_theme:"Вибрати тему"},camera_type_options:{mjpegadaptive:"MJPEG Адаптивний",mjpegstream:"Потік MJPEG",video:"IP Камера"},label:{all_off:"Вимкнути все",all_on:"Увімкнути все",camera_flip_x:"Перевернути горизонтально",camera_flip_y:"Перевернути вертикально",camera_stream_type:"Тип потоку",camera_url:"Url камерт",confirm_on_estop:"Потрібно підтвердження Аварійної зупинки",dark_mode:"Темна тема",default_extrude_length:"Довжина екструзії за замовчуванням",default_extrude_speed:"Швидкість екструзії за замовчуванням",default_toolhead_move_length:"Довжина переміщень головки за замовчуванням",default_toolhead_xy_speed:"Швидкість головки по осях XY за замовчуванням",default_toolhead_z_speed:"Швидкість головки по осі Z за замовчуванням",draw_background:"Задній фон",enable:"Увімкнути",enable_notifications:"Увімкнути сповіщення",extrusion_line_width:"Ширина лінії екструзії",flip_horizontal:"Горизонтально відобразити",flip_vertical:"Вертикально відобразити",fps_target:"Ціль FPS",gcode_coords:"Використовувати координати з GCode",invert_x_control:"Інвертувати керування по осі X",invert_y_control:"Інвертувати керування по осі Y",invert_z_control:"Інвертувати керування по осі Z",language:"Мова інтерфейсу",move_line_width:"Ширина лінії переміщення",primary_color:"Основний колір",printer_name:"Ім'я принтера",reset:"Скинути налаштування",retraction_icon_size:"Розмір іконки відкату",thermal_preset_name:"Ім'я шаблону",z_adjust_values:"Значення підстроювання осі Z"},timer_options:{duration:"Тільки тривалість",filament:"Оцінка використання філаменту",file:"Оцінка часу на основі файлу",slicer:"Слайсер"},title:{camera:"Камера | Камери",gcode_preview:"Попередній перегляд GCode",general:"Загальне",macros:"Макроси",theme:"Тема",thermal_presets:"Шаблони температури",tool:"Інструмент"},tooltip:{gcode_coords:"Використовувати позиції з GCode замість позиції головки на панелі керування"}},socket:{msg:{connecting:"Підключення до moonraker...",no_connection:"Немає підключення до moonraker. Будь-ласка перевірте статус роботи moonraker і / або перезапустіть сторінку."}},tool:{btn:{home_x:"X",home_y:"Y"},tooltip:{extruder_disabled:"екструдери вимкнений, температрура нижче min_extrude_temp (%{min}<small>°C</small>)",home_xy:"Додому XY",home_z:"Додому Z"}},version:{btn:{check_for_updates:"Перевірити наявність оновлень",finish:"Фініш",update:"Оновити",view_versions:"Переглянути версії"},label:{commit_history:"Історія комітів",commits_on:"Коміти на",committed:"Закомічено",dirty:"DIRTY",invalid:"INVALID",os_packages:"Застосунки OS",package_list:"Список пакетів",up_to_date:"Версія актуальна",updates_available:"Доступні оновлення"},status:{finished:"Оновлення закінчено",updating:"Оновлення..."},title:"Оновлення ПЗ",tooltip:{commit_history:"Історія комітів",dirty:"вказує на від'єднаний стан HEAD, не в master-гілці або недійсний оригінальний репозиторій",invalid:"вказує на локальні зміни в репозиторії",packages:"Пакети",release_notes:"Примітки до релізу"}}}};export{e as default};
