FROM node:12 as react-build
WORKDIR /code
COPY . /code
# hadolint ignore=DL3003
RUN cd reana-ui && \
    yarn && \
    yarn build

FROM bitnami/nginx:1.19
COPY --from=react-build /code/reana-ui/build /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
