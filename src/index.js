


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Survey from 'survey-react';
import $ from 'jquery';

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.Survey.cssType = "bootstrapmaterial";


var surveyJSON = {
 locale: "es",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "panel",
     name: "panelGeneral",
     elements: [
      {
       type: "panel",
       name: "panelDatosPersonales",
       elements: [
        {
         type: "text",
         name: "nombre",
         placeHolder:"       Nombre",
         isRequired: true,

       },
       {
        type: "text",
        name: "email",
        placeHolder: "       Email",
        startWithNewLine: false,
        title: {
         es: "Email"
        },
        inputType: "email"
       },
        {
         type: "text",
         name: "apellidos",
         placeHolder: "      Apellidos",

         title: {
          es: "Apellidos"
         }
        },
        {
         type: "text",
         name: "telefono",
         placeHolder: "     Teléfono",
         startWithNewLine: false,
         title: {
          default: "Ingresa tu número de teléfono ",
          es: "Teléfono"
         },
         inputType: "tel"
       },
        {
         type: "dropdown",
         choices: [
          "item1",
          "item2",
          "item3"
         ],
         choicesByUrl: {
          url: "http://200.6.245.76:3000/api/v1/estado_civil",
          valueName: "descripcion",
          titleName: "descripcion"
         },
         name: "estado_civil",
         optionsCaption: "       Estado Civil",
         title: {
          es: ""
         }
        },


       ],
       title: {
        es: "Datos Personales:"
       }
      },
      {
       type: "panel",
       name: "panelDatosConyuge",
       elements: [
        {
         type: "text",
         name: "nombre_conyuge",
         placeHolder: "     Nombre conyuge",
         title: {
          es: "Nombre"
         }
        },
        {
         type: "text",
         name: "email_conyuge",
         placeHolder: "     Email conyuge",
         title: {
          es: "Email"
         },
         inputType: "email"
        },
        {
         type: "text",
         name: "telefono_conyuge",
         placeHolder: "     Teléfono conyuge",
         startWithNewLine: false,
         title: {
          es: "Teléfono:"
         },
         inputType: "tel"
        }
       ],
       visible: false,
       visibleIf: "{estado_civil} = 'CASADO'",
       title: {
        es: "Datos del conyuge"
       }
      },
      {
       type: "panel",
       name: "panelDatosDomicilio",
       elements: [
        {
         type: "text",
         name: "residencia",
         placeHolder: "        Dirección",
         startWithNewLine: false,
         title: {
          es: "Dirección"
         }
        },
        {
         type: "text",
         name: "adultos",
         placeHolder: "     Adultos que integran la familia",
         startWithNewLine: false,
         title: {
          es: ""
         },
         inputType: "number"
        },
        {
         type: "text",
         name: "zona",
         placeHolder: "       Zona",

         title: {
          es: "Zona"
         }
        },

        {
         type: "text",
         name: "ninos",
         placeHolder: "      Niños que integran la familia",
         startWithNewLine: false,
         title: {
          es: ""
         },
         inputType: "number"
        },
        {
         type: "dropdown",
         choices: [
          "item1",
          "item2",
          "item3"
         ],
         choicesByUrl: {
          url: "http://200.6.245.76:3000/api/v1/municipio",
          valueName: "id_municipio",
          titleName: "descripcion"
         },
         name: "municipio",
        optionsCaption: "     Selecciona el municipio",
          title: {
          es: ""
         }
        }
       ],
       title: {
        es: "Datos domicilio:"
       }
      },
      {
       type: "panel",
       name: "panelTrabajo",
       elements: [
        {
         type: "panel",
         name: "panelDatosGeneralesTrabajo",
         elements: [
          {
           type: "dropdown",
           choices: [
            "Privado",
            "Gobierno"
           ],
           name: "sectorTrabajo",
           optionsCaption: "     Sector",
           title: {
            es: ""
           }
          },
          {
           type: "dropdown",
           choices: [
            "Dependiente",
            "Negocio Propio"
           ],
           name: "tipo_relacion",
           optionsCaption: "     Tipo de relación laboral",
           startWithNewLine: false,
           title: {
            es: ""
           }
          },
          {
           type: "text",
           name: "ingreso",
           placeHolder: "        Ingresos mensuales",
           title: {
            es: ""
           },
           inputType: "number"
          },
          {
           type: "text",
           name: "lugar_trabajo",
           placeHolder: "       Lugar de trabajo",

           startWithNewLine: false,
           title: {
            es: ""
           }
         },
          {
           type: "dropdown",
           choices: [
            "item1",
            "item2",
            "item3"
           ],
           choicesByUrl: {
            url: "http://200.6.245.76:3000/api/v1/profesion",
            valueName: "id_profesion",
            titleName: "descripcion"
           },
           name: "profesion",
           optionsCaption: "     Profesión",
           title: {
            es: ""
           }
          },


         ],
         title: {
          es: "Datos laborales"
         }
        }
       ],
       title: {
        es: ""
       }
      },
      {
       type: "dropdown",
       choices: [
        "item1",
        "item2",
        "item3"
       ],
       choicesByUrl: {
        url: "http://200.6.245.76:3000/api/v1/como_se_entero",
        valueName: "id_como_se_entero",
        titleName: "descripcion"
       },
       name: "como_se_entero",
       optionsCaption: "     ¿ Como se enteró ?",

       title: {
        es: ""
       }
      },
      {
       type: "dropdown",
       choicesByUrl: {
        url: "http://200.6.245.76:3000/api/v1/proyectos",
        valueName: "cod_proyecto",
        titleName: "descripcion"
       },
       isRequired: true,
       name: "proyecto",
       optionsCaption: "     Proyecto",
       startWithNewLine: false,
       title: "Proyecto"
      },
      {
       type: "dropdown",
       choices: [
        "item1",
        "item2",
        "item3"
       ],
       choicesByUrl: {
        url: "http://200.6.245.76:3000/api/v1/vendedor",
        valueName: "cod_vendedor",
        titleName: "nombres"
       },
       name: "vendedor",
       title: "Selecciona el vendedor"
      },

      {
       type: "comment",
       name: "observaciones",
       placeHolder: "     observaciones",
       startWithNewLine: false,
       title: {
        es: ""
      },
     },



     ],
     title: {
      es: "Proyecto"
    },

     title: {
      es: "Proyecto"
     }
    }
   ]
  }
 ]
}

function sendDataToServer(survey) {
  //var resultAsString = JSON.stringify(survey.data);
  //document.querySelector('#surveyResult').innerHTML = "Gracias por responder la encuesta.";//"result: " + JSON.stringify(survey.data);
  var result = JSON.stringify(survey.data);
  var answer = JSON.parse(result);
  /*alert(answer.nombre + " " + answer.email);
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
          id_municipio: answer.id_municipio,
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
          id_como_se_entero: answer.id_como_se_entero,
          otro_como_se_entero: "",
          donde_viven: answer.residencia,
          ayuda_toma_decision: "",
          observaciones: answer.observaciones,
          migrado_v2r: "1",
          apellidos: answer.apellidos
        }
      },
      success: function(data) {
        /*self.props.handleAdd(data);
        self.setState(self.getInitialState);*/
        //alert("jeje");
      },
      error: function(xhr, status, error) {
        alert('Cannot add a new record: ', error);
      }
    })
}

ReactDOM.render(
  <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />,
  document.getElementById("surveyContainer")
)
registerServiceWorker();
