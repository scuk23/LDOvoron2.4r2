var e={app:{bedmesh:{label:{box_scale:"Scala Volume",flat_surface:"Mostra il Piano",mesh_matrix:"Matrice della Mesh",probed_matrix:"Matrice Sondata",profile_name:"Nome del Profilo",remove_profile:"Rimuovi il profilo %{name}",scale:"Riscala in min / max",wireframe:"Wireframe"},msg:{hint:"Se salvi come qualcosa di diverso da %{name}, puoi scegliere di rimuovere anche il profilo %{name}",not_found:"Nessuna mesh del letto esistente trovata.",not_loaded:"Nessuna mesh caricata"},tooltip:{calibrate:"Comincia una nuova calibrazione, salvando il profilo come 'predefinito'",delete:`Elimina profilo
Questa azione riavvierà la stampante`,load:"Carica profilo",save:`Salva il profilo calibrato in printer.cfg.
Questa azione riavvierà la stampante`}},chart:{label:{current:"Effettivo",item:"Nome",off:"Disattiva Grafico",on:"Attiva Grafico",power:"Energia",target:"Target"},tooltip:{help:"Tieni premuto MAIUSC per ingrandire. <br /> Fai clic su un elemento per attivare / disattivare il grafico. <br /> Fai clic su un valore energetico per attivare / disattivare il grafico."}},console:{label:{auto_scroll:"Scorrimento automatico",hide_temp_waits:"Nascondi i wait di temperatura"},placeholder:{command:'"scheda" per il completamento automatico, "aiuto" per i comandi "frecce" per la cronologia'}},endpoint:{error:{cant_connect:`Qualcosa è andato storto e fluidd non riesce a raggiungere la destinazione.
Sei sicuro che questo sia l'indirizzo corretto?`,cors_error:"bloccato dalla CORS policy",cors_note:`Potrebbe significare che devi modificare la tua configurazione di moonraker.
Consulta la documentazione sulle configurazioni di più stampanti contemporanee <a href="%{url}" target="_blank"> qui </a>`},hint:{add_printer:"Ad esempio, http://fluiddpi.local"},msg:{trouble:`Stai avendo problemi?
<a href="%{url}" target="_blank"> Fai clic qui </a> per ulteriori informazioni.`},tooltip:{endpoint_examples:"Inserisci l'URL dell'API. <br /> Ad esempio: <br /> <blockquote> http: //fluidd.local, http://192.168.1.150 </blockquote>"}},endstop:{label:{open:"APERTO",triggered:"ATTIVATO"},msg:{subtitle:"Utilizza il pulsante di aggiornamento per aggiornare lo stato dei finecorsa."}},file_system:{filters:{label:{print_start_time:"Filtra per inizio di stampa",print_start_time_desc:"Non mostrare gli elementi che hai già stampato."}},label:{dir_name:"Nome della directory",disk_usage:"Utilizzo del disco",diskinfo:"Informazioni Disco",downloaded:"Scaricato",file_name:"Nome del file",transfer_rate:"Rateo di trasferimento",uploaded:"Caricato"},msg:{confirm:`Sei sicuro?
Questa azione eliminerà tutti i file e le cartelle.`,not_found:"Nessun file trovato",processing:"Calcolando"},overlay:{label:"<strong> Trascina </strong> un file qui"},title:{add_dir:"Aggiungi Directory",add_file:"Aggiungi File",download_file:"Recupero file in corso",rename_dir:"Rinomina Directory",rename_file:"Rinomina il File",upload_file:`Caricamento file |
Caricamento files`},tooltip:{low_on_space:"Spazio su disco insufficiente"}},gcode:{btn:{load_current_file:"Carica file attuale"},label:{current_layer_height:"Altezza layer attuale",follow_progress:"Segui il Progresso",layer:"Layer",layers:"Layers",parsed:"Analizzati",show_extrusions:"Mostra estrusioni",show_moves:"Mostra movimenti",show_next_layer:"Mostra il prossimo Layer",show_previous_layer:"Mostra il Layer precedente",show_retractions:"Mostra ritrazioni"},msg:{confirm:'Il file "%{filename}" è di %{size}, potrebbe essere intensivo sulle risorse del tuo sistema. Sei sicuro?'}},general:{btn:{add:"Aggiungi",add_dir:"Aggiungi Directory",add_file:"Aggiungi File",add_printer:"Aggiungi Stampante",adjust_layout:"Personalizza il layout della dashboard",all:"Tutti",calibrate:"Calibra",cancel:"Annulla",clear_profile:"Cancella Profilo",close:"Chiudi",config_reference:"Risorse Configurazione",download:"Scarica",edit:"Modifica",exit_layout:"Esci dalla modalità layout",extrude:"Estrudi",heaters_off:"Riscaldatori spenti",load_all:"Carica tutto",more_information:"Più informazioni",pause:"Pausa",preheat:"Preriscalda",presets:"Preset",preview_gcode:"Anteprima GCode",quad_gantry_level:"QGL",reboot:"Riavvia",refresh:"ricarica",remove:"Rimuovi",remove_all:"Rimuovi Tutto",rename:"Rinomina",reprint:"Ristampa",reset_file:"Reimposta File",reset_layout:"Ripristina Layout",restart_firmware:"Riavvia il firmware",restart_service:"Riavvia %{servizio}",restart_service_klipper:"Riavvia Klipper",restart_service_moonraker:"Riavvia Moonraker",resume:"Riprendi",retract:"Retrai",save:"Salva",save_as:"Salva Come",save_restart:"Salva & Riavvia",send:"Invia",set_color:"Imposta colore",shutdown:"Spegnimento",socket_refresh:"Forza Refresh",upload:"Carica",upload_print:"Carica & Stampa",view:"Visualizza"},error:{app_setup_link:'Puoi trovare i requisiti di configurazione di Fluidd <a target="_blank" href="%{url}"> qui </a>.',app_warnings_found:"% {appName} avvisi trovati.",components_config:'Puoi trovare la configurazione dei plug-in Moonraker <a target="_blank" href="%{url}"> qui </a>.',failed_components:"Moonraker ha problemi con dei plugin. Controlla i tuoi log, aggiorna la tua configurazione e riavvia moonraker."},label:{accel_to_decel:"Accel to Decel",acceleration:"Accelerazione",add_camera:"Aggiungi Camera",add_preset:"Aggiungi Preset",add_user:"Aggiungi utente",api_key:"Chiave API",api_url:"URL API",category:"Categoria",change_password:"Cambia la password",clear_all:"Rimuovi tutte",color:"Colore",confirm:"Conferma",current_password:"Password attuale",disabled_while_printing:"Disabilitato durante la stampa",edit_camera:"Modifica Camera",edit_preset:"Modifica Preset",edit_user:"Modifica utente",extrude_length:"Lunghezza di Estrusione",extrude_speed:"Velocità di Estrusione",flow:"Flusso",free:"free",high:"Alto",host:"Ospite",layout:"Disposizione",longest_job:"Lavoro più lungo",low:"Basso",name:"Nome",new_password:"Nuova password",no_notifications:"Disabilita Notifiche",off:"Off",password:"Password",power:"Energia",printers:"Stampanti",progress:"Progresso",requested_speed:"Velocità Richiesta",retract_length:"Lunghezza di ritrazione",retract_speed:"Velocità di ritrazione",save_as:"Salva Come",services:"Servizi",speed:"Velocità",sqv:"Velocità 'Square Corner'",total_filament:"Filamento totale utilizzato",total_filament_avg:"Media per stampa",total_jobs:"Lavori di stampa totali",total_print_time:"Tempo di stampa totale",total_print_time_avg:"Media per stampa",total_time:"Tempo totale",total_time_avg:"Media per stampa",uncategorized:"Non categorizzato",unretract_speed:"Velocità di de-ritrazione",used:"Utilizzato",variance:"Varianza",velocity:"Velocità",visible:"Visibile",z_offset:"Offset Z"},msg:{password_changed:"Password cambiata",wrong_password:`Oops! Qualcosa è andato storto.
La tua password è corretta?`},simple_form:{error:{arrayofnums:"Solo numeri",exists:"Preesistente",invalid_url:"URL non valido",max:"Max% {max}",min:"Min% {min}",min_or_0:"Min% {min} o 0",password_username:"Impossibile abbinare il nome utente",required:"Richiesto"},msg:{confirm:"Sei sicuro?",confirm_reboot_host:`Sei sicuro?
Questa azione raivvierà il tuo host.`,confirm_shutdown_host:`Sei sicuro?
Questa azione spegnerà il tuo host.`}},table:{header:{actions:"Azioni",end_time:"Fine",estimated_time:"Tempo stimato",filament:"Filamento",filament_used:"Filamento utilizzato",filament_weight_total:"Peso totale filamento",first_layer_bed_temp:"Temp. Piatto nel primo strato",first_layer_extr_temp:"Temp. Estrusore nel primo strato",first_layer_height:"Altezza del primo strato",height:"Altezza",last_printed:"Ultima stampa",layer_height:"Altezza dello strato",modified:"Modificato",name:"Nome",print_duration:"Durata della stampa",size:"Dimensione",slicer:"Slicer",slicer_version:"Versione Slicer",start_time:"Iniziato",status:"Stato",total_duration:"Durata totale"}},title:{add_printer:"Aggiungi Stampante",bedmesh:"Matrice Piatto",bedmesh_controls:"Controlla la matrice del piatto",camera:"Camera | Camere",config_files:"Files di Configurazione",configure:"Configura",console:"Terminale",endstops:"Finecorsa",fans_outputs:"Ventole & Output",gcode_preview:"Anteprima GCode",history:"Cronologia dei lavori",home:"Pannello di Controllo",jobs:"Lavori",limits:"Limiti della Stampante",macros:"Macro",retract:"Ritrazioni firmware",runout_sensors:"Sensori Fine Filamento",settings:"Impostazioni",stats:"Statistiche Stampante",system:"Sistema",system_overview:"Informazioni di sistema",temperature:"Temperature",tool:"Attrezzo",tune:"Calibrazioni"},tooltip:{estop:"Arresto di Emergenza",reload_klipper:"Ricarica la configurazione di Klipper.",reload_restart_klipper:"Ricarica la configurazione di Klipper e riavvia la MCU.",restart_klipper:"Riavvia il servizio di Klipper."}},history:{msg:{}},printer:{state:{busy:"Occupato",complete:"Completato",idle:"Inattivo",loading:"Caricamento",paused:"In Pausa",printing:"Stampando",ready:"Pronto",standby:"Pausa"}},setting:{btn:{add_camera:"Aggiungi Camera",add_thermal_preset:"Aggiungi Preset",add_user:"Aggiungi utente",reset:"Ripristina",select_theme:"Seleziona il Tema"},camera_type_options:{mjpegadaptive:"MJPEG Adattivo",mjpegstream:"MJPEG Stream",video:"IP Camera"},label:{all_off:"Tutti Off",all_on:"Tutto On",camera_flip_x:"Capovolgi orizzontalmente",camera_flip_y:"Capovolgi verticalmente",camera_stream_type:"Tipo di Stream",camera_url:"URL Camera",confirm_on_estop:"Conferma prima di arrestare",dark_mode:"Dark Mode",default_extrude_length:"Lunghezza di estrusione predefinita",default_extrude_speed:"Velocità di estrusione predefinita",default_toolhead_move_length:"Lunghezza di spostamento testa di stampa predefinita",default_toolhead_xy_speed:"Velocità XY della testa di stampa predefinita",default_toolhead_z_speed:"Velocità Z predefinita della testa di stampa",draw_background:"Mostra sfondo",enable:"Abilita",enable_notifications:"Attiva le notifiche",extrusion_line_width:"Larghezza linea di estrusione",flip_horizontal:"Capovolgi orizzontalmente",flip_vertical:"Capovolgi verticalmente",fps_target:"Target FPS",gcode_coords:"Usa Coordinate GCode",invert_x_control:"Inverti controllo X.",invert_y_control:"Inverti controllo Y.",invert_z_control:"Inverti controllo Z.",language:"Lingua",move_line_width:"Larghezza linea in movimento",primary_color:"Colore primario",printer_name:"Nome della Stampante",reset:"Ripristina le impostazioni",retraction_icon_size:"Dimensione dell'icona di ritrazione",show_animations:"Mostra animazioni",theme_preset:"Temi della community",thermal_preset_name:"Nome Preset",z_adjust_values:"Valori Z di fino"},timer_options:{duration:"Solo Durata",filament:"Stima in base al Filamento",file:"Stima in base al File",slicer:"Stima in base allo Slicer"},title:{authentication:"Autenticazione",camera:"Camera | Camere",gcode_preview:"Anteprima GCode",general:"Generale",macros:"Macro",theme:"Tema",thermal_presets:"Preset Termici",tool:"Attrezzo"},tooltip:{gcode_coords:"Visualizza la posizione del GCode invece della posizione della testata sulla dashboard"}},socket:{msg:{connecting:"Connessione a Moonraker...",no_connection:`Nessuna connessione Moonraker.
Controlla lo stato di Moonraker e / o aggiorna.`}},system_info:{label:{capacity:"Capacità",cpu_desc:"Descrizione della CPU",distribution_codename:"Nome in codice",distribution_like:"Like Distribuzione",distribution_name:"Distribuzione",hardware_desc:"Descrizione dell'hardware",hostname:"Nome host",klipper_load:"Carico di Klipper",manufactured:"Prodotto",manufacturer:"Produttore",mcu_awake:"Awake Time {mcu}",mcu_bandwidth:"Banda Utilizzata {mcu}",mcu_load:"Carico {mcu}",model:"Modello CPU",moonraker_load:"Carico di Moonraker",processor_desc:"Processore",product_name:"nome del prodotto",serial_number:"Numero di serie",system_load:"Carico di sistema",system_memory:"Memoria di sistema",system_utilization:"Utilizzo del sistema",total_memory:"Memoria totale"}},tool:{btn:{home_x:"X",home_y:"Y"},tooltip:{extruder_disabled:"estrusore disabilitato, al di sotto di min_extrude_temp (% {min} <small> ° C </small>)",home_xy:"Home XY",home_z:"Home Z"}},version:{btn:{check_for_updates:"Controlla gli aggiornamenti",finish:"Finisci",update:"Aggiorna",view_versions:"Visualizza Versioni"},label:{commit_history:"Cronologia Commit",commits_on:"Commit su",committed:"Committed",dirty:"SPORCO",invalid:"NON VALIDO",os_packages:"Pacchetti OS",package_list:"Elenco dei Pacchetti",up_to_date:"AGGIORNATO",updates_available:"Aggiornamenti Disponibili"},status:{finished:"Aggiornamenti terminati",updating:"Aggiornando..."},title:"Aggiornamenti Software",tooltip:{commit_history:"Cronologia dei Commit",dirty:"indica una head staccata, non su master o una origin non valida",invalid:"indica modifiche locali alla repo",packages:"Pacchetti",release_notes:"Note di Rilascio"}}}};export{e as default};
