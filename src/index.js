


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Survey from 'survey-react';
import $ from 'jquery';

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.Survey.cssType = "bootstrapmaterial";


var surveyJSON =
 {
  locale: "es",
  pages: [
   {
    elements: [
     {
      type: "panel",
      elements: [
       {
        type: "dropdown",
        choicesByUrl: {
         url: "http://200.6.245.76:3000/api/v1/proyectos",
         valueName: "cod_proyecto",
         titleName: "descripcion"
        },
        name: "proyecto",
        optionsCaption: "     Proyecto",
        startWithNewLine: false,
        title: "Proyecto"
       }
      ],
      name: "panelProyecto",
      title: {
       es: "Proyecto"
      }
     },
     {
      type: "panel",
      elements: [
       {
        type: "panel",
        elements: [
         {
          type: "text",
          isRequired: true,
          name: "nombre",
          placeHolder: "       Nombre",
          title: {
           es: "Nombre"
          }
         },
         {
          type: "text",
          inputType: "email",
          name: "email",
          placeHolder: "       Email",
          startWithNewLine: false,
          title: {
           es: "Email"
          }
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
          inputType: "tel",
          name: "telefono",
          placeHolder: "     Teléfono",
          startWithNewLine: false,
          title: {
           default: "Ingresa tu número de teléfono ",
           es: "Teléfono"
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
          optionsCaption: "       Estado Civil",
          title: {
           es: "Estado civil"
          }
         }
        ],
        name: "panelDatosPersonales",
        title: {
         es: "Datos Personales:"
        }
       },
       {
        type: "panel",
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
          inputType: "email",
          name: "email_conyuge",
          placeHolder: "     Email conyuge",
          title: {
           es: "Email"
          }
         },
         {
          type: "text",
          inputType: "tel",
          name: "telefono_conyuge",
          placeHolder: "     Teléfono conyuge",
          startWithNewLine: false,
          title: {
           es: "Teléfono:"
          }
         }
        ],
        name: "panelDatosConyuge",
        title: {
         es: "Datos del conyuge"
        },
        visible: false,
        visibleIf: "{estado_civil} = 'CASADO'"
       },
       {
        type: "panel",
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
          name: "zona",
          placeHolder: "       Zona",
          startWithNewLine: false,
          title: {
           es: "Zona"
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
           url: "http://200.6.245.76:3000/api/v1/municipio",
           valueName: "id_municipio",
           titleName: "descripcion"
          },
          name: "Ciudad",
          optionsCaption: "     Selecciona ciudad",
          startWithNewLine: false
         },
         {
          type: "dropdown",
          choices: [
           "item1",
           "item2",
           "item3"
          ],
          name: "tipoVivienda",
          title: {
           es: "La vivienda que actualmente habita es:"
          }
         },
         {
          type: "panel",
          elements: [
           {
            type: "text",
            inputType: "number",
            name: "adultos",
            placeHolder: "     Adultos",
            title: {
             es: "Adultos"
            }
           },
           {
            type: "text",
            inputType: "number",
            name: "ninos",
            placeHolder: "      Niños",
            startWithNewLine: false,
            title: {
             es: "Niños"
            }
           }
          ],
          name: "panelIntegrantes",
          title: {
           es: "¿Cuantas personas integran su familia?"
          }
         }
        ],
        name: "panelDatosDomicilio",
        title: {
         es: "Datos domicilio:"
        }
       }
      ],
      name: "panelGeneral",
      title: {
       es: "Generales"
      }
     },
     {
      type: "panel",
      elements: [
       {
        type: "comment",
        name: "observaciones",
        placeHolder: "     observaciones",
        startWithNewLine: false
       },
       {
        type: "dropdown",
        choices: [
         "Privado",
         "Gobierno"
        ],
        name: "sectorTrabajo",
        optionsCaption: "     Sector",
        title: {
         es: "Sector de trabajo"
        }
       },
       {
        type: "dropdown",
        choices: [
         "Dependiente",
         "Negocio Propio",
         "Privado",
         "Gobierno"
        ],
        name: "tipo_relacion",
        optionsCaption: "     Tipo de relación laboral",
        startWithNewLine: false,
        title: {
         es: "Tipo de relación laboral"
        }
       },
       {
        type: "text",
        inputType: "number",
        name: "ingreso",
        placeHolder: "        Ingresos mensuales",
        title: {
         es: "Ingresos familiares"
        }
       },
       {
        type: "text",
        name: "lugar_trabajo",
        placeHolder: "       Lugar de trabajo",
        startWithNewLine: false,
        title: {
         es: "Luegar de trabajo"
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
         es: "Profesión"
        }
       }
      ],
      name: "panelDatosGeneralesTrabajo",
      title: {
       es: "Datos laborales"
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
      optionsCaption: {
       default: "     ¿ Como se enteró ?",
       es: "     ¿ Cómo se enteró ?"
      },
      title: {
       es: "¿Cómo se enteró?"
      }
     },
     {
      type: "dropdown",
      choices: [
       "item1",
       "item2",
       "item3"
      ],
      name: "referido",
      title: {
       es: "Referido"
      },
      visible: false,
      visibleIf: "{como_se_entero} = 'Referido'"
     },
     {
      type: "dropdown",
      choices: [
       "item1",
       "item2",
       "item3"
      ],
      name: "motivacion",
      title: {
       es: "¿Qué lo motivo a conocer nuestro proyecto?"
      }
     },
     {
      type: "multipletext",
      items: [
       {
        name: "prestigioDesarrolladora",
        inputType: "number",
        title: {
         es: "Prestigio de la desarrolladora"
        },
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "exclusividad",
        inputType: "number",
        title: {
         es: "Exclusividad del proyecto"
        },
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "ubicacion",
        inputType: "number",
        title: "Ubicación",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "diseno",
        inputType: "number",
        title: "Diseño",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "seguridad",
        inputType: "number",
        title: "Seguridad",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "amplitud",
        inputType: "number",
        title: "Amplitud",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "areas_deportivas",
        inputType: "number",
        title: "Áreas deportivas",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "areas_sociales",
        inputType: "number",
        title: "Áreas sociales",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "areas_verdes",
        inputType: "number",
        title: "Áreas verdes",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       },
       {
        name: "mascotas",
        inputType: "number",
        title: "Amigables a mascotas",
        validators: [
         {
          type: "numeric",
          maxValue: 10,
          minValue: 1
         }
        ]
       }
      ],
      name: "caracteristicas_importantes"
     },
     {
      type: "text",
      name: "residencialesVisitado",
      title: {
       es: "¿Qué Residenciales a visitado?"
      }
     },
     {
      type: "checkbox",
      choices: [
       {
        value: "cercania",
        text: {
         es: "Cercanía"
        }
       },
       {
        value: "dejar_aquilar",
        text: {
         es: "Dejar de alquilar"
        }
       },
       {
        value: "cambio_estilo",
        text: {
         es: "Cambio de estilo de vida"
        }
       },
       {
        value: "inversion",
        text: {
         es: "Inversión"
        }
       },
       {
        value: "seguridad",
        text: {
         es: "Seguridad"
        }
       },
       {
        value: "ubicacion",
        text: {
         es: "Mejor ubicación"
        }
       },
       {
        value: "familia",
        text: {
         es: "La familia"
        }
       }
      ],
      hasOther: true,
      name: "motivaAdquirir",
      title: {
       es: "¿Qué lo movita a adquirir una vivienda en estos momentos?"
      }
     },
     {
      type: "dropdown",
      choices: [
       "item1",
       "item2",
       "item3"
      ],
      name: "ayudaTomaDecision",
      title: {
       es: "¿Quien le ayuda a tomar la decisión?"
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
       url: "http://200.6.245.76:3000/api/v1/vendedor",
       valueName: "cod_vendedor",
       titleName: "nombres"
      },
      name: "vendedor",
      title: "Selecciona el vendedor"
     }
    ],
    name: "page1"
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
