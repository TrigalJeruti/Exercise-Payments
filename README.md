# Ejercicio Cobros

### Instalación 🔧

_Clonar repositorio_

```
git clone https://github.com/TrigalJeruti/Exercise-Payments.git
cd Exercise-Payments
```

#### Backend

```
cd backend
npm install
```
_Variables de Entorno_

```
PORT=5001
DATABASE_NAME=nombre_de_tu_base_de_datos
DATABASE_HOST=localhost
DATABASE_USERNAME=tu_usuario
DATABASE_PASSWORD=tu_contraseña
NODE_ENV='default'
```

_Ejecutar migraciones y seeds_

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

_Ejecutar repositorio_

```
npm run dev
```

#### Frontend

```
cd frontend
npm install
```

_Ejecutar repositorio_

```
npm start
```

Para ingresar a la vista de pago los links deben tener la forma:
```
http://localhost:3000/payment/?is=true
```

## Construido con 🛠️

_Herramientas utlizadas en el proyecto_

* [React](https://es.react.dev/)
* [Tailwind](https://tailwindcss.com/)
* [Sequelize](https://sequelize.org/)
