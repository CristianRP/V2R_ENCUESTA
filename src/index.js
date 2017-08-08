import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Survey from 'survey-react';
import $ from 'jquery';

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.Survey.cssType = "bootstrap";

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
         title: {
          default: "Ingresa tu nombre",
          es: "Nombres:"
         },
         isRequired: true
        },
        {
         type: "text",
         name: "apellidos",
         title: {
          es: "Apellidos"
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
          url: "http://200.6.245.76:3000/api/v1/estado_civil",
          valueName: "descripcion",
          titleName: "descripcion"
         },
         name: "estado_civil",
         startWithNewLine: false,
         title: {
          es: "Estado civil"
         }
        },
        {
         type: "text",
         name: "email",
         title: {
          es: "Email"
         },
         inputType: "email"
        },
        {
         type: "text",
         name: "telefono",
         startWithNewLine: false,
         title: {
          default: "Ingresa tu número de teléfono ",
          es: "Teléfono"
         },
         inputType: "tel"
        }
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
         title: {
          es: "Nombre"
         }
        },
        {
         type: "text",
         name: "email_conyuge",
         title: {
          es: "Email"
         },
         inputType: "email"
        },
        {
         type: "text",
         name: "telefono_conyuge",
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
         title: {
          es: "Dirección"
         }
        },
        {
         type: "text",
         name: "zona",
         title: {
          es: "Zona"
         }
        },
        {
         type: "text",
         name: "adultos",
         startWithNewLine: false,
         title: {
          es: "Adultos que integran la familia"
         },
         inputType: "number"
        },
        {
         type: "text",
         name: "ninos",
         startWithNewLine: false,
         title: {
          es: "Niños que integran la familia"
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
         title: {
          es: "Selecciona el municipio"
         }
        }
       ],
       title: {
        es: "Datos Domicilio:"
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
           title: {
            es: "Sector"
           }
          },
          {
           type: "text",
           name: "ingreso",
           startWithNewLine: false,
           title: {
            es: "Ingresos mensuales"
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
            url: "http://200.6.245.76:3000/api/v1/profesion",
            valueName: "id_profesion",
            titleName: "descripcion"
           },
           name: "profesion",
           title: {
            es: "Profesión"
           }
          },
          {
           type: "dropdown",
           choices: [
            "Dependiente",
            "Negocio Propio"
           ],
           name: "tipo_relacion",
           startWithNewLine: false,
           title: {
            es: "Tipo de relación laboral"
           }
          },
          {
           type: "text",
           name: "lugar_trabajo",
           title: {
            es: "Lugar de trabajo"
           }
          }
         ],
         title: {
          es: "Datos generales de trabajo:"
         }
        }
       ],
       title: {
        es: "Trabajo"
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
       title: {
        es: "Como se enteró?"
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
       title: {
        es: "Oberservaciones"
       }
      }
     ],
     title: {
      es: "Generales"
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
  alert(answer.nombre + " " + answer.email);
  alert(result); //send Ajax request to your web server.
  alert(answer);
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
        alert("jeje");
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
