FROM node:18-alpine 

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
    else echo "Warning"; \
    fi

# Copy all the files from the local directory to the working directory in the container
COPY app ./app
COPY next.config.mjs .
COPY .eslintrc.json .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.mjs .
COPY prisma ./prisma

ENV NEXT_TELEMETRY_DISABLED 1
# Run the application in development mode
CMD \
    echo "##"; \
    npx prisma version; \
    echo "##"; \
    npx prisma migrate dev --name initial_migration; \
    npx prisma db seed; \
    if [ -f yarn.lock ]; then yarn dev; \
    elif [ -f package-lock.json ]; then npm run dev; \
    elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
    else npm run dev; \
    fi