# Core - User Authentication and Authorization Service

A NestJS-based microservice for user authentication and authorization with Swagger API documentation.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## Project Structure

```
core/
├── src/
│   ├── app.controller.ts      # Main application controller
│   ├── app.module.ts          # Root application module
│   ├── app.service.ts         # Main application service
│   └── main.ts               # Application entry point
├── test/                      # End-to-end tests
├── dist/                      # Compiled JavaScript output
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── nest-cli.json             # NestJS CLI configuration
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd core
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```

## Configuration

The application uses environment variables for configuration. You can set these variables in your environment or create a `.env` file in the project root.

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `APP_PORT` | `3030` | Port number for the application |
| `APP_API_PREFIX` | `api` | API route prefix |
| `APP_API_VERSION` | `v1` | API version |
| `APP_CORS_ORIGIN` | `http://localhost:3000` | CORS origin for cross-origin requests |

### Example .env file

Create a `.env` file in the project root:

```env
APP_PORT=3030
APP_API_PREFIX=api
APP_API_VERSION=v1
APP_CORS_ORIGIN=http://localhost:3000
```

## Running the Application

### Development Mode

Start the application in development mode with hot reload:

```bash
# Using npm
npm run start:dev

# Using yarn
yarn start:dev
```

### Production Mode

1. **Build the application**
   ```bash
   # Using npm
   npm run build

   # Using yarn
   yarn build
   ```

2. **Start the production server**
   ```bash
   # Using npm
   npm run start:prod

   # Using yarn
   yarn start:prod
   ```

### Debug Mode

Start the application in debug mode:

```bash
# Using npm
npm run start:debug

# Using yarn
yarn start:debug
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:

```
http://localhost:3030/api/v1/docs
```

The API will be available at:

```
http://localhost:3030/api/v1
```

## Testing

### Unit Tests

Run unit tests:

```bash
# Using npm
npm run test

# Using yarn
yarn test
```

### Watch Mode

Run tests in watch mode:

```bash
# Using npm
npm run test:watch

# Using yarn
yarn test:watch
```

### Coverage

Generate test coverage report:

```bash
# Using npm
npm run test:cov

# Using yarn
yarn test:cov
```

### End-to-End Tests

Run end-to-end tests:

```bash
# Using npm
npm run test:e2e

# Using yarn
yarn test:e2e
```

## Code Quality

### Linting

Run ESLint to check code quality:

```bash
# Using npm
npm run lint

# Using yarn
yarn lint
```

### Formatting

Format code using Prettier:

```bash
# Using npm
npm run format

# Using yarn
yarn format
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `build` | Compile TypeScript to JavaScript |
| `format` | Format code using Prettier |
| `start` | Start the application |
| `start:dev` | Start in development mode with hot reload |
| `start:debug` | Start in debug mode |
| `start:prod` | Start in production mode |
| `lint` | Run ESLint |
| `test` | Run unit tests |
| `test:watch` | Run tests in watch mode |
| `test:cov` | Generate test coverage |
| `test:debug` | Run tests in debug mode |
| `test:e2e` | Run end-to-end tests |

## Technology Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Runtime**: Node.js
- **Package Manager**: npm/yarn
- **Testing**: Jest
- **Linting**: ESLint
- **Formatting**: Prettier
- **API Documentation**: Swagger/OpenAPI
- **Configuration**: @nestjs/config

## Development

### Project Setup

1. Ensure you have Node.js 18+ installed
2. Clone the repository
3. Install dependencies with `npm install` or `yarn install`
4. Create a `.env` file with your configuration
5. Run `npm run start:dev` or `yarn start:dev`

### Adding New Features

1. Create new modules, controllers, and services following NestJS conventions
2. Add appropriate tests for new functionality
3. Update API documentation if needed
4. Run tests to ensure everything works correctly

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the `APP_PORT` environment variable
2. **Module not found**: Ensure all dependencies are installed with `npm install`
3. **TypeScript errors**: Run `npm run build` to check for compilation errors
4. **CORS issues**: Update the `APP_CORS_ORIGIN` environment variable

### Getting Help

- Check the [NestJS documentation](https://docs.nestjs.com/)
- Review the Swagger documentation at `/api/v1/docs`
- Check the application logs for error details

## License

This project is licensed under the UNLICENSED license.