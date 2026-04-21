(function(){
  const questions = [
    { id: 'intro', text: 'Hola. Gracias por participar. Esta entrevista busca entender cómo las personas ciegas interactúan con navegadores web y tecnologías de asistencia. Durará aproximadamente 20 minutos. ¿Desea comenzar?' },
    { id: 'datos_edad', text: '¿Podría contarnos brevemente su edad aproximada y a qué se dedica actualmente?' },
    { id: 'discapacidad', text: '¿Su discapacidad visual es total o tiene algún grado de visión residual?' },
    { id: 'desde_cuando', text: '¿Desde cuándo utiliza computadoras o dispositivos móviles?' },
    { id: 'frecuencia_internet', text: '¿Con qué frecuencia utiliza internet en su vida diaria?' },
    { id: 'dispositivos', text: '¿En qué dispositivos navega habitualmente? PC, notebook, móvil o tablet?' },
    { id: 'so', text: '¿Qué sistema operativo utiliza normalmente?' },
    { id: 'navegadores', text: '¿Con qué navegadores suele navegar?' },
    { id: 'lector', text: '¿Qué lector de pantalla utiliza normalmente?' },
    { id: 'multiples_lectores', text: '¿Utiliza más de un lector según el dispositivo?' },
    { id: 'config_personal', text: '¿Tiene configuraciones personalizadas en el lector de pantalla?' },
    { id: 'velocidad', text: '¿Qué nivel de velocidad de lectura utiliza?' },
    { id: 'auriculares', text: '¿Utiliza auriculares o parlantes para escuchar el lector?' },
    { id: 'otras_herr', text: '¿Utiliza otras herramientas de asistencia además del lector de pantalla?' },
    { id: 'como_inicio', text: 'Cuando desea visitar un sitio web, ¿cómo comienza normalmente?' },
    { id: 'direccion_o_busqueda', text: '¿Escribe directamente la dirección del sitio o utiliza buscadores?' },
    { id: 'favoritos', text: '¿Utiliza marcadores o favoritos?' },
    { id: 'pagina_cargada', text: '¿Cómo sabe que una página terminó de cargar?' },
    { id: 'foco_teclado', text: '¿Cómo detecta que el foco del teclado está en el lugar correcto?' },
    { id: 'explorar_sitio', text: 'Cuando entra a un sitio nuevo, ¿cómo empieza a explorarlo?' },
    { id: 'encabezados', text: '¿Utiliza navegación por encabezados?' },
    { id: 'enlaces', text: '¿Utiliza navegación por enlaces?' },
    { id: 'landmarks', text: '¿Utiliza navegación por regiones o landmarks?' },
    { id: 'busqueda_pagina', text: '¿Utiliza búsqueda dentro de la página?' },
    { id: 'identifica_secciones', text: '¿Cómo identifica las secciones principales del sitio?' },
    { id: 'reconoce_enlace', text: '¿Cómo reconoce que un enlace es importante?' },
    { id: 'formularios_facil', text: '¿Le resulta fácil completar formularios web?' },
    { id: 'problemas_form', text: '¿Qué problemas encuentra normalmente al completar formularios?' },
    { id: 'campo_oblig', text: '¿Le resulta claro cuándo un campo es obligatorio?' },
    { id: 'tablas_claras', text: '¿Le resulta sencillo comprender tablas de datos?' },
    { id: 'dificultades_tablas', text: '¿Qué dificultades encuentra cuando navega tablas?' },
    { id: 'imagenes_desc', text: '¿Las imágenes suelen tener descripciones útiles?' },
    { id: 'imagen_sin_desc', text: '¿Qué ocurre cuando una imagen no tiene descripción?' },
    { id: 'ventana_emergente', text: '¿Le resulta fácil detectar cuando aparece una ventana emergente?' },
    { id: 'paginas_dificiles', text: '¿Qué tipo de páginas le resultan más difíciles de navegar?' },
    { id: 'errores_frecuentes', text: '¿Qué errores o problemas encuentra con más frecuencia?' },
    { id: 'elementos_evita', text: '¿Hay elementos de la web que suele evitar?' },
    { id: 'contenido_no_puede', text: '¿Hay tipos de contenido que directamente no puede usar?' },
    { id: 'abandono', text: '¿Alguna vez abandonó un sitio porque era imposible usarlo?' },
    { id: 'cuando_dificil', text: 'Cuando encuentra una página difícil de navegar, ¿qué hace?' },
    { id: 'busca_alternativas', text: '¿Busca alternativas o intenta otro sitio?' },
    { id: 'atajos', text: '¿Utiliza atajos del lector de pantalla para resolver problemas?' },
    { id: 'pide_ayuda', text: '¿Alguna vez pide ayuda a otra persona para navegar?' },
    { id: 'frustracion', text: '¿Qué situaciones le generan mayor frustración al navegar?' },
    { id: 'paginas_comodas', text: '¿Qué tipo de páginas le resultan más cómodas de usar?' },
    { id: 'cuando_esfuerzo', text: '¿En qué momento siente que navegar requiere demasiado esfuerzo?' },
    { id: 'cuando_bien', text: '¿Cuándo siente que un sitio está bien diseñado para personas ciegas?' },
    { id: 'sitios_frecuentes', text: '¿Qué sitios web utiliza con más frecuencia?' },
    { id: 'sitios_buenos', text: '¿Cuáles considera que están bien diseñados para personas ciegas?' },
    { id: 'sitio_dificil', text: '¿Podría mencionar algún sitio particularmente difícil de usar?' },
    { id: 'al_entrar_nuevo', text: 'Cuando entra por primera vez a un sitio, ¿qué hace primero?' },
    { id: 'tiempo_entender', text: '¿Cuánto tiempo tarda en entender la estructura del sitio?' },
    { id: 'que_le_ayuda', text: '¿Qué le ayuda a orientarse en una página nueva?' },
    { id: 'gustaria_guiado', text: '¿Le gustaría que un sistema lo guiara dentro de una página web?' },
    { id: 'tipo_ayuda', text: '¿Qué tipo de ayuda sería más útil?' },
    { id: 'resumen_pagina', text: '¿Le gustaría recibir resúmenes de una página?' },
    { id: 'mapa_pagina', text: '¿Le serviría un mapa de la página con las secciones principales?' },
    { id: 'llevar_botones', text: '¿Le sería útil un sistema que lo lleve directamente a botones importantes?' },
    { id: 'funciones_ideal', text: '¿Qué funciones debería tener un asistente ideal para navegar?' },
    { id: 'como_sabe_bien', text: '¿Cómo sabe si una página está bien estructurada?' },
    { id: 'foco_cambio_claro', text: '¿Le resulta claro cuándo el foco del teclado cambia?' },
    { id: 'caract_facil', text: '¿Qué características hacen que un sitio sea fácil de usar?' },
    { id: 'errores_acces', text: '¿Qué errores de accesibilidad nota con mayor frecuencia?' },
    { id: 'mejoras', text: '¿Qué mejoras le gustaría ver en los sitios web actuales?' },
    { id: 'recomendacion', text: 'Si pudiera dar una recomendación a diseñadores web, ¿cuál sería?' },
    { id: 'algo_mas', text: '¿Hay algo importante sobre la navegación web que no le hayamos preguntado?' },
    { id: 'cierre', text: 'Muchas gracias por su participación. ¿Desea añadir algún comentario final?' }
  ];

  const startBtn = document.getElementById('startBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const skipBtn = document.getElementById('skipBtn');
  const status = document.getElementById('status');
  const log = document.getElementById('log');

  let idx = 0;
  let responses = {};
  let lastQuestion = null;

  function appendLog(label, text){
    const d = document.createElement('div');
    d.textContent = label + ': ' + text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function selectSpanishFemaleVoice(){
    const voices = speechSynthesis.getVoices();
    if(!voices || voices.length === 0) return null;
    // prefer Spanish female-like voices by heuristics, fallback to first Spanish voice
    const femaleHint = /female|femenina|maria|sofia|soledad|luc[aí]a|isabel|isabela|google español|spanish m/i;
    let v = voices.find(v=>v.lang && v.lang.startsWith('es') && femaleHint.test(v.name));
    if(!v) v = voices.find(v=>v.lang && v.lang.startsWith('es'));
    if(!v) v = voices[0];
    return v;
  }

  function speak(text, cb, opts){
    status.textContent = text;
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = (opts && opts.lang) || 'es-AR';
    ut.rate = (opts && opts.rate) || 1.0;
    ut.pitch = (opts && opts.pitch) || 1.05;
    // try to pick a Spanish female voice when available
    const voice = selectSpanishFemaleVoice();
    if(voice) ut.voice = voice;
    ut.onend = () => { if(cb) cb(); };
    // ensure voices are loaded (some browsers require getVoices to be called earlier)
    try{ speechSynthesis.cancel(); }catch(e){}
    speechSynthesis.speak(ut);
  }

  function listenOnce(onResult, onError){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition){
      onError && onError(new Error('SpeechRecognition no soportado'));
      return;
    }
    const recog = new SpeechRecognition();
    recog.lang = 'es-AR';
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onresult = (e)=>{
      const text = e.results[0][0].transcript.trim();
      onResult && onResult(text);
    };
    recog.onerror = (e)=>{ onError && onError(e); };
    recog.start();
  }

  function askCurrent(){
    if(idx >= questions.length){
      finishSurvey();
      return;
    }
    const q = questions[idx];
    lastQuestion = q;
    // Ask the question, then listen for answer. Support 'repetir' during answer to replay the question.
    speak(q.text, ()=>{
      listenOnce((answer)=>{
        const low = answer.toLowerCase();
        if(low.includes('repetir')){
          // user asked to repeat the question
          appendLog('Comando', 'Repetir última pregunta');
          speak(q.text, ()=>{ askCurrent(); });
          return;
        }
        appendLog('Pregunta', q.text);
        appendLog('Respuesta', answer);
        // confirm: only ask '¿Es correcto?' and accept 'correcto', 'si'/'sí' or 'no'
        speak('Usted dijo: ' + answer + '. ¿Es correcto?', ()=>{
          listenOnce((conf)=>{
            const c = (conf || '').toLowerCase();
            if(c.includes('no')){
              // repeat answer
              speak('De acuerdo, repita por favor la respuesta.', ()=>{
                listenOnce((rep)=>{
                  responses[q.id] = rep;
                  appendLog('Respuesta corregida', rep);
                  idx++;
                  setTimeout(askCurrent, 300);
                }, (err)=>{ appendLog('Error reconocimiento', err.message || err); idx++; setTimeout(askCurrent,300); });
              });
            } else if(c.includes('correcto') || c.includes('sí') || c.includes('si')){
              responses[q.id] = answer;
              idx++;
              setTimeout(askCurrent, 300);
            } else {
              // unrecognized confirmation, assume yes after brief prompt
              speak('No entendí la confirmación. Si desea confirmar diga «correcto» o «sí», si desea repetir diga «no». Procederé suponiendo que es correcto.', ()=>{
                responses[q.id] = answer;
                idx++;
                setTimeout(askCurrent, 300);
              });
            }
          }, (err)=>{ appendLog('Error confirmación', err.message || err); idx++; setTimeout(askCurrent,300); });
        });
      }, (err)=>{
        appendLog('Error reconocimiento', err.message || err);
        // proceed to next
        idx++;
        setTimeout(askCurrent, 300);
      });
    });
  }

  function finishSurvey(){
    speak('Gracias. Hemos terminado la entrevista. Guardando sus respuestas.', ()=>{
      fetch('/submit', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(responses)})
      .then(r=>r.json()).then(()=>{
        speak('Sus respuestas fueron guardadas. Muchas gracias por su participación.');
        appendLog('Estado','Encuesta finalizada y enviada');
      }).catch(err=>{ appendLog('Error guardado', err.message || err); speak('Ocurrió un error al guardar las respuestas.'); });
    });
  }

  startBtn.addEventListener('click', ()=>{
    idx = 0; responses = {}; log.innerHTML = '';
    // welcome + explain commands (female, agradable)
    const intro1 = 'Hola. Gracias por participar. Esta entrevista busca entender cómo las personas ciegas interactúan con navegadores web y tecnologías de asistencia. Durará aproximadamente veinte minutos.';
    const commands = 'Puede utilizar los siguientes comandos por voz: Diga «iniciar entrevista» cuando esté listo para iniciarla. Diga «repetir última pregunta» cuando quiera volver a escuchar la pregunta. Para confirmar una respuesta, cuando le pregunte «¿Es correcto?», responda «correcto», «sí» o «no». Si dice «no», podrá repetir su respuesta.';
    // speak intro and commands with a pleasant female voice and slightly higher pitch
    speak(intro1, ()=>{
      speak(commands, ()=>{
        // ask user to say 'iniciar entrevista' to begin
        speak('Diga iniciar entrevista cuando esté listo para comenzar.', ()=>{
          listenOnce((cmd)=>{
            const c = (cmd||'').toLowerCase();
            if(c.includes('iniciar')){
              speak('Perfecto. Comenzamos ahora.', ()=>{ askCurrent(); });
            } else if(c.includes('repetir')){
              speak('Repito la instrucción. ' + commands, ()=>{ /* then wait once more or start */ askCurrent(); });
            } else {
              // if not recognized, start anyway
              speak('No se reconoció el comando. Comenzaré la entrevista ahora.', ()=>{ askCurrent(); });
            }
          }, (err)=>{ appendLog('Error reconocimiento', err.message || err); speak('No se detectó comando por voz. Comienzo la entrevista.', ()=>{ askCurrent(); }); });
        }, {pitch:1.15});
      }, {pitch:1.12});
    }, {pitch:1.1});
  });

  repeatBtn.addEventListener('click', ()=>{
    if(lastQuestion) speak(lastQuestion.text);
  });

  skipBtn.addEventListener('click', ()=>{
    idx++; askCurrent();
  });

  // allow Enter to start
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      startBtn.focus(); startBtn.click();
    }
  });
})();
