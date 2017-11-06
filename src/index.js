import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as Survey from 'survey-react';
import $ from 'jquery';

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.Survey.cssType = "bootstrapmaterial";

var surveyJSON = {locale:"es",pages:[{name:"page1",elements:[{type:"panel",name:"panelProyecto",elements:[{type:"dropdown",name:"proyecto",startWithNewLine:false,title:"Proyecto",choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/proyectos",valueName:"cod_proyecto",titleName:"descripcion"},optionsCaption:"     Proyecto"}],title:{es:"Proyecto"}},{type:"panel",name:"panelGeneral",elements:[{type:"panel",name:"panelDatosPersonales",elements:[{type:"text",isRequired:true,name:"nombre",placeHolder:"       Nombre",title:{es:"Nombre"}},{type:"text",name:"apellidos",placeHolder:"      Apellidos",startWithNewLine:false,title:{es:"Apellidos"}},{type:"text",inputType:"email",name:"email",placeHolder:"       Email",title:{es:"Email"},validators:[{type:"email"}]},{type:"text",inputType:"tel",name:"telefono",placeHolder:"     Teléfono",startWithNewLine:false,title:{default:"Ingresa tu número de teléfono ",es:"Teléfono"}},{type:"dropdown",name:"estado_civil",title:{es:"Estado civil"},choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/estado_civil",valueName:"descripcion",titleName:"descripcion"},optionsCaption:"       Estado Civil"}],title:{es:"Datos Personales:"}},{type:"panel",name:"panelDatosConyuge",elements:[{type:"text",name:"nombre_conyuge",placeHolder:"     Nombre conyuge",title:{es:"Nombre"}},{type:"text",inputType:"email",name:"email_conyuge",placeHolder:"     Email conyuge",title:{es:"Email"}},{type:"text",inputType:"tel",name:"telefono_conyuge",placeHolder:"     Teléfono conyuge",startWithNewLine:false,title:{es:"Teléfono:"}}],visible:false,visibleIf:"{estado_civil} = 'CASADO'",title:{es:"Datos del conyuge"}},{type:"panel",name:"panelDatosDomicilio",elements:[{type:"text",name:"residencia",placeHolder:"        Dirección",startWithNewLine:false,title:{es:"Dirección"}},{type:"text",inputType:"number",name:"zona",placeHolder:"       Zona",startWithNewLine:false,title:{es:"Zona"}},{type:"dropdown",name:"Ciudad",startWithNewLine:false,choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/municipio",valueName:"id_municipio",titleName:"descripcion"},optionsCaption:"     Selecciona ciudad"},{type:"dropdown",name:"tipoVivienda",title:{es:"La vivienda que actualmente habita es:"},choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/su_vivienda_es",valueName:"tipo",titleName:"tipo"},optionsCaption:{es:"La vivienda que actualmente habita es"}},{type:"panel",name:"panelIntegrantes",elements:[{type:"text",inputType:"number",name:"adultos",placeHolder:"     Adultos",title:{es:"Adultos"}},{type:"text",inputType:"number",name:"ninos",placeHolder:"      Niños",startWithNewLine:false,title:{es:"Niños"}}],title:{es:"¿Cuantas personas integran su familia?"}}],title:{es:"Datos domicilio:"}}],title:{es:"Generales"}},{type:"panel",name:"panelDatosGeneralesTrabajo",elements:[{type:"dropdown",name:"tipo_relacion",startWithNewLine:false,title:{es:"Fuente de ingresos"},choices:["Dependiente","Negocio Propio","Privado","Gobierno"],optionsCaption:{default:"     Tipo de relación laboral",es:"    Fuente de ingresos"}},{type:"text",inputType:"number",name:"ingreso",placeHolder:"        Ingresos mensuales",title:{es:"Ingresos familiares"}},{type:"text",name:"lugar_trabajo",placeHolder:"       Lugar de trabajo",startWithNewLine:false,title:{es:"Lugar de trabajo"}},{type:"dropdown",name:"profesion",title:{es:"Profesión"},choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/profesion",valueName:"id_profesion",titleName:"descripcion"},optionsCaption:"     Profesión"}],title:{es:"Datos laborales"}},{type:"dropdown",name:"como_se_entero",title:{es:"¿Cómo se enteró?"},hasOther:true,choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/como_se_entero",valueName:"id_como_se_entero",titleName:"descripcion"},optionsCaption:{default:"     ¿ Como se enteró ?",es:"     ¿ Cómo se enteró ?"}},{type:"dropdown",name:"referido",visible:false,visibleIf:"{como_se_entero} = 'Referido'",title:{es:"Referido"},choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/tipo_referido",valueName:"tipo",titleName:"tipo"},optionsCaption:{es:"Referido"}},{type:"dropdown",name:"motivacion",title:{es:"¿Qué lo motivo a conocer nuestro proyecto?"},hasOther:true,choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/motivo_conocer",valueName:"motivo",titleName:"motivo"},optionsCaption:{es:"¿Qué lo motivo a conocer nuestro proyecto?"}},{type:"multipletext",items:[{name:"prestigioDesarrolladora",inputType:"number",title:{es:"Prestigio de la desarrolladora"},validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"exclusividad",inputType:"number",title:{es:"Exclusividad del proyecto"},validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"ubicacion",inputType:"number",title:"Ubicación",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"diseno",inputType:"number",title:"Diseño",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"seguridad",inputType:"number",title:"Seguridad",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"amplitud",inputType:"number",title:"Amplitud",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"areas_deportivas",inputType:"number",title:"Áreas deportivas",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"areas_sociales",inputType:"number",title:"Áreas sociales",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"areas_verdes",inputType:"number",title:"Áreas verdes",validators:[{type:"numeric",maxValue:10,minValue:1}]},{name:"mascotas",inputType:"number",title:"Amigables a mascotas",validators:[{type:"numeric",maxValue:10,minValue:1}]}],name:"caracteristicas_importantes",title:{es:"Enumere de 1 a 10 las siguientes características, en donde 10 es la más importante y 1 es la menos importante."}},{type:"text",name:"residencialesVisitado",placeHolder:{es:"¿Qué Residenciales a visitado?"},title:{es:"¿Qué Residenciales a visitado?"}},{type:"checkbox",name:"motivaAdquirir",title:{es:"En el siguiente listado, seleccionar las características que considere que le motivan a adquirir una vivienda. "},hasOther:true,choices:[{value:"cercania",text:{es:"Cercanía"}},{value:"dejar_aquilar",text:{es:"Dejar de alquilar"}},{value:"cambio_estilo",text:{es:"Cambio de estilo de vida"}},{value:"inversion",text:{es:"Inversión"}},{value:"seguridad",text:{es:"Seguridad"}},{value:"ubicacion",text:{es:"Mejor ubicación"}},{value:"familia",text:{es:"La familia"}}]},{type:"dropdown",name:"ayudaTomaDecision",title:{es:"¿Quien le ayuda a tomar la decisión?"},choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/ayuda_decision",valueName:"tipo",titleName:"tipo"},optionsCaption:{es:"¿Quien le ayuda a tomar la decisión?"}},{type:"dropdown",name:"vendedor",title:"Selecciona el vendedor",choices:["item1","item2","item3"],choicesByUrl:{url:"http://200.6.245.76:3000/api/v1/vendedor",valueName:"cod_vendedor",titleName:"nombres"},optionsCaption:{es:"Selecciona el vendedor"}},{type:"comment",name:"observaciones",title:{es:"Observaciones"},placeHolder:{default:"     observaciones",es:"     Observaciones"}}]}]}

/*{"prestigioDesarrolladora":1,"exclusividad":2,"ubicacion":3,"diseno":4,"seguridad":5,"amplitud":6,"areas_deportivas":7,"areas_sociales":8,"areas_verdes":9,"mascotas":10}}*/
function sendDataToServer(survey) {
  //var resultAsString = JSON.stringify(survey.data);
  //document.querySelector('#surveyResult').innerHTML = "Gracias por responder la encuesta.";//"result: " + JSON.stringify(survey.data);
  var result = JSON.stringify(survey.data);
  var answer = JSON.parse(result);
  /*alert(answer.nombre + " " + answer.email);
  alert(answer["motivaAdquirir"][1]);
  alert(answer["motivaAdquirir"][1] != null ? 1 : 0);
  alert(answer["motivaAdquirir"][4] != null ? 1 : 0);
  alert(answer["como_se_entero-Comment"]);
  //alert(answer["caracteristicas_importantes"]["mascotas"]);
  alert(result); //send Ajax request to your web server.
  alert(answer);*/
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  var today = dd+'/'+mm+'/'+yyyy;
  var prestigioDesarrolladora = 0;
  var exclusividad = 0;
  var ubicacion = 0;
  var diseno = 0;
  var seguridad = 0;
  var amplitud = 0;
  var areas_deportivas = 0;
  var areas_sociales = 0;
  var areas_verdes = 0;
  var mascotas = 0;

  if (typeof(answer["caracteristicas_importantes"]) !== "undefined") {
    prestigioDesarrolladora = answer["caracteristicas_importantes"]["prestigioDesarrolladora"];
    exclusividad = answer["caracteristicas_importantes"]["exclusividad"];
    ubicacion = answer["caracteristicas_importantes"]["ubicacion"];
    diseno = answer["caracteristicas_importantes"]["diseno"];
    seguridad = answer["caracteristicas_importantes"]["seguridad"];
    amplitud = answer["caracteristicas_importantes"]["amplitud"];
    areas_deportivas = answer["caracteristicas_importantes"]["areas_deportivas"];
    areas_sociales = answer["caracteristicas_importantes"]["areas_sociales"];
    areas_verdes = answer["caracteristicas_importantes"]["areas_verdes"];
    mascotas = answer["caracteristicas_importantes"]["mascotas"];
  }

  var motiva_cercania = 0;
  var motiva_dejar_alquilar = 0;
  var motiva_cambio_estilo_vida = 0;
  var motiva_inversion = 0;
  var motiva_seguridad = 0;
  var motiva_mejor_ubicacion = 0;
  var motiva_la_familia = 0;
  var motiva_otros = "";
  var motivo_conocer_proyecto = "";
  var motivo_conocer_proyecto_otro = "";

  if (typeof(answer["motivaAdquirir"]) !== "undefined") {
    motiva_cercania = answer["motivaAdquirir"][0] != null ? 1 : 0;
    motiva_dejar_alquilar = answer["motivaAdquirir"][1] != null ? 1 : 0;
    motiva_cambio_estilo_vida = answer["motivaAdquirir"][2] != null ? 1 : 0;
    motiva_inversion = answer["motivaAdquirir"][3] != null ? 1 : 0;
    motiva_seguridad = answer["motivaAdquirir"][4] != null ? 1 : 0;
    motiva_mejor_ubicacion = answer["motivaAdquirir"][5] != null ? 1 : 0;
    motiva_la_familia = answer["motivaAdquirir"][6] != null ? 1 : 0;
  }

  if (typeof(answer["motivaAdquirir-Comment"]) !== "undefined"
      && typeof(answer.motivacion) !== "undefined"
      && typeof(answer["motivacion-Comment"]) !== "undefined") {
    motiva_otros = answer["motivaAdquirir-Comment"];
    motivo_conocer_proyecto = answer.motivacion;
    motivo_conocer_proyecto_otro = answer["motivacion-Comment"]
  }

    var self = this;
    $.ajax({
      url: 'http://200.6.245.76:3000/api/v1/encuestas/',
      method: 'POST',
      data: {
        params: {
          cod_proyecto: answer.proyecto,
          fecha:today,
          vendedor: answer.vendedor,
          supervisor: 1,
          nombre: answer.nombre,
          telefono: answer.telefono,
          email: answer.email,
          zona: answer.zona,
          id_municipio: answer.Ciudad,
          adultos_integran_familia: answer.adultos,
          ninos_integran_familia: answer.ninos,
          nombre_esposo: answer.nombre_conyuge,
          telefono_esposo: answer.telefono_conyuge,
          email_esposo: answer.telefono_conyuge,
          id_profesion: answer.profesion,
          tipo_relacion: answer.tipo_relacion,
          lugar_trabajo: answer.lugar_trabajo,
          sector_trabajo: answer.sectorTrabajo,
          id_ingreso: answer.ingreso,
          id_como_se_entero: answer.como_se_entero,
          otro_como_se_entero: answer["como_se_entero-Comment"],
          donde_viven: answer.residencia,
          ayuda_toma_decision: answer.ayudaTomaDecision,
          observaciones: answer.observaciones,
          migrado_v2r: "1",
          apellidos: answer.apellidos,
          estado_civil: answer.estado_civil,
          prestigio_desarrolladora: prestigioDesarrolladora,
          exclusividad_proyecto: exclusividad,
          ubicacion: ubicacion,
          diseno: diseno,
          seguridad: seguridad,
          amplitud: amplitud,
          areas_deportivas: areas_deportivas,
          areas_sociales: areas_sociales,
          areas_verdes: areas_verdes,
          amigable_mascotas: mascotas,
          referido_por: answer.referido,
          residenciales_visitados: answer.residencialesVisitado,
          su_vivienda_es: answer.tipoVivienda,
          motiva_cercania: motiva_cercania,
          motiva_dejar_alquilar: motiva_dejar_alquilar,
          motiva_cambio_estilo_vida: motiva_cambio_estilo_vida,
          motiva_inversion: motiva_inversion,
          motiva_seguridad: motiva_seguridad,
          motiva_mejor_ubicacion: motiva_mejor_ubicacion,
          motiva_la_familia: motiva_la_familia,
          motiva_otros: motiva_otros,
          motivo_conocer_proyecto: motivo_conocer_proyecto,
          motivo_conocer_proyecto_otro: motivo_conocer_proyecto_otro
        }
      },
      success: function(data) {
        /*self.props.handleAdd(data);
        self.setState(self.getInitialState);
        //alert("jeje");*/
        //alert(JSON.stringify(survey.data));
        console.log("Ingresado con éxito!");
      },
      error: function(xhr, status, error) {
        //alert(JSON.stringify(survey.data));
        alert('Cannot add a new record: ', error);
      }
    })
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />,
    document.getElementById("surveyContainer")
  )
})

registerServiceWorker();
