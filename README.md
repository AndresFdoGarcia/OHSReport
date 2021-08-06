# OHS REPORT 📝

## ¿Cómo generar un sistema digital de reporte de incidentes en la planta?

Reportes de incidentes que ocurren en la compañía, se maneja de forma manual, Sería bueno que exista una herramienta virtual para que las personas puedan hacer el reporte y quede en línea para que el personal de SST le haga seguimiento. 

De acuerdo con el análisis hecho, en función del cumplimiento de requisitos del producto, el tiempo disponible y la complejidad de cada escenario descrito, se decide de manera preliminar abordar un reto de interacpedia : https://interacpedia.com/challenges/2190 , que permita evidenciar un desarrollo constante de habilidades de programación y ofrecer un producto terminado, altamente funcional al cliente.

<br>

### 🧙‍♂  ***Definición de roles:***   

**SCRUM Master** : Andrés Fernando García Perea

**SCRUM Team:** Andrés Fernando García Perea

<br>

###  ✈  ***Misión y objetivos del proyecto***

Diseñar e implementar una herramienta WEB para la gestión de reportes de incidentes que pueda ser utilizada por cualquier organización, la cual cuente con un módulo de registro y un módulo de gestión que serán utilizados por personal SST. 

<br>

### 🎯 ***Product BackLog***

- Realiza conexión de la base de datos con la app y desplegar el servicio.

- Como usuario registrado debe poder iniciar sesión para acceder CRUD en la app.

- Como usuario logueado debe tener acceso a cierto contenido según su rol, siendo el SST el único autorizado para generar el reporte.

- La herramienta debe permitir la exportación del formulario e imprimirlo en formato PDF.


<br>
<br>

### Enlace al Backend : https://github.com/AndresFdoGarcia/OHSBack.git

<br>
<br>

## SPRINT 2 - PREPARANDO EL AMBIENTE DE TRABAJO Y ARTEFACTOS DE DISEÑO

### 1.	Realice el diseño del software estableciendo las entidades (clases y objetos) que intervienen en su software.


![image](https://user-images.githubusercontent.com/75505264/127931949-8c34c609-6cae-40e8-b6b3-bfd51692ea6c.png)

### 2.	Instalación del ambiente de trabajo de la Base de datos y la creación de las Entidades. Se deben presentar las capturas de pantalla de la instalación y la creación de la entidad. 


![image](https://user-images.githubusercontent.com/75505264/127932008-55e6e43a-88c8-450f-bf22-143d14f68202.png)

### 3.	Instalación del ambiente de trabajo del Backend. Se deben presentar las capturas de pantalla de la instalación.


![image](https://user-images.githubusercontent.com/75505264/127932069-6a5e8fa4-1783-417e-8863-071a1e775ee6.png)

### 4.	Instalación del ambiente de trabajo del Frontend. Se deben presentar las capturas de pantalla de la instalación.


![image](https://user-images.githubusercontent.com/75505264/127932163-5b76dedb-fc89-4ed0-b45c-937e8d69fb9e.png)


### 5. Herramienta de gestión seleccionada

- ClickUp

<br>


## SPRINT 3 - DESARROLLANDO LAS FUNCIONES

### 1. Elabora con tu equipo de trabajo el diagrama relacional de la base de datos.

![image](https://user-images.githubusercontent.com/75505264/127935410-e892fd06-c1de-42f3-adf6-1ae342043a74.png)


Para esta idea de negocio se plantea la relación de esta manera donde se considera que por reporte solo se podrá agregar un solo empleado para facilidad en el tratamiento de datos con la ARL y por parte del grupo de SST. 
En la estructura del modelo para el formulario se nota que se enlazará el “id” del empleado afectado, así como el representante de SST quien va a diligenciar el reporte.


### 2.	Configura la estructura básica del Backend del proyecto, usando los comandos adecuados para cada proceso.


![image](https://user-images.githubusercontent.com/75505264/127935451-69b8c3a6-45c8-4f46-82cb-f4f0c216d388.png)


### 3.	Instala y configura las dependencias necesarias para trabajar con MongoDB, Express, JSON y las demás que sean necesarias


![image](https://user-images.githubusercontent.com/75505264/127935471-ce710834-fc2c-4fe8-b108-b080f46868e6.png)


### 4.	Implementa los Modelos y Controladores en Backend del proyecto.


![image](https://user-images.githubusercontent.com/75505264/127935509-98e04c26-d55d-4182-b726-09dd4df9022f.png)


![image](https://user-images.githubusercontent.com/75505264/127935518-9eb46682-392d-4c0f-9a2c-592f6f6aa65a.png)


### 5.	Crea las rutas que permitan realizar las principales tareas con la base de datos Crear, Actualizar, Eliminar y Buscar.


![image](https://user-images.githubusercontent.com/75505264/127935553-6f50f7af-b527-49e3-8b05-0e7645cecd8b.png)


### 6.	Realiza pruebas de las rutas usando Insomnia o Postman.


![image](https://user-images.githubusercontent.com/75505264/127936604-b4a9ab51-0aae-4996-b5ea-19cec11f33a4.png)


![image](https://user-images.githubusercontent.com/75505264/127936613-59fe5a1e-43ac-4770-b8e0-3e14c872de04.png)


## SPRINT 4 - DESARROLLANDO EL FRONTEND

### 1.	Elabore con su equipo de trabajo el diagrama de los módulos a realizar en su arquitectura Frontend.


![image](https://user-images.githubusercontent.com/75505264/127937132-d2a35304-1442-417b-989d-c709cca2e041.png)


Para esta idea de negocio se plantea 4 componentes donde, 2 se podrán consultar sin necesidad de iniciar sesión. (Página de Inicio y Página de Autenticación). Para las siguientes vistas es necesario estar con credenciales, desde el backend se confirma si esta autorizado para acceder a ellas, y al tener guards con ROLES la vista para la creación del reporte solo estará disponible para el personal de SST. Los demás visualizaran el listado de reportes. 


### 2.	Elabore con algún medio una gráfica (corel, papel, etc) de cómo puede estar compuesta las páginas para su presentación al usuario.


![image](https://user-images.githubusercontent.com/75505264/127937247-11ae9f06-133b-44fa-b377-cd19e3ae7545.png)


![image](https://user-images.githubusercontent.com/75505264/127937262-e9b253d9-3bfe-45b7-b9cc-f8471b77f2a3.png)


![image](https://user-images.githubusercontent.com/75505264/127937274-c270021f-78f9-4b1b-b24d-5339b8236b13.png)


### 3.	Configure la estructura básica del Frontend, para dar inicio al proyecto.


![image](https://user-images.githubusercontent.com/75505264/127937318-d3ae01ce-3dfd-43d0-b1b3-3a0c9b1dca7a.png)


### 4.	Implemente los Modelos y Controladores planeados en el  Frontend del proyecto.


![image](https://user-images.githubusercontent.com/75505264/127937345-26a448eb-33ab-4e31-afec-35a6d1394d9a.png)


### 5.	Cree las funcionalidades asociadas a los módulos de  Crear, Actualizar, Eliminar y Buscar.


![image](https://user-images.githubusercontent.com/75505264/127937402-4c292e56-0535-421a-a081-6099e790a8cf.png)


### Realice pruebas unitarias de la herramienta  y de integración con el backend implementado en el Sprint 3.


![image](https://user-images.githubusercontent.com/75505264/127937423-f99ee5eb-863d-46fa-94a4-d3e7636c8756.png)


