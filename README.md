# Pic.txt
Pic.txt es una plataforma para guaradar tus apuntes y notas. Pic.txt guarda tus apuntes de dos formas: Utilizando Amazon Transcirbe para dictar tus apuntes en tiempo real o Utilzando Amazon Textract y Amazon Rekognition para analizar una imagen obtener todo el texto en ella, ya sea escrito a mano o generado por computadora. Pic.txt Puede detectar tablas y los conceptos mas importantes que hay en un docuemtno. Solo basta con subir una foto de tus apuntes y Pic.txt analizara el contenido, no hay necesidad de transcribir nada. Pic.txt tambien ofrece traducir tus apuntes a una variedad de idiomas. 

## Objetivos
- Crear una plataforma que sea de ayuda a los estudiantes a gurdar informacion importente de forma sencilla.
- Implementar una aplicacion serverless que sea eficiente, rapida y segura.
- Implementar un sistema de usuarios con Amazon Cognito, para facilitar el desarrolloy aumentar la seguridad.
- Ganar el laboratorio de Seminario con buena nota.

## Arquitectura implementada
![](https://cdn.discordapp.com/attachments/740698431529418794/839666498108129321/semi_proyecto_1.png)

## Servicios utilizados
### Amazon S3
Amazon Simple Storage Service (Amazon S3) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento líderes en el sector. Gracias a Amazon S3, clientes de todos los tipos y sectores pueden almacenar y proteger cualquier volumen de datos para los más variados fines, como usarlos en lagos de datos, sitios web, aplicaciones móviles, procesos de copia de seguridad y restauración, operaciones de archivado, aplicaciones empresariales, dispositivos IoT y análisis de big data. Amazon S3 proporciona características de administración fáciles de utilizar que le permiten organizar los datos y configurar sofisticados controles de acceso con objeto de satisfacer sus requisitos empresariales, organizativos y de conformidad. Amazon S3 está diseñado para ofrecer una durabilidad del 99,999999999 % (11 nueves) y almacena datos de millones de aplicaciones para empresas de todo el mundo.

### AWS Amplify
AWS Amplify es un conjunto de herramientas y servicios que se pueden utilizar juntos o de forma individual para ayudar a los desarrolladores de frontend web y móvil a crear aplicaciones de pila completa escalables, powered by AWS. Con Amplify, puede configurar backends de aplicaciones y conectar la aplicación en cuestión de minutos, implementar aplicaciones web estáticas con tan solo unos clics y administrar el contenido de las aplicaciones fácilmente fuera de la consola de AWS.

Amplify admite marcos web conocidos, como JavaScript, React, Angular, Vue y Next.js, así como plataformas móviles, incluidas Android, iOS, React Native, Ionic y Flutter. Utilice AWS Amplify para llegar al mercado con más rapidez.

### Amazon Cognito
Amazon Cognito permite incorporar de manera rápida y sencilla el registro, inicio de sesión y control de acceso de usuarios a sus aplicaciones web y móviles. Amazon Cognito cuenta con escalado para millones de usuarios y admite el inicio de sesión mediante proveedores de identidad social, como Apple, Facebook, Google y Amazon, así como con proveedores de identidad empresarial a través de SAML 2.0 y OpenID Connect.  

### Amazon API Gateway
Amazon API Gateway es un servicio completamente administrado que facilita a los desarrolladores la creación, la publicación, el mantenimiento, el monitoreo y la protección de API a cualquier escala. Las API actúan como la "puerta de entrada" para que las aplicaciones accedan a los datos, la lógica empresarial o la funcionalidad de sus servicios de backend. Con API Gateway, puede crear API RESTful y API WebSocket que permiten aplicaciones de comunicación bidireccional en tiempo real. API Gateway admite cargas de trabajo en contenedores y sin servidor, así como aplicaciones web.

API Gateway gestiona todas las tareas implicadas en la aceptación y el procesamiento de hasta cientos de miles de llamadas a API simultáneas, entre ellas, la administración del tráfico, compatibilidad con CORS, el control de autorizaciones y acceso, la limitación controlada, el monitoreo y la administración de versiones de API. API Gateway no requiere pagos mínimos ni costos iniciales. Se paga por las llamadas a las API que se reciben y por la cantidad de datos salientes transferidos; además, con el modelo de precios por niveles de API Gateway, puede reducir sus costos a medida que cambie la escala de uso de las API.

### AWS Lambda
AWS Lambda es un servicio informático sin servidor que le permite ejecutar código sin aprovisionar ni administrar servidores, crear una lógica de escalado de clústeres basada en la carga de trabajo, mantener integraciones de eventos o administrar tiempos de ejecución. Con Lambda, puede ejecutar código para casi cualquier tipo de aplicación o servicio backend sin tener que realizar tareas de administración. Simplemente cargue su código como un archivo ZIP o una imagen de contenedor y Lambda asigna de manera automática y precisa la potencia de ejecución de cómputo y ejecuta el código en función de la solicitud o el evento entrante para cualquier escala de tráfico. Configure el código para que se active automáticamente desde 140 servicios de AWS o llámelo directamente desde cualquier aplicación web o móvil. Puede escribir funciones de Lambda en su lenguaje favorito (Node.js, Python, Go, Java y más) y utilizar herramientas de contenedor y sin servidor, como AWS SAM o la CLI de Docker, para compilar, probar e implementar las funciones.

### Amazon Translate
Amazon Translate es un servicio de traducción automática neuronal que ofrece traducción de idiomas rentable, personalizable, de alta calidad y rápida. La traducción automática neuronal es una forma de automatización de traducciones entre idiomas que usa modelos de aprendizaje profundo para ofrecer traducciones más naturales y precisas que los algoritmos estadísticos tradicionales y de traducción basados en reglas.

Con Amazon Translate, puede localizar contenido, como sitios web y aplicaciones para diversos usuarios, traducir grandes volúmenes de texto para análisis con facilidad y permitir una comunicación eficaz entre usuarios de diferentes idiomas.

### Amazon Rekognition
Amazon Rekognition facilita la adición de análisis de imagen y video a sus aplicaciones con tecnología probada, altamente escalable y de aprendizaje profundo que no requiere experiencia en aprendizaje automático para su uso. Con Amazon Rekognition puede identificar objectos, personas, texto, escenas y actividades en imágenes y videos, además de detectar cualquier contenido inapropiado. Amazon Rekognition también proporciona análisis faciales de alta precisión y capacidades de búsqueda facial que puede usar para detectar, analizar y comparar rostros. Es posible implementar estos recursos en una amplia variedad de casos de uso vinculados con la verificación de usuarios, el conteo de personas y la seguridad pública.

### Amazon Textract
Amazon Textract es un servicio de machine learning que extrae texto, escritura a mano y datos de documentos escaneados de forma automática. Va más allá del simple reconocimiento óptico de caracteres (OCR) para identificar, comprender y extraer datos de formularios y tablas. En la actualidad, muchas empresas extraen datos de documentos como archivos PDF, imágenes, tablas y formularios escaneados de forma manual o mediante un software de OCR simple que requiere una configuración manual y a menudo exige una reconfiguración cuando cambia de formulario. Textract, para superar estos procesos manuales y costosos, utiliza el machine learning a fin de leer y procesar cualquier tipo de documento y extraer con precisión texto, escritura a mano, tablas y otros datos sin esfuerzo manual. Puede automatizar el procesamiento de documentos y tomar medidas sobre la información que se extrae, ya sea mediante la automatización del procesamiento de préstamos o documentos fiscales. Textract puede extraer los datos en minutos en lugar de horas o días. Además, puede agregar revisiones humanas con Amazon Augmented AI para supervisar los modelos y llevar a cabo revisiones de datos confidenciales.

### Amazon DynamoDB
Amazon DynamoDB es una base de datos de clave-valor y documentos que ofrece rendimiento en milisegundos de un solo dígito a cualquier escala. Se trata de una base de datos completamente administrada, duradera, multiactiva y de varias regiones que cuenta con copia de seguridad, restauración y seguridad integradas, así como almacenamiento de caché en memoria para aplicaciones a escala de Internet. DynamoDB puede gestionar más de 10 billones de solicitudes por día y puede admitir picos de más de 20 millones de solicitudes por segundo.


## Presupuesto

### Amazon DynamoDB
- 25 GB de almacenamiento de datos
- 2,5 millones de solicitudes de lectura de streams de DynamoDB Streams
- Se añaden 1 GB de transferencia saliente de datos a los servicios de AWS

### Amazon Textract
Los nuevos clientes de AWS pueden analizar hasta 1000 páginas por mes utilizando la API para detectar texto de un documento y hasta 100 páginas por mes utilizando la API para analizar documentos, durante los primeros tres meses.

### Amazon Rekognition
La capa gratuita dura 12 meses y permite que analice 5000 imágenes por mes y almacena 1000 piezas de metadatos de rostros por mes.

### Amazon Translate
Traduce hasta 2 millones de caracteres al mes, de manera gratuita durante los primeros 12 meses a partir de su primera solicitud de traducción.

### Amazon Lambda
La capa de uso gratuita de AWS Lambda incluye un millón de solicitudes gratuitas al mes y 400 000 GB/segundos de tiempo de cómputo al mes.

### Amazon API Gateway
La capa gratuita de API Gateway incluye un millón de llamadas a la API de HTTP, un millón de llamadas a la API de REST, un millón de mensajes y 750 000 minutos de conexión al mes durante un máximo de doce meses.

### Amazon Cognito
La característica de grupo de usuarios de Cognito tiene una capa gratuita de 50 000 MAU para usuarios que inician sesión directamente en los grupos de usuarios de Cognito y 50 MAU para los usuarios federados a través de proveedores de identidad basados en SAML 2.0. La capa gratuita no vence de forma automática al finalizar los 12 meses de uso de la capa gratuita de AWS, sino que está disponible para los clientes nuevos y existentes de AWS de forma indefinida.

### Amazon Amplify
Al utilizar el marco de Amplify (las bibliotecas, la interfaz de línea de comandos, los componentes de la interfaz de usuario), solo se paga por los servicios de AWS subyacentes que se utilizan. No hay cargos adicionales por el uso del marco de Amplify.

### Amazon S3
Cuando se registran, los clientes de AWS nuevos reciben 5 GB de almacenamiento de Amazon S3 en la clase de almacenamiento S3 Estándar, 20 000 solicitudes GET, 2000 solicitudes PUT, COPY, POST o LIST y 15 GB de transferencia de datos de salida al mes durante un año.
