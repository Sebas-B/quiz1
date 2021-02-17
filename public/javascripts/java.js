let rightAnswer;
let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let timeInterval;
let time = 25;
let cal=0.0;

    const cuestionary = [
       {
         "question": "¿Cual es la función de la fuente de alimentación?",
         "answers": ["para convertir la alimentación de CA en una tensión de CC de menor voltaje",
                     "para convertir la alimentación de CA en una alimentación de CC de mayor voltaje",
		     "para convertir la corriente continua en una tensión baja de corriente alterna",
                     "para convertir la alimentación de CC en una alimentación de CA de mayor voltaje"]
       },
       {
         "question": "¿Qué componente de la placa base se conectan al chipset Northbridge?",
         "answers": ["RAM",
		     "NIC",
		     "USB 2.0",
		     "Dispositivos Firmware"]
       },
        {
         "question": "¿Que tipo de conector se puede usar para conectar un disco duro interno a la placa basa?",
         "answers": ["SATA",
		     "USB",
		     "eSATA",
		     "Rayo"]
       },
  	{
         "question": "¿Cuándo usaria el tecnico pasta termica?",
		     "answers": ["Al instalar el CPU",
		     "Al intalar SSD",
                     "Al solucionar problemas",
                     "Al realizar mantenimiento"]
	},
	{
         "question": "¿Qué tipo de ranuras de expansión usaría hoy una NIC inalámbrica en una computadora?",
         "answers": ["PCI",
	             "AGP",
		     "DIMM",
                     "STRA"]
       },
	{
         "question": "¿Que tecnologia de almacenamiento de estado sólido permite actualizar el BIOS de una computadora mediante flasheo?",
         "answers": ["EEROM",
                     "SDRAM",
                     "ROM",
                     "SODIMM"]
       },
	{
         "question": "La forma más comprimida de la dirección IPv6 2001: Odb8: cate: 0100: Of0d: 0000:0000: 00AA / 96",
         "answers": ["2001: db8: cafe: 100: f0d :: AA /96",
                     "2001: db8: cafe: 1: f0d :: AA /96",
                     "2001: 0db8: cafe: 0100: 0f0d :: AA /96",
                     "2001: 0db8: cafe: 0100: 0f0d :: 00AA /96"]
       },
	{
         "question": "¿Por que las computadoras portatiles usan tecnicas de aceleración de la CPU?",
         "answers": ["Para reducir el calor que puede generar el CPU",
                     "Para mejorar el rendimiento de la CPU",
                     "Para garantiar que CPU está funcionando a su velocidad maxima",
	             "Para conservar la vida de la bateria al reducir le velocidad del bas entre la CPU y RAM"]
       },
	{
         "question": "¿Qué configuracion de PC se pueden configurar con la utilidad de configuración del BIOS?",
         "answers": ["Secuencia de incio",
                     "Enviar",
                     "Asignacion de memoria a aplicaciones",
                     "Habilitar controladores de dispositivo"]
       },
	{
         "question": "¿Que tipo de dispositivo da energia a una computadora y que le  permite apagarse?",

         "answers": ["Fuente de poder ininterrumpible",
                     "Supresor de picos",
                     "Inversor de energia",
                     "Fuente de alimentacion de reserva" ]
       },
       {
	 "question": "",
         "answers": [""]
       }
     ];

     const printHTMLQuestion = (i) => {
       currentQuestionIndex++;
       let q = cuestionary[i];
       let a = q.answers;
       rightAnswer = a[0];

       a = a.sort((a,b) => Math.floor(Math.random() * 3) -1);

       const htmlAnswersArray = a.map( currentA => `<p class="answer"><button class="btn btn-primary" onClick="evaluateAnswer('${currentA}', this)">X</button> <span>${currentA}</span></p>`);
       const htmlAnswers = htmlAnswersArray.join(' ');

       let htmlQuestionCode = `<p>${q.question}</p><div>${htmlAnswers}</div>`;


       cal=((rightAnswers-wrongAnswers)/10)*10;
       let mensaje = 'tu puntaje es '+cal;
       if(currentQuestionIndex == 10){
         alert("Terminaste, bien hecho "+mensaje);
	 window.location.href = "/calificacion";
       }


       document.querySelector('.question').innerHTML = htmlQuestionCode;

       time = 25;
       document.querySelector('.time').innerHTML = time;
       clearInterval(timeInterval);
       timeInterval = setInterval( ()=> {
         time--;
         if(time == 0){
           alert('Demasiado lento');
           clearInterval(timeInterval);
         }else{
           document.querySelector('.time').innerHTML = time;
         }
       }, 1000)

     };

     const evaluateAnswer = (answer, obj) =>{
       document.querySelectorAll('.answer').forEach(a => a.classList.remove('right','wrong'));
       const parentP = obj.parentNode;
       if(answer == rightAnswer){
         parentP.classList.add('right');
         rightAnswers++;
         document.querySelector('.rightCounter').innerHTML = rightAnswers;
       }else{
         parentP.classList.add('wrong');
         wrongAnswers++;
         document.querySelector('.wrongCounter').innerHTML = wrongAnswers;
       }
     }

     const nextQuestion = _ => {

     }

     const iniciarTest = _ => {
       printHTMLQuestion(currentQuestionIndex);
       document.querySelector('.btnIniciar').style.display = "none";
       document.querySelector('.container').style.display = "block";

     }

