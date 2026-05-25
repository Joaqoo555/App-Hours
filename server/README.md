# .ENV
```
PORT= 3200
PORT_FRONT=http://localhost:5173
API_KEY=JWT_23
DATABASE_URL=postgresql://postgres:password@localhost:5432/app_hours
SALT_ROUNDS=10
JWT_SECRET=key_secret_jwt_2026
JWT_EXPIRES_IN=7d
```

# CRUD
> REGISTER

```
POST
localhost:3200/api/auth/register
```
> LOGIN
```
POST
localhost:3200/api/auth/login
```

> ME
```
POST
localhost:3200/api/auth/me
```

