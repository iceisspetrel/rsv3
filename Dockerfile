# 前置阶段，使用node进行打包
FROM node:22-alpine AS build-stage

WORKDIR /app


# 将所有前端文件拷贝到app目录下 

COPY package*.json ./

COPY public/ ./public/

COPY src/ ./src/

COPY *.ts ./ 

RUN ls

# 安装依赖
RUN npm install

# 编译前端脚本
RUN npm run build

FROM nginx:alpine

WORKDIR /app

RUN rm -rf ./*

COPY --from=build-stage /app/dist .

RUN rm -rf /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]